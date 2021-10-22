    //レベル帯作成
    const putMenu = () =>{
        const num = autoSpeedLevel.length;
        //レベル帯の配置場所作成
        let levelDiv = document.createElement("div");
        levelDiv.setAttribute("id", "level" + num);
        levelDiv.setAttribute("class", "menuLevel");

        //レベル帯のキャンバス作成
        let levelcvs = document.createElement("canvas");
        levelcvs.setAttribute("id","img" + num);
        levelcvs.setAttribute("class","imgLevel");
        levelcvs.setAttribute("width",80);
        levelcvs.setAttribute("height",80);
        ctxm.push(levelcvs.getContext('2d'));

        //レベル帯の中身作成
        let levelDivInner = document.createElement("div");
        levelDivInner.setAttribute("id", "levelInner" + num);
        levelDivInner.setAttribute("class", "menuLevelInner");

        //レベル帯のキャラ名表示作成
        let levelText1 = document.createElement("div");
        levelText1.setAttribute("id", "text1_" + num);
        levelText1.setAttribute("class", "textLevel");
        levelText1.innerHTML=worker[num];

        //レベル帯の文章表示作成
        let levelText2 = document.createElement("div");
        levelText2.setAttribute("id", "text2_" + num);
        levelText2.setAttribute("class", "textLevel");
        levelText2.innerText="🔓";

        //レベル帯の購入ボタン作成
        let levelButton = document.createElement("div");
        levelButton.setAttribute("id","button" + num);
        levelButton.setAttribute("class", "buttonLevel");
        levelButton.textContent = priceText(priceLevel[num]);
        let we = priceText(priceLevel[num]).length+1-String(priceLevel[num][1]).length/2-String(priceLevel[num][2]).length/2;
        levelButton.setAttribute("style", "width:"+Math.min(we*15,210)+"px")


        //設置
        levelDivInner.appendChild(levelText1);
        levelDivInner.appendChild(levelText2);
        levelDivInner.appendChild(levelButton);
        levelDiv.appendChild(levelcvs);
        levelDiv.appendChild(levelDivInner);
        document.querySelector("#menu").appendChild(levelDiv);
        clickButton("button" + num);
        autoSpeedLevel.push(0);
        priceLevel.push(nextLevel(priceLevel[priceLevel.length-1]));
    }

    //mypriceのcanvas表示
    const displayMyprice = () =>{
        let n = [0,0,0]
        for(i=myPrice.length-1;i>0;i--){
            if(myPrice[i]>0){
                n[2]=myPrice[i];
                n[1]=myPrice[i-1];
                n[0]=i-1;
                break;
            }
        }
        if(n[0]==0&&n[1]==0&&n[2]==0){
            n[1]=myPrice[0];
        }
        ctx.clearRect(0, 0,cvx,cvy/8);

        ctx.fillStyle='#000';
        ctx.fillRect(0,0,cvx,cvy/8);        
        ctx.fillStyle='#fff';
        ctx.fillRect(1,1,cvx-2,cvy/8-2);
        ctx.font = Math.max(cvy/10,10) + "px sans";
        ctx.fillStyle='#000';
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillText("所持金：" + priceText(n), cvx-5,cvy/16);
    }

    //click関連のcanvas表示
    const displayClickLevel = () =>{
        let fsize = Math.max(cvy/20,10);
        // ctx.clearRect(0, cvy/1.5,cvx/2.5,cvy/1.5);
        ctx.fillStyle='#000';
        ctx.fillRect(0, cvy/1.5,cvx/2,cvy/1.5);
        ctx.fillStyle='#fff';
        ctx.fillRect(1,cvy/1.5+1,cvx/2-2,cvy/1.5-69);
        ctx.font = fsize + "px sans";
        ctx.fillStyle='#000';
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("現在レベル：" + clickLevel,10,cvy/1.5+5);
        ctx.fillText("１回の値段：" + priceText(clickGet),5,cvy/1.5+5+fsize+cvy/25);
        ctx.fillText("次のレベル：" + priceText(clickPrice) ,5,cvy/1.5+5+fsize*2+cvy/25*2);
        ctx.fillRect(3,cvy/1.5+8+fsize,cvx/2-6,1);
        ctx.fillRect(3,cvy/1.5+8+fsize*2+cvy/25,cvx/2-6,1);
    }