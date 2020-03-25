document.querySelector('#push').onclick = function() {
    let l = document.querySelector('#length').value;
    let min = document.querySelector('#min').value;
    let max = document.querySelector('#max').value;
    let result = [];

    for (let i = 0; i < l; i++) {
        result.push(randomInteger(min, max));
    }
    // console.log(result);
    document.querySelector('#out').innerHTML = result;
    document.querySelector('#out-input').value = result;
    return result;
};

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}