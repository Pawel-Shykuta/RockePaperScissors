// Инициализация переменных
var texteria = document.createElement('textarea');
texteria.id = 'texteria';
document.body.appendChild(texteria);

var bttn = document.createElement('button');
bttn.id = 'btn';
bttn.textContent = "Play";
document.body.appendChild(bttn);

var schet = document.getElementById('Schet');
var maxStrickShove = document.getElementById('MaxStrick');

if (!schet || !maxStrickShove) {
    console.error('Не удалось найти элементы Schet или MaxStrick в HTML.');
}

var schetchik = 0;
var maxStrick = localStorage.getItem('maxStrick') ? parseInt(localStorage.getItem('maxStrick')) : 0;

// Установка начальных значений
schet.value = 'Стрик Побед: ' + schetchik;
maxStrickShove.value = 'Максимально побед подряд: ' + maxStrick;

var a = "Kamen";
var b = "Bumaga";
var c = "Nojnicy";

var array = [a, b, c];
var secondIndex = null;

document.getElementById('btn').addEventListener('click', Play);

function Kam() {
    secondIndex = a;
}
function Noj() {
    secondIndex = c;
}
function Bum() {
    secondIndex = b;
}


var btnNextGame = document.getElementById('btnNext');
btnNextGame.style.display = "none";
btnNextGame.addEventListener('click', function(){
    window.location.href = 'https://pawel-shykuta.github.io/Snake/';
});

function Play() {
    var firstRand = Math.floor(Math.random() * array.length); 
    var firstIndex = array[firstRand];
    
 

    if (secondIndex === null) {
        texteria.value = 'Выберите КАМЕНЬ, НОЖНИЦЫ или БУМАГУ!';
        return;
    } else {  
        // Проверка на ничью
        if (firstIndex === secondIndex) {
            texteria.value = 'Ничья!';
        } else if (firstIndex === a && secondIndex === b) {
            texteria.value = 'You Win: Бумага побеждает камень!';
            schetchik++;
        } else if (firstIndex === b && secondIndex === c) {
            texteria.value = 'You Win: Ножницы побеждают бумагу!';
            schetchik++;
        } else if (firstIndex === a && secondIndex === c) {
            texteria.value = 'Bot Win: Камень побеждает ножницы!';
            schetchik = 0;
        } else if (firstIndex === b && secondIndex === a) {
            texteria.value = 'Bot Win: Бумага побеждает камень!';
            schetchik = 0;
        } else if (firstIndex === c && secondIndex === b) {
            texteria.value = 'Bot Win: Ножницы побеждают бумагу!';
            schetchik = 0;
        } else if (firstIndex === c && secondIndex === a) {
            texteria.value = 'You Win: Камень побеждает ножницы!';
            schetchik++;
        }

        schet.value = 'Стрик Побед: ' + schetchik;
        secondIndex = null;

            if(schetchik >=5){
                btnNextGame.style.display = "block";   
            }
                    
        if (maxStrick < schetchik) {
            maxStrick = schetchik;
            localStorage.setItem('maxStrick', maxStrick); // Сохранение в localStorage
            maxStrickShove.value = 'Максимально побед подряд: ' + maxStrick;
        }
    }   
}
