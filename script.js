var army1 = [];
var army2 = [];
var flechas2 = [];
var flechas1 = [];


function startGame () {
  window.onload = function () {
    myGameArea.start();
    plyr();
    plyr2();
  }
}

function plyr() {
  player =  new Character(30, 30, "red", 100, 100);
  var b = 1000;
    for (var i = 1; i < 25; i++){
    army1.push(new Soldier1 (i,b));
    }
    for (var f = 0; f < army1.length; f++) {
      if (army1[f].class === 'arquero') {
        flechas1.push(new Flecha(army1[f].x,army1[f].y,f))
      }
    }
}

function plyr2 () {
    player2 = new Character(30, 30, "green", 500, 500);
    var b = 3000;
    for (var i = 1; i < 25; i++){
    army2.push(new Soldier2 (i,b));
    }
    for (var f = 0; f < army2.length; f++) {
      if (army2[f].class === 'arquero') {
        flechas2.push(new Flecha(army2[f].x,army2[f].y,f))
      }
    }
  }

function updateGame() {
  for (var k = 0; k < army1.length; k++){
    for (var i = 0; i < army2.length; i++) {
      if (army1[k].colition(army2[i]) || army2[i].colition(army1[k])) {
        
        army1[k].life = army1[k].life - army2[i].attack;
        army2[i].life = army2[i].life - army1[k].attack;

        if (((army1[k].x + 30) >= (army2[i].x) && (army1[k].x + 30) <= (army2[i].x + 3)) && player.movementX === -5 ||
        ((army1[k].x + 30) >= (army2[i].x) && (army1[k].x + 30) <= (army2[i].x + 3)) && player2.movementX === 5 ||
        ((army1[k].x + 30) >= (army2[i].x) && (army1[k].x + 30) <= (army2[i].x + 3)) && player.movementY === -5 ||
        ((army1[k].x + 30) >= (army2[i].x) && (army1[k].x + 30) <= (army2[i].x + 3)) && player2.movementY === 5 || 
        ((army1[k].x + 30) >= (army2[i].x) && (army1[k].x + 30) <= (army2[i].x + 3)) && player.movementY === 5 ||
        ((army1[k].x + 30) >= (army2[i].x) && (army1[k].x + 30) <= (army2[i].x + 3)) && player2.movementY === -5) {
          player.x = player.x;
          player.y = player.y;
          for (var l = 0; l < army1.length; l++) {
            army1[l].x = army1[l].x;
            army1[l].y = army1[l].y;
          } 
          player2.x = player2.x;
          player2.y = player2.y;
          for (var m = 0; m < army2.length; m++) {
            army2[m].x = army2[m].x;
            army2[m].y = army2[m].y;
          }
        } 
        
        else if (((army1[k].x) <= (army2[i].x + 30) && (army1[k].x + 3) >= (army2[i].x + 30)) && player.movementX === 5 ||
        ((army1[k].x) <= (army2[i].x + 30) && (army1[k].x + 3) >= (army2[i].x + 30)) && player2.movementX === -5 ||
        ((army1[k].x) <= (army2[i].x + 30) && (army1[k].x + 3) >= (army2[i].x + 30)) && player.movementY === -5 ||
        ((army1[k].x) <= (army2[i].x + 30) && (army1[k].x + 3) >= (army2[i].x + 30)) && player2.movementY === 5 ||
        ((army1[k].x) <= (army2[i].x + 30) && (army1[k].x + 3) >= (army2[i].x + 30)) && player.movementY === 5 || 
        ((army1[k].x) <= (army2[i].x + 30) && (army1[k].x + 3) >= (army2[i].x + 30)) && player2.movementY === -5) {
          player.x = player.x;
          player.y = player.y;
          for (var l = 0; l < army1.length; l++) {
            army1[l].x = army1[l].x;
            army1[l].y = army1[l].y;
          } 
          player2.x = player2.x;
          player2.y = player2.y;
          for (var m = 0; m < army2.length; m++) {
            army2[m].x = army2[m].x;
            army2[m].y = army2[m].y;
          } 
        } 
        
        else if (((army1[k].y) <= (army2[i].y + 30) && (army1[k].y + 3) >= (army2[i].y + 30)) && player.movementY === 5 ||
        ((army1[k].y) <= (army2[i].y + 30) && (army1[k].y + 3) >= (army2[i].y + 30)) && player2.movementY === -5 ||
        ((army1[k].y) <= (army2[i].y + 30) && (army1[k].y + 3) >= (army2[i].y + 30)) && player.movementX === -5 ||
        ((army1[k].y) <= (army2[i].y + 30) && (army1[k].y + 3) >= (army2[i].y + 30)) && player2.movementX === 5 ||
        ((army1[k].y) <= (army2[i].y + 30) && (army1[k].y + 3) >= (army2[i].y + 30)) && player.movementX === 5 ||
        ((army1[k].y) <= (army2[i].y + 30) && (army1[k].y + 3) >= (army2[i].y + 30)) && player2.movementX === -5) {
          player.y = player.y;
          player.x = player.x;
          for (var l = 0; l < army1.length; l++) {
            army1[l].y = army1[l].y;
            army1[l].x = army1[l].x;
          } 
        } 
        
        else if (((army1[k].y + 30) >= (army2[i].y) && (army1[k].y + 30) <= (army2[i].y + 3)) && player.movementY === -5 ||
        ((army1[k].y + 30) >= (army2[i].y) && (army1[k].y + 30) <= (army2[i].y + 3)) && player2.movementY === 5 ||
        ((army1[k].y + 30) >= (army2[i].y) && (army1[k].y + 30) <= (army2[i].y + 3)) && player.movementX === -5 ||
        ((army1[k].y + 30) >= (army2[i].y) && (army1[k].y + 30) <= (army2[i].y + 3)) && player2.movementX === 5 ||
        ((army1[k].y + 30) >= (army2[i].y) && (army1[k].y + 30) <= (army2[i].y + 3)) && player.movementX === 5 ||
        ((army1[k].y + 30) >= (army2[i].y) && (army1[k].y + 30) <= (army2[i].y + 3)) && player2.movementX === -5) {
          player.y = player.y;
          player.x = player.x;
          for (var l = 0; l < army1.length; l++) {
            army1[l].y = army1[l].y;
            army1[l].x = army1[l].x;
          } 
          player2.y = player2.y;
          player2.x = player2.x;
          for (var m = 0; m < army2.length; m++) {
            army2[m].y = army2[m].y;
            army2[m].x = army2[m].x;
          } 
        }

        else {
         stopMove();
         stopMove2();
      }

        if (army2[i].life < 0) {
          army2.splice(i,1);
      } else if (army1[k].life < 0) {
          army1.splice(k,1);
      }
      } else if (army1[k].colition(player2)) {
        console.log('Muere verde');
        myGameArea.stop();
      } else if (army2[i].colition(player)) {
        console.log('Muere rojo');
        myGameArea.stop();
      }
    }
  }

  for (var k = 0; k < flechas2.length; k++){
    for (var i = 0; i < army1.length; i++) {
      if (flechas2[k].colition(army1[i])) {
        army1[i].life = army1[i].life - flechas2[k].attack;
        if (army1[i].life < 0) {
          army1.splice(i,1);
        } 
      } 
    }
  }

  for (var k = 0; k < flechas2.length; k++){
      if (flechas2[k].colition(player)) {
        console.log('Muere rojo');
        myGameArea.stop();
      }
    }
  

    for (var k = 0; k < flechas1.length; k++){
      for (var i = 0; i < army2.length; i++) {
        if (flechas1[k].colition(army2[i])) {
          army2[i].life = army2[i].life - flechas1[k].attack;
          if (army2[i].life < 0) {
            army2.splice(i,1);
          } 
        } 
      }
    }
  
    for (var k = 0; k < flechas1.length; k++){
        if (flechas1[k].colition(player2)) {
          console.log('Muere verde');
          myGameArea.stop();
        }
      }  
  
  myGameArea.clear();
  myGameArea.back();
  myGameArea.frames +=1;

  player.newPos();
  player.update();
  for (var i = 0; i < army1.length; i++) {
    army1[i].newPos();
    army1[i].update();
  }
  for (var o = 0; o < flechas1.length; o++) {
    flechas1[o].newPos();
    flechas1[o].update();
  }

  player2.newPos();
  player2.update();
  for (var i = 0; i < army2.length; i++) {
    army2[i].newPos();
    army2[i].update();
  }
  for (var o = 0; o < flechas2.length; o++) {
    flechas2[o].newPos();
    flechas2[o].update();
  }
  
  
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

function Soldier1 (lugar, clase) {
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

if (clase === 1000) {
  this.life = 50;
  this.attack = 1;
  this.class = 'arquero'
} else if (clase === 2000) {
  this.life = 500000;
  this.attack = 10;
  this.class = 'escudero';
} else if (clase === 3000) {
  this.life = 1000;
  this.class = 'caballero';
  this.attack = 100000;
}

  this.update = function () {
    ctx = myGameArea.context;
    if(clase === 1000) {
      ctx.fillStyle = "lightblue";
    } else if (clase === 2000) {
      ctx.fillStyle = "lightyellow";
    } else {
      ctx.fillStyle = "white";
    }
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

function Flecha (x, y, dir) {
  this.x = x;
  this.y = y;
  this.width = 5;
  this.height = 5;
  this.maxRange = 80;
  this.attack = 2000;
  this.dir = dir;
  this.newPos = function () {
    if (this.maxRange > 0 && this.x > player.right() /*|| this.maxRange > 0 && dir === 1 ||
      this.maxRange > 0 && dir === 2 || this.maxRange > 0 && dir === 8 ||
      this.maxRange > 0 && dir === 9 || this.maxRange > 0 && dir === 10 ||
      this.maxRange > 0 && dir === 11 || this.maxRange > 0 && dir === 12*/) {
      this.x += 7;
      this.maxRange -= 7;
    } 
    else if (this.maxRange > 0 && this.x < player.left() /*|| this.maxRange > 0 && dir === 4 ||
      this.maxRange > 0 && dir === 5 || this.maxRange > 0 && dir === 13 ||
      this.maxRange > 0 && dir === 14 || this.maxRange > 0 && dir === 15 ||
      this.maxRange > 0 && dir === 16 || this.maxRange > 0 && dir === 17 ||
      this.maxRange > 0 && dir === 24*/) {
      this.x -= 7;
      this.maxRange -= 7;
    }
    else if (this.maxRange > 0 && this.y > player.bottom() /*|| this.maxRange > 0 && dir === 18 ||
      this.maxRange > 0 && dir === 19 || this.maxRange > 0 && dir === 20*/) {
      this.y += 7;
      this.maxRange -= 7;
    }
    else if (this.maxRange > 0 && this.y < player.top() /*|| this.maxRange > 0 && dir === 21 ||
      this.maxRange > 0 && dir === 22 || this.maxRange > 0 && dir === 23*/) {
      this.y -= 7;
      this.maxRange -= 7;
    }
      else {
      this.erase();
    }
  }
  
  this.erase = function () {
    flechas2 = [];
    flechas1 = [];
    for (var z = 0; z < army2.length; z++) {
      if (army2[z].class === 'arquero') {
        flechas2.push(new Flecha(army2[z].x,army2[z].y,z));
      }
    }
    for (var d = 0; d < army1.length; d++) {
     if (army1[d].class === 'arquero') {
        flechas1.push(new Flecha(army1[d].x,army1[d].y,d));
      }
    }
  }

  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

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
}

function Soldier2 (lugar, clase) {
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

  if (clase === 1000) {
    this.life = 100;
    this.attack = 1;
    this.class = 'arquero'
  } else if (clase === 2000) {
    this.life = 500000;
    this.attack = 10;
    this.class = 'escudero';
  } else if (clase === 3000) {
    this.life = 1000;
    this.class = 'caballero';
    this.attack = 100000;
  }

  this.update = function () {
    ctx = myGameArea.context;
    if(clase === 1000) {
      ctx.fillStyle = "lightblue";
    } else if (clase === 2000) {
      ctx.fillStyle = "lightyellow";
    } else {
      ctx.fillStyle = "white";
    }
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
  for (var i = 0; i < army1.length; i++) {
    army1[i].movementY = -5;
  }
}

function moveUp2() {
  player2.movementY = -5;
  for (var i = 0; i < army2.length; i++) {
    army2[i].movementY = -5;
  }
}

function moveDown() {
  player.movementY = 5;
  for (var i = 0; i < army1.length; i++) {
    army1[i].movementY = 5;
  }
}

function moveDown2() {
  player2.movementY = 5;
  for (var i = 0; i < army2.length; i++) {
    army2[i].movementY = 5;
  }
}

function moveRight() {
  player.movementX = 5;
  for (var i = 0; i < army1.length; i++) {
    army1[i].movementX = 5;
  }
}

function moveRight2() {
  player2.movementX = 5;
  for (var i = 0; i < army2.length; i++) {
    army2[i].movementX = 5;
  }
}

function moveLeft() {
  player.movementX = -5;
  for (var i = 0; i < army1.length; i++) {
    army1[i].movementX = -5;
  }
}

function moveLeft2() {
  player2.movementX = -5;
  for (var i = 0; i < army2.length; i++) {
    army2[i].movementX = -5;
  }
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
  for (var i = 0; i < army1.length; i++) {
    army1[i].movementY = 0;
    army1[i].movementX = 0;
  }
}

function stopMove2 () {
  player2.movementX = 0;
  player2.movementY = 0;
  for (var i = 0; i < army2.length; i++) {
    army2[i].movementY = 0;
    army2[i].movementX = 0;
  }
}

startGame();