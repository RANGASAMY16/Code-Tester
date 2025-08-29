const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const output = document.getElementById("output");
function runCode() 
{
    const html = htmlCode.value;
    const css = "<style>" + cssCode.value + "</style>";
    const js = "<script>" + jsCode.value + "<\/script>";
    const finalCode = html + css + js;
    output.srcdoc = finalCode;
}
htmlCode.addEventListener("keyup", runCode);
cssCode.addEventListener("keyup", runCode);
jsCode.addEventListener("keyup", runCode);
 