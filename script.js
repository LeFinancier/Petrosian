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
    sold9 = new Soldier1(9);
    sold10 = new Soldier1(10);
    sold11 = new Soldier1(11);
    sold12 = new Soldier1(12);
    sold13 = new Soldier1(13);
    sold14 = new Soldier1(14);
    sold15 = new Soldier1(15);
    sold16 = new Soldier1(16);
    sold17 = new Soldier1(17);
    sold18 = new Soldier1(18);
    sold19 = new Soldier1(19);
    sold20 = new Soldier1(20);
    sold21 = new Soldier1(21);
    sold22 = new Soldier1(22);
    sold23 = new Soldier1(23);
    sold24 = new Soldier1(24);

    player2 = new Character(30, 30, "green", 200, 200);
    sold101 = new Soldier2(1);
    sold102 = new Soldier2(2);
    sold103 = new Soldier2(3);
    sold104 = new Soldier2(4);
    sold105 = new Soldier2(5);
    sold106 = new Soldier2(6);
    sold107 = new Soldier2(7);
    sold108 = new Soldier2(8);
    sold109 = new Soldier2(9);
    sold110 = new Soldier2(10);
    sold111 = new Soldier2(11);
    sold112 = new Soldier2(12);
    sold113 = new Soldier2(13);
    sold114 = new Soldier2(14);
    sold115 = new Soldier2(15);
    sold116 = new Soldier2(16);
    sold117 = new Soldier2(17);
    sold118 = new Soldier2(18);
    sold119 = new Soldier2(19);
    sold120 = new Soldier2(20);
    sold121 = new Soldier2(21);
    sold122 = new Soldier2(22);
    sold123 = new Soldier2(23);
    sold124 = new Soldier2(24);
  }
  
}

