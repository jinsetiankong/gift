var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  // 笔刷半径
  brushRadius = (canvas.width / 100) * 5,
  img = new Image();

if (brushRadius < 50) {
  brushRadius = 50;
}

img.onload = function () {
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
};
img.src = "../img/guaguale.png";

// 获取笔刷的位置
function getBrushPos(xRef, yRef) {
  // 返回元素的大小及其相对于视口的位置
  var canvasRect = canvas.getBoundingClientRect();
  return {
    x: Math.floor(
      ((xRef - canvasRect.left) / (canvasRect.right - canvasRect.left)) *
      canvas.width
    ),
    y: Math.floor(
      ((yRef - canvasRect.top) / (canvasRect.bottom - canvasRect.top)) *
      canvas.height
    ),
  };
}

// 画点
function drawDot(mouseX, mouseY) {
  context.beginPath();
  context.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true);
  context.fillStyle = "#000";
  // 现有内容保持在新图形不重叠的地方。（关键点）
  context.globalCompositeOperation = "destination-out";
  context.fill();
}

// 添加鼠标移动事件
canvas.addEventListener(
  "mousemove",
  function (e) {
    var brushPos = getBrushPos(e.clientX, e.clientY);
    // 检测是否按下了左键
    if (e.buttons === 1) {
      drawDot(brushPos.x, brushPos.y);
      // var element = document.getElementById("touming");
      // // 现在你想更改这个元素的id  
      // if (element) {
      //   element.id = "";
      // }
    }
  },
  false
);

canvas.addEventListener('touchstart', function (e) {
  // 阻止默认行为（如页面滚动）  
  e.preventDefault();

  // 获取触摸点的坐标（注意：e.touches 是一个包含所有触摸点的数组）  
  var touch = e.touches[0];
  lastX = touch.clientX - canvas.offsetLeft;
  lastY = touch.clientY - canvas.offsetTop;

  // 标记为正在绘制  
  isDrawing = true;
});

canvas.addEventListener('touchmove', function (e) {
  // 如果不是在绘制状态，则直接返回  
  if (!isDrawing) return;

  // 阻止默认行为（如页面滚动）  
  e.preventDefault();

  // 获取触摸点的坐标  
  var touch = e.touches[0];
  var x = touch.clientX - canvas.offsetLeft;
  var y = touch.clientY - canvas.offsetTop;

  // 在这里绘制线条或点（这里以点为例）  
  drawDot(x, y);
  // 更新最后的位置  
  lastX = x;
  lastY = y;
});
// 监听触摸结束事件  
canvas.addEventListener('touchend', function (e) {
  // 标记为非绘制状态  
  isDrawing = false;
  // 调用清屏函数，设置等待时间为1000毫秒（1秒）  

  var element = document.getElementById("touming");
  // 现在你想更改这个元素的id  
  if (element) {
    element.id = "";
  }
});


