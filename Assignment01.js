//01 -titleCaseEdit.js

function titleCaseEdit(title) {
  title = title.toLowerCase().split(' ');
  for (var t = 0; t < title.length; t++) {
    title[t] = title[t].charAt(0).toUpperCase() + title[t].slice(1); 
  }
 console.log(title.join(' '));
}
titleCaseEdit("if you want peace, prepare for war!");
