function check() {
    let bill = document.getElementById('userBill').value
    console.log(bill);
    let cashBox = document.getElementById('output')
    if(bill > 0 ){
        cashBox.innerHTML=`
        <div>
            <p>Cash Given</p>
            <input placeholder="Cash given" id="userCash" />
        </div>
        <button type="button" onClick="min_amount()">Check</button>
    `;
    }
    else{
        alert('enter valid amount')
    }
}

function min_amount(){
    let bill = parseInt(document.getElementById('userBill').value)
    let cash = parseInt(document.getElementById('userCash').value)
    let final=document.getElementById('final')
    let denominations = [2000,500,100,20,10,5,1]
    let cashDenom = [0,0,0,0,0,0,0]
    if(cash < bill){
        final.innerHTML=`<p style="display: block;">Cash is less than bill . Please enter the correct amount</p>`;
    } 
    else if(cash === bill){
        final.innerHTML=`<p style="display: block;">Cash is same as bill . No change is to be given</p>`;
    }
    else{
        let remain = cash - bill;
        console.log(remain)
        let i=0;
        while(remain > 0){
            if(remain/denominations[i] >= 1){
                remain = remain-denominations[i];
                cashDenom[i] += 1;
            }
            else{
                i++;
            }
        }
        let denomTxt = denominations.reduce((acc,ele)=>acc+`<p>${ele}</p>`,"")
        let cashDenomTxt = cashDenom.reduce((acc,ele)=>acc+`<p>${ele}</p>`,"")
        final.innerHTML=`<p>Remaining amount is ${cash-bill}</p><div><p style="background-color: antiquewhite;">Notes</p>`+denomTxt+`<p style="background-color: antiquewhite;">No of notes</p>`+cashDenomTxt+`</div>`;
    }
    document.body.append(final)
}