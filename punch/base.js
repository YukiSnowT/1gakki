
    //クリック位置の取得
    const clickView = () =>{
        cvs.addEventListener("mousemove",e=>{
            const rect = e.target.getBoundingClientRect();
            viewXY[0] = e.clientX - rect.left+0.5;
            viewXY[1] = e.clientY - rect.top;
            // console.log(viewXY)
        })
    }

    clickView();


    //ループ処理
    const mainAct = () =>{
        //画像の描画
        timeCount++;
        if(timeCount>=300){
            timeCount=0;
        }
        culSum();
        if(timeCount%1==0){ //timeCount%30==0
            for(i=0;i<myPrice.length;i++){
                myPrice[i] += autoSpeedSum[i];
            }
            advMyprice();
            displayMyprice();
        }
    }





    const clickButton = (n) =>{
        document.getElementById(n).addEventListener("click",function(){
            if(n.match(/^button[0-9]{1,}/)!==null){
                let num = Number(n.split("n")[1]);
                let needMoney = priceLevel[num][2]*10000+priceLevel[num][1]
                if(subcheck(priceLevel[num])&&autoSpeedLevel[num]<100){
                    subPrice(priceLevel[num]);
                    if(autoSpeedLevel[num]===0&&num<worker.length-1){
                        putMenu()
                    }
                    autoSpeedLevel[num]++;
                    needMoney = (1+(autoSpeedLevel[num])*0.01)*needMoney;//レベルアップ処理
                    if(needMoney>99999999){
                        priceLevel[num][0]++;
                        needMoney = Math.round(needMoney/10000);
                    }
                    if(priceLevel[num][0]>16){
                        priceLevel[num][0]=17;
                        priceLevel[num][1]=9999;
                        priceLevel[num][2]=9999;
                        console.log(priceLevel[num]);
                    }
                    priceLevel[num][1]=Math.round(needMoney%10000);
                    priceLevel[num][2]=Math.floor(needMoney/10000);
                    if(autoSpeedLevel[num]==100){
                        document.getElementById("button" + num).textContent = "MAX!"
                    }else{
                        document.getElementById("button" + num).textContent = priceText(priceLevel[num]);
                    }
                    let we = priceText(priceLevel[num]).length+1-String(priceLevel[num][1]).length/2-String(priceLevel[num][2]).length/2;
                    document.getElementById("button" + num).setAttribute("style", "width:"+Math.min(we*15,210)+"px")
                    document.getElementById("text2_" + num).textContent="LEVEL:" + autoSpeedLevel[num]
                    displayMyprice();
                    //レベルアップの処理
                }
            }
        })
    }
    setSpeed();
    putMenu();

