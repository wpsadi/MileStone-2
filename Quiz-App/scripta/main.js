const run = (data, num) => {
    // const Q = document.getElementById("Q-holder");
    const scoreBoard = document.getElementById("score");
    const Options = document.getElementsByClassName("opt");
    const endTest = document.getElementById("end-btn");
    const board = document.getElementById("board");
    const box = document.getElementById("box");
    let deflt = box.innerHTML;

    let start = num * 10;
    const end = start + 9;

    let score = 0;
    let count = 0;

    endTest.addEventListener("click",()=>{
        scoreBoard.innerText =`${score}`.padStart(2,"0");
        board.classList.add("final")
        box.style.setProperty("display","none")
    })

    function reset() {
        box.innerHTML = deflt;
        if(start > end){
            scoreBoard.innerText =`${score}`.padStart(2,"0");
            box.style.setProperty("display","none")
            board.classList.add("final");
        }
        setChange(data[`${start++}`])
    }

    function setChange(det) {
        //reset
        // for (let x of Options){
        //     x.class = "opt"
        // }
        //---
        const Q = document.getElementById("Q-holder")
        Q.innerText = det["question"]

        function mark(tag,answer){
            console.log(tag,answer)

            if (tag.innerText == answer){
                for (let x of Options) {
                    x.classList.toggle("wrong");
                }
                tag.classList.toggle("correct");
                if (count==0){
                    score +=1;
                    count++;
                    scoreBoard.innerText =`${score}`.padStart(2,"0");
                }

                setTimeout(()=>{
                    reset();
                    --count;
                },800)

            }
            else{
                for (let x of Options) {
                    x.classList.toggle("wrong");
                    if (x.innerText == answer){
                        x.classList.toggle("correct")
                    }
                }

                setTimeout(()=>{
                    reset();
                },800)
            }

        }

        for (let x in det["options"]) {
            const opt = Options[x];
            opt.innerText = det["options"][x];

            opt.addEventListener("click",()=>{
                mark(opt,det["answer"])
            })
        }
    }

    setChange(data[`${start++}`])
    // reset()
}