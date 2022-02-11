// 1
function rectPerimeter(lenght, width) {
  console.log(
    "chu vi hinh chu nhat co canh",
    lenght,
    "x",
    width,
    "la: ",
    (lenght + width) * 2
  );
}

function rectArea(lenght, width) {
  console.log(
    "dien tich hinh chu nhat co canh",
    lenght,
    "x",
    width,
    "la: ",
    lenght * width
  );
}

//2
function roundPerimeter(radius) {
  console.log(
    "chu vi hinh tron co ban kinh",
    radius,
    "la: ",
    2 * 3.14 * radius
  );
}

function roundArea(radius) {
  console.log(
    "dien tich hinh tron co ban kinh",
    radius,
    "la: ",
    3.14 * radius * radius
  );
}

//3
function simpleEquation(a, b) {
  console.log("nghiem cua phuong trinh", a, "x +", b, "la: ", -b / a);
}

//4
function convertLength(cm) {
  console.log(cm, "cm to mm:", cm * 10);
  console.log(cm, "cm to m:", cm / 100);
  console.log(cm, "cm to km:", cm / 1000);
}

//5

function convertTemperate(celcius) {
  console.log(celcius, "celcius to Fahrenheit", celcius * 1.8 + 32);
  console.log(celcius, "celcius to Kevin", celcius + 273.15);
}

rectPerimeter(2, 3);
rectArea(2, 3);
roundPerimeter(3);
roundArea(3);
simpleEquation(2, 4);
convertLength(100);
convertTemperate(100);
