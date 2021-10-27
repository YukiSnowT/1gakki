
    const cvs = document.getElementById("canvas");
    const ctx = cvs.getContext('2d');
    let cvx = cvs.width;
    let cvy = cvs.height;
    const ctxm = [];
    const digit = ["","万","億","兆","京","垓","𥝱","穣","溝","澗","正","載","極","恒河沙","阿僧祇","那由他","不可思議","無量大数",""]
    const worker = ["test1","test2","test3","test4","test5","test6","test7","test8","test9","test10","test11","test12","test13","test14","test15","test16","test17","test18","test19","test20"]
    const degree = ["自称","独り身の","家庭を守る","街角の","ストリートの","近所で噂の","村一番の","街一番の","有名人の","地方の","誰もが知る","小国の","大国の","国家連合の","大陸を制する","七つの海を制した","全ての空を制した","世界一の","この星全ての","伝説の","惑星系の","神話に語られる","銀河系の","銀河群の","銀河団の","超銀河団の","観測可能限界の","全宇宙を統べる","四次元世界の","時空を超越した","多元宇宙の","神となった","創世神","ただの"]
    const monsterName = ["オモチ","オオコウモリ","マンドラゴラ","オオサソリ","ゴブリン","ジャイアントスネーク","スケルトン","プチドラゴン","デビルプラント","スライム","ゲイザー","ゴーレム","ワイバーン","ミミック","ギガンテス","グリフォン","ジャイアントワーム","オーガ","ガーゴイル","暗黒騎士","キマイラ","死神","月の怪物","機械仕掛けの巨人","異次元の猟犬","魔王","真魔王","邪龍","邪龍（覚醒）","オモチ（変異種）","無貌の神","名状しがたいもの","万物の母","外なる知性","万物の王","全てを作りしもの"]

    const currency = "G"
    const goodColor = "#fc0"
    const systemImages = ["./img/system/opening01.jpg","./img/system/effect01.png"];
    const monsterImages = [];
    const loadSystemImage = Array(systemImages.length).fill(null);
    const loadMonsterImage = Array(monsterImages.length).fill(null);
    let loadTime = 2;
    let loopEvent = null;

    let savedata = null;//セーブデータ
    let continuefrag = false;//
    let viewXY = [0,0];//canvas上でのカーソルの場所

    let autoSpeedSum = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];//秒間加算金額
    let autoSpeedLevel = [];//被雇用者のレベル
    let clickLevel = 1;//クリックレベル
    let clickGet = [0,2,0];//1クリック価格
    let clickPrice = [0,10,0];//次の必要額
    let timeCount = 0;//経過時間
    let priceLevel = [[0,100,0]];//各人の現在雇用価格[最初の桁,最初の桁の数、次の桁の数]
    let workerSpeed = [[0,10,0],[0,100,0]];//被雇用者の初期金額（不変）
    let myPrice = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]//所持金
    let gameStart = false;
    let animationP = 0;
    let animationPXY = [0,0];
    let animationM = 100;
    let nowMonsterNum = 0;
    let sumMyPrice = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]//これまでの累計

    
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

    
//モングラのセッティング
const setMonsterImage = () =>{
    for(i=1;i<=monsterName.length;i++){
        let j = String(i);
        if(i<10){
            j = "0" + j;
        }
        let png = ".png";
        if(i>=31){
            png = ".jpg";
        }
        monsterImages.push("./img/monster/" + j + monsterName[i-1] + png)
    }
}

//画像ファイルの読み込み
const imgLoad = (imgArrey,loadArrey) => {
    let count = 0;
    for (i = 0; i < imgArrey.length; i++) {
        loadArrey[i] = new Image();
        loadArrey[i].src = imgArrey[i];
        loadArrey[i].onload = function (){
            count++;
        }
    }
    const inter = setInterval(function (){
        if(count>=imgArrey.length){
            //読み込み完了
            clearInterval(inter);
            loadTime--;
        }
    },1)
}