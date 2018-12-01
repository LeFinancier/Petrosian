function startGame () {
  window.onload = function () {
    myGameArea.start();
    player =  new Character(30, 30, "red", 0, 0);
    player2 = new Character(30, 30, "green", 50, 30);
  }
  
}

function updateGame() {
  myGameArea.clear();
  myGameArea.back();
  myGameArea.frames +=1;
  player.newPos();
  player2.newPos();
  player.update();
  player2.update();
}

var myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 1000;
    this.canvas.height = 700;
    this.context = this.canvas.getContext('2d');
    document.getElementById('board').insertBefore(this.canvas,document.getElementById('board').childNodes[0]);
    this.interval = setInterval(updateGame, 18);
  },
  frames: 0,
  clear: function () {
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
  },
  back: function () {
    this.context.fillStyle = "lightgreen";
    this.context.fillRect(0,0,this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  }
};

function Character (width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.movementX = 0;
  this.movementY = 0;
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.fillStyle = "orange";
    ctx.fillRect(this.x + 40, this.y, this.width, this.height);
    ctx.fillRect(this.x + 40, this.y + 40, this.width, this.height);
    ctx.fillRect(this.x + 40, this.y - 40, this.width, this.height);
    ctx.fillRect(this.x - 40, this.y, this.width, this.height);
    ctx.fillRect(this.x - 40, this.y + 40, this.width, this.height);
    ctx.fillRect(this.x - 40, this.y - 40, this.width, this.height);
    ctx.fillRect(this.x, this.y + 40, this.width, this.height);
    ctx.fillRect(this.x, this.y - 40, this.width, this.height);
  };
  this.newPos = function () {
    if (this.x < 995) {
      this.x += this.movementX;
    } else if (this.x > 5 
      && this.y < 695 && this.y > 5) {
    this.x += this.movementX;
    this.y += this.movementY;
    } else {
      this.x = 6;
      this.y = 6;
    }
  };
  this.left = function () {
    return this.x;
  };
  this.right = function () {
    return this.x + this.width;
  };
  this.top = function () {
    return this.y;
  };
  this.bottom = function () {
    return this.y + this.height;
  };
};

function moveUp(e) {
  player.movementY = -5;
 
}

function moveUp2(e) {
  player2.movementY = -5;
}

function moveDown() {
  player.movementY = 5;
}

function moveDown2() {
  player2.movementY = 5;
}

function moveRight() {
  player.movementX = 5;
}

function moveRight2() {
  player2.movementX = 5;
}

function moveLeft() {
  player.movementX = -5;
}

function moveLeft2() {
  player2.movementX = -5;
}

var map = {};

onkeydown = onkeyup = function (e) {
  e = e || this.event;
  map [e.keyCode] = e.type == 'keydown';
  if (map[87] && map[38]) {
    moveUp();
    moveUp2();
  } else if (map[38]) {
    moveUp();
  } else if (map[87]) {
    moveUp2();
  } else if(map[38] && map[83]) {
    moveUp();
    moveDown2();
  } else if (map[38] && map[68]) {
    moveUp();
    moveRight2();
  } else if (map[38] && map[65]) {
    moveUp();
    moveLeft2();
  }
  else if (map[40] && map[83]) {
    moveDown();
    moveDown2();
    console.log (map);
  } else if (map[40]) {
    moveDown();
  } else if (map[83]) {
    moveDown2();
  } else if (map[40] && map[87]) {
    moveDown();
    moveUp2();
  } else if (map[40] && map[68]) {
    moveDown();
    moveRight2();
  } else if (map[40] && map[65]) {
    moveDown();
    moveLeft2();
  }
  else if (map[39] && map[68]) {
    moveRight();
    moveRight2();
    console.log (map);
  } else if (map[39]) {
    moveRight();
  } else if (map[68]) {
    moveRight2();
  } else if (map[39] && map[87]) {
    moveRight();
    moveUp2();
  } else if (map[39] && map[83]) {
    moveRight();
    moveDown2();
  } else if (map[39] && map[65]) {
    moveRight();
    moveLeft2();
  }
  else if (map[37] && map[65]) {
    moveLeft();
    moveLeft2();
    console.log (map);
  } else if (map[37]) {
    moveLeft();
  } else if (map[65]) {
    moveLeft2();
  } else if (map[37] && map[87]) {
    moveLeft();
    moveUp2();
  } else if (map[37] && map[83]) {
    moveLeft();
    moveDown2();
  } else if (map[37] && map[68]) {
    moveLeft();
    moveRight2();
  }
  else if (!map[65] && !map[68] && !map[83] && !map[87] && !map[37] && !map[38] && !map[39] && !map[40]) {
    stopMove();
    stopMove2();
    console.log (map);
  }
  else if (!map[65] && !map[68] && !map[83] && !map[87]) {
    stopMove2();
    console.log (map);
  }
  else if (!map[37] && !map[38] && !map[39] && !map[40]) {
    stopMove();
    console.log (map);
  } 
}

function stopMove () {
  player.movementX = 0;
  player.movementY = 0;
}

function stopMove2 () {
  player2.movementX = 0;
  player2.movementY = 0;
}

startGame();