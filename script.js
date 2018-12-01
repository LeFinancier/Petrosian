function startGame () {
  window.onload = function () {
    myGameArea.start();
    player =  new Character(30, 30, "red", 100, 100);
    sold1 = new Soldier1(1);
    sold2 = new Soldier1(2);
    sold3 = new Soldier1(3);
    sold4 = new Soldier1(4);
    sold5 = new Soldier1(5);
    sold6 = new Soldier1(6);
    sold7 = new Soldier1(7);
    sold8 = new Soldier1(8);
    sold9 = new Soldier2(9);
    sold10 = new Soldier2(10);
    sold11 = new Soldier2(11);
    sold12 = new Soldier2(12);
    sold13 = new Soldier2(13);
    sold14 = new Soldier2(14);
    sold15 = new Soldier2(15);
    sold16 = new Soldier2(16);
    sold17 = new Soldier2(17);
    sold18 = new Soldier2(18);
    sold19 = new Soldier2(19);
    sold20 = new Soldier2(20);
    sold21 = new Soldier2(21);
    sold22 = new Soldier2(22);
    sold23 = new Soldier2(23);
    sold24 = new Soldier2(24);
    player2 = new Character(30, 30, "green", 200, 200);
  }
  
}

function updateGame() {
  if (sold1.colition(player2)) {
    console.log('Muere')
  }
  myGameArea.clear();
  myGameArea.back();
  myGameArea.frames +=1;
  player.newPos();
  sold1.newPos();
  sold2.newPos();
  sold3.newPos();
  sold4.newPos();
  sold5.newPos();
  sold6.newPos();
  sold7.newPos();
  sold8.newPos();
  sold9.newPos();
  sold10.newPos();
  sold11.newPos();
  sold12.newPos();
  sold13.newPos();
  sold14.newPos();
  sold15.newPos();
  sold16.newPos();
  sold17.newPos();
  sold18.newPos();
  sold19.newPos();
  sold20.newPos();
  sold21.newPos();
  sold22.newPos();
  sold23.newPos();
  sold24.newPos();
  player2.newPos();

  player.update();
  sold1.update();
  sold2.update();
  sold3.update();
  sold4.update();
  sold5.update();
  sold6.update();
  sold7.update();
  sold8.update();
  sold9.update();
  sold10.update();
  sold11.update();
  sold12.update();
  sold13.update();
  sold14.update();
  sold15.update();
  sold16.update();
  sold17.update();
  sold18.update();
  sold19.update();
  sold20.update();
  sold21.update();
  sold22.update();
  sold23.update();
  sold24.update();
  player2.update();
}

var myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 1100;
    this.canvas.height = 740;
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
  
  ctx = myGameArea.context;

