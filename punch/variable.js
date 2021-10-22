
    const cvs = document.getElementById("canvas");
    const ctx = cvs.getContext('2d');
    let cvx = cvs.width;
    let cvy = cvs.height;
    const ctxm = [];
    const digit = ["","万","億","兆","京","垓","𥝱","穣","溝","澗","正","載","極","恒河沙","阿僧祇","那由他","不可思議","無量大数",""]
    const worker = ["test1","test2","test3","test4","test5","test6","test7","test8","test9","test10","test11","test12","test13","test14","test15","test16","test17","test18","test19","test20"]
    const currency = "G"

    let savedata = null

    let autoSpeedSum = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    let autoSpeedLevel = [];
    let clickLevel = 1;//クリックレベル
    let clickGet = [0,1,0];//1クリック価格
    let clickPrice = [0,10,0];//次の必要額
    let timeCount = 0;
    let priceLevel = [[0,100,0]];//[最初の桁,最初の桁の数、次の桁の数]
    let workerSpeed = [[0,10,0],[0,100,0]];
    let myPrice = [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

    
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