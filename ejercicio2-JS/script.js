for (let i = 11; i >= 9; i--) {
  document.write("<b>" + "La tabla del " + i + ":" + "</b>" + "<br>");
  for (let j = 1; j <= 9; j++) {
    document.write(i + " x " + j + ": ");
    document.write(i * j + "<br>");
  }
  document.write("<br>");
}
