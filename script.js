import {direction,kakikae} from "./buttonscript.js"
class BackGround{
    constructor(level){
        this.mx = 0;
        this.my = 0;
        this.w = 50;
        this.h = 50;
        this.w1 = 0
        this.h1 = 0
        this.w2 = 16
        this.h2 = 12
        this.grass = new Image();
        this.mt = new Image();
        this.sea = new Image();
        this.table = new Image();
        this.house = new Image();
        this.noHouse = new Image();
        this.inHouse = new Image();
        this.grass.src = 'img/green.png';
        this.mt.src = 'img/mount.png';
        this.sea.src = 'img/sea.png';
        this.noHouse.src = 'img/Nhouse.png'
        this.inHouse.src = 'img/Khouse.png'
        this.tiles=[this.grass,this.mt,this.sea,this.noHouse,this.inHouse];
        this.firstList = [["1","1","1","1","0","0","0","0","0","0","0","2","2","2","2","2"],
                     ["1","1","1","0","0","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","1","1","1","1","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","1","1","1","1","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","0","0","0","0","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","0","0","1","0","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","0","0","1","0","0","0","0","0","0","0","0","0","2","2","2"],
                     ["1","0","0","1","0","0","0","0","0","0","0","0","0","2","2","2"],
                     ["1","1","1","1","0","0","0","0","0","0","0","0","0","2","2","2"],
                     ["1","1","0","0","0","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","1","1","1","0","0","0","0","0","0","0","0","0","2","2","2"],
                     ["1","1","0","0","0","0","0","0","0","0","0","0","0","2","2","2"],
                     ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
                    ];
        this.secondList = [["1","1","1","1","1","1","1","1","1","0","0","0","0","0","0","0"],
                    ["1","1","1","0","3","1","1","1","1","0","0","0","0","0","0","0"],
                    ["1","1","1","0","3","0","0","0","0","0","0","0","0","0","0","0"],
                    ["1","1","0","0","1","0","0","1","0","0","0","0","0","0","0","0"],
                    ["1","0","0","0","0","0","0","1","1","0","1","1","0","0","0","0"],
                    ["1","0","0","0","0","0","0","1","1","0","1","1","0","0","0","0"],
                    ["1","1","1","0","1","0","0","1","1","0","0","1","0","0","0","0"],
                    ["1","1","0","0","1","0","0","1","1","0","0","1","0","0","0","0"],
                    ["1","0","0","0","1","0","0","1","1","0","1","0","0","0","0","0"],
                    ["1","0","1","0","1","0","0","1","1","0","1","1","0","0","0","1"],
                    ["1","0","0","0","0","0","0","0","0","0","1","1","1","1","0","1"],
                    ["1","1","1","1","1","1","1","1","1","1","1","1","1","1","3","1"],
                    ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
                   ];
        this.lists = [this.firstList,this.secondList]
        this.list = this.lists[level];
    }
    draw(ctx){
        for (  var i = 0;  i < 12;  i++ ) {
            for (var j = 0; j < 16; j++) {
                this.mapnum = parseInt(this.list[i][j]);
                ctx.drawImage(this.tiles[this.mapnum], 0, 0, this.w, this.h, this.mx, this.my, this.w, this.h );
                this.mx += 50;
            }
            this.mx = 0;
            this.my += 50;
        }

        this.my = 0;
    }


}
class Player{
    constructor(){
        this.x = 400;
        this.y = 100;
        this.w = 50;
        this.h = 50;
        this.hp = 1;
        this.team = "味方"
        this.ply = new Image();
        this.ply.src = 'img/man1.png'
    }
    draw(ctx){
        ctx.globalAlpha = this.hp;
        ctx.drawImage(this.ply, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h );
        ctx.globalAlpha = 1;
    }
}
class Kobito{
    constructor(kx,ky,name){
        this.x = kx;
        this.y = ky;
        this.w = 25;
        this.h = 25;
        this.name = name
        this.team = "小人"
        this.tick = 0;
        this.deathTick = 0;
        this.isDeath = 0;
        this.hp = 1;
        this.kbt = new Image();
        this.kbt.src = 'img/kobito2.png'
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    update(P, enys, B,stones) {
        this.tick += 1;
        if (this.tick >= 10) {
            this.s = this.getRandomInt(4);
    
            if (this.s == 0) {
                this.x1 = 25;
                this.y1 = 0;
            } else if (this.s == 1) {
                this.x1 = -25;
                this.y1 = 0;
            } else if (this.s == 2) {
                this.x1 = 0;
                this.y1 = -25;
            } else if (this.s == 3) {
                this.x1 = 0;
                this.y1 = 25;
            }
            this.newx = this.x + this.x1;
            this.newy = this.y + this.y1;
            if (this.newx < B.w1 || this.newx >= B.w2 * 50 || this.newy < B.h1 || this.newy >= B.h2 * 50){
                return;
            }
            this.tilex = Math.floor(this.newx/50)
            this.tiley = Math.floor(this.newy/50)
            let tileValue = B.list[this.tiley][this.tilex];
            if (tileValue !== "0") {
                return;
            }
            this.ksx = Math.floor(this.newx/50)
            this.ksy = Math.floor(this.newy/50)
            this.sx = this.ksx*50
            this.sy = this.ksy*50
            //console.log(this.sx,this.sy,this.ksx,this.ksy)
            if (this.sx === P.x && this.sy === P.y) {
                return;
            }
            for (let eny of enys) {
                if (this.x == eny.x && this.y == eny.y){
                    this.hp -= 0.1;
                    if (this.hp < 0){
                        this.x = 50;
                        this.y = 0;
                    }
                }
                if (eny !== this && this.sx === eny.x && this.sy === eny.y) {
                    return;
                }
            }
            for (let stone of stones){
                if (stone !== this && this.sx === stone.x && this.sy === stone.y) {
                    return;
                }
            }
            this.x = this.newx;
            this.y = this.newy;
            this.tick = 0;
        }
    }
    draw(ctx){
        
        ctx.globalAlpha = this.hp;
        ctx.drawImage(this.kbt, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h );
        ctx.globalAlpha = 1;
    }
}
class Enemy{
    constructor(ex,ey,name){
        this.x = ex;
        this.y = ey;
        this.w = 50;
        this.h = 50;
        this.hp = 1;
        this.name = name
        this.team = "敵"
        this.tick = 0;
        this.deathTick = 0;
        this.isReturn = 0;
        this.isDead = 0;
        this.eny = new Image();
        this.eny.src = 'img/bug1.png'
        this.blockedCount = 0
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    update(P,enys,B,stones){
        this.tick += 1; 
        if (this.tick >= 20) { //20ティック毎で一度敵を動かすようにしている
            this.s = this.getRandomInt(4);//ランダム 4の場合0~3を数える
            let dirs = [{dx: 50, dy:0},//上下左右の索敵範囲プログラム
                        {dx: -50, dy: 0},
                        {dx: 0, dy: 50},
                        {dx: 0, dy: -50}]
            this.blockedCount = 0
            this.slip_check(P,enys,B,stones)
            for (let dir of dirs){ //上下左右1方向ずつ確認
                this.death_check(P,enys,B,stones,dir)//索敵(4方向の索敵)
            }
            console.log(this.name,this.blockedCount)
            this.progress()//経過(死亡経過、敵の動く経過)
            this.tick = 0;
        }
    }
    slip_check(P,enys,B,stones){
        // if (this.s == 0){
        //     this.x1 = 0;
        //     this.y1 = 0;
        // }
        if (this.s == 0){
            this.x1 = 50;
            this.y1 = 0;
        }
        if (this.s == 1){
            this.x1 = -50;
            this.y1 = 0;
        }
        if (this.s == 2){
            this.x1 = 0;
            this.y1 = 50;
        }
        if (this.s == 3){
            this.x1 = 0;
            this.y1 = -50;
        }
        this.newx = this.x + this.x1
        this.newy = this.y + this.y1 
        console.log(this.s)
        if (this.newx < B.w1 || this.newx >= B.w2 * 50 || this.newy < B.h1 || this.newy >= B.h2 * 50){
            return;
        }
        //console.log(this.name,this.newx/50,this.newy/50)
        let tileValue = B.list[this.newy / 50][this.newx / 50];
        if (tileValue !== "0") {
            return;
        }
        if (this.newx === P.x && this.newy === P.y) {
            return;
        }
        for (let eny of enys) {
            if (eny !== this && this.newx === eny.x && this.newy === eny.y) {
                return;
            }
        }
        for (let stone of stones){
            if (stone !== this && this.newx === stone.x && this.newy === stone.y) {
                return;
            }
        }
        this.x = this.newx;
        this.y = this.newy;
    }
    death_check(P, enys, B,stones,dir) { //索敵
        this.newx = this.x + dir.dx;
        this.newy = this.y + dir.dy;
        if (this.newx < B.w1 || this.newx >= B.w2 * 50 || this.newy < B.h1 || this.newy >= B.h2 * 50){//画面の端か確認
            this.blockedCount += 1;
            return

        }
        //console.log(this.name,this.newx/50,this.newy/50)
        let tileValue = B.list[this.newy / 50][this.newx / 50]; //上下左右のタイルを確認
        if (tileValue !== "0") {
            this.blockedCount += 1;
            return
        }

        if (this.newx === P.x && this.newy === P.y) { //上下左右にプレイヤーがいるか確認
            this.blockedCount += 1;
            P.hp -= 0.2
            if (P.hp < 0){//プレイヤーが死んだか(Enemyに殺されたか)
                P.x = 0
                P.y = 50
            }
            return
        }

        for (let eny of enys) { //上下左右に味方がいるか確認(但し圧されていると死ぬ)
            if (eny !== this && this.newx === eny.x && this.newy === eny.y) {
                this.blockedCount += 1;
                return
            }
        }
        for (let stone of stones){//上下左右に石があるか確認
            if (stone !== this && this.newx === stone.x && this.newy === stone.y) {
                this.blockedCount += 1;
                return
            }
        }
    }
    progress(){
        if (this.blockedCount >= 4) { //上下左右ブロックが4以上のカウントを持っていた場合
            this.deathTick += 1//死亡するまでの経過tickが流れる
            this.blockedCount = 0
        // }else{//それ以外
        //     this.blockedCount = 0
        //     this.deathTick = 0
        }
        //console.log("progess",this.blockedCount) 
        if (this.deathTick > 0){//死亡までの経過が200ティック超えた場合体力がなくなる
            if (this.hp >= 0.05){
                this.hp -= 0.01
            }
        }
        if (this.deathTick > 100){//経過が500tickを超えた場合敵は死ぬ(左上に飛ばされる)
            this.x = 50
            this.y = 50
            this.hp = 1
            this.isDead = 1
            return
        }
        if (this.s == 0) {//ランダムが1なら
            this.x1 = 50;
            this.y1 = 0;
        } else if (this.s == 1) {//ランダムが2なら
            this.x1 = -50;
            this.y1 = 0;
        } else if (this.s == 2) {//ランダムが3なら
            this.x1 = 0;
            this.y1 = -50;
        } else if (this.s == 3) {//ランダムが4なら
            this.x1 = 0;
            this.y1 = 50;
        }
        //console.log(this.name,this.x,this.x1,this.y,this.y1)
    }
    draw(ctx){
        ctx.globalAlpha = this.hp;
        ctx.drawImage(this.eny, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h );
        ctx.globalAlpha = 1;
    }
}
class Stone{
    constructor(sx,sy){
        this.x = sx;
        this.y = sy;
        this.w = 50;
        this.h = 50;
        this.team = "石"
        this.stone = new Image();
        this.stone.src = 'img/stone.png'
    }
    draw(ctx){
        ctx.drawImage(this.stone, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h );
    }
}
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
function main() {
    let level = 0
    let P = new Player();
    let B = new BackGround(level); 
    let E1 = new Enemy(150,450,"sayao");
    let E2 = new Enemy(200,450,"kabao");
    let E3 = new Enemy(250,450,"tanaka");
    let S1 = new Stone(250,150);
    let S2 = new Stone(300,250);
    let S3 = new Stone(250,300);
    let S4 = new Stone(300,450);
    let S5 = new Stone(600,350);
    let S6 = new Stone(400,400);
    let S7 = new Stone(200,300);
    let K1 = new Kobito(200,300,"satou");
    let K2 = new Kobito(600,100,"sio");
    let K3 = new Kobito(300,400,"pawa-");
    let keyboard_Direction = 0
    //let enys = [E1,E2,E3]
    let enys = [E1,E2]
    let stones = [S1,S2,S3,S4,S5,S6,S7]
    let kbts = [K1,K2,K3]
    let enydeads = []
    window.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp'){
            keyboard_Direction = 1;
        }
        if (event.key === 'ArrowDown'){
            keyboard_Direction = 2;
        }
        if (event.key === 'ArrowRight'){
            keyboard_Direction = 3;
        }
        if (event.key === 'ArrowLeft'){
            keyboard_Direction = 4;
        }
    });
    // -----------------------------
    // レベルアップ処理
    // 説明：レベルアップ関数を新たに作り、切り替え用のマップデータと敵のデータを入れる。そして、敵の死亡者リストとプレイヤーの座標、体力などを
    // 初期化した。補足：level0のenysは死んだときの設定(体力や座標など)が残っているので、新たにenysを作って敵のデータを入れなければならない。
    // -----------------------------
    function levelUp(){  
        B = new BackGround(level); 
        enys = [
            new Enemy(150,450,"sayao"),
            new Enemy(200,450,"kabao"),
            new Enemy(250,450,"tanaka")
        ];
        stones = [
        new Stone(250,150),
        new Stone(300,250),
        new Stone(250,300),
        new Stone(300,450),
        new Stone(600,350),
        new Stone(400,450),
        new Stone(500,350)
        ]
        enydeads = []
        P.x = 400;
        P.y = 100;
        P.hp = 1;
        requestAnimationFrame(loop);
        
    }
    // -----------------------------
    // アニメ処理
    // -----------------------------
    function loop() {
        // 1. 画面のクリア
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height); // 背景を白
        // 2. 図形の描画
        ctx.fillStyle = 'rgb(10, 10, 10)';
        ctx.font = "50px serif";
        ctx.beginPath();
        ctx.fill();
        B.draw(ctx);
        P.draw(ctx);
        for ( let eny of enys ){
            //console.log(eny.name,"mi")
            eny.update(P,enys,B,stones);
            eny.draw(ctx);
            if (eny.isDead == 1){
                if (!(enydeads.includes(eny.name))){
                    enydeads.push(eny.name);
                }
            }
        } 
        
        //console.log(enydeads.length,enys.length);
        for (let stone of stones){
            stone.draw(ctx);
        }
        for (let kbt of kbts){
            kbt.update(P,enys,B,stones);
            kbt.draw(ctx);
        }
        
        if(P.hp<0.01){
            ctx.fillText("敗北しました", 50, 100)
        }
        repair(P, enys, stones, B, keyboard_Direction);
        keyboard_Direction = 0;
        kakikae(0);
        //console.log("dire"+direction)
        if (enydeads.length == enys.length){
            level += 1;
            levelUp();
        }else{
            requestAnimationFrame(loop); // フレームごとに更新 while(繰り返し)とpygame.display.update(全体の描画)の中間みたいな感じ
        }
    }
    function repair(P, enys, stones, B, keyboard_Direction) {
        if (direction === 1  || keyboard_Direction == 1 && P.y >= 50 && P.y / 50 - 1 >= 0 && B.list[P.y / 50 - 1][P.x / 50] === '0') {
            for (let S of stones) {
                if (P.y / 50 - 1 == S.y / 50 && P.x / 50 == S.x / 50) {
                    let tileValue = B.list[S.y / 50 - 1][S.x / 50];
                    if (S.y - 50 < B.h1 || S.y - 50 >= B.h2 * 50 || tileValue !== '0') return;
                    for (let stone of stones) {
                        if (stone !== S && S.x === stone.x && S.y - 50 === stone.y) return;
                    }
                    for (let eny of enys) {
                        if (eny !== S && S.x === eny.x && S.y - 50 === eny.y) return;
                    }
                    S.y -= 50;
                }
            }
            P.y -= 50;
        }
    
        if (direction === 2 || keyboard_Direction == 2 && P.y <= 500 && P.y / 50 + 1 <= 13 && B.list[P.y / 50 + 1][P.x / 50] === '0') {
            for (let S of stones) {
                if (P.y / 50 + 1 == S.y / 50 && P.x / 50 == S.x / 50) {
                    let tileValue = B.list[S.y / 50 + 1][S.x / 50];
                    if (S.y + 50 >= B.h2 * 50 || tileValue !== '0') return;
                    for (let stone of stones) {
                        if (stone !== S && S.x === stone.x && S.y + 50 === stone.y) return;
                    }
                    for (let eny of enys) {
                        if (eny !== S && S.x === eny.x && S.y + 50 === eny.y) return;
                    }
                    S.y += 50;
                }
            }
            P.y += 50;
        }
    
        if (direction === 3 || keyboard_Direction == 3 && P.x <= 700 && P.x / 50 + 1 <= 17 && B.list[P.y / 50][P.x / 50 + 1] === '0') {
            for (let S of stones) {
                if (P.y / 50 == S.y / 50 && P.x / 50 + 1 == S.x / 50) {
                    let tileValue = B.list[S.y / 50][S.x / 50 + 1];
                    if (S.x + 50 >= B.w2 * 50 || tileValue !== '0') return;
                    for (let stone of stones) {
                        if (stone !== S && S.x + 50 === stone.x && S.y === stone.y) return;
                    }
                    for (let eny of enys) {
                        if (eny !== S && S.x + 50 === eny.x && S.y === eny.y) return;
                    }
                    S.x += 50;
                }
            }
            P.x += 50;
        }
    
        if (direction === 4 || keyboard_Direction == 4 && P.x >= 50 && P.x / 50 - 1 >= 0 && B.list[P.y / 50][P.x / 50 - 1] === '0') {
            for (let S of stones) {
                if (P.y / 50 == S.y / 50 && P.x / 50 - 1 == S.x / 50) {
                    let tileValue = B.list[S.y / 50][S.x / 50 - 1];
                    if (S.x - 50 < B.w1 || tileValue !== '0') return;
                    for (let stone of stones) {
                        if (stone !== S && S.x - 50 === stone.x && S.y === stone.y) return;
                    }
                    for (let eny of enys) {
                        if (eny !== S && S.x - 50 === eny.x && S.y === eny.y) return;
                    }
                    S.x -= 50;
                }
            }
            P.x -= 50;
        }
    }

    loop();
    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;
    //console.log(maxWidth)
    //console.log(maxHeight)
    if (maxWidth < maxHeight){//縦が横よりも小さかったら、縦を拡大の軸にする
        const scale = maxWidth/800
        canvas.width = 800 * scale;
        canvas.height = 600 * scale;
        ctx.scale(scale,scale); //すまほ:0~1100,0~2400
    }else{
        const scale =maxHeight/600;
        canvas.width = 800 * scale;
        canvas.height = 600 * scale;
        ctx.scale(scale,scale);
    } 
}
main();