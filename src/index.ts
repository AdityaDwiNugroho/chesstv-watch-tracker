/*
ChessTV Watch Time Tracker
Copyright (C) 2025 Aditya Dwi Nugroho

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

GitHub repository: https://github.com/AdityaDwiNugroho/chesstv-watch-tracker
Email: adityadn.work@proton.me
*/


import { WatchTimeData } from './types';

const STORAGE_KEY = 'chessTV_watch_data';
const CHECK_INTERVAL = 1000;

function getData(): WatchTimeData {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return {
      totalTime: 0,
      lastStart: Date.now(),
      isWatching: true,
    };
  }

  return JSON.parse(raw) as WatchTimeData;
}

function saveData(data: WatchTimeData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

const data = getData();
data.lastStart = Date.now();
data.isWatching = true;
saveData(data);

const box = document.createElement('div');
box.style.position = 'fixed';
box.style.top = '10px';
box.style.right = '10px';
box.style.background = '#111';
box.style.color = '#fff';
box.style.padding = '10px 15px';
box.style.borderRadius = '8px';
box.style.zIndex = '9999';
box.style.fontFamily = 'monospace';
document.body.appendChild(box);

function updateDisplay(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  box.innerText = `ChessTV Time: ${h}h ${m}m ${s}s`;
}

setInterval(() => {
  const now = Date.now();
  const delta = Math.floor((now - data.lastStart) / 1000);
  const newTotal = data.totalTime + delta;

  updateDisplay(newTotal);
  saveData({
    totalTime: newTotal,
    lastStart: now,
    isWatching: true,
  });
}, CHECK_INTERVAL);