//   this.sol1 = function () {
//     ctx.fillStyle = "orange";
//     ctx.fillRect(this.x + 40, this.y, this.width, this.height);
// }
//   this.sol2 = function () {
//     ctx.fillStyle = "orange";
//     ctx.fillRect(this.x + 40, this.y + 40, this.width, this.height);
//   }
//   this.sol3 = function () {
//     ctx.fillStyle = "orange";
//     ctx.fillRect(this.x + 40, this.y - 40, this.width, this.height);
//   }
//   this.sol4 = function () {
//     ctx.fillStyle = "orange";
//     ctx.fillRect(this.x - 40, this.y, this.width, this.height);
//   }
//   this.sol5 = function () {
//     ctx.fillStyle = "orange";
//     ctx.fillRect(this.x - 40, this.y + 40, this.width, this.height);
//   }
//   this.sol6 = function () {
//     ctx.fillStyle = "orange";
//     ctx.fillRect(this.x - 40, this.y - 40, this.width, this.height);
//   }
//   this.sol7 = function () {
//     ctx.fillStyle = "orange";
//     ctx.fillRect(this.x, this.y + 40, this.width, this.height);
//   }
//   this.sol8 = function () {
//     ctx.fillStyle = "orange";
//     ctx.fillRect(this.x, this.y - 40, this.width, this.height);
//   }
  

  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    

    // ctx.fillStyle = "orange";
    // ctx.fillRect(this.x + 40, this.y, this.width, this.height);
    // ctx.fillRect(this.x + 40, this.y + 40, this.width, this.height);
    // ctx.fillRect(this.x + 40, this.y - 40, this.width, this.height);
    // ctx.fillRect(this.x - 40, this.y, this.width, this.height);
    // ctx.fillRect(this.x - 40, this.y + 40, this.width, this.height);
    // ctx.fillRect(this.x - 40, this.y - 40, this.width, this.height);
    // ctx.fillRect(this.x, this.y + 40, this.width, this.height);
    // ctx.fillRect(this.x, this.y - 40, this.width, this.height);

    // ctx.fillStyle = "lightblue";
    // ctx.fillRect(this.x + 80, this.y, this.width, this.height);
    // ctx.fillRect(this.x + 80, this.y + 80, this.width, this.height);
    // ctx.fillRect(this.x + 80, this.y + 40, this.width, this.height);
    // ctx.fillRect(this.x + 80, this.y - 80, this.width, this.height);
    // ctx.fillRect(this.x + 80, this.y - 40, this.width, this.height);
    // ctx.fillRect(this.x - 80, this.y, this.width, this.height);
    // ctx.fillRect(this.x - 80, this.y + 80, this.width, this.height);
    // ctx.fillRect(this.x - 80, this.y + 40, this.width, this.height);
    // ctx.fillRect(this.x - 80, this.y - 80, this.width, this.height);
    // ctx.fillRect(this.x - 80, this.y - 40, this.width, this.height);
    // ctx.fillRect(this.x, this.y + 80, this.width, this.height);
    // ctx.fillRect(this.x + 40, this.y + 80, this.width, this.height);
    // ctx.fillRect(this.x - 40, this.y + 80, this.width, this.height);
    // ctx.fillRect(this.x, this.y - 80, this.width, this.height);
    // ctx.fillRect(this.x + 40, this.y - 80, this.width, this.height);
    // ctx.fillRect(this.x - 40, this.y - 80, this.width, this.height);
  };
  
  this.newPos = function () {
    if (this.x === 990) {
      if (this.movementX === 5) {
        this.x;
      } else {
        this.x += this.movementX;
      } 
    } else if(this.x === 80) {
     if (this.movementX === -5) {
       this.x;
     } else {
       this.x += this.movementX
     }
    } else {
      this.x += this.movementX;
    }
    if (this.y === 630) {
      if (this.movementY === 5) {
        this.y;
      } else {
        this.y += this.movementY;
      } 
    } else if(this.y === 80) {
     if (this.movementY === -5) {
       this.y;
     } else {
       this.y += this.movementY
     }
    } else {
      this.y += this.movementY;
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

function Soldier1 (lugar) {
  this.width = player.width;
  this.height = player.height;
  if (lugar === 1) {
    this.x = player.x + 40;
    this.y = player.y;
  } else if (lugar === 2) {
    this.x = player.x + 40;
    this.y = player.y + 40;
  } else if (lugar === 3) {
    this.x = player.x + 40;
    this.y = player.y - 40;
  } else if (lugar === 4) {
    this.x = player.x - 40;
    this.y = player.y;
  } else if (lugar === 5) {
    this.x = player.x - 40;
    this.y = player.y + 40;
  } else if (lugar === 6) {
    this.x = player.x - 40;
    this.y = player.y - 40;
  } else if (lugar === 7) {
    this.x = player.x;
    this.y = player.y + 40;
  } else if (lugar === 8) {
    this.x = player.x;
    this.y = player.y - 40;
  } else if (lugar === 9) {
    this.x = player.x + 80;
    this.y = player.y;
  } else if (lugar === 10) {
    this.x = player.x + 80;
    this.y = player.y + 80;
  } else if (lugar === 11) {
    this.x = player.x + 80;
    this.y = player.y + 40;
  } else if (lugar === 12) {
    this.x = player.x + 80;
    this.y = player.y - 80;
  } else if (lugar === 13) {
    this.x = player.x + 80;
    this.y = player.y - 40;
  } else if (lugar === 14) {
    this.x = player.x - 80;
    this.y = player.y;
  } else if (lugar === 15) {
    this.x = player.x - 80;
    this.y = player.y + 80;
  } else if (lugar === 16) {
    this.x = player.x - 80;
    this.y = player.y + 40;
  } else if (lugar === 17) {
    this.x = player.x - 80;
    this.y = player.y - 80;
  } else if (lugar === 18) {
    this.x = player.x - 80;
    this.y = player.y - 40;
  } else if (lugar === 19) {
    this.x = player.x;
    this.y = player.y + 80;
  } else if (lugar === 20) {
    this.x = player.x + 40;
    this.y = player.y + 80;
  } else if (lugar === 21) {
    this.x = player.x - 40; 
    this.y = player.y + 80;
  } else if (lugar === 22) {
    this.x = player.x; 
    this.y = player.y - 80;
  } else if (lugar === 23) {
    this.x = player.x + 40; 
    this.y = player.y - 80;
  } else if (lugar === 24) {
    this.x = player.x - 40; 
    this.y = player.y - 80;
  }
  this.movementX = 0;
  this.movementY = 0;

  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  
  this.newPos = function () {
    if (this.x === 1030 && lugar === 1) {
      if (this.movementX === 5) {
        this.x;
      } else {
        this.x += this.movementX;
      } 
    } else if(this.x === 120 && lugar === 1) {
     if (this.movementX === -5) {
       this.x;
     } else {
       this.x += this.movementX
     }
    } 
    
    else if (this.x === 1030 && lugar === 2) {
      if (this.movementX === 5) {
        this.x;
    } else {
      this.x += this.movementX;
    } 
  } else if(this.x === 120 && lugar === 2) {
    if (this.movementX === -5) {
      this.x;
    } else {
      this.x += this.movementX
    }
  } 
  
  else if (this.x === 1030 && lugar === 3) {
    if (this.movementX === 5) {
      this.x;
  } else {
    this.x += this.movementX;
  } 
} else if(this.x === 120 && lugar === 3) {
  if (this.movementX === -5) {
    this.x;
  } else {
    this.x += this.movementX
  }
} 

  else if (this.x === 1030 && lugar === 4) {
      if (this.movementX === 5) {
        this.x;
    } else {
      this.x += this.movementX;
    } 
  } else if(this.x === 120 && lugar === 4) {
    if (this.movementX === -5) {
      this.x;
    } else {
      this.x += this.movementX
    }
  } 

  else if (this.x === 1030 && lugar === 5) {
    if (this.movementX === 5) {
      this.x;
  } else {
    this.x += this.movementX;
  } 
} else if(this.x === 120 && lugar === 5) {
  if (this.movementX === -5) {
    this.x;
  } else {
    this.x += this.movementX
  }
} 

else if (this.x === 1030 && lugar === 6) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 6) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 7) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 7) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 8) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 8) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 9) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 9) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 10) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 10) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 11) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 11) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 12) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 12) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 13) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 13) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 14) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 14) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 15) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 15) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 16) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 16) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 17) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 17) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 18) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 18) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 19) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 19) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 20) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 20) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 21) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 21) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 22) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 22) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 23) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 23) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1030 && lugar === 24) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 120 && lugar === 24) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

  else {
      this.x += this.movementX;
    }

    if (this.y === 630 && lugar === 1) {
      if (this.movementY === 5) {
        this.y;
      } else {
        this.y += this.movementY;
      } 
    } else if(this.y === 80 && lugar === 1) {
     if (this.movementY === -5) {
       this.y;
     } else {
       this.y += this.movementY
     }
    } 
    
    else if (this.y === 670 && lugar === 2) {
      if (this.movementY === 5) {
        this.y;
      } else {
        this.y += this.movementY;
    }
  } else if(this.y === 120 && lugar === 2) {
    if (this.movementY === -5) {
      this.y;
    } else {
      this.y += this.movementY
    }
  }

  else if (this.y === 670 && lugar === 3) {
    if (this.movementY === 5) {
      this.y;
    } else {
      this.y += this.movementY;
  }
} else if(this.y === 120 && lugar === 3) {
  if (this.movementY === -5) {
    this.y;
  } else {
    this.y += this.movementY
  }
}

