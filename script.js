
let secretNumber = Math.trunc(20 * Math.random() + 1);
let highscore = 0
let time = [0, 0];
let runningTimer = false
let timer;
console.log(secretNumber)


document.querySelector('.again').addEventListener('click', function () {
    time = [0, 0];
    secretNumber = Math.trunc(20 * Math.random() + 1);
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.getElementById('timer').innerHTML = '';
    document.querySelector('.check').style.backgroundColor = '#f1356d';
    document.body.style.backgroundColor = "white";
    document.querySelector('.number').textContent = '?';
});

document.querySelector('.check').addEventListener('click', (e) => {

    let guess = document.querySelector('.guess').value;
    
    if (!runningTimer){
        timer = setInterval(() => {
            time[1]++;
            if (time[1] % 60 == 0) {
                time[0]++;
                time[1] = 0;
            }
            document.getElementById('timer').innerHTML = ` ${time[0]} : ${time[1].toLocaleString('en-IN', {
                minimumIntegerDigits: 2
            })} `
    
        }, 1000);
        runningTimer = true
    }

    e.target.style.backgroundColor = 'black';

    if (!guess) {
        document.querySelector(".message").textContent = "Not a Valid input";
    }
    else if (Number(guess) === secretNumber) {
        document.querySelector(".message").textContent = "You guessed it Right";
        document.querySelector('.number').style.width = '30rem'
        document.querySelector("body").style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        if (highscore < document.querySelector('.score').textContent) highscore = document.querySelector('.score').textContent;

        document.querySelector('.highscore').textContent = `${highscore} (${time[0]} : ${time[1].toLocaleString('en-IN', {
            minimumIntegerDigits: 2
        })})`;
        clearInterval(timer)
        document.getElementById('timer').innerHTML = '';
        runningTimer = false;
    }
    else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too high";
        document.querySelector('.score').textContent--;
    }


    else {
        document.querySelector(".message").textContent = "Too low ";
        document.querySelector('.score').textContent--;
    }

    if (document.querySelector('.score').textContent <= 0) {
        document.querySelector(".message").textContent = "You lost the Game";
        clearInterval(timer);
        document.getElementById('timer').innerHTML = '';
        document.getElementById('hiddenresult').textContent = secretNumber;
        this.style.backgroundColor = '#f1356d';
    }

});
