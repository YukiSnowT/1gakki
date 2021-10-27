


    //ループ処理
    const mainAct = () =>{
        //画像の描画
        ctx.clearRect(0, 0,cvx,cvy);
        ctx.globalAlpha=1;
        if(nowMonsterNum < monsterSumNum()){
            if(nowMonsterNum==0&&monsterSumNum()!==1){
                animationM = 50;
            }else{
                animationM = 0;
            }
            nowMonsterNum = monsterSumNum();
        }
        if(animationM>150){
            displayMonster(nowMonsterNum,"VS ","",(nowMonsterNum<30))
        }else if(animationM>50){
            displayMonster(nowMonsterNum,"","があらわれた！",(nowMonsterNum<30))
            animationM++;
        }else{
            if(nowMonsterNum == 0){
                displayMonster(nowMonsterNum,"","があらわれた！",(nowMonsterNum<30))
                animationM=51;
            }else{
                displayMonster(nowMonsterNum-1,"","を倒した！",(nowMonsterNum<30))
                animationM++;
            }

        }
        if(animationP>0){
            displayAnimePunch();
        }
        displayMyprice();
        displayClickLevel();
        timeCount++;
        if(timeCount>=300){
            timeCount=0;
            dataSave()
        }
        menuLevelAble();
        culSum();
        if(timeCount%30==0){ //timeCount%30==0に変更→clickも
            for(i=0;i<myPrice.length;i++){
                myPrice[i] += autoSpeedSum[i];
                sumMyPrice[i] += autoSpeedSum[i];
            }
            advMyprice();
            advMyprice(sumMyPrice);
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
                        putMenu(autoSpeedLevel.length)
                    }
                    autoSpeedLevel[num]++;
                    needMoney = (1+(autoSpeedLevel[num])*0.01)*needMoney;//レベルアップ処理
                    if(needMoney>99999999){
                        priceLevel[num][0]++;
                        needMoney = Math.round(needMoney/10000);
                    }
                    priceLevel[num][1]=Math.round(needMoney%10000);
                    priceLevel[num][2]=Math.floor(needMoney/10000);    
                    if(priceLevel[num][0]>16){
                        priceLevel[num][0]=16;//次回ここのチェックから
                        priceLevel[num][1]=9999;
                        priceLevel[num][2]=9999;
                    }
                    if(autoSpeedLevel[num]==100){
                        document.getElementById("button" + num).textContent = "MAX!"
                    }else{
                        document.getElementById("button" + num).textContent = priceText(priceLevel[num]);
                    }
                    document.getElementById("button" + num).setAttribute("style", "width:210px")
                    document.getElementById("text2_" + num).textContent="LEVEL:" + autoSpeedLevel[num]
                    
                    displayMyprice();
                    //レベルアップの処理
                    
                }
            }
        })
    }



