// ==UserScript==
// @name         ChessTV Watch Time Tracker
// @namespace    https://github.com/AdityaDwiNugroho/chesstv-watch-tracker
// @version      1.0
// @description  Track cumulative time spent on ChessTV and store it in localStorage.
// @author       Aditya
// @match        https://www.chess.com/*/tv
// @match        https://www.chess.com/tv
// @grant        none
// @updateURL    https://raw.githubusercontent.com/AdityaDwiNugroho/chesstv-watch-tracker/main/scripts/chesstv-tracker.user.js
// @downloadURL  https://raw.githubusercontent.com/AdityaDwiNugroho/chesstv-watch-tracker/main/scripts/chesstv-tracker.user.js
// ==/UserScript==

(function () {
  'use strict';

  fetch('https://raw.githubusercontent.com/AdityaDwiNugroho/chesstv-watch-tracker/main/dist/bundle.js')
    .then(res => res.text())
    .then(code => eval(code))
    .catch(err => console.error('Failed to load script:', err));
})();
