var editor = ace.edit("editor");
editor.session.setMode("ace/mode/text");

// Generate graph
var code = d3.select("#graph").graphviz().renderDot(editor.getValue());
var fn = new Function(code);
fn(editor);

// Run data which is in editor
function generateData() {
  var element = document.getElementById("ace-js-playground-wrapepr");
  var btn = event.target; 
  element.classList.add("loading");
  btn.disabled = true;
  setTimeout(function () {
    element.classList.remove("loading");
    btn.disabled = false;
  }, 700);
  code = d3.select("#graph").graphviz().renderDot(editor.getValue());
  var fn = new Function(code);
  fn(editor);
}
