// ==UserScript==
// @name         ChessTV Watch Time Tracker
// @namespace    https://github.com/AdityaDwiNugroho/chesstv-watch-tracker
// @version      1.0
// @description  Track cumulative time spent on ChessTV and store it in localStorage.
// @author       Aditya
// @match        https://www.chess.com/tv
// @match        https://www.chess.com/*/tv
// @grant        none
// @updateURL    https://raw.githubusercontent.com/AdityaDwiNugroho/chesstv-watch-tracker/main/scripts/chesstv-tracker.user.js
// @downloadURL  https://raw.githubusercontent.com/AdityaDwiNugroho/chesstv-watch-tracker/main/scripts/chesstv-tracker.user.js
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const bundleUrl = 'https://raw.githubusercontent.com/AdityaDwiNugroho/chesstv-watch-tracker/main/dist/bundle.js';

  fetch(bundleUrl)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to fetch tracker script: ${res.statusText}`);
      return res.text();
    })
    .then(code => {
      try {
        eval(code);
        console.log('[ChessTV Tracker] Script loaded successfully.');
      } catch (e) {
        console.error('[ChessTV Tracker] Script evaluation failed:', e);
      }
    })
    .catch(err => {
      console.error('[ChessTV Tracker] Failed to load script:', err);
    });
})();