else if (this.y === 670 && lugar === 4) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 4) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 5) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 5) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 6) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 6) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 7) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 7) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 8) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 8) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 9) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 9) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 10) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 10) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 11) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 11) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 12) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 12) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 13) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 13) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 14) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 14) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 15) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 15) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 16) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 16) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 17) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 17) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 18) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 18) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 19) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 19) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 20) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 20) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 21) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 21) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 22) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 22) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 23) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 23) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 670 && lugar === 24) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 120 && lugar === 24) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

    else {
      this.y += this.movementY;
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
  this.colition = function(soldier) {
    return !(this.bottom() < soldier.top() || 
    (this.top() > soldier.bottom()) ||
    (this.right()< soldier.left()) ||
    (this.left() > soldier.right()))
}
};

function moveUp() {
  player.movementY = -5;
  sold1.movementY = -5;
  sold2.movementY = -5;
  sold3.movementY = -5;
  sold4.movementY = -5;
  sold5.movementY = -5;
  sold6.movementY = -5;
  sold7.movementY = -5;
  sold8.movementY = -5;
  sold9.movementY = -5;
  sold10.movementY = -5;
  sold11.movementY = -5;
  sold12.movementY = -5;
  sold13.movementY = -5;
  sold14.movementY = -5;
  sold15.movementY = -5;
  sold16.movementY = -5;
  sold17.movementY = -5;
  sold18.movementY = -5;
  sold19.movementY = -5;
  sold20.movementY = -5;
  sold21.movementY = -5;
  sold22.movementY = -5;
  sold23.movementY = -5;
  sold24.movementY = -5;
}

