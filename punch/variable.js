
    const cvs = document.getElementById("canvas");
    const ctx = cvs.getContext('2d');
    let cvx = cvs.width;
    let cvy = cvs.height;
    const ctxm = [];
    const digit = ["","万","億","兆","京","垓","𥝱","穣","溝","澗","正","載","極","恒河沙","阿僧祇","那由他","不可思議","無量大数",""]
    const worker = ["test1","test2","test3","test4","test5","test6","test7","test8","test9","test10","test11","test12","test13","test14","test15","test16","test17","test18","test19","test20"]
    const currency = "G"
    const goodColor = "#fc0"
    const images = ["./img/punchingimg.jpg","./img/wall01.jpg","./img/wall02.jpg","./img/wall03.jpg","./img/wall04.jpg","./img/wall05.jpg","./img/wall06.jpg","./img/wall01.jpg","./img/wall02.jpg","./img/wall03.jpg","./img/wall04.jpg"];
    let imageLoad = [];

    let savedata = null;//セーブデータ
    let viewXY = [0,0];//canvas上でのカーソルの場所

    let autoSpeedSum = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//秒間加算金額
    let autoSpeedLevel = [];//被雇用者のレベル
    let clickLevel = 1;//クリックレベル
    let clickGet = [0,1,0];//1クリック価格
    let clickPrice = [0,10,0];//次の必要額
    let timeCount = 0;//経過時間
    let priceLevel = [[0,100,0]];//各人の現在雇用価格[最初の桁,最初の桁の数、次の桁の数]
    let workerSpeed = [[0,10,0],[0,100,0]];//被雇用者の初期金額（不変）
    let myPrice = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]//所持金

    
    //初期スピードのセット
    const setSpeed = () =>{
        for(i=2;i<worker.length;i++){
            let n = [0,0,0];
            let num = 0;
            n[0] = workerSpeed[workerSpeed.length-1][0]
            n[1] = workerSpeed[workerSpeed.length-1][1]
            n[2] = workerSpeed[workerSpeed.length-1][2]
            num = (n[2]*10000+n[1])*i*i*i;
            if(num>99999999){
                n[0]++;
                num = Math.round(num/10000);
            }
            n[1] = Math.round(num%10000);
            n[2] = Math.floor(num/10000);
            workerSpeed.push(n)
        }
    }

    
//画像ファイルの読み込み
const imgLoad = (imgArrey) => {
    let images = [];
    for (i = 0; i < imgArrey.length; i++) {
        images[i] = new Image();
        images[i].src = imgArrey[i];
    }
    imageLoad.push(images);
}

// 全てをロードしてからメインの処理
const allLoad = () =>{
    let imgCount = 0;
    imageLoad(images)
    let loadCount = 0;
    for(k=0;k<images.length;k++){
            imageLoad[k].addEventListener("load",function(){
                if(loadCount == imgCount){//次回ここから
                    ctx.drawImage(imageLoad[k],0,0);
                    console.log(imageLoad[k])
                }
                loadCount++;
            },false);
        }
    // document.getElementById("main").addEventListener("click", mainEvent);
    
}