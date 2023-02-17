var editor = ace.edit("editor");
editor.session.setMode("ace/mode/javascript");

// Run data which is in editor
function generateData() {
  var code = editor.getValue();
  var fn = new Function("editor", code);
  fn(editor);
}
// Run data On Pageload
generateData();
