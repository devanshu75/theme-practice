const v = document.getElementById("v");

const i = document.getElementById("i");

const b = document.getElementById("b");

const g = document.getElementById("g");

const y = document.getElementById("y");

const o = document.getElementById("o");

const r = document.getElementById("r");



(() => {

  v.style.color = "rgb(148, 0, 211)";

  i.style.color = "rgb(75, 0, 130)";

  b.style.color = "rgb(0, 0, 255)";

  g.style.color = "rgb(0, 255, 0)";

  y.style.color = "rgb(255, 255, 0)";

  o.style.color = "rgb(255, 127, 0)";

  r.style.color = "rgb(255, 0, 0)";

})();



document.querySelector(".slider").addEventListener("click", changeColor);



function changeColor() {

  if (v.style.color == "rgb(148, 0, 211)") {

    v.style.color = "rgb(255, 0, 0)";

  } else {

    v.style.color = "rgb(148, 0, 211)";

  }



  if (i.style.color == "rgb(75, 0, 130)") {

    i.style.color = "rgb(255, 127, 0)";

  } else {

    i.style.color = "rgb(75, 0, 130)";

  }



  if ((b.style.color = "rgb(0, 0, 255)")) {

    b.style.color = "rgb(255, 255, 0)";

  } else {

    b.style.color = "rgb(0, 0, 255)";

  }



  if (g.style.color == "rgb(0, 255, 0)") {

    g.style.color = "rgb(0, 255, 0)";

  } else {

    g.style.color = "rgb(0, 255, 0)";

  }



  if (y.style.color == "rgb(255, 255, 0)") {

    y.style.color = "rgb(0, 0, 255)";

  } else {

    y.style.color = "rgb(255, 255, 0)";

  }



  if (o.style.color == "rgb(255, 127, 0)") {

    o.style.color = "rgb(75, 0, 130)";

  } else {

    o.style.color = "rgb(255, 127, 0)";

  }



  if (r.style.color == "rgb(255, 0, 0)") {

    r.style.color = "rgb(148, 0, 211)";

  } else {

    r.style.color = "rgb(255, 0, 0)";

  }

}