function moveUp2() {
  player2.movementY = -5;
}

function moveDown() {
  player.movementY = 5;
  sold1.movementY = 5;
  sold2.movementY = 5;
  sold3.movementY = 5;
  sold4.movementY = 5;
  sold5.movementY = 5;
  sold6.movementY = 5;
  sold7.movementY = 5;
  sold8.movementY = 5;
  sold9.movementY = 5;
  sold10.movementY = 5;
  sold11.movementY = 5;
  sold12.movementY = 5;
  sold13.movementY = 5;
  sold14.movementY = 5;
  sold15.movementY = 5;
  sold16.movementY = 5;
  sold17.movementY = 5;
  sold18.movementY = 5;
  sold19.movementY = 5;
  sold20.movementY = 5;
  sold21.movementY = 5;
  sold22.movementY = 5;
  sold23.movementY = 5;
  sold24.movementY = 5;
}

function moveDown2() {
  player2.movementY = 5;
}

function moveRight() {
  player.movementX = 5;
  sold1.movementX = 5;
  sold2.movementX = 5;
  sold3.movementX = 5;
  sold4.movementX = 5;
  sold5.movementX = 5;
  sold6.movementX = 5;
  sold7.movementX = 5;
  sold8.movementX = 5;
  sold9.movementX = 5;
  sold10.movementX = 5;
  sold11.movementX = 5;
  sold12.movementX = 5;
  sold13.movementX = 5;
  sold14.movementX = 5;
  sold15.movementX = 5;
  sold16.movementX = 5;
  sold17.movementX = 5;
  sold18.movementX = 5;
  sold19.movementX = 5;
  sold20.movementX = 5;
  sold21.movementX = 5;
  sold22.movementX = 5;
  sold23.movementX = 5;
  sold24.movementX = 5;
}

function moveRight2() {
  player2.movementX = 5;
}

function moveLeft() {
  player.movementX = -5;
  sold1.movementX = -5;
  sold2.movementX = -5;
  sold3.movementX = -5;
  sold4.movementX = -5;
  sold5.movementX = -5;
  sold6.movementX = -5;
  sold7.movementX = -5;
  sold8.movementX = -5;
  sold9.movementX = -5;
  sold10.movementX = -5;
  sold11.movementX = -5;
  sold12.movementX = -5;
  sold13.movementX = -5;
  sold14.movementX = -5;
  sold15.movementX = -5;
  sold16.movementX = -5;
  sold17.movementX = -5;
  sold18.movementX = -5;
  sold19.movementX = -5;
  sold20.movementX = -5;
  sold21.movementX = -5;
  sold22.movementX = -5;
  sold23.movementX = -5;
  sold24.movementX = -5;
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
  }
  else if (!map[65] && !map[68] && !map[83] && !map[87]) {
    stopMove2();
  }
  else if (!map[37] && !map[38] && !map[39] && !map[40]) {
    stopMove();
  } 
}

function stopMove () {
  player.movementX = 0;
  player.movementY = 0;

  sold1.movementX = 0;
  sold2.movementX = 0;
  sold3.movementX = 0;
  sold4.movementX = 0;
  sold5.movementX = 0;
  sold6.movementX = 0;
  sold7.movementX = 0;
  sold8.movementX = 0;
  sold9.movementX = 0;
  sold10.movementX = 0;
  sold11.movementX = 0;
  sold12.movementX = 0;
  sold13.movementX = 0;
  sold14.movementX = 0;
  sold15.movementX = 0;
  sold16.movementX = 0;
  sold17.movementX = 0;
  sold18.movementX = 0;
  sold19.movementX = 0;
  sold20.movementX = 0;
  sold21.movementX = 0;
  sold22.movementX = 0;
  sold23.movementX = 0;
  sold24.movementX = 0;

  sold1.movementY = 0;
  sold2.movementY = 0;
  sold3.movementY = 0;
  sold4.movementY = 0;
  sold5.movementY = 0;
  sold6.movementY = 0;
  sold7.movementY = 0;
  sold8.movementY = 0;
  sold9.movementY = 0;
  sold10.movementY = 0;
  sold11.movementY = 0;
  sold12.movementY = 0;
  sold13.movementY = 0;
  sold14.movementY = 0;
  sold15.movementY = 0;
  sold16.movementY = 0;
  sold17.movementY = 0;
  sold18.movementY = 0;
  sold19.movementY = 0;
  sold20.movementY = 0;
  sold21.movementY = 0;
  sold22.movementY = 0;
  sold23.movementY = 0;
  sold24.movementY = 0;
}

function stopMove2 () {
  player2.movementX = 0;
  player2.movementY = 0;
}

startGame();