# Building A Data-Driven Organizational Chart In Apps Script
Using OrgChart JavaScript Library In A Web App

![orgchart](https://github.com/user-attachments/assets/e7c74ffa-f40e-4d7b-bfd7-e663c8a577f4)

Tutorial: [Building A Data-Driven Organizational Chart In Apps Script](https://blog.greenflux.us/building-a-data-driven-organizational-chart-in-apps-script)

## Script
```javascript
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Org Chart Tutorial')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getEmployeeData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Employees");
  const data = sheet.getDataRange().getValues();
  
  const employees = {};
  let root = null;
  
  // Skip header row
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const id = String(row[0]);
    const name = row[1];
    const title = row[2];
    const supervisorId = String(row[3]) || '';
    
    employees[id] = {
      id: id,
      name: name,
      title: title,
      supervisorId: supervisorId,
      children: []
    };
    
    // Find the root (no supervisor_id)
    if (supervisorId === "") {
      root = employees[id];
    }
  }
  
  // Build the tree structure
  for (const id in employees) {
    const employee = employees[id];
    if (employee.supervisorId !== "" && employees[employee.supervisorId]) {
      employees[employee.supervisorId].children.push(employee);
    }
  }
  
  Logger.log(JSON.stringify(root, undefined, 2));
  return root;
}
```
## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Organization Chart Plugin</title>
  <link rel="icon" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/svgs/solid/sitemap.svg">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/orgchart@2.1.7/dist/css/jquery.orgchart.min.css">
  <style>
    #chart-container {
      width: 100%;
      height: auto;
      text-align: center;
    }
  </style>
</head>
<body>
  <div id="chart-container"></div>

  <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/orgchart@2.1.7/dist/js/jquery.orgchart.min.js"></script>
  <script type="text/javascript">
    $(function() {
      // Call Apps Script function getEmployeeData and handle the response
      google.script.run.withSuccessHandler(function(datasource) {
        $('#chart-container').orgchart({
          'data' : datasource,
          'nodeContent': 'title'
        });
      }).getEmployeeData(); // Calls the Apps Script function
    });
  </script>
</body>
</html>

```

``
