let answer = Math.floor(Math.random() * 20) + 1;
let message = document.querySelector('.message');
// console.log(answer)

let checkBtn = document.querySelector('.check');
checkBtn.addEventListener("click", () => {
    let guess = document.querySelector('.guess').value;
    guess = parseInt(guess, 10);
    // console.log( guess);

    if(guess == answer){
        let number = document.querySelector('.number');
        let highscore = document.querySelector('.highscore');
        highscore.innerHTML= 20;
        number.innerHTML = answer;
        message.innerHTML = "Yayyy! You are right!"
    }
    else if(guess > answer){
        message.innerHTML = "Too large! Try a smaller number";
    }
    else if(isNaN(guess)){
        alert("Enter a number")
    }
    else{
        message.innerHTML = "Too small! Try a greater number";
    }
});

let again = document.querySelector('.again');
again.addEventListener('click', () => location.reload())
