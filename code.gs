function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('إدخال بيانات المعلمين');
}

function submitData(data) {
  const sheet = SpreadsheetApp.openById('1zN26YC_JFgg0EkHXw-n1yqhV-yVb98PgqQesfW8FuQA').getActiveSheet();
  sheet.appendRow(data);
}

function getNames() {
    const sheet = SpreadsheetApp.openById('1zN26YC_JFgg0EkHXw-n1yqhV-yVb98PgqQesfW8FuQA').getActiveSheet();
    const names = sheet.getRange('R:R').getValues().flat().filter(String);
    return names;
}