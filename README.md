# Space-Pest-Control-Expert-and-their-Space-Dog
This is a simple shooting game written in p5.js.
# 太空除蟲專家與他的太空狗狗
玩家將扮演一位太空除蟲專家，太空狗狗們是玩家的好夥伴。
* 射擊到太空狗狗將會被扣5分
* 擊殺太空害蟲可以獲得10分
* 飛船碰撞到太空害蟲，害蟲會死掉，但會扣5分
* 太空害蟲逃出遊戲視窗也會扣10分
* 當分數歸零時遊戲結束
# 作業答案
## 產生多個元件(class)
![](https://hackmd.io/_uploads/B1L9pZ7U3.png)
```javascript=
// 宣告陣列
let enemies = [];

// 儲存音效物件的變數
let bgMusic;

// 儲存圖片物件的變數
let backgroundImg;

// 追蹤生成敵人的時間（毫秒）
let enemyTimer = 0;

function preload() {
  // 預載入音效
  backgroundImg = loadImage('image/background.png');
  enemyImg = loadImage('image/insect.png');
  bgMusic = loadSound('music/space_bgm.mp3');
}

function setup() {
  // 設置畫布
  createCanvas(600, 800);
  enemyTimer = millis();
  bgMusic.loop();
}

function draw() {
  // 繪製背景
  background(backgroundImg);

  // 每1.5秒生成敵人
  if (millis() - enemyTimer > 1500) {
    let enemy = new Enemy();
    enemies.push(enemy);
    enemyTimer = millis();
  }

  // 移動並顯示敵人
  for (let enemy of enemies) {
    enemy.move();
    enemy.display();
  }
}

class Enemy {
  constructor() {
    this.x = random(50, width - 70); // 設定敵人的 x 座標為在一定範圍內的隨機數值
    this.y = 0; // 設定敵人的 y 座標為 0，即位於畫面上方
    this.speed = random(2, 4); // 設定敵人的速度為在一定範圍內的隨機數值
  }

  move() {
    this.y += this.speed; // 讓敵人往下移動，y 座標加上速度值
  }

  display() {
    image(enemyImg, this.x, this.y, 100, 104);
     // 顯示敵人圖片，設定 x 和 y 座標，寬度和高度
  }
}
```
---
## 作答內容

### 以下每個項目，請都要用gif圖片與程式碼表達出來
---

### class的constructor定義內容
#### Ally.js
實際的程式碼
```javascript=
class Ally { // class 定義了物件的屬性（資料）和方法（行為）
  constructor() { // 初始化物件的屬性
    this.x = random(50, width - 70); // 在畫布的指定範圍內隨機設定 x 座標
    this.y = 0; // 設定初始的 y 座標為 0
    this.speed = random(2, 4); // 隨機設定移動速度
  }
}
```
#### Bullet.js
實際的程式碼
```javascript=
class Bullet {
  constructor(x, y) {
    this.x = x + 20;  // 設定子彈的 x 座標為玩家的 x 座標加上 20
    this.y = y - 20;  // 設定子彈的 y 座標為玩家的 y 座標減去 20
    this.speed = 6;  // 設定子彈的速度為 6
  }
}
```
#### Enemy.js
實際的程式碼
```javascript=
class Enemy {
  constructor() {
    this.x = random(50, width - 70); // 設定敵人的 x 座標為在一定範圍內的隨機數值
    this.y = 0; // 設定敵人的 y 座標為 0，即位於畫面上方
    this.speed = random(2, 4); // 設定敵人的速度為在一定範圍內的隨機數值
  }
}
```
#### Player.js
實際的程式碼
```javascript=
class Player {
  constructor() {
    this.x = width / 2; // 設定玩家的 x 座標為畫面寬度的一半，將玩家置中
    this.y = height - 50; // 設定玩家的 y 座標為畫面高度減去 50，即位於畫面下方
    this.speed = 8; // 設定玩家的移動速度
    this.direction = {
      left: false,
      right: false,
      up: false,
      down: false
       // 設定玩家的移動方向，初始值皆為 false
    };
}
```

---

### class的畫圖程式碼
#### Ally.js
實際的程式碼
```javascript=
class Ally { // class 定義了物件的屬性（資料）和方法（行為）
  constructor() { // 初始化物件的屬性
    this.x = random(50, width - 70); // 在畫布的指定範圍內隨機設定 x 座標
    this.y = 0; // 設定初始的 y 座標為 0
    this.speed = random(2, 4); // 隨機設定移動速度
  }

  display() { // 顯示
    image(allyImg, this.x, this.y, 100, 100);
    // 顯示太空狗狗在指定座標位置，大小為 100x100 像素
  }
}
```
#### Bullet.js
實際的程式碼
```javascript=
class Bullet {
  constructor(x, y) {
    this.x = x + 20;  // 設定子彈的 x 座標為玩家的 x 座標加上 20
    this.y = y - 20;  // 設定子彈的 y 座標為玩家的 y 座標減去 20
    this.speed = 6;  // 設定子彈的速度為 6
  }

  display() {
    image(bulletImg, this.x + 40, this.y, 10, 30);
     // 顯示子彈圖片，設定 x 和 y 座標偏移量，寬度和高度
  }
}
```
#### Enemy.js
實際的程式碼
```javascript=
class Enemy {
  constructor() {
    this.x = random(50, width - 70); // 設定敵人的 x 座標為在一定範圍內的隨機數值
    this.y = 0; // 設定敵人的 y 座標為 0，即位於畫面上方
    this.speed = random(2, 4); // 設定敵人的速度為在一定範圍內的隨機數值
  }

  display() {
    image(enemyImg, this.x, this.y, 100, 104);
     // 顯示敵人圖片，設定 x 和 y 座標，寬度和高度
  }
}
```
#### Player.js
實際的程式碼
```javascript=
class Player {
  constructor() {
    this.x = width / 2; // 設定玩家的 x 座標為畫面寬度的一半，將玩家置中
    this.y = height - 50; // 設定玩家的 y 座標為畫面高度減去 50，即位於畫面下方
    this.speed = 8; // 設定玩家的移動速度
    this.direction = {
      left: false,
      right: false,
      up: false,
      down: false
       // 設定玩家的移動方向，初始值皆為 false
    };
      
    display() {
    image(playerImg, this.x, this.y, 130, 140); // 顯示玩家圖片，設定圖片的位置和大小
  }
}
```

---

### class的移動內容
#### Ally.js
實際的程式碼
```javascript=
class Ally { // class 定義了物件的屬性（資料）和方法（行為）
  constructor() { // 初始化物件的屬性
    this.x = random(50, width - 70); // 在畫布的指定範圍內隨機設定 x 座標
    this.y = 0; // 設定初始的 y 座標為 0
    this.speed = random(2, 4); // 隨機設定移動速度
  }
    
  move() { // 移動
    this.y += this.speed; // 根據速度更新 y 座標，使其向下移動
  }

  display() { // 顯示
    image(allyImg, this.x, this.y, 100, 100);
    // 顯示太空狗狗在指定座標位置，大小為 100x100 像素
  }
}
```
#### Bullet.js
實際的程式碼
```javascript=
class Bullet {
  constructor(x, y) {
    this.x = x + 20;  // 設定子彈的 x 座標為玩家的 x 座標加上 20
    this.y = y - 20;  // 設定子彈的 y 座標為玩家的 y 座標減去 20
    this.speed = 6;  // 設定子彈的速度為 6
  }

  move() {
    this.y -= this.speed; // 讓子彈往上移動，y 座標減去速度值
  }

  display() {
    image(bulletImg, this.x + 40, this.y, 10, 30);
     // 顯示子彈圖片，設定 x 和 y 座標偏移量，寬度和高度
  }
}
```
#### Enemy.js
實際的程式碼
```javascript=
class Enemy {
  constructor() {
    this.x = random(50, width - 70); // 設定敵人的 x 座標為在一定範圍內的隨機數值
    this.y = 0; // 設定敵人的 y 座標為 0，即位於畫面上方
    this.speed = random(2, 4); // 設定敵人的速度為在一定範圍內的隨機數值
  }

  move() {
    this.y += this.speed; // 讓敵人往下移動，y 座標加上速度值
  }

  display() {
    image(enemyImg, this.x, this.y, 100, 104);
     // 顯示敵人圖片，設定 x 和 y 座標，寬度和高度
  }
}
```
#### Player.js
實際的程式碼
```javascript=
class Player {
  constructor() {
    this.x = width / 2; // 設定玩家的 x 座標為畫面寬度的一半，將玩家置中
    this.y = height - 50; // 設定玩家的 y 座標為畫面高度減去 50，即位於畫面下方
    this.speed = 8; // 設定玩家的移動速度
    this.direction = {
      left: false,
      right: false,
      up: false,
      down: false
       // 設定玩家的移動方向，初始值皆為 false
    };
  }

  move() {
    if (this.direction.left) {
      this.x -= this.speed; // 若向左移動的方向為真，將 x 座標減去速度值
    }
    if (this.direction.right) {
      this.x += this.speed; // 若向右移動的方向為真，將 x 座標加上速度值
    }
    if (this.direction.up) {
      this.y -= this.speed; // 若向上移動的方向為真，將 y 座標減去速度值
    }
    if (this.direction.down) {
      this.y += this.speed; // 若向下移動的方向為真，將 y 座標加上速度值
    }
    this.x = constrain(this.x, 0, width); // 限制 x 座標在畫面寬度的範圍內
    this.y = constrain(this.y, 0, height); // 限制 y 座標在畫面高度的範圍內
  }

  moveLeft() {
    this.direction.left = true; // 設定向左移動的方向為真
  }

  moveRight() {
    this.direction.right = true; // 設定向右移動的方向為真
  }

  moveUp() {
    this.direction.up = true; // 設定向上移動的方向為真
  }

  moveDown() {
    this.direction.down = true; // 設定向下移動的方向為真
  }

  stopMoving(direction) {
    if (direction === "left") {
      this.direction.left = false; // 停止向左移動
    }
    if (direction === "right") {
      this.direction.right = false; // 停止向右移動
    }
    if (direction === "up") {
      this.direction.up = false; // 停止向上移動
    }
    if (direction === "down") {
      this.direction.down = false; // 停止向下移動
    }
  }

  display() {
    image(playerImg, this.x, this.y, 130, 140); // 顯示玩家圖片，設定圖片的位置和大小
  }
}
```


---

### 產生20個相同class的元件
#### 以class Ally為例生成20隻太空狗狗
執行後的圖片
![](https://hackmd.io/_uploads/HyoFczmIh.png)
實際的程式碼
```javascript=
let allies = []; //友軍的陣列，生成的太空狗狗們會在這裡

// 儲存圖片物件的變數
let allyImg;
let backgroundImg;

// 儲存音效物件的變數
let bgMusic;

function preload() { // preload() 是一個預載入函式，用於在遊戲開始前加載圖片和音效
    // 預載入圖片和音效
    backgroundImg = loadImage('image/background.png');
    allyImg = loadImage('image/space_puppy.png');
    bgMusic = loadSound('music/space_bgm.mp3');
}

function setup() { // setup() 是設置函式，用於初始化遊戲
    // 設置畫布
    createCanvas(600, 800);
    for (let i = 0; i < 20; i++) {
        let ally = new Ally();
        allies.push(ally);
    }
    bgMusic.loop(); // 使用 loop() 開始無限循環播放背景音樂
}

function draw() { // draw() 是繪製函式，用於繪製遊戲畫面
    // 繪製遊戲元素
    background(backgroundImg); //括號內放入背景圖片
    // 移動並顯示盟友
    for (let ally of allies) {
        ally.move();
        ally.display();
    }
}

class Ally { // class 定義了物件的屬性（資料）和方法（行為）
    constructor() { // 初始化物件的屬性
        this.x = random(50, width - 70); // 在畫布的指定範圍內隨機設定 x 座標
        this.y = 0; // 設定初始的 y 座標為 0
        this.speed = random(2, 4); // 隨機設定移動速度
    }

    move() { // 移動
        this.y += this.speed; // 根據速度更新 y 座標，使其向下移動
    }

    display() { // 顯示
        image(allyImg, this.x, this.y, 100, 100);
        // 顯示太空狗狗在指定座標位置，大小為 100x100 像素
    }
}
```

---

### 元件的大小，元件的左右移動，速度不一

#### 以class Ally為例生成20隻大小、移動方向、速度不同的太空狗狗。
執行後的圖片
![](https://hackmd.io/_uploads/Bk05emmIh.png)
實際的程式碼
```javascript=
let allies = []; //友軍的陣列，生成的太空狗狗們會在這裡

// 儲存圖片物件的變數
let allyImg;
let backgroundImg;

// 儲存音效物件的變數
let bgMusic;

function preload() { // preload() 是一個預載入函式，用於在遊戲開始前加載圖片和音效
    // 預載入圖片和音效
    backgroundImg = loadImage('image/background.png');
    allyImg = loadImage('image/space_puppy.png');
    bgMusic = loadSound('music/space_bgm.mp3');
}

function setup() { // setup() 是設置函式，用於初始化遊戲
    // 設置畫布
    createCanvas(600, 800);
    for (let i = 0; i < 20; i++) {
        let ally = new Ally();
        allies.push(ally);
    }
    bgMusic.loop(); // 使用 loop() 開始無限循環播放背景音樂
}

function draw() { // draw() 是繪製函式，用於繪製遊戲畫面
    // 繪製遊戲元素
    background(backgroundImg); //括號內放入背景圖片
    // 移動並顯示盟友
    for (let ally of allies) {
        ally.move();
        ally.display();
    }
}

class Ally {
    constructor() {
      // 初始化太空狗狗的屬性
      this.x = random(50, width - 70); // 在指定範圍內隨機設定 x 座標
      this.y = random(50, height - 70); // 在指定範圍內隨機設定 y 座標
      this.size = random(30, 150); // 在指定範圍內隨機設定太空狗狗的大小
      this.speedX = random(-2, 2); // 在指定範圍內隨機設定太空狗狗在水平方向的速度
      this.speedY = random(-2, 2); // 在指定範圍內隨機設定太空狗狗在垂直方向的速度
    }
  
    move() {
      // 移動太空狗狗的位置
      this.x += this.speedX; // 根據水平速度更新 x 座標
      this.y += this.speedY; // 根據垂直速度更新 y 座標
  
      // 設定邊界條件，避免太空狗狗超出畫布範圍
      if (this.x < 0) {
        this.x = 0; // 限制 x 座標不低於 0
        this.speedX *= -1; // 反轉水平速度方向
      } else if (this.x + this.size > width) {
        this.x = width - this.size; // 限制 x 座標不超過畫布寬度減去太空狗狗的大小
        this.speedX *= -1; // 反轉水平速度方向
      }
  
      if (this.y < 0) {
        this.y = 0; // 限制 y 座標不低於 0
        this.speedY *= -1; // 反轉垂直速度方向
      } else if (this.y + this.size > height) {
        this.y = height - this.size; // 限制 y 座標不超過畫布高度減去太空狗狗的大小
        this.speedY *= -1; // 反轉垂直速度方向
      }
    }
  
    display() {
      // 顯示太空狗狗
      image(allyImg, this.x, this.y, this.size, this.size);
      // 在指定的座標位置顯示太空狗狗，大小為設定的大小
    }
}
```

---




## 滑鼠按下之後，消失不見
#### 以class Enemy為例，滑鼠左鍵點擊昆蟲後消失並移出陣列。
![](https://hackmd.io/_uploads/Sk7wpQmUh.png)
![](https://hackmd.io/_uploads/B1jP67XLh.png)
實際的程式碼
```javascript=
// 宣告全域變數
let enemies = []; //敵人的陣列，生成的敵軍會在這裡

// 儲存圖片物件的變數
let enemyImg;
let backgroundImg;

// 儲存音效物件的變數
let bgMusic;
let insectDead;

// 追蹤生成敵人的時間（毫秒）
let enemyTimer = 0;

function preload() {
  // 預載入圖片
  backgroundImg = loadImage('image/background.png');
  enemyImg = loadImage('image/insect.png');
  bgMusic = loadSound('music/space_bgm.mp3');
  insectDead = loadSound('music/insect_dead.mp3');
}

function setup() {
  // 設置畫布
  createCanvas(600, 800);
  enemyTimer = millis();
  bgMusic.loop();
}

function draw() {
  // 繪製遊戲元素
  background(backgroundImg);

  // 每1.5秒生成敵人
  if (millis() - enemyTimer > 1500) {
    let enemy = new Enemy();
    // 每隔 1.5 秒生成一個敵人物件並將其存入 enemies 陣列
    enemies.push(enemy);
    enemyTimer = millis();
  }

  // 移動並顯示敵人
  for (let i = enemies.length - 1; i >= 0; i--) {
    let enemy = enemies[i];
    enemy.move();
    enemy.display();
  }
}

function mousePressed() {
  // 檢查是否點擊到敵人並使用滑鼠左鍵
  if (mouseButton === LEFT) {
    for (let i = enemies.length - 1; i >= 0; i--) {
      let enemy = enemies[i];
      if (mouseX > enemy.x && mouseX < enemy.x + 100 && mouseY > enemy.y && mouseY < enemy.y + 104) {
        insectDead.play(); //子彈射到敵人播放爆炸音效
        enemies.splice(i, 1);
      }
    }
  }
}

class Enemy {
  constructor() {
    this.x = random(50, width - 70); // 設定敵人的 x 座標為在一定範圍內的隨機數值
    this.y = 0; // 設定敵人的 y 座標為 0，即位於畫面上方
    this.speed = random(2, 4); // 設定敵人的速度為在一定範圍內的隨機數值
  }

  move() {
    this.y += this.speed; // 讓敵人往下移動，y 座標加上速度值
  }

  display() {
    image(enemyImg, this.x, this.y, 100, 104);
    // 顯示敵人圖片，設定 x 和 y 座標，寬度和高度
  }
}
```

---

## 發射子彈
![](https://hackmd.io/_uploads/SySHW4mIn.png)
實際的程式碼
```javascript=
// 宣告全域變數
let bullets = []; // 子彈的陣列，相當於彈藥夾

// 儲存圖片物件的變數
let playerImg;
let bulletImg;
let backgroundImg;

// 儲存音效物件的變數
let bgMusic;
let shootSound;

function preload() {
  // 預載入圖片
  backgroundImg = loadImage('image/background.png');
  playerImg = loadImage('image/spaceship.png');
  bulletImg = loadImage('image/bullet.png');
  bgMusic = loadSound('music/space_bgm.mp3');
  shootSound = loadSound('music/shoot.mp3');
}

let player;

function setup() {
  // 設置畫布
  createCanvas(600, 800);
  player = new Player(); // 創建一個 Player 物件並將其存入 player 變數
  bgMusic.loop(); // 使用 loop() 開始無限循環播放背景音樂
}

function draw() {
  // 繪製遊戲元素
  background(backgroundImg); // 括號內放入背景圖片

  // 移動並顯示玩家
  player.move();
  player.display();

  // 移動並顯示子彈
  for (let i = bullets.length - 1; i >= 0; i--) {
    let bullet = bullets[i];
    bullet.move();
    bullet.display();

    // 檢查子彈是否超出畫面，若是則從陣列中刪除該子彈
    if (bullet.y < 0) {
      bullets.splice(i, 1);
    }
  }
}

function keyPressed() {
  // 按下空白鍵時射擊子彈
  if (keyCode === 32) {
    shootSound.play(); // 播放射擊音效並創建一個子彈物件
    let bullet = new Bullet(player.x + 60, player.y); // 將其存入 bullets 陣列
    bullets.push(bullet);
  }

  // 使用方向鍵或 WASD 鍵移動玩家
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    player.setDirection('left', true);
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    player.setDirection('right', true);
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    player.setDirection('up', true);
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.setDirection('down', true);
  }
}

function keyReleased() {
  // 當方向鍵或 WASD 鍵被釋放時停止移動玩家
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    player.setDirection('left', false);
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    player.setDirection('right', false);
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    player.setDirection('up', false);
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.setDirection('down', false);
  }
}

class Bullet {
  constructor(x, y) {
    this.x = x; // 設定子彈的 x 座標為玩家的 x 座標
    this.y = y; // 設定子彈的 y 座標為玩家的 y 座標
    this.speed = 6; // 設定子彈的速度為 6
  }

  move() {
    this.y -= this.speed; // 讓子彈往上移動，y 座標減去速度值
  }

  display() {
    image(bulletImg, this.x, this.y, 10, 30);
    // 顯示子彈圖片，設定 x 和 y 座標，寬度和高度
  }
}

class Player {
  constructor() {
    this.x = width / 2; // 設定玩家的 x 座標為畫面寬度的一半，將玩家置中
    this.y = height - 50; // 設定玩家的 y 座標為畫面高度減去 50，即位於畫面下方
    this.speed = 8; // 設定玩家的移動速度
    this.direction = {
      left: false,
      right: false,
      up: false,
      down: false,
    };
  }

  setDirection(direction, value) {
    // 設定移動方向狀態
    this.direction[direction] = value;
  }

  move() {
    if (this.direction.left) {
      this.x -= this.speed; // 若向左移動的方向為真，將 x 座標減去速度值
    }
    if (this.direction.right) {
      this.x += this.speed; // 若向右移動的方向為真，將 x 座標加上速度值
    }
    if (this.direction.up) {
      this.y -= this.speed; // 若向上移動的方向為真，將 y 座標減去速度值
    }
    if (this.direction.down) {
      this.y += this.speed; // 若向下移動的方向為真，將 y 座標加上速度值
    }
    this.x = constrain(this.x, 0, width); // 限制 x 座標在畫面寬度的範圍內
    this.y = constrain(this.y, 0, height); // 限制 y 座標在畫面高度的範圍內
  }

  display() {
    image(playerImg, this.x, this.y, 130, 140);
    // 顯示玩家圖片，設定圖片的位置和大小
  }
}
```
---

## 物件消失不見
![](https://hackmd.io/_uploads/Skfl7V7Lh.png)
實際的程式碼
```javascript=
// 宣告全域變數

// 宣告陣列
let enemies = []; //敵人的陣列，生成的敵軍會在這裡
let allies = []; //友軍的陣列，生成的太空狗狗們會在這裡
let bullets = []; //子彈的陣列，相當於彈藥夾

// 儲存圖片物件的變數
let playerImg;
let enemyImg;
let allyImg;
let bulletImg;
let backgroundImg;

// 儲存音效物件的變數
let explosionSound;
let barkSound;
let shootSound;
let bgMusic;
let insectDead;

// 追蹤生成敵人和盟友的時間（毫秒）
let enemyTimer = 0;
let allyTimer = 0;

function preload() { // preload() 是一個預載入函式，用於在遊戲開始前加載圖片和音效
  // 預載入圖片和音效
  backgroundImg = loadImage('image/background.png');
  playerImg = loadImage('image/spaceship.png');
  enemyImg = loadImage('image/insect.png');
  allyImg = loadImage('image/space_puppy.png');
  bulletImg = loadImage('image/bullet.png');
  explosionSound = loadSound('music/enemy_died.mp3');
  barkSound = loadSound('music/bark.mp3');
  shootSound = loadSound('music/shoot.mp3');
  insectDead = loadSound('music/insect_dead.mp3');
  bgMusic = loadSound('music/space_bgm.mp3');
}

function setup() { // setup() 是設置函式，用於初始化遊戲
  // 設置畫布
  createCanvas(600, 800);
  player = new Player(); // 創建一個 Player 物件並將其存入 player 變數
  allyTimer = millis(); // 將 allyTimer 設置為目前的時間，用於追蹤生成盟友的時間
  enemyTimer = millis();
  startTime = millis();
  bgMusic.loop(); // 使用 loop() 開始無限循環播放背景音樂
}

function draw() { // draw() 是繪製函式，用於繪製遊戲畫面
  // 繪製遊戲元素
  background(backgroundImg); //括號內放入背景圖片

  // 移動並顯示玩家
  player.move();
  player.display();

  // 每1.5秒生成敵人
  if (millis() - enemyTimer > 1500) {
    let enemy = new Enemy();
    // 每隔 1.5 秒生成一個敵人物件並將其存入 enemies 陣列
    enemies.push(enemy);
    enemyTimer = millis();
  }

  // 每2.5秒生成盟友
  if (millis() - allyTimer > 2500) {
    let ally = new Ally();
    // 每隔 2.5 秒生成一個盟友物件並將其存入 allies 陣列
    allies.push(ally);
    allyTimer = millis();
  }

  // 移動並顯示敵人
  for (let enemy of enemies) {
    enemy.move();
    enemy.display();

    // 檢查敵人是否與子彈碰撞
    for (let bullet of bullets) {
      if (enemy.hits(bullet)) {
        explosionSound.play(); //子彈射到敵人播放爆炸音效
        enemies.splice(enemies.indexOf(enemy), 1); // 將敵人從陣列中移除一個
        bullets.splice(bullets.indexOf(bullet), 1); // 將子彈從陣列中移除一個
        break;
      }
    }

    // 檢查敵人是否碰瓷玩家
    if (enemy.hits(player)) {
      insectDead.play();
      enemies.splice(enemies.indexOf(enemy), 1); // 碰瓷完敵人馬上肇事逃逸
    }

    // 檢查敵人是否觸碰到畫面底部
    if (enemy.y >= height) {
      insectDead.play();
      enemies.splice(enemies.indexOf(enemy), 1);
    }
  }

  // 移動並顯示盟友
  for (let ally of allies) {
    ally.move();
    ally.display();

    // 檢查狗狗是否與子彈碰撞
    for (let bullet of bullets) {
      if (ally.hits(bullet)) {
        barkSound.play(); // 狗狗不開心發出汪汪叫聲
        allies.splice(allies.indexOf(ally), 1); // 狗狗退場一隻
        bullets.splice(bullets.indexOf(bullet), 1); // 子彈沒收一顆
      }
    }
  }

  // 移動並顯示子彈
  for (let bullet of bullets) {
    bullet.move();
    bullet.display();
  }
}

function keyPressed() { // keyPressed() 是按鍵按下事件的處理函式
  // 按下空白鍵時射擊子彈
  if (keyCode === 32) { // 如果按下的是空白鍵 (keyCode 32)
    shootSound.play(); // 播放射擊音效並創建一個子彈物件
    let bullet = new Bullet(player.x, player.y); // 將其存入 bullets 陣列
    bullets.push(bullet);
  }

  // 使用方向鍵或 WASD 鍵移動玩家
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    player.moveLeft();
    // 如果按下的是左方向鍵或 A 鍵 (keyCode 65)，則移動玩家向左
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    player.moveRight();
    // 如果按下的是右方向鍵或 D 鍵 (keyCode 68)，則移動玩家向右
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    player.moveUp();
    // 如果按下的是上方向鍵或 W 鍵 (keyCode 87)，則移動玩家向上
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.moveDown();
    // 如果按下的是下方向鍵或 S 鍵 (keyCode 83)，則移動玩家向下
  }
}

function keyReleased() { // keyReleased() 是按鍵釋放事件的處理函式
  // 當方向鍵或 WASD 鍵被釋放時停止移動玩家
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    player.stopMoving("left");
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    player.stopMoving("right");
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    player.stopMoving("up");
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.stopMoving("down");
  }
}
```

---

## 計算得分
![](https://hackmd.io/_uploads/HkRJNE7Lh.png)
實際的程式碼
```javascript=
// 宣告全域變數

// 宣告陣列
let enemies = []; //敵人的陣列，生成的敵軍會在這裡
let allies = []; //友軍的陣列，生成的太空狗狗們會在這裡
let bullets = []; //子彈的陣列，相當於彈藥夾

// 計分
let score = 50; // 為了不讓玩家死太快，初始分數設定為50

// 儲存圖片物件的變數
let playerImg;
let enemyImg;
let allyImg;
let bulletImg;
let backgroundImg;

// 儲存音效物件的變數
let explosionSound;
let barkSound;
let shootSound;
let bgMusic;
let insectDead;

// 追蹤生成敵人和盟友的時間（毫秒）
let enemyTimer = 0;
let allyTimer = 0;

function preload() { // preload() 是一個預載入函式，用於在遊戲開始前加載圖片和音效
  // 預載入圖片和音效
  backgroundImg = loadImage('image/background.png');
  playerImg = loadImage('image/spaceship.png');
  enemyImg = loadImage('image/insect.png');
  allyImg = loadImage('image/space_puppy.png');
  bulletImg = loadImage('image/bullet.png');
  explosionSound = loadSound('music/enemy_died.mp3');
  barkSound = loadSound('music/bark.mp3');
  shootSound = loadSound('music/shoot.mp3');
  insectDead = loadSound('music/insect_dead.mp3');
  bgMusic = loadSound('music/space_bgm.mp3');
}

function setup() { // setup() 是設置函式，用於初始化遊戲
  // 設置畫布
  createCanvas(600, 800);
  player = new Player(); // 創建一個 Player 物件並將其存入 player 變數
  allyTimer = millis(); // 將 allyTimer 設置為目前的時間，用於追蹤生成盟友的時間
  enemyTimer = millis();
  startTime = millis();
  bgMusic.loop(); // 使用 loop() 開始無限循環播放背景音樂
}

function draw() { // draw() 是繪製函式，用於繪製遊戲畫面
  // 繪製遊戲元素
  background(backgroundImg); //括號內放入背景圖片

  // 移動並顯示玩家
  player.move();
  player.display();

  // 每1.5秒生成敵人
  if (millis() - enemyTimer > 1500) {
    let enemy = new Enemy();
    // 每隔 1.5 秒生成一個敵人物件並將其存入 enemies 陣列
    enemies.push(enemy);
    enemyTimer = millis();
  }

  // 每2.5秒生成盟友
  if (millis() - allyTimer > 2500) {
    let ally = new Ally();
    // 每隔 2.5 秒生成一個盟友物件並將其存入 allies 陣列
    allies.push(ally);
    allyTimer = millis();
  }

  // 移動並顯示敵人
  for (let enemy of enemies) {
    enemy.move();
    enemy.display();

    // 檢查敵人是否與子彈碰撞
    for (let bullet of bullets) {
      if (enemy.hits(bullet)) {
        explosionSound.play(); //子彈射到敵人播放爆炸音效
        score += 10; // 子彈射到敵人+10分
        enemies.splice(enemies.indexOf(enemy), 1); // 將敵人從陣列中移除一個
        bullets.splice(bullets.indexOf(bullet), 1); // 將子彈從陣列中移除一個
        break;
      }
    }

    // 檢查敵人是否碰瓷玩家
    if (enemy.hits(player)) {
      insectDead.play();
      score -= 5; // 玩家被碰瓷-5分
      enemies.splice(enemies.indexOf(enemy), 1); // 碰瓷完敵人馬上肇事逃逸
    }

    // 檢查敵人是否觸碰到畫面底部
    if (enemy.y >= height) {
      insectDead.play();
      score -= 10; // 敵人成功逃跑-10分
      enemies.splice(enemies.indexOf(enemy), 1);
    }
  }

  // 移動並顯示盟友
  for (let ally of allies) {
    ally.move();
    ally.display();

    // 檢查狗狗是否與子彈碰撞
    for (let bullet of bullets) {
      if (ally.hits(bullet)) {
        barkSound.play(); // 狗狗不開心發出汪汪叫聲
        score -= 5; // 誤傷友軍-5分
        allies.splice(allies.indexOf(ally), 1); // 狗狗退場一隻
        bullets.splice(bullets.indexOf(bullet), 1); // 子彈沒收一顆
      }
    }
  }

  // 移動並顯示子彈
  for (let bullet of bullets) {
    bullet.move();
    bullet.display();
  }

  // 顯示分數
  textSize(20);
  fill(255);
  text('Score: ' + score, 10, 30);
}

function keyPressed() { // keyPressed() 是按鍵按下事件的處理函式
  // 按下空白鍵時射擊子彈
  if (keyCode === 32) { // 如果按下的是空白鍵 (keyCode 32)
    shootSound.play(); // 播放射擊音效並創建一個子彈物件
    let bullet = new Bullet(player.x, player.y); // 將其存入 bullets 陣列
    bullets.push(bullet);
  }

  // 使用方向鍵或 WASD 鍵移動玩家
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    player.moveLeft();
    // 如果按下的是左方向鍵或 A 鍵 (keyCode 65)，則移動玩家向左
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    player.moveRight();
    // 如果按下的是右方向鍵或 D 鍵 (keyCode 68)，則移動玩家向右
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    player.moveUp();
    // 如果按下的是上方向鍵或 W 鍵 (keyCode 87)，則移動玩家向上
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.moveDown();
    // 如果按下的是下方向鍵或 S 鍵 (keyCode 83)，則移動玩家向下
  }
}

function keyReleased() { // keyReleased() 是按鍵釋放事件的處理函式
  // 當方向鍵或 WASD 鍵被釋放時停止移動玩家
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    player.stopMoving("left");
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    player.stopMoving("right");
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    player.stopMoving("up");
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.stopMoving("down");
  }
}
```

---

## 結束後顯示畫面
![](https://hackmd.io/_uploads/Sy_PEEXL2.png)
實際的程式碼
```javascript=
// 宣告全域變數

// 宣告陣列
let enemies = []; //敵人的陣列，生成的敵軍會在這裡
let allies = []; //友軍的陣列，生成的太空狗狗們會在這裡
let bullets = []; //子彈的陣列，相當於彈藥夾

// 計分
let score = 50; // 為了不讓玩家死太快，初始分數設定為50

// 儲存圖片物件的變數
let playerImg;
let enemyImg;
let allyImg;
let bulletImg;
let backgroundImg;

// 儲存音效物件的變數
let explosionSound;
let barkSound;
let shootSound;
let bgMusic;
let insectDead;

// 追蹤生成敵人和盟友的時間（毫秒）
let enemyTimer = 0;
let allyTimer = 0;

// 追蹤遊戲開始和結束時間的變數（毫秒）
let startTime;
let endTime;

function preload() { // preload() 是一個預載入函式，用於在遊戲開始前加載圖片和音效
  // 預載入圖片和音效
  backgroundImg = loadImage('image/background.png');
  playerImg = loadImage('image/spaceship.png');
  enemyImg = loadImage('image/insect.png');
  allyImg = loadImage('image/space_puppy.png');
  bulletImg = loadImage('image/bullet.png');
  explosionSound = loadSound('music/enemy_died.mp3');
  barkSound = loadSound('music/bark.mp3');
  shootSound = loadSound('music/shoot.mp3');
  insectDead = loadSound('music/insect_dead.mp3');
  bgMusic = loadSound('music/space_bgm.mp3');
}

function setup() { // setup() 是設置函式，用於初始化遊戲
  // 設置畫布
  createCanvas(600, 800);
  player = new Player(); // 創建一個 Player 物件並將其存入 player 變數
  allyTimer = millis(); // 將 allyTimer 設置為目前的時間，用於追蹤生成盟友的時間
  enemyTimer = millis();
  startTime = millis();
  bgMusic.loop(); // 使用 loop() 開始無限循環播放背景音樂
}

function draw() { // draw() 是繪製函式，用於繪製遊戲畫面
  // 繪製遊戲元素
  background(backgroundImg); //括號內放入背景圖片

  // 移動並顯示玩家
  player.move();
  player.display();

  // 每1.5秒生成敵人
  if (millis() - enemyTimer > 1500) {
    let enemy = new Enemy();
    // 每隔 1.5 秒生成一個敵人物件並將其存入 enemies 陣列
    enemies.push(enemy);
    enemyTimer = millis();
  }

  // 每2.5秒生成盟友
  if (millis() - allyTimer > 2500) {
    let ally = new Ally();
    // 每隔 2.5 秒生成一個盟友物件並將其存入 allies 陣列
    allies.push(ally);
    allyTimer = millis();
  }

  // 移動並顯示敵人
  for (let enemy of enemies) {
    enemy.move();
    enemy.display();

    // 檢查敵人是否與子彈碰撞
    for (let bullet of bullets) {
      if (enemy.hits(bullet)) {
        explosionSound.play(); //子彈射到敵人播放爆炸音效
        score += 10; // 子彈射到敵人+10分
        enemies.splice(enemies.indexOf(enemy), 1); // 將敵人從陣列中移除一個
        bullets.splice(bullets.indexOf(bullet), 1); // 將子彈從陣列中移除一個
        break;
      }
    }

    // 檢查敵人是否碰瓷玩家
    if (enemy.hits(player)) {
      insectDead.play();
      score -= 5; // 玩家被碰瓷-5分
      enemies.splice(enemies.indexOf(enemy), 1); // 碰瓷完敵人馬上肇事逃逸
    }

    // 檢查敵人是否觸碰到畫面底部
    if (enemy.y >= height) {
      insectDead.play();
      score -= 10; // 敵人成功逃跑-10分
      enemies.splice(enemies.indexOf(enemy), 1);
    }
  }

  // 移動並顯示盟友
  for (let ally of allies) {
    ally.move();
    ally.display();

    // 檢查狗狗是否與子彈碰撞
    for (let bullet of bullets) {
      if (ally.hits(bullet)) {
        barkSound.play(); // 狗狗不開心發出汪汪叫聲
        score -= 5; // 誤傷友軍-5分
        allies.splice(allies.indexOf(ally), 1); // 狗狗退場一隻
        bullets.splice(bullets.indexOf(bullet), 1); // 子彈沒收一顆
      }
    }
  }

  // 移動並顯示子彈
  for (let bullet of bullets) {
    bullet.move();
    bullet.display();
  }

  // 顯示分數
  textSize(20);
  fill(255);
  text('Score: ' + score, 10, 30);

  // 檢查遊戲結束條件
  if (score <= 0) { // 當分數歸零時遊戲結束
    gameOver();
  }
}

function keyPressed() { // keyPressed() 是按鍵按下事件的處理函式
  // 按下空白鍵時射擊子彈
  if (keyCode === 32) { // 如果按下的是空白鍵 (keyCode 32)
    shootSound.play(); // 播放射擊音效並創建一個子彈物件
    let bullet = new Bullet(player.x, player.y); // 將其存入 bullets 陣列
    bullets.push(bullet);
  }

  // 使用方向鍵或 WASD 鍵移動玩家
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    player.moveLeft();
    // 如果按下的是左方向鍵或 A 鍵 (keyCode 65)，則移動玩家向左
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    player.moveRight();
    // 如果按下的是右方向鍵或 D 鍵 (keyCode 68)，則移動玩家向右
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    player.moveUp();
    // 如果按下的是上方向鍵或 W 鍵 (keyCode 87)，則移動玩家向上
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.moveDown();
    // 如果按下的是下方向鍵或 S 鍵 (keyCode 83)，則移動玩家向下
  }
}

function keyReleased() { // keyReleased() 是按鍵釋放事件的處理函式
  // 當方向鍵或 WASD 鍵被釋放時停止移動玩家
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    player.stopMoving("left");
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    player.stopMoving("right");
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    player.stopMoving("up");
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.stopMoving("down");
  }
}

function gameOver() {
  // gameOver() 是遊戲結束的處理函式
  endTime = millis();
  // 將目前的時間（以毫秒為單位）儲存到 endTime 變數中，用於計算存活時間
  let survivalTime = (endTime - startTime) / 1000;
  // 計算存活時間，將 endTime 減去 startTime，再除以 1000，得到以秒為單位的存活時間

  bgMusic.stop(); // 停止播放背景音樂
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  // 設定文字的大小為 50，填充顏色為白色，並設定文字對齊方式為置中
  text('GAME OVER', width / 2, height / 2);
  // 在畫布中央顯示 "GAME OVER" 文字，位置為畫布寬度的一半和高度的一半
  textSize(24);
  text('You survived for ' + floor(survivalTime / 60) + ' minutes and ' + floor(survivalTime % 60) + ' seconds', width / 2, height / 2 + 50);
  // 在畫布中央顯示存活時間的文字，使用 floor() 函式將存活時間的分鐘數和秒數取整，位置為畫布寬度的一半和高度的一半加上 50 像素
  noLoop();
  // 停止 draw() 函式的迴圈運行，即不再更新畫面
}
```


# 完整程式碼
## game.js

```javascript=
// 宣告全域變數

// 宣告陣列
let enemies = []; //敵人的陣列，生成的敵軍會在這裡
let allies = []; //友軍的陣列，生成的太空狗狗們會在這裡
let bullets = []; //子彈的陣列，相當於彈藥夾

// 計分
let score = 50; // 為了不讓玩家死太快，初始分數設定為50

// 儲存圖片物件的變數
let playerImg;
let enemyImg;
let allyImg;
let bulletImg;
let backgroundImg;

// 儲存音效物件的變數
let explosionSound;
let barkSound;
let shootSound;
let bgMusic;
let insectDead;

// 追蹤生成敵人和盟友的時間（毫秒）
let enemyTimer = 0;
let allyTimer = 0;

// 追蹤遊戲開始和結束時間的變數（毫秒）
let startTime;
let endTime;

function preload() { // preload() 是一個預載入函式，用於在遊戲開始前加載圖片和音效
  // 預載入圖片和音效
  backgroundImg = loadImage('image/background.png');
  playerImg = loadImage('image/spaceship.png');
  enemyImg = loadImage('image/insect.png');
  allyImg = loadImage('image/space_puppy.png');
  bulletImg = loadImage('image/bullet.png');
  explosionSound = loadSound('music/enemy_died.mp3');
  barkSound = loadSound('music/bark.mp3');
  shootSound = loadSound('music/shoot.mp3');
  insectDead = loadSound('music/insect_dead.mp3');
  bgMusic = loadSound('music/space_bgm.mp3');
}

function setup() { // setup() 是設置函式，用於初始化遊戲
  // 設置畫布
  createCanvas(600, 800);
  player = new Player(); // 創建一個 Player 物件並將其存入 player 變數
  allyTimer = millis(); // 將 allyTimer 設置為目前的時間，用於追蹤生成盟友的時間
  enemyTimer = millis();
  startTime = millis();
  bgMusic.loop(); // 使用 loop() 開始無限循環播放背景音樂
}

function draw() { // draw() 是繪製函式，用於繪製遊戲畫面
  // 繪製遊戲元素
  background(backgroundImg); //括號內放入背景圖片

  // 移動並顯示玩家
  player.move();
  player.display();

  // 每1.5秒生成敵人
  if (millis() - enemyTimer > 1500) {
    let enemy = new Enemy();
    // 每隔 1.5 秒生成一個敵人物件並將其存入 enemies 陣列
    enemies.push(enemy);
    enemyTimer = millis();
  }

  // 每2.5秒生成盟友
  if (millis() - allyTimer > 2500) {
    let ally = new Ally();
    // 每隔 2.5 秒生成一個盟友物件並將其存入 allies 陣列
    allies.push(ally);
    allyTimer = millis();
  }

  // 移動並顯示敵人
  for (let enemy of enemies) {
    enemy.move();
    enemy.display();

    // 檢查敵人是否與子彈碰撞
    for (let bullet of bullets) {
      if (enemy.hits(bullet)) {
        explosionSound.play(); //子彈射到敵人播放爆炸音效
        score += 10; // 子彈射到敵人+10分
        enemies.splice(enemies.indexOf(enemy), 1); // 將敵人從陣列中移除一個
        bullets.splice(bullets.indexOf(bullet), 1); // 將子彈從陣列中移除一個
        break;
      }
    }

    // 檢查敵人是否碰瓷玩家
    if (enemy.hits(player)) {
      insectDead.play();
      score -= 5; // 玩家被碰瓷-5分
      enemies.splice(enemies.indexOf(enemy), 1); // 碰瓷完敵人馬上肇事逃逸
    }

    // 檢查敵人是否觸碰到畫面底部
    if (enemy.y >= height) {
      insectDead.play();
      score -= 10; // 敵人成功逃跑-10分
      enemies.splice(enemies.indexOf(enemy), 1);
    }
  }

  // 移動並顯示盟友
  for (let ally of allies) {
    ally.move();
    ally.display();

    // 檢查狗狗是否與子彈碰撞
    for (let bullet of bullets) {
      if (ally.hits(bullet)) {
        barkSound.play(); // 狗狗不開心發出汪汪叫聲
        score -= 5; // 誤傷友軍-5分
        allies.splice(allies.indexOf(ally), 1); // 狗狗退場一隻
        bullets.splice(bullets.indexOf(bullet), 1); // 子彈沒收一顆
      }
    }
  }

  // 移動並顯示子彈
  for (let bullet of bullets) {
    bullet.move();
    bullet.display();
  }

  // 顯示分數
  textSize(20);
  fill(255);
  text('Score: ' + score, 10, 30);

  // 檢查遊戲結束條件
  if (score <= 0) { // 當分數歸零時遊戲結束
    gameOver();
  }
}

function keyPressed() { // keyPressed() 是按鍵按下事件的處理函式
  // 按下空白鍵時射擊子彈
  if (keyCode === 32) { // 如果按下的是空白鍵 (keyCode 32)
    shootSound.play(); // 播放射擊音效並創建一個子彈物件
    let bullet = new Bullet(player.x, player.y); // 將其存入 bullets 陣列
    bullets.push(bullet);
  }

  // 使用方向鍵或 WASD 鍵移動玩家
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    player.moveLeft();
    // 如果按下的是左方向鍵或 A 鍵 (keyCode 65)，則移動玩家向左
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    player.moveRight();
    // 如果按下的是右方向鍵或 D 鍵 (keyCode 68)，則移動玩家向右
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    player.moveUp();
    // 如果按下的是上方向鍵或 W 鍵 (keyCode 87)，則移動玩家向上
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.moveDown();
    // 如果按下的是下方向鍵或 S 鍵 (keyCode 83)，則移動玩家向下
  }
}

function keyReleased() { // keyReleased() 是按鍵釋放事件的處理函式
  // 當方向鍵或 WASD 鍵被釋放時停止移動玩家
  if (keyCode === LEFT_ARROW || keyCode === 65) {
    player.stopMoving("left");
  } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
    player.stopMoving("right");
  } else if (keyCode === UP_ARROW || keyCode === 87) {
    player.stopMoving("up");
  } else if (keyCode === DOWN_ARROW || keyCode === 83) {
    player.stopMoving("down");
  }
}

function gameOver() {
  // gameOver() 是遊戲結束的處理函式
  endTime = millis();
  // 將目前的時間（以毫秒為單位）儲存到 endTime 變數中，用於計算存活時間
  let survivalTime = (endTime - startTime) / 1000;
  // 計算存活時間，將 endTime 減去 startTime，再除以 1000，得到以秒為單位的存活時間

  bgMusic.stop(); // 停止播放背景音樂
  textSize(50);
  fill(255);
  textAlign(CENTER, CENTER);
  // 設定文字的大小為 50，填充顏色為白色，並設定文字對齊方式為置中
  text('GAME OVER', width / 2, height / 2);
  // 在畫布中央顯示 "GAME OVER" 文字，位置為畫布寬度的一半和高度的一半
  textSize(24);
  text('You survived for ' + floor(survivalTime / 60) + ' minutes and ' + floor(survivalTime % 60) + ' seconds', width / 2, height / 2 + 50);
  // 在畫布中央顯示存活時間的文字，使用 floor() 函式將存活時間的分鐘數和秒數取整，位置為畫布寬度的一半和高度的一半加上 50 像素
  noLoop();
  // 停止 draw() 函式的迴圈運行，即不再更新畫面
}
```

## Ally.js

```javascript=
class Ally { // class 定義了物件的屬性（資料）和方法（行為）
  constructor() { // 初始化物件的屬性
    this.x = random(50, width - 70); // 在畫布的指定範圍內隨機設定 x 座標
    this.y = 0; // 設定初始的 y 座標為 0
    this.speed = random(2, 4); // 隨機設定移動速度
  }

  move() { // 移動
    this.y += this.speed; // 根據速度更新 y 座標，使其向下移動
  }

  display() { // 顯示
    image(allyImg, this.x, this.y, 100, 100);
    // 顯示太空狗狗在指定座標位置，大小為 100x100 像素
  }

  hits(bullet) { // 碰撞判定方法
    let hit = collideRectRect( // collideRectRect() 函式判斷盟友和子彈是否發生碰撞
      this.x, // 第一個矩形（太空狗狗）的左上角 x 座標
      this.y, // 第一個矩形（太空狗狗）的左上角 y 座標
      100, // 第一個矩形的寬度
      100, // 第一個矩形的高度
      bullet.x, // 第二個矩形（子彈）的左上角 x 座標
      bullet.y, // 第二個矩形（子彈）的左上角 y 座標
      10, // 第二個矩形的寬度
      30 // 第二個矩形的高度
    );
    return hit; // 判斷盟友和子彈是否發生碰撞，並回傳結果
  }
}
```

## Bullet.js

```javascript=
class Bullet {
  constructor(x, y) {
    this.x = x + 20;  // 設定子彈的 x 座標為玩家的 x 座標加上 20
    this.y = y - 20;  // 設定子彈的 y 座標為玩家的 y 座標減去 20
    this.speed = 6;  // 設定子彈的速度為 6
  }

  move() {
    this.y -= this.speed; // 讓子彈往上移動，y 座標減去速度值
  }

  display() {
    image(bulletImg, this.x + 40, this.y, 10, 30);
     // 顯示子彈圖片，設定 x 和 y 座標偏移量，寬度和高度
  }
}

```

## Enemy.js

```javascript=
class Enemy {
  constructor() {
    this.x = random(50, width - 70); // 設定敵人的 x 座標為在一定範圍內的隨機數值
    this.y = 0; // 設定敵人的 y 座標為 0，即位於畫面上方
    this.speed = random(2, 4); // 設定敵人的速度為在一定範圍內的隨機數值
  }

  move() {
    this.y += this.speed; // 讓敵人往下移動，y 座標加上速度值
  }

  display() {
    image(enemyImg, this.x, this.y, 100, 104);
     // 顯示敵人圖片，設定 x 和 y 座標，寬度和高度
  }

  hits(bullet) {
      let hit = collideRectRect(
      this.x - 25, // 設定敵人碰撞偵測的矩形左上角 x 座標，將 x 值減去 25
      this.y, // 設定敵人碰撞偵測的矩形左上角 y 座標
      enemyImg.width, // 設定敵人碰撞偵測的矩形寬度，使用敵人圖片的寬度
      enemyImg.height, // 設定敵人碰撞偵測的矩形高度，使用敵人圖片的高度
      bullet.x, // 設定子彈碰撞偵測的矩形左上角 x 座標
      bullet.y, // 設定子彈碰撞偵測的矩形左上角 y 座標
      bulletImg.width, // 設定子彈碰撞偵測的矩形寬度，使用子彈圖片的寬度
      bulletImg.height // 設定子彈碰撞偵測的矩形高度，使用子彈圖片的高度
    );
    return hit; // 回傳碰撞偵測結果
  }
}
```

## Player.js

```javascript=
class Player {
  constructor() {
    this.x = width / 2; // 設定玩家的 x 座標為畫面寬度的一半，將玩家置中
    this.y = height - 50; // 設定玩家的 y 座標為畫面高度減去 50，即位於畫面下方
    this.speed = 8; // 設定玩家的移動速度
    this.direction = {
      left: false,
      right: false,
      up: false,
      down: false
       // 設定玩家的移動方向，初始值皆為 false
    };
  }

  move() {
    if (this.direction.left) {
      this.x -= this.speed; // 若向左移動的方向為真，將 x 座標減去速度值
    }
    if (this.direction.right) {
      this.x += this.speed; // 若向右移動的方向為真，將 x 座標加上速度值
    }
    if (this.direction.up) {
      this.y -= this.speed; // 若向上移動的方向為真，將 y 座標減去速度值
    }
    if (this.direction.down) {
      this.y += this.speed; // 若向下移動的方向為真，將 y 座標加上速度值
    }
    this.x = constrain(this.x, 0, width); // 限制 x 座標在畫面寬度的範圍內
    this.y = constrain(this.y, 0, height); // 限制 y 座標在畫面高度的範圍內
  }

  moveLeft() {
    this.direction.left = true; // 設定向左移動的方向為真
  }

  moveRight() {
    this.direction.right = true; // 設定向右移動的方向為真
  }

  moveUp() {
    this.direction.up = true; // 設定向上移動的方向為真
  }

  moveDown() {
    this.direction.down = true; // 設定向下移動的方向為真
  }

  stopMoving(direction) {
    if (direction === "left") {
      this.direction.left = false; // 停止向左移動
    }
    if (direction === "right") {
      this.direction.right = false; // 停止向右移動
    }
    if (direction === "up") {
      this.direction.up = false; // 停止向上移動
    }
    if (direction === "down") {
      this.direction.down = false; // 停止向下移動
    }
  }

  display() {
    image(playerImg, this.x, this.y, 130, 140); // 顯示玩家圖片，設定圖片的位置和大小
  }
}
```

## index.html

```html=
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Space Pest Control Expert and their Space Dog</title>

    <link rel="stylesheet" type="text/css" href="style.css">

    <script src="libraries/p5.min.js"></script>
    <script src="libraries/p5.sound.min.js"></script>
    <script src="libraries/p5.collide2d.min.js"></script>
  </head>

  <body>
    <script src="game.js"></script>
    <script src="Player.js"></script>
    <script src="Enemy.js"></script>
    <script src="Ally.js"></script>
    <script src="Bullet.js"></script>
  </body>
</html>
```

## style.css

```css=
html, body {
  margin: 0;
  padding: 0;
}

canvas {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
