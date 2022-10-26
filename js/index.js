import { testText } from "./content.js";

document.getElementById("demo5").addEventListener("click", loadText);
document.getElementById("demo2").addEventListener("click", insertCoverted);
document.getElementById("demo3").addEventListener("click", refresh);
document.getElementById("demo1").addEventListener("click", clearText);
document.getElementById("demo4").addEventListener("click", clearPara);

function loadText() {
  let element_ImportText = document.getElementById("var1");
  element_ImportText.value = testText;
}

function refresh() {
  let element_Pat = document.getElementById("var1");
  element_Pat.value = "";
}

function clearText() {
  let element_Pat5 = document.getElementById("var2");
  element_Pat5.value = "";
}

function clearPara() {
  let element_Par = document.getElementById("fibStart");
  element_Par.innerText = "";
}

//F1
function returnUserInput() {
  let inputTest = document.getElementById("var1").value;
  return inputTest;
}

//F2
function replaceTimestaps() {
  let str = returnUserInput();
  let re = /([\d:\n\r])+/g;
  let subst = " ";
  let result = str.replace(re, subst);
  return result;
}

//F3
function stringToArray() {
  let newString = replaceTimestaps();
  return newString.split(" ");
}

//F4
function setParagraphBreaks() {
  let arrayToSplice = stringToArray();
  for (let i = 125; i < arrayToSplice.length; i += 125) {
    arrayToSplice.splice(i, 0, "\n\n");
  }
  return arrayToSplice;
}

//F5
function arrayToString() {
  let newNewText = setParagraphBreaks();
  return newNewText.join(" ");
}

//F6
function insertCoverted() {
  let element_Par = document.getElementById("fibStart");
  element_Par.innerText = arrayToString();
  console.log(arrayToString());
  let element_Par2 = document.getElementById("var2");
  element_Par2.value = arrayToString();
}
