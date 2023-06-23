
  window.addEventListener('load', () => {
let clicked = 0
let overlayTo = 0
let body = document.querySelector('body')
let diggingButton = document.querySelector('body > div.start > div.l')
let buildingButton = document.querySelector('body > div.start > div.r')
let overlayText = document.querySelector('.overlay p')
let rows = document.querySelectorAll('div.row')
let overlay = document.querySelector('.overlay')
let start = document.querySelector('.start')
let digging = document.querySelector('.digging')
let building = document.querySelector('.building')
let gameover = document.querySelector('.gameover')
let score = document.querySelector('.score')
let canvas = document.getElementById("buildGame");
let home = document.querySelector('.home')

diggingButton.addEventListener('click', () => {
  display(1)
})
buildingButton.addEventListener('click', () => {
  display(2)
})
overlay.addEventListener('click', () => {
  display(overlayTo)
  makeOverlay(false)
})
gameover.addEventListener('click', () => {
  restart();
  gameover.style['display'] = 'none';
})
home.addEventListener('click', () => {
  display(0)
})

function display(index) {
  switch (index) {
    case 0:
      start.style['display'] = 'flex'
      digging.style['display'] = 'none'
      building.style['display'] = 'none'
      home.style['display'] = 'none'
      break
    case 1:
      start.style['display'] = 'none'
      digging.style['display'] = 'flex'
      building.style['display'] = 'none'
      home.style['display'] = 'initial'
      break
    case 2:
      start.style['display'] = 'none'
      digging.style['display'] = 'none'
      building.style['display'] = 'flex'
      home.style['display'] = 'initial'
      break
  }
}
if(display(0)){
  building.style['display'] = 'none'
}
function makeOverlay(shown, text = '', to = 0) {
  overlay.style['display'] = shown ? 'initial' : 'none'
  body.style['background-color'] = shown ? '#fff' : '#101027'
  overlayText.innerText = text;
  overlayTo = to
}

for (let i = rows.length - 1; i >= 0; i--) {
  rows[i].addEventListener('click', () => {
    let row = rows[i]
    if (row.style['opacity'] != '0') {
      clicked++
    }
    if (clicked >= 6) {
      makeOverlay(true, 'go build', 2)
    }
    row.style['opacity'] = '0%'
  })
}

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
})
canvas.width = innerWidth;
canvas.height = innerHeight;
let context = canvas.getContext("2d");
let scrollCounter, cameraY, current, mode, xSpeed;
let ySpeed = 10;
let height = 200;
let boxes = [];
let figure = ["fugure_1.svg", "fugure_2.svg", "fugure_3.svg", "fugure_4.svg", "fugure_5.svg"]
function getImage(url) {
  const image = new Image(url)
  image.src = url
  return image;
}
boxes[0] = {
  x: (canvas.width - 120) / 2,
  y: 20,
  width: 231,
  image: getImage(figure[0])
};
function newBox() {
  const img = new Image()
  img.src = figure[Math.floor(Math.random() * figure.length)]
  boxes[current] = {
    x: 270,
    y: (current + 1) * height,
    width: 231,
    image: img
  };
}
function gameOver() {
  mode = 'gameOver';
  gameover.style['display'] = 'initial';
}

function animate() {
  if (mode != 'gameOver') {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let n = 0; n < boxes.length; n++) {
      let box = boxes[n];
      context.drawImage(box.image, box.x, 600 - box.y + cameraY, box.width, height);
    }
    if (mode == 'bounce') {
      boxes[current].x = boxes[current].x + xSpeed;
      if (xSpeed > 0 && boxes[current].x + boxes[current].width > canvas.width)
        xSpeed = -xSpeed;
      if (xSpeed < 0 && boxes[current].x < 0)
        xSpeed = -xSpeed;
    }
    if (mode == 'fall') {
      boxes[current].y = boxes[current].y - ySpeed;
      if (boxes[current].y == boxes[current - 1].y + height) {
        mode = 'bounce';
        let difference = boxes[current].x - boxes[current - 1].x;
        if (Math.abs(difference) >= boxes[current].width) {
          gameOver();
        }
        if (xSpeed > 0) {
          xSpeed += 2;
        }
        current++;
        scrollCounter = height;
        newBox();
        score.innerText = `YOUR SCORE: ${current - 1}`
      }
    }
    if (scrollCounter) {
      cameraY += 2;
      scrollCounter -= 2;
    }
    context.fillStyle = '#101027';
  }
  window.requestAnimationFrame(animate);
}

function restart() {
  mode = 'bounce';
  boxes = [boxes[0]]
  cameraY = 12;
  scrollCounter = 0;
  xSpeed = 10;
  current = 1;
  newBox();

}
canvas.onpointerdown = function () {
  if (mode == 'bounce') {
    mode = 'fall';
  }
}
restart();
animate();
})
