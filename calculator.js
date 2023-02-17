let str = "";
let ans;
function basic(char){
    str = str+char;
    document.getElementById("output").innerText = str;
}
function calculation()
{
    ans = eval(str);
    document.getElementById("input").innerText = str;
    document.getElementById("output").innerText = ans;
}
function clearAll()
{
    str = ""
    document.getElementById("input").innerText= null;
    document.getElementById("output").innerText = 0;
}

