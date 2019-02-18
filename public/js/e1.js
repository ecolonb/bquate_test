var form = document.getElementById('form');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    var finalNumber = e.target.num_final.value;
    console.log('final number: ', finalNumber);
    finalNumber = parseInt(finalNumber);
    if (finalNumber > 0) {
        console.log('numero mayor a 0')
        processMulti(finalNumber)
    }
});

function processMulti(finalNumer) {
    var dataToPrint = `<ul class="results">`;
    for (let index = 1; index <= finalNumer; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            dataToPrint += `<li class="multipli">Multipli</li>`;
        } else if (index % 5 == 0) {
            dataToPrint += `<li class="it">IT</li>`;
        } else if (index % 3 == 0) {
            dataToPrint += `<li class="multi">Multi</li>`;
        } else {
            dataToPrint += `<li>${index}</li>`;
        }
        console.log(`${index} % 3 = `, index % 3)
        console.log(`${index} % 5 = `, index % 5)
    }
    dataToPrint += "<ul>";
    console.log('Multi;: ', dataToPrint)
    document.getElementById('result').innerHTML = dataToPrint
}