class BackGround{
    constructor(){
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
        this.grass.src = 'img/green.png';
        this.mt.src = 'img/mount.png';
        this.sea.src = 'img/sea.png';
        this.tiles=[this.grass,this.mt,this.sea];
        this.list = [["1","1","1","1","0","0","0","0","0","0","0","2","2","2","2","2"],
                     ["1","1","1","0","0","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","1","1","1","1","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","1","1","1","1","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","0","0","0","0","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","0","0","1","0","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","0","0","1","0","0","0","0","0","0","0","0","0","2","2","2"],
                     ["1","0","0","1","0","0","0","0","0","0","0","0","0","2","2","2"],
                     ["1","1","1","1","0","0","0","0","0","0","0","0","0","2","2","2"],
                     ["1","1","1","0","0","0","0","0","0","0","0","0","2","2","2","2"],
                     ["1","1","1","0","0","0","0","0","0","0","0","0","0","2","2","2"],
                     ["1","1","0","0","0","0","0","0","0","0","0","0","0","2","2","2"],
                     ["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"],
                    ];
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
        this.team = "味方"
        this.ply = new Image();
        this.ply.src = 'img/man1.png'
    }
    draw(ctx){
        ctx.drawImage(this.ply, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h );
    }
}
class Enemy{
    constructor(ex,ey,id){
        this.id=id;
        this.x = ex;
        this.y = ey;
        this.w = 50;
        this.h = 50;
        this.tick = 0;
        this.eny = new Image();
        this.eny.src = 'img/bug1.png'
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    update(P,enys,B){
        this.tick += 1
        if (this.tick < 5){
            return
        }
        this.tick = 0;
        //ランダムで４方向を決定
        let x1=0;
        let y1=0;
        let s = this.getRandomInt(4)
        if (s == 0){//右
            x1 = 50
        }else if(s == 1){//左
            x1 = -50
        }else if(s == 2){//上
            y1 = -50
        }else if(s == 3){//下
            y1 = 50
        }
        //暫定座標
        let newx = this.x+x1
        let newy = this.y+y1
        //エリア外か
        if (!(B.w1*50 <= newx && newx < B.w2*50 && B.h1*50 <= newy && newy < B.h2*50)){
            return;
        }
        //野か
        let num = parseInt(B.list[newy/50][newx/50]);
        if (num != 0){
            return;
        }
        //プレイヤか
        if (newx == P.x && newy == P.y){
            return;
        }
        //バグか
        for (let E of enys){
            if (E.id != this.id){
                if (newx==E.x && newy==E.y){
                    console.log("バグ")    
                    return;
                }
            }
        }           
        //すすむ 
        this.x=newx;
        this.y=newy;
    }

    draw(ctx){
        ctx.drawImage(this.eny, 0, 0, this.w, this.h, this.x, this.y, this.w, this.h );
    }
}
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
function main() {
    let P = new Player();
    let B = new BackGround(); 
    let E1 = new Enemy(450,350,1);
    let E2 = new Enemy(450,550,2);
    let E3 = new Enemy(250,550,3);
    //let E2 = new Enemy(450,350);
    //let E3 = new Enemy(450,350);
    //let enys = [E1,E2,E3]
    let enys = [E1,E2,E3]
    window.addEventListener('keydown', function(event) {
        if (P.y/50-1>=0 && B.list[P.y/50-1][P.x/50] == '0'){
            if (P.y >= 50){
                if (event.key === 'ArrowUp') {
                    P.y -= 50
                }
            }
        }
        if (P.y/50-1<=13 && B.list[P.y/50+1][P.x/50] == '0'){
            if (P.y <= 500){
                if (event.key === 'ArrowDown') {
                    P.y += 50
                }
            }
        }
        if (P.x/50-1<=17 && B.list[P.y/50][P.x/50+1] == '0'){
            if (P.x <= 700){
                if  (event.key === 'ArrowRight') {
                    P.x += 50
                }
            }
        }
        if (P.x/50-1>=0 && B.list[P.y/50][P.x/50-1] == '0'){
            if (P.x >= 50){
                if (event.key === 'ArrowLeft') {
                    P.x -= 50
                }
            }
        }
    });
    // -----------------------------
    // アニメ処理
    // -----------------------------
    function draw() {
        // 1. 画面のクリア
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height); // 背景を白
        // 2. 図形の描画
        ctx.fillStyle = 'rgb(10, 10, 10)';
        ctx.beginPath();
        ctx.fill();
        B.draw(ctx);
        P.draw(ctx);
        for ( var eny of enys ){
            eny.update(P,enys,B);
            eny.draw(ctx);
        } 
        requestAnimationFrame(loop); // フレームごとに更新 while(繰り返し)とpygame.display.update(全体の描画)の中間みたいな感じ
    }
    loop();
}
main();