function updateGame() {
  if (sold1.colition(player2)) {
    console.log('Muere')
    myGameArea.stop();
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
  sold101.newPos();
  sold102.newPos();
  sold103.newPos();
  sold104.newPos();
  sold105.newPos();
  sold106.newPos();
  sold107.newPos();
  sold108.newPos();
  sold109.newPos();
  sold110.newPos();
  sold111.newPos();
  sold112.newPos();
  sold113.newPos();
  sold114.newPos();
  sold115.newPos();
  sold116.newPos();
  sold117.newPos();
  sold118.newPos();
  sold119.newPos();
  sold120.newPos();
  sold121.newPos();
  sold122.newPos();
  sold123.newPos();
  sold124.newPos();

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
  sold101.update();
  sold102.update();
  sold103.update();
  sold104.update();
  sold105.update();
  sold106.update();
  sold107.update();
  sold108.update();
  sold109.update();
  sold110.update();
  sold111.update();
  sold112.update();
  sold113.update();
  sold114.update();
  sold115.update();
  sold116.update();
  sold117.update();
  sold118.update();
  sold119.update();
  sold120.update();
  sold121.update();
  sold122.update();
  sold123.update();
  sold124.update();
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

  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
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
  } 
  else if (lugar === 2) {
    this.x = player.x + 40;
    this.y = player.y + 40;
  } 
  else if (lugar === 3) {
    this.x = player.x + 40;
    this.y = player.y - 40;
  } 
  else if (lugar === 4) {
    this.x = player.x - 40;
    this.y = player.y;
  } 
  else if (lugar === 5) {
    this.x = player.x - 40;
    this.y = player.y + 40;
  } 
  else if (lugar === 6) {
    this.x = player.x - 40;
    this.y = player.y - 40;
  } 
  else if (lugar === 7) {
    this.x = player.x;
    this.y = player.y + 40;
  } 
  else if (lugar === 8) {
    this.x = player.x;
    this.y = player.y - 40;
  } 
  else if (lugar === 9) {
    this.x = player.x + 80;
    this.y = player.y;
  } 
  else if (lugar === 10) {
    this.x = player.x + 80;
    this.y = player.y + 80;
  } 
  else if (lugar === 11) {
    this.x = player.x + 80;
    this.y = player.y + 40;
  } 
  else if (lugar === 12) {
    this.x = player.x + 80;
    this.y = player.y - 80;
  } 
  else if (lugar === 13) {
    this.x = player.x + 80;
    this.y = player.y - 40;
  } 
  else if (lugar === 14) {
    this.x = player.x - 80;
    this.y = player.y;
  } 
  else if (lugar === 15) {
    this.x = player.x - 80;
    this.y = player.y + 80;
  } 
  else if (lugar === 16) {
    this.x = player.x - 80;
    this.y = player.y + 40;
  } 
  else if (lugar === 17) {
    this.x = player.x - 80;
    this.y = player.y - 80;
  } 
  else if (lugar === 18) {
    this.x = player.x - 80;
    this.y = player.y - 40;
  } 
  else if (lugar === 19) {
    this.x = player.x;
    this.y = player.y + 80;
  } 
  else if (lugar === 20) {
    this.x = player.x + 40;
    this.y = player.y + 80;
  } 
  else if (lugar === 21) {
    this.x = player.x - 40; 
    this.y = player.y + 80;
  } 
  else if (lugar === 22) {
    this.x = player.x; 
    this.y = player.y - 80;
  } 
  else if (lugar === 23) {
    this.x = player.x + 40; 
    this.y = player.y - 80;
  } 
  else if (lugar === 24) {
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

  else if (this.x === 950 && lugar === 4) {
      if (this.movementX === 5) {
        this.x;
    } else {
      this.x += this.movementX;
    } 
  } else if(this.x === 40 && lugar === 4) {
    if (this.movementX === -5) {
      this.x;
    } else {
      this.x += this.movementX
    }
  } 

  else if (this.x === 950 && lugar === 5) {
    if (this.movementX === 5) {
      this.x;
  } else {
    this.x += this.movementX;
  } 
} else if(this.x === 40 && lugar === 5) {
  if (this.movementX === -5) {
    this.x;
  } else {
    this.x += this.movementX
  }
} 

else if (this.x === 950 && lugar === 6) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 40 && lugar === 6) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 990 && lugar === 7) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 80 && lugar === 7) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 990 && lugar === 8) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 80 && lugar === 8) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1070 && lugar === 9) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 160 && lugar === 9) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1070 && lugar === 10) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 160 && lugar === 10) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1070 && lugar === 11) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 160 && lugar === 11) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1070 && lugar === 12) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 160 && lugar === 12) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1070 && lugar === 13) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 160 && lugar === 13) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 910 && lugar === 14) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 0 && lugar === 14) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 910 && lugar === 15) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 0 && lugar === 15) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 910 && lugar === 16) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 0 && lugar === 16) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 910 && lugar === 17) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 0 && lugar === 17) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 910 && lugar === 18) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 0 && lugar === 18) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 990 && lugar === 19) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 80 && lugar === 19) {
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

else if (this.x === 950 && lugar === 21) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 40 && lugar === 21) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 990 && lugar === 22) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 80 && lugar === 22) {
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

else if (this.x === 950 && lugar === 24) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 40 && lugar === 24) {
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

  else if (this.y === 590 && lugar === 3) {
    if (this.movementY === 5) {
      this.y;
    } else {
      this.y += this.movementY;
  }
} else if(this.y === 40 && lugar === 3) {
  if (this.movementY === -5) {
    this.y;
  } else {
    this.y += this.movementY
  }
}

else if (this.y === 630 && lugar === 4) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 80 && lugar === 4) {
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

else if (this.y === 590 && lugar === 6) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 40 && lugar === 6) {
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

else if (this.y === 590 && lugar === 8) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 40 && lugar === 8) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 630 && lugar === 9) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 80 && lugar === 9) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 710 && lugar === 10) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 160 && lugar === 10) {
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

else if (this.y === 550 && lugar === 12) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 0 && lugar === 12) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 590 && lugar === 13) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 40 && lugar === 13) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 630 && lugar === 14) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 80 && lugar === 14) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 710 && lugar === 15) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 160 && lugar === 15) {
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

else if (this.y === 550 && lugar === 17) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 0 && lugar === 17) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 590 && lugar === 18) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 40 && lugar === 18) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 710 && lugar === 19) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 160 && lugar === 19) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 710 && lugar === 20) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 160 && lugar === 20) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 710 && lugar === 21) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 160 && lugar === 21) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 550 && lugar === 22) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 0 && lugar === 22) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 550 && lugar === 23) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 0 && lugar === 23) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 550 && lugar === 24) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 0 && lugar === 24) {
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

function Soldier2 (lugar) {
  this.width = player2.width;
  this.height = player2.height;
  if (lugar === 1) {
    this.x = player2.x + 40;
    this.y = player2.y;
  } 
  else if (lugar === 2) {
    this.x = player2.x + 40;
    this.y = player2.y + 40;
  } 
  else if (lugar === 3) {
    this.x = player2.x + 40;
    this.y = player2.y - 40;
  } 
  else if (lugar === 4) {
    this.x = player2.x - 40;
    this.y = player2.y;
  } 
  else if (lugar === 5) {
    this.x = player2.x - 40;
    this.y = player2.y + 40;
  } 
  else if (lugar === 6) {
    this.x = player2.x - 40;
    this.y = player2.y - 40;
  } 
  else if (lugar === 7) {
    this.x = player2.x;
    this.y = player2.y + 40;
  } 
  else if (lugar === 8) {
    this.x = player2.x;
    this.y = player2.y - 40;
  } 
  else if (lugar === 9) {
    this.x = player2.x + 80;
    this.y = player2.y;
  } 
  else if (lugar === 10) {
    this.x = player2.x + 80;
    this.y = player2.y + 80;
  } 
  else if (lugar === 11) {
    this.x = player2.x + 80;
    this.y = player2.y + 40;
  } 
  else if (lugar === 12) {
    this.x = player2.x + 80;
    this.y = player2.y - 80;
  } 
  else if (lugar === 13) {
    this.x = player2.x + 80;
    this.y = player2.y - 40;
  } 
  else if (lugar === 14) {
    this.x = player2.x - 80;
    this.y = player2.y;
  } 
  else if (lugar === 15) {
    this.x = player2.x - 80;
    this.y = player2.y + 80;
  } 
  else if (lugar === 16) {
    this.x = player2.x - 80;
    this.y = player2.y + 40;
  } 
  else if (lugar === 17) {
    this.x = player2.x - 80;
    this.y = player2.y - 80;
  } 
  else if (lugar === 18) {
    this.x = player2.x - 80;
    this.y = player2.y - 40;
  } 
  else if (lugar === 19) {
    this.x = player2.x;
    this.y = player2.y + 80;
  } 
  else if (lugar === 20) {
    this.x = player2.x + 40;
    this.y = player2.y + 80;
  } 
  else if (lugar === 21) {
    this.x = player2.x - 40; 
    this.y = player2.y + 80;
  } 
  else if (lugar === 22) {
    this.x = player2.x; 
    this.y = player2.y - 80;
  } 
  else if (lugar === 23) {
    this.x = player2.x + 40; 
    this.y = player2.y - 80;
  } 
  else if (lugar === 24) {
    this.x = player2.x - 40; 
    this.y = player2.y - 80;
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

  else if (this.x === 950 && lugar === 4) {
      if (this.movementX === 5) {
        this.x;
    } else {
      this.x += this.movementX;
    } 
  } else if(this.x === 40 && lugar === 4) {
    if (this.movementX === -5) {
      this.x;
    } else {
      this.x += this.movementX
    }
  } 

  else if (this.x === 950 && lugar === 5) {
    if (this.movementX === 5) {
      this.x;
  } else {
    this.x += this.movementX;
  } 
} else if(this.x === 40 && lugar === 5) {
  if (this.movementX === -5) {
    this.x;
  } else {
    this.x += this.movementX
  }
} 

else if (this.x === 950 && lugar === 6) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 40 && lugar === 6) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 990 && lugar === 7) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 80 && lugar === 7) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 990 && lugar === 8) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 80 && lugar === 8) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1070 && lugar === 9) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 160 && lugar === 9) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1070 && lugar === 10) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 160 && lugar === 10) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1070 && lugar === 11) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 160 && lugar === 11) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1070 && lugar === 12) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 160 && lugar === 12) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 1070 && lugar === 13) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 160 && lugar === 13) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 910 && lugar === 14) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 0 && lugar === 14) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 910 && lugar === 15) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 0 && lugar === 15) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 910 && lugar === 16) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 0 && lugar === 16) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 910 && lugar === 17) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 0 && lugar === 17) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 910 && lugar === 18) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 0 && lugar === 18) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 990 && lugar === 19) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 80 && lugar === 19) {
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

else if (this.x === 950 && lugar === 21) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 40 && lugar === 21) {
if (this.movementX === -5) {
  this.x;
} else {
  this.x += this.movementX
}
} 

else if (this.x === 990 && lugar === 22) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 80 && lugar === 22) {
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

else if (this.x === 950 && lugar === 24) {
  if (this.movementX === 5) {
    this.x;
} else {
  this.x += this.movementX;
} 
} else if(this.x === 40 && lugar === 24) {
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

  else if (this.y === 590 && lugar === 3) {
    if (this.movementY === 5) {
      this.y;
    } else {
      this.y += this.movementY;
  }
} else if(this.y === 40 && lugar === 3) {
  if (this.movementY === -5) {
    this.y;
  } else {
    this.y += this.movementY
  }
}

else if (this.y === 630 && lugar === 4) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 80 && lugar === 4) {
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

else if (this.y === 590 && lugar === 6) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 40 && lugar === 6) {
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

else if (this.y === 590 && lugar === 8) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 40 && lugar === 8) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 630 && lugar === 9) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 80 && lugar === 9) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 710 && lugar === 10) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 160 && lugar === 10) {
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

else if (this.y === 550 && lugar === 12) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 0 && lugar === 12) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 590 && lugar === 13) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 40 && lugar === 13) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 630 && lugar === 14) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 80 && lugar === 14) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 710 && lugar === 15) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 160 && lugar === 15) {
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

else if (this.y === 550 && lugar === 17) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 0 && lugar === 17) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 590 && lugar === 18) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 40 && lugar === 18) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 710 && lugar === 19) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 160 && lugar === 19) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 710 && lugar === 20) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 160 && lugar === 20) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 710 && lugar === 21) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 160 && lugar === 21) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 550 && lugar === 22) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 0 && lugar === 22) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 550 && lugar === 23) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 0 && lugar === 23) {
if (this.movementY === -5) {
  this.y;
} else {
  this.y += this.movementY
}
}

