# ChessTV Watch Tracker

A userscript or bookmarklet tool that helps track what you've watched on [Chess.com TV](https://www.chess.com/tv). It highlights watched videos and provides a minimal UI overlay.

## Features

- Automatically detects and highlights videos you've already watched.
- Simple, unobtrusive UI overlay.
- Lightweight, obfuscated bundle for performance and security.
- Easy to install via console, bookmarklet, or Tampermonkey.

## Usage

### Option 1: Paste in Console (Temporary Use)

1. Go to [https://www.chess.com/tv](https://www.chess.com/tv).
2. Open your browser’s Developer Console (press `F12` or `Ctrl + Shift + I`, then go to the **Console** tab).
3. Paste the following code and press Enter:

```js
fetch("https://raw.githubusercontent.com/AdityaDwiNugroho/chesstv-watch-tracker/main/dist/bundle.js")
  .then((res) => res.text())
  .then((code) => eval(code));
```

### Option 2: Bookmarklet (Quick Reuse)

1. Create a new browser bookmark.
2. Use this code as the bookmark URL:
```
javascript:(function(){fetch("https://raw.githubusercontent.com/AdityaDwiNugroho/chesstv-watch-tracker/main/dist/bundle.js").then(r=>r.text()).then(c=>eval(c));})();
```
3. Visit [ChessTV](https://www.chess.com/tv) and click the bookmark whenever you want to activate the tracker

### Option 3: Tampermonkey (Auto-Inject)

1. Install [https://www.tampermonkey.net/](https://www.tampermonkey.net/) browser extension
2. Create a new userscript and paste the contents of [scripts/chesstv-tracker.user.js](https://github.com/AdityaDwiNugroho/chesstv-watch-tracker/blob/main/scripts/chesstv-tracker.user.js)
3. The tracker will now run automatically every time you open [chess.com/tv](https://www.chess.com/tv)

# Screenshot

![screenshot](https://github.com/AdityaDwiNugroho/chesstv-watch-tracker/blob/main/docs/screenshot_image.png?raw=true)

# Support
If you find this project useful, feel free to support me on Trakteer.id
[https://teer.id/adityadwinugroho](https://teer.id/adityadwinugroho)