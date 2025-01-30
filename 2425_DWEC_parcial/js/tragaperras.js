$(document).ready(function() {
    $('#play-button').click(jugar);
})


const frutas = [
    { index: 1, nombre: 'Cereza', simbolo: '🍒' },
    { index: 2, nombre: 'Limón', simbolo: '🍋' },
    { index: 3, nombre: 'Sandía', simbolo: '🍉' },
    { index: 4, nombre: 'Uva', simbolo: '🍇' },
    { index: 5, nombre: 'Plátano', simbolo: '🍌' }
];


function jugar(){
    const mensajes = document.getElementById('win-credits');
    const creditos = document.getElementById('credits-value');
    let credito = parseInt(creditos.innerText);

    if(credito > 0) {
        credito--;

        const indicesFrutas = generarTresNumerosAleatorios();

        // Test Victoria
        // indicesFrutas[0] = 1;
        // indicesFrutas[1] = 1;
        // indicesFrutas[2] = 1;

        for(i = 0; i < 3; i++) {
            let fruta = null;
            for(z = 0; z < frutas.length; z++) {
                if(frutas[z].index === indicesFrutas[i])
                fruta = frutas[z].simbolo;
            }

            const slot = document.getElementById('slot' + (i + 1));
            slot.innerText = fruta;
        }

        if(indicesFrutas[0] === indicesFrutas[1] && indicesFrutas[0] === indicesFrutas[2]) {
            if(indicesFrutas[0] === 1) {
                window.alert('Has ganado el juego!!');
                window.location.assign('../index.html')
                return;
            } else {
                mensajes.innerText = '¡+3 CREDITOS!';
                credito += 3;
            }
        } else if (indicesFrutas[0] === indicesFrutas[1] || indicesFrutas[0] === indicesFrutas[2] || indicesFrutas[1] === indicesFrutas[2]) {
            mensajes.innerText = '¡+1 CREDITOS!';
            credito++;
        } else {
            mensajes.innerText = '';
        }
        
        creditos.innerText = credito;
    } else {
        window.alert('No quedan créditos');
    }
}

function generarTresNumerosAleatorios() {

    let arrayAleatorio = [];

    for(let i = 0; i < 3; i++) {
        arrayAleatorio[i] = Math.floor(Math.random() * 5) + 1
    }

    return arrayAleatorio;
}


