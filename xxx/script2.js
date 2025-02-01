// let y = 28
// let proglam = 1//0できない1できる
// let seibetu = 0//0男1女
// //募集条件
// //年齢が二十以上で三十未満
// //性別が男
// //プログラムが出来る
// function saiyou(y,proglam,seibetu){
//     if (!(y>=20 && y<=30)){
//         return;
//     }
//     if (!(seibetu == 0)){
//         return;
//     }
//     if (!(proglam == 1)){
//         return;
//     }
//     console.log("採用されました")
// }
// saiyou(y,proglam,seibetu);
let y = 28
let proglam = 0//0できない1できる
let seibetu = 0//0男1女
//募集条件
//年齢が二十以上で三十未満
//性別が男
//プログラムが出来る
function saiyou(y,proglam,seibetu){
    let c = 0;
    if (y>=20 && y<=30 && ){
        c += 1;
    }
    if (seibetu == 0){
        c += 1;
    }
    if (proglam == 1){
        c += 1;
    }
    if (c == 3){
    console.log("採用されました")
    }
}
saiyou(y,proglam,seibetu);