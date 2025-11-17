// Variabel Global
let secretNumber;
let chancesLeft = 3;

// Mendapatkan elemen DOM
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const messageArea = document.getElementById('message');
const chancesSpan = document.getElementById('chances-left');
const resetButton = document.getElementById('reset-button');

/**
 * Menginisialisasi atau mereset game.
 */
function initGame() {
    // 1. Pilih angka acak (integer) dari 1 hingga 100
    secretNumber = Math.floor(Math.random() * 100) + 1;
    chancesLeft = 3;
    
    // Reset tampilan
