    //myPraceから減算する
    const subPrice = (price) =>{
        let myP = myPrice[price[0]+1] * 10000 + myPrice[price[0]];
        const subP = price[2]*10000+price[1];
        let n = 0;
        if(myP<subP){
            for(i=price[0]+2;i<myPrice.length;i++){
                if(myPrice[i]>0){
                    myPrice[i]--;
                    for(j=i-1;j>price[0]+1;j--){
                        myPrice[j]=9999;
                    }
                    myP += 100000000;
                    break;
                }
            }
        }
        n = myP-subP;
        myPrice[price[0]]=n%10000;
        myPrice[price[0]+1]=Math.floor(n/10000);
    }

    //myPriceを繰り上げする
    const advMyprice = () =>{
        for(i=0;i<myPrice.length-1;i++){
            if(myPrice[i]>9999){
                myPrice[i] -= 10000;
                myPrice[i+1]++;
            }
        }
    }

    //priceを繰り上げする
    const advprice = (price) =>{
        let num = price[2]*10000+price[1];
        let q=[price[0],price[1],price[2]]
        if(q[2]>9999){
            q[1]++;
            q[2] -=10000;
        }
        if(num>99999999){
            q[0]++;
            num = Math.floor(num/10000);
        }
        q[1] = Math.round(num%10000);
        q[2] = Math.floor(num/10000);
        return q;
    }

    //myPriceに加算する
    const addPrice = (price) =>{
        myPrice[price[0]] += price[1];
        myPrice[price[0]+1] += price[2];
        advMyprice();
        console.log(myPrice)
    }


    //priceがmyPriceから減算可能かチェック
    const subcheck = (price) =>{
        let checker = false;
        let need = price[2]*10000+price[1]
        let have = 0;
        for(i=price[0]+2;i<myPrice.length;i++){
            have+= myPrice[i];
        }
        if(have>0){
            checker = true;
        }else{
            have = myPrice[price[0]+1]*10000+myPrice[price[0]];
            if(have>=need){
                checker = true;
            }
        }
        return checker;
    }