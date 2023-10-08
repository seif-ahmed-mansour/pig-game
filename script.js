'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.getElementById('score--0'); //first player score
const score1 = document.getElementById('score--1'); //second player score
const current0 = document.getElementById('current--0'); //first player total before hold
const current1 = document.getElementById('current--1'); //second player total before hold
const dice = document.querySelector('.dice'); //the element
const btn_roll = document.querySelector('.btn--roll'); //roll dice button
const btn_hold = document.querySelector('.btn--hold');
const btn_new = document.querySelector(".btn--new");
dice.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;
let current_score = 0;
let active_player = 0;
const scores = [0, 0];
let playing = true;
const switch_palyers = function () {
  current_score = 0;
  document.getElementById(`current--${active_player}`).textContent = 0;
  active_player = active_player === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
const resetGame = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  dice.classList.add('hidden');
  current_score = 0;
  active_player = 0;
  scores[0] = 0;
  scores[1] = 0;
  playing = true;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
btn_roll.addEventListener('click', () => {
  if (playing) {
    let rand_number = Math.trunc(Math.random() * 6 + 1);
    dice.classList.remove('hidden');
    dice.src = `dice-${rand_number}.png`;

    if (rand_number !== 1) {
      current_score += rand_number;
      document.getElementById(`current--${active_player}`).textContent =
        current_score;
    } else {
      switch_palyers();
    }
  }
});
btn_hold.addEventListener('click', () => {
  if (playing) {
    document.getElementById(`current--${active_player}`).textContent = 0;
    scores[active_player] += current_score;
    document.getElementById(`score--${active_player}`).textContent =
      scores[active_player];
    if (
      Number(document.getElementById(`score--${active_player}`).textContent) >=
      100
    ) {
      playing = false;
      document
        .querySelector(`.player--${active_player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active_player}`)
        .classList.remove('player--active');
    } else {
      switch_palyers();
    }
  }
});
btn_new.addEventListener("click",resetGame)













// 7set eny kont tayh seka f3mltha tany mn elawel

// all of those were elements
// const switch_player = function () {
//   document.getElementById(`current--${active_player}`).textContent = 0;
//   active_player = active_player == 0 ? 1 : 0;
//   current_score = 0;
//   player0.classList.toggle('player--active');
//   player1.classList.toggle('player--active');
// };
// const scores = [0, 0];
// let current_score = 0;
// let active_player = 0; //the first player is 0 and second is 1
// //just reseting the scores values
// score0.textContent = 0;
// score1.textContent = 0;
// dice.classList.add('hidden');
// btn_roll.addEventListener('click', function () {
//   //displaying the dice
//   let dice_vlaue = Math.trunc(Math.random() * 6 + 1); //the dice random number
//   dice.classList.remove('hidden');
//   dice.src = `dice-${dice_vlaue}.png`;
//   //.....................
//   if (dice_vlaue !== 1) {
//     current_score += dice_vlaue;
//     document.getElementById(`current--${active_player}`).textContent =
//       current_score;
//   } else {
//     switch_player();
//   }
// });
// btn_hold.addEventListener('click', () => {
//     document.getElementById(`current--${active_player}`).textContent = 0;
//     scores[active_player] += current_score;
//     current_score = 0;
//     document.getElementById(`score--${active_player}`).textContent =
//       scores[active_player];
//     switch_player();
// });
