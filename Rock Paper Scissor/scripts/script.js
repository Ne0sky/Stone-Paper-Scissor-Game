let human_option_img=document.querySelector(".human_option");
let bot_option_img=document.querySelector(".bot_option");
let score_number=parseInt(document.querySelector(".score_number").innerText);
let score=document.querySelector(".score_number");
let btns=document.querySelectorAll(".control_btn");
let reset=document.querySelector(".reset");

btns.forEach((e) => {
    e.addEventListener('click', () => {
        
        console.log("human->",e.id)
        change_src(human_option_img,e.id)
        let bot_option=generate_random_option();
        change_src(bot_option_img,bot_option)
        console.log("bot->",bot_option)
        score_number+=winner(e.id,bot_option)
        console.log(score_number)
        score.innerText=score_number;
    })
})

reset.addEventListener('click',resetAll);


function change_src(img,new_src){
    img.src=`assests/images/${new_src}.png`
}

function generate_random_option() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function winner(human_option,bot_option){
    if(human_option==bot_option)
    return 0;
    else{
        if(human_option=="rock" && bot_option=="paper")
        return -1;
        if(human_option=="rock" && bot_option=="scissors")
        return 1;

        if(human_option=="paper" && bot_option=="scissors")
        return -1;
        if(human_option=="paper" && bot_option=="rock")
        return 1;
        

        if(human_option=="scissors" && bot_option=="paper")
        return 1;
        if(human_option=="scissors" && bot_option=="rock")
        return -1;

    }
}

function resetAll()
{
    score_number=0;
    score.innerText=0;
}