let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("open-popup");
}
function closePopup() {
  popup.classList.remove("open-popup");
}

document.onkeydown = checkKey;

let moveRight = 0;
let movedown = 0;
let moveleft = 0;
let moveup = 0;
let countAll = 0;
let Xpos = 1;
let Ypos = 1;

let ping = '<p id="ping">&#128039</p>';

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode === 39) {
    moveright();
  }
  if (e.keyCode === 40) {
    moveDown();
  }
  if (e.keyCode === 37) {
    moveLeft();
  }
  if (e.keyCode === 38) {
    moveUp();
  }
}

function moveright() {
  let y = Ypos;
  let x = Xpos;
  checkpo();
  if (Ypos != 7 && moveRight != 2) {
    document.getElementById("colom" + y + "row" + x).innerHTML = "";
    document.getElementById("colom" + ++y + "row" + x).innerHTML = ping;
    Ypos++;
    moveRight++;
    movedown = 0;
    moveleft = 0;
    moveup = 0;
  } else if (Xpos != 5 && Ypos != 7) {
    ipus();
    return alert("Follow the instructions or die");
  }
}

function moveDown() {
  let y = Ypos;
  let x = Xpos;
  checkpo();
  if (Xpos != 5 && movedown != 2) {
    document.getElementById("colom" + y + "row" + x).innerHTML = "";
    document.getElementById("colom" + y + "row" + ++x).innerHTML = ping;
    Xpos++;
    moveRight = 0;
    movedown++;
    moveleft = 0;
    moveup = 0;
  } else if (Xpos != 5 && Ypos != 7) {
    ipus();
    return alert("Follow the instructions or die");
  }
}
function moveLeft() {
  let y = Ypos;
  let x = Xpos;
  checkpo();
  if (Ypos != 1 && moveleft != 2) {
    document.getElementById("colom" + y + "row" + x).innerHTML = "";
    document.getElementById("colom" + --y + "row" + x).innerHTML = ping;
    Ypos--;
    moveRight = 0;
    movedown = 0;
    moveleft++;
    moveup = 0;
  } else if (Xpos != 5 && Ypos != 7) {
    ipus();
    return alert("Follow the instructions or die");
  }
}
function moveUp() {
  let y = Ypos;
  let x = Xpos;
  checkpo();
  if (Xpos != 1 && moveleft != 2) {
    document.getElementById("colom" + y + "row" + x).innerHTML = " ";
    document.getElementById("colom" + y + "row" + --x).innerHTML = ping;
    Xpos--;
    moveRight = 0;
    movedown = 0;
    moveleft = 0;
    moveup++;
  } else if (Xpos != 5 && Ypos != 7) {
    ipus();
    return alert("Follow the instructions or die");
  }
}

function checkpo() {
  if (Xpos == 5 && Ypos == 7) {
    document.getElementById("colom7row5").innerHTML = " ";
    document.getElementById("colom1row1").innerHTML = ping;
    Ypos = 1;
    Xpos = 1;
    moveRight = 0;
    movedown = 0;
    moveleft = 0;
    moveup = 0;
    countAll = 0;
    alert("you won!");
  }
}
function ipus() {
  checkpo();
  if (Xpos != 5 && Ypos != 7) {
    let y = Ypos;
    let x = Xpos;
    document.getElementById("colom" + y + "row" + x).innerHTML = "";
    document.getElementById("colom1row1").innerHTML = ping;
    Ypos = 1;
    Xpos = 1;
    moveRight = 0;
    movedown = 0;
    moveleft = 0;
    moveup = 0;
    countAll = 0;
  }
}
