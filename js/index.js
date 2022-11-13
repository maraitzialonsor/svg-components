var s = Snap("#snappy");

Snap.load("./svg-img/resistor.svg",
  onSVGLoaded);

function onSVGLoaded(data) {
  // Load each element
  // In the Svg, note that we are using groups, instead of paths.  
  rGroup = data.select("#rGroup");
  firstBand = data.select("#firstBand");
  secondBand = data.select("#secondBand");
  thirdBand = data.select("#thirdBand");
  toleranceBand = data.select("#toleranceBand");
  wireOne = data.select("#wireOne");
  wireTwo = data.select("#wireTwo");
  // Add to scene.
  s.append(wireOne);
  s.append(wireTwo);
  s.append(rGroup);
  s.append(firstBand);
  s.append(secondBand);
  s.append(thirdBand);
  s.append(toleranceBand);

  var number = "3700";


  caseFirstBand(number.charAt(0));
  caseSecondBand(number.charAt(1));
  caseThirdBand(parseInt(number,10));
  //caseToleranceBand(0);
}

function caseFirstBand(n) {
  switch (n) {
    case '0':
      changeColorFirstBand('black');
      break;
    case '1':
      changeColorFirstBand('brown');
      break;
    case '2':
      changeColorFirstBand('red');
      break;
    case '3':
      changeColorFirstBand('orange');
      break;
    case '4':
      changeColorFirstBand('yellow');
      break;
    case '5':
      changeColorFirstBand('green');
      break;
    case '6':
      changeColorFirstBand('blue');
      break;
    case '7':
      changeColorFirstBand('violet');
      break;
    case '8':
      changeColorFirstBand('gray');
      break;
    case '9':
      changeColorFirstBand('white');
      break;
  }

}

function caseSecondBand(n) {
  switch (n) {
    case '0':
      changeColorSecondBand('black');
      break;
    case '1':
      changeColorSecondBand('brown');
      break;
    case '2':
      changeColorSecondBand('red');
      break;
    case '3':
      changeColorSecondBand('orange');
      break;
    case '4':
      changeColorSecondBand('yellow');
      break;
    case '5':
      changeColorSecondBand('green');
      break;
    case '6':
      changeColorSecondBand('blue');
      break;
    case '7':
      changeColorSecondBand('violet');
      break;
    case '8':
      changeColorSecondBand('gray');
      break;
    case '9':
      changeColorSecondBand('white');
      break;
  }
}

function caseThirdBand(n) {
  while (true) {
    if (n / 10000000000 >= 1) {
      changeColorThirdBand('white');
      break;
    }
    if (n / 1000000000 >= 1) {
      changeColorThirdBand('gray');
      break;
    }
    if (n / 100000000 >= 1) {
      changeColorThirdBand('violet');
      break;
    }
    if (n / 10000000 >= 1) {
      changeColorThirdBand('blue');
      break;
    }
    if (n / 1000000 >= 1) {
      changeColorThirdBand('green');
      break;
    }
    if (n / 100000 >= 1) {
      changeColorThirdBand('yellow');
      break;
    }
    if (n / 10000 >= 1) {
      changeColorThirdBand('orange');
      break;
    }
    if (n / 1000 >= 1) {
      changeColorThirdBand('red');
      break;
    }
    if (n / 100 >= 1) {
      changeColorThirdBand('brown');
      break;
    }
    if (n / 10 >= 1) {
      changeColorThirdBand('black');
      break;
    }
  }
}

function changeColorFirstBand(color) {
  console.log(color);
  firstBand.attr({
    fill: color,
  });
}

function changeColorSecondBand(color) {
  console.log(color);
  secondBand.attr({
    fill: color,
  });
}

function changeColorThirdBand(color) {
  console.log(color);
  thirdBand.attr({
    fill: color,
  });
}