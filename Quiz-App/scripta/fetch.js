let detail = address();
const URL = detail.url;
const num = detail.num;

fetch(URL).then((res)=>{
    return res.json()
}).then((val)=>{
    run(val,num)
    // console.log(val)
})
.catch((err)=>{
    console.log(err)

})