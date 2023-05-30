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