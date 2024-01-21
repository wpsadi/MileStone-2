function address(){
    const num  =Math.random();
    let rndmNum = (num*10)-((num*10)%1);
    const url = `https://wpsadi.github.io/MileStone-2/Quiz-App/Ques_files/${rndmNum}.json`
    return {url:url,num:rndmNum}
}