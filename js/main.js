var question = Number(prompt("Alisher Nechpul pulingiz bor?:", 0));
var dollar1 = 500;
var dollar2 = 250;
var yevro = 120;

dollar1 = dollar1 * 10900;
dollar2 = dollar2 * 10900;
yevro = yevro * 12272.64;

var plane = Number(dollar1 + dollar2 + yevro);

if (question >= plane) {
  console.log("Oq yo'l Alisher!");
} else {
  console.log(" Alisher Yanada koproq ishlang pulingiz yetmayati!");
}
