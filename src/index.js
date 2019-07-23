global.onOpen = () => {
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .createMenu('Custom Menu')
    .addItem('Show sidebar', 'showSidebar')
    .addToUi();
};

global.showSidebar = () => {
  const html = HtmlService.createTemplateFromFile('sidebar')
    .evaluate()
    .setTitle('Receipt Reader');
  SpreadsheetApp.getUi() // Or DocumentApp or SlidesApp or FormApp.
    .showSidebar(html);
};

global.include = filename => {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
};