else if (this.y === 550 && lugar === 24) {
  if (this.movementY === 5) {
    this.y;
  } else {
    this.y += this.movementY;
}
} else if(this.y === 0 && lugar === 24) {
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
  sold101.movementY = -5;
  sold102.movementY = -5;
  sold103.movementY = -5;
  sold104.movementY = -5;
  sold105.movementY = -5;
  sold106.movementY = -5;
  sold107.movementY = -5;
  sold108.movementY = -5;
  sold109.movementY = -5;
  sold110.movementY = -5;
  sold111.movementY = -5;
  sold112.movementY = -5;
  sold113.movementY = -5;
  sold114.movementY = -5;
  sold115.movementY = -5;
  sold116.movementY = -5;
  sold117.movementY = -5;
  sold118.movementY = -5;
  sold119.movementY = -5;
  sold120.movementY = -5;
  sold121.movementY = -5;
  sold122.movementY = -5;
  sold123.movementY = -5;
  sold124.movementY = -5;
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
  sold101.movementY = 5;
  sold102.movementY = 5;
  sold103.movementY = 5;
  sold104.movementY = 5;
  sold105.movementY = 5;
  sold106.movementY = 5;
  sold107.movementY = 5;
  sold108.movementY = 5;
  sold109.movementY = 5;
  sold110.movementY = 5;
  sold111.movementY = 5;
  sold112.movementY = 5;
  sold113.movementY = 5;
  sold114.movementY = 5;
  sold115.movementY = 5;
  sold116.movementY = 5;
  sold117.movementY = 5;
  sold118.movementY = 5;
  sold119.movementY = 5;
  sold120.movementY = 5;
  sold121.movementY = 5;
  sold122.movementY = 5;
  sold123.movementY = 5;
  sold124.movementY = 5;
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
  sold101.movementX = 5;
  sold102.movementX = 5;
  sold103.movementX = 5;
  sold104.movementX = 5;
  sold105.movementX = 5;
  sold106.movementX = 5;
  sold107.movementX = 5;
  sold108.movementX = 5;
  sold109.movementX = 5;
  sold110.movementX = 5;
  sold111.movementX = 5;
  sold112.movementX = 5;
  sold113.movementX = 5;
  sold114.movementX = 5;
  sold115.movementX = 5;
  sold116.movementX = 5;
  sold117.movementX = 5;
  sold118.movementX = 5;
  sold119.movementX = 5;
  sold120.movementX = 5;
  sold121.movementX = 5;
  sold122.movementX = 5;
  sold123.movementX = 5;
  sold124.movementX = 5;
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
  sold101.movementX = -5;
  sold102.movementX = -5;
  sold103.movementX = -5;
  sold104.movementX = -5;
  sold105.movementX = -5;
  sold106.movementX = -5;
  sold107.movementX = -5;
  sold108.movementX = -5;
  sold109.movementX = -5;
  sold110.movementX = -5;
  sold111.movementX = -5;
  sold112.movementX = -5;
  sold113.movementX = -5;
  sold114.movementX = -5;
  sold115.movementX = -5;
  sold116.movementX = -5;
  sold117.movementX = -5;
  sold118.movementX = -5;
  sold119.movementX = -5;
  sold120.movementX = -5;
  sold121.movementX = -5;
  sold122.movementX = -5;
  sold123.movementX = -5;
  sold124.movementX = -5;
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

  sold101.movementX = 0;
  sold102.movementX = 0;
  sold103.movementX = 0;
  sold104.movementX = 0;
  sold105.movementX = 0;
  sold106.movementX = 0;
  sold107.movementX = 0;
  sold108.movementX = 0;
  sold109.movementX = 0;
  sold110.movementX = 0;
  sold111.movementX = 0;
  sold112.movementX = 0;
  sold113.movementX = 0;
  sold114.movementX = 0;
  sold115.movementX = 0;
  sold116.movementX = 0;
  sold117.movementX = 0;
  sold118.movementX = 0;
  sold119.movementX = 0;
  sold120.movementX = 0;
  sold121.movementX = 0;
  sold122.movementX = 0;
  sold123.movementX = 0;
  sold124.movementX = 0;

  sold101.movementY = 0;
  sold102.movementY = 0;
  sold103.movementY = 0;
  sold104.movementY = 0;
  sold105.movementY = 0;
  sold106.movementY = 0;
  sold107.movementY = 0;
  sold108.movementY = 0;
  sold109.movementY = 0;
  sold110.movementY = 0;
  sold111.movementY = 0;
  sold112.movementY = 0;
  sold113.movementY = 0;
  sold114.movementY = 0;
  sold115.movementY = 0;
  sold116.movementY = 0;
  sold117.movementY = 0;
  sold118.movementY = 0;
  sold119.movementY = 0;
  sold120.movementY = 0;
  sold121.movementY = 0;
  sold122.movementY = 0;
  sold123.movementY = 0;
  sold124.movementY = 0;
}

startGame();