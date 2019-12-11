/** @type {HTMLCanvasElement} */
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

// 进度条宽度
let bar = 0;
let frames = 0;
let bolls = [];
// let barColor = ["#00f400"];

// 生成随机数
function randomNum(m, n, int) {
  if (int) {
    return Math.floor(Math.random() * (n - m) + m);
  } else {
    return Math.random() * (n - m) + m;
  }
}

class Boll {
  constructor(...values) {
    [this.x, this.y, this.r, this.c] = values;
  }
  //画圈
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = "#00f400";
    ctx.fill();
  }
  // 生成初始速度
  generateSpeed(m, n, int) {
    this.sx = -randomNum(m, n, int);
    this.sy = -randomNum(m, n, int)/2
  }

  move() {
    this.x += this.sx;
    this.y += this.sy;
  }
  // 更新小球速度 更新小球半径
  updateBoll() {
    this.sy += 0.1;
    this.r = this.r - 0.02;
    if (this.r <= 0) {
      this.r = 0;
    }
  }
}
let over = false;
let id = setInterval(() => {
  frames++;
  bar += 0.5;
  
  // 清空画布
  ctx.clearRect(0, 0, 500, 500);

  // 绘制进度条底层
  ctx.fillStyle = "lightgray";
  ctx.fillRect(50, 45, 400, 10);

  // 绘制进度条

  ctx.fillStyle = "blue";
  ctx.fillRect(50, 45, bar, 10);
  if (bar > 400) {
    over = true;
    bar--
  }
  // 每10帧 生成小球球
  if (frames % 2 === 0 && !over) {
    let b = new Boll(bar + 48, 50, 2);
    bolls.push(b);
    b.draw();
    // 初始化小球 速度
    b.generateSpeed(0, 5, false);
  }

  // 每帧移动小球 画出新小球 更新小球速度
  for (boll of bolls) {
    boll.move();
    boll.draw();
    boll.updateBoll();
  }
  // 半径小于等于0 就删掉
  bolls.forEach((boll, index, bolls) => {
    if (boll.r <= 0) {
      bolls.splice(index, 1);
    }
  });

  
}, 30);
