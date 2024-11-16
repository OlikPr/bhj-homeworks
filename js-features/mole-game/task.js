const counterDead  = document.getElementById('dead');

const counterLost = document.getElementById('lost');

const holes = document.querySelectorAll('.hole');


let dead = 0;
let lost = 0;



for (let hole of holes) {
    hole.addEventListener('click', function() {
        let adding = hole.className.includes('hole_has-mole');

        if (adding) {
            dead++;
            counterDead.innerHTML = dead;

            console.log('Ты убил крота!')
        } else {
            lost++;
            counterLost.innerHTML = lost;

            console.log('Ты промазал!')
        }

        if(dead > 9) {
            alert ('Вы победили!');
            resetGame();
            
        } else if (lost > 4) {
            alert ('Вы проиграли!');
            resetGame();
            
        }
    })
}

function resetGame() {
    dead = 0;
    lost = 0;

    counterDead.innerHTML = dead;
    counterLost.innerHTML = lost;
}