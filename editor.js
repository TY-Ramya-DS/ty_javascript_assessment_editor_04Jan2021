function myFunction() {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var codeeditor = document.getElementById("codeeditor").contentWindow.document;
  
    document.body.onkeyup = function() {
      codeeditor.open();
      codeeditor.writeln(html.value +"<style>" +css.value +"</style>" +"<script>" +js.value +"</script>");
      codeeditor.close();
    };
  }
  compile(); 