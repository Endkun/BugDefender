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
                this.isDeath = 1;
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
        this.isDeath = 0;
        this.isDead = 0;
        this.eny = new Image();
        this.eny.src = 'img/bug1.png'
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    update(P, enys, B,stones) {
        this.tick += 1;
        if (this.tick >= 10) {
            this.s = this.getRandomInt(4);
    
            if (this.s == 0) {
                this.x1 = 50;
                this.y1 = 0;
            } else if (this.s == 1) {
                this.x1 = -50;
                this.y1 = 0;
            } else if (this.s == 2) {
                this.x1 = 0;
                this.y1 = -50;
            } else if (this.s == 3) {
                this.x1 = 0;
                this.y1 = 50;
            }
            this.newx = this.x + this.x1;
            this.newy = this.y + this.y1;
    
            if (this.newx < B.w1 || this.newx >= B.w2 * 50 || this.newy < B.h1 || this.newy >= B.h2 * 50){
                this.isDeath = 1;
                return;
            }
            //console.log(this.name,this.newx/50,this.newy/50)
            let tileValue = B.list[this.newy / 50][this.newx / 50];
            if (tileValue !== "0") {
                this.isDeath = 1;
            }
    
            if (this.newx === P.x && this.newy === P.y) {
                this.isDeath = 1;
                P.hp -= 0.2
                if (P.hp < 0){
                    P.x = 0
                    P.y = 50
                }
            }
    
            for (let eny of enys) {
                if (eny !== this && this.newx === eny.x && this.newy === eny.y) {
                    this.isDeath = 1;
                }
            }
            for (let stone of stones){
                if (stone !== this && this.newx === stone.x && this.newy === stone.y) {
                    this.isDeath = 1;
                }
            }
            if (this.isDeath == "1") {//死亡カウント用
                this.deathTick += 1
            }else{
                this.deathTick = 0
            }
            if (this.deathTick > 200){
                if (this.hp >= 0.05){
                    this.hp -= 0.01
                }
            }
            if (this.deathTick > 5){
                this.x = 50
                this.y = 50
                this.hp = 1
                this.isDead = 1
            }
            if (this.isDeath == "1"){ //return切り離し用
                this.isDeath = 0
                return;
            }
            this.x = this.newx;
            this.y = this.newy;
            this.tick = 0;
        }
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
    let K1 = new Kobito(200,300,"satou");
    let K2 = new Kobito(600,100,"sio");
    let K3 = new Kobito(300,400,"pawa-");
    //let enys = [E1,E2,E3]
    let enys = [E1,E2]
    let stones = [S1,S2,S3,S4,S5]
    let kbts = [K1,K2,K3]
    let enydeads = []
    window.addEventListener('keydown', function(event) {
        if (P.y/50-1>=0 && B.list[P.y/50-1][P.x/50] == '0'){
            if (P.y >= 50){
                if (event.key === 'ArrowUp') {
                    for (let S of stones){
                        if (P.y/50-1 == S.y/50 && P.x/50 == S.x/50){
                            let tileValue = B.list[S.y / 50-1][S.x / 50];
                            if (S.x < B.w1 || S.x >= B.w2 * 50 || S.y-50 < B.h1 || S.y-50 >= B.h2 * 50){
                                return;
                            }
                            if (tileValue !== "0") {
                                return;
                            }
                            for (let stone of stones){
                                if (stone !== this && S.x === stone.x && S.y-50 === stone.y) {
                                    return;
                                }
                            }
                            for (let eny of enys){
                                if (eny !== this && S.x === eny.x && S.y-50 === eny.y) {
                                    return;
                                }
                            }
                            S.y -= 50
                        }
                    }
                    P.y -= 50
                }
            }
        }
        if (P.y/50-1<=13 && B.list[P.y/50+1][P.x/50] == '0'){
            if (P.y <= 500){
                if (event.key === 'ArrowDown') {
                    for (let S of stones){
                        if (P.y/50+1 == S.y/50 && P.x/50 == S.x/50){
                            let tileValue = B.list[S.y / 50+1][S.x / 50];
                            if (S.x < B.w1 || S.x >= B.w2 * 50 || S.y+50 < B.h1 || S.y+50 >= B.h2 * 50){
                                return;
                            }
                            if (tileValue !== "0") {
                                return;
                            }
                            for (let stone of stones){
                                if (stone !== this && S.x === stone.x && S.y+50 === stone.y) {
                                    return;
                                }
                            }
                            for (let eny of enys){
                                if (eny !== this && S.x === eny.x && S.y+50 === eny.y) {
                                    return;
                                }
                            }
                            S.y += 50
                        }
                    }
                    P.y += 50
                }
            }
        }
        if (P.x/50-1<=17 && B.list[P.y/50][P.x/50+1] == '0'){
            if (P.x <= 700){
                if  (event.key === 'ArrowRight') {
                    for (let S of stones){
                        if (P.y/50 == S.y/50 && P.x/50+1 == S.x/50){
                            let tileValue = B.list[S.y / 50][S.x / 50+1];
                            if (S.x+50 < B.w1 || S.x+50 >= B.w2 * 50 || S.y < B.h1 || S.y >= B.h2 * 50){
                                return;
                            }
                            if (tileValue !== "0") {
                                return;
                            }
                            for (let stone of stones){
                                if (stone !== this && S.x+50 === stone.x && S.y === stone.y) {
                                    return;
                                }
                            }
                            for (let eny of enys){
                                if (eny !== this && S.x+50 === eny.x && S.y === eny.y) {
                                    return;
                                }
                            }
                            S.x += 50
                        }
                    }
                    P.x += 50
                }
            }
        }
        if (P.x/50-1>=0 && B.list[P.y/50][P.x/50-1] == '0'){
            if (P.x >= 50){
                if (event.key === 'ArrowLeft') {
                    for (let S of stones){
                        if (P.y/50 == S.y/50 && P.x/50-1 == S.x/50){
                            let tileValue = B.list[S.y / 50][S.x / 50-1];
                            if (S.x-50 < B.w1 || S.x-50 >= B.w2 * 50 || S.y < B.h1 || S.y >= B.h2 * 50){
                                return;
                            }
                            if (tileValue !== "0") {
                                return;
                            }
                            for (let stone of stones){
                                if (stone !== this && S.x-50 === stone.x && S.y === stone.y) {
                                    return;
                                }
                            }
                            for (let eny of enys){
                                if (eny !== this && S.x-50 === eny.x && S.y === eny.y) {
                                    return;
                                }
                            }
                            S.x -= 50
                        }
                    }
                    P.x -= 50
                }
            }
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
        enydeads = []
        P.x = 400;
        P.y = 50;
        P.hp = 1;
        requestAnimationFrame(draw);
        
    }
    // -----------------------------
    // アニメ処理
    // -----------------------------
    function draw() {
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
            eny.update(P,enys,B,stones);
            eny.draw(ctx);
            if (eny.isDead == 1){
                if (!(enydeads.includes(eny.name))){
                    enydeads.push(eny.name);
                }
            }
        } 

        console.log(enydeads.length,enys.length);
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
        if (enydeads.length == enys.length){
            level += 1;
            levelUp();
        }else{
            requestAnimationFrame(draw); // フレームごとに更新 while(繰り返し)とpygame.display.update(全体の描画)の中間みたいな感じ
        }
    }
    draw();

}
main();