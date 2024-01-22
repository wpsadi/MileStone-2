const len = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const pass= document.getElementById("pass");

const symbol = document.getElementById("symbol");
const num = document.getElementById("num");

function last(arr){
    let x = random(0,arr.length-1)
    let y =arr[x];
    arr[x] = ""
    arr.push(y)
    pass.value = arr.join("")
    // console.log(arr)
}


function HopeLast(Ax){
    let ls = "abcdefghijklmnopqrstuvwxyz";
    let us = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let ns = "0123456789"
    let ss = "!@#$%&_."
    // console.log(Ax)
    let arr = [us,ls,ss,ns]

    let jun = new Array();

    for (let x in Ax){
        let str = "";
        for (let j = 0;j<Ax[x];j++){
            // str+="1"
            str+= arr[x][random(0,arr[x].length-1)]
        }
        // console.log(arr[x])
        // console.log(Ax[x])
        jun.push(str)
    }

    last(jun);

}

function further([u,l,s,n],arr){
    let Ax = [u,l,s,n]
    arr = arr.slice(1,arr.length);
    for (let x in arr){
        if (arr[x] == false){
            // console.log("hi",x)
            for (let i in Ax){
                if (arr[i] == true){
                    // console.log("bye")
                    Ax[i] += Ax[x]
                    Ax[x] = 0;
                    break;
                }
                
            }
        }
    }

    HopeLast(Ax)
}

function random(start=0,end=100){
    let num = Math.floor(Math.random()*100)
    while ((num<start) || (num>end)){
        num = Math.floor(Math.random()*100)
    }
    return num;
}
function genPass(arr){
    let copylen = arr[0];//12

    let u = random(1,copylen-3);//8
    copylen -= u;//4
    let l = (Math.floor(copylen/3)+(copylen%3));//5 - , 2() 
    copylen -= l;//2

    // let x = random(1,(copylen/2)-1);

    let s = Math.floor((copylen/2));
    let n = Math.floor((copylen/2));

    further([u,l,s,n],arr);



}

function doChnge() {
    const val = Number(`${len.value}`.trim());
    let arr = new Array();
    arr.push(val)
    for (let x of [upper, lower, symbol, num]) {
        arr.push(x.checked)
    }
    let count = 0;
    for (let i of arr){
        if(i == true){
            count++;
        }
    }

    if (count == 0){
        pass.value = "Undefined"

        return;
    }
    genPass(arr)
    // console.log(arr)
}

len.addEventListener("focusout", () => {
    const value = `${(len.value)}`.trim();
    if (Number(value) <= 4) {
        len.value = "4";
    }
    doChnge();
})


len.addEventListener("input", () => {
    const value = `${(len.value)}`.trim();

    let res = "";
    for (let x of value) {
        if ("0123456789".includes(x)) {
            res += x;
            
        }
    }
    if (Number(res) >= 25) {
        len.value = "25";
    }
    else {
        len.value = res;
    }

})


for (let x of [upper, lower, symbol, num]) {
    x.addEventListener("input", doChnge)
}

doChnge()