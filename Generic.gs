//Like php's include, this adds a file to an HTML Service template
function include(filename) { return HtmlService.createHtmlOutputFromFile(filename).getContent(); }
function includeTemplate(filename) { return HtmlService.createTemplateFromFile(filename).evaluate().getContent(); }

/**
Create web app
Returns only an error message to IE8
If you look at index.html, isIE9 is used to add a warning to not use IE9 although it should work. IE9 requires .EMULATED while newer browsers can use .NATIVE sandbox mode.
*/
function doGet(e) {
  var title = "App Title";
    
  var template = HtmlService.createTemplateFromFile("index");
  if(UiApp.getUserAgent().indexOf("MSIE 9.0") > -1){
    template.isIE9 = true;
    return template.evaluate().setTitle(title).setSandboxMode(HtmlService.SandboxMode.EMULATED);
  } else {
    template.isIE9 = false;
    return template.evaluate().setTitle(title);
  }
}

//Colors that are good for using together on charts (they're visually distinct)
var COLORS_DISTINCT = [
  "#FFB300", "#803E75", "#FF6800", "#A6BDD7", "#C10020", "#CEA262", "#817066",
  "#007D34", "#F6768E", "#00538A", "#FF7A5C", "#53377A", "#FF8E00", "#B32851", "#F4C800", "#7F180D", "#93AA00", "#593315", "#F13A13", "#232C16"
];
function getDistinctColors(e, i) { return COLORS_DISTINCT[i % COLORS_DISTINCT.length]; }