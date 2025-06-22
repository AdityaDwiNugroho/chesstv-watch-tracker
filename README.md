# ChessTV Watch Time Tracker

Ever wondered how much time you've actually spent watching [Chess.com TV](https://www.chess.com/tv)? This lightweight tracker gives you the answer Chess.com doesn't provide - your total ChessTV watch time, displayed right on the page.

**Important:** This tracker only counts watch time from the moment you install it forward. It can't track your previous ChessTV sessions (that would require access to data we don't have).

## What It Does

- **Tracks your watch time** - Shows exactly how long you've been watching ChessTV since installation
- **Clean, minimal display** - Simple time counter that doesn't interfere with your viewing experience  
- **Privacy-focused** - All data stays in your browser, nothing is sent anywhere
- **Lightweight** - Won't slow down your ChessTV experience

## Why Use This?

Chess.com has achievements for watching ChessTV but won't tell you your actual watch time. This tracker fills that gap, giving you awareness of your viewing habits going forward. Perfect for:

- Balancing watching vs. playing time
- Satisfying your curiosity about your chess consumption  
- Having data that even Chess.com doesn't provide

## Methods

### Option 1: Console (Quick Test)
1. Go to [https://www.chess.com/tv](https://www.chess.com/tv)
2. Open Developer Console (`F12` → Console tab)
3. Paste this code and press Enter:
```js
fetch("https://raw.githubusercontent.com/AdityaDwiNugroho/chesstv-watch-tracker/main/dist/bundle.js")
  .then((res) => res.text())
  .then((code) => eval(code));
```

### Option 2: Bookmarklet (Easy Reuse)
1. Create a new bookmark with this as the URL:
```
javascript:(function(){fetch("https://raw.githubusercontent.com/AdityaDwiNugroho/chesstv-watch-tracker/main/dist/bundle.js").then(r=>r.text()).then(c=>eval(c));})();
```
2. Click the bookmark whenever you visit ChessTV to activate tracking

### Option 3: Tampermonkey (Automatic)
1. Install [Tampermonkey](https://www.tampermonkey.net/) browser extension
2. Create a new userscript using [scripts/chesstv-tracker.user.js](https://github.com/AdityaDwiNugroho/chesstv-watch-tracker/blob/main/scripts/chesstv-tracker.user.js)
3. The tracker will automatically run every time you visit chess.com/tv

## Demo

### Live Demo
![ChessTV Watch Time Tracker Demo](https://github.com/AdityaDwiNugroho/chesstv-watch-tracker/blob/main/docs/video_demo.gif?raw=true)

*Watch the tracker count your ChessTV time in real-time*

### Screenshot
![ChessTV Watch Time Tracker Screenshot](https://github.com/AdityaDwiNugroho/chesstv-watch-tracker/blob/main/docs/screenshot_image.png?raw=true)

*Clean, unobtrusive time display that doesn't interfere with your viewing*

## FAQ

**Q: Can this track my past ChessTV viewing history?**  
A: No, the tracker only counts time from when you first install it. It can't access your previous viewing data.

**Q: Is this against Chess.com's terms of service?**  
A: This tracker doesn't modify gameplay, provide advantages, or interfere with Chess.com's functionality. It simply tracks publicly available viewing time, similar to manually timing yourself with a stopwatch.

**Q: Where is my data stored?**  
A: All tracking data is stored locally in your browser. Nothing is sent to external servers.

## Support

If you find this project useful, feel free to support development:  
[https://teer.id/adityadwinugroho](https://teer.id/adityadwinugroho)

---

*Built because Chess.com won't tell you how much time you've actually spent watching ChessTV. Now you can know!*
