# Etch-A-Sketch

A browser-based drawing canvas that lets you create pixelated masterpieces by hovering over a grid. It's like a Etch A Sketch, but without the satisfying shake to erase everything in frustration.

## Features

- **Dynamic Grid Drawing**: Hover over squares to colour them with random hues. Think of it as digital finger painting, minus the mess.
- **Adjustable Grid Size**: Click the "Resize Grid" button to change the grid dimensions (1-100 squares per side). Perfect for when you want finer detail or a more "impressionist" approach.
- **Rainbow Colours**: Each square you hover over gets a random colour. It's like your mouse has a broken box of crayons in the best way possible.

## How to Use

1. Open `index.html` in your browser.
2. Hover your mouse over the grid to draw.
3. Click **"Resize Grid"** to change the grid size via prompt.
4. Enter a number between 1 and 100 (larger grids = more squares but slower performance).
5. Start drawing on your new canvas.

## Technical Details

- Built with vanilla JavaScript, HTML, and Tailwind CSS.
- Uses Flexbox for responsive grid layout.
- Event listeners for smooth hover drawing experience.
- Input validation prevents excessive grid sizes from crashing your browser.

## Browser Compatibility

Works on any modern browser that supports ES6 JavaScript and CSS Flexbox. So basically anything that isn't Internet Explorer 6.

## Lessons Learned

- Flexbox is brilliant for creating grids without needing CSS Grid (as per Odin's masterplan).
- Event listeners are your friend.
- `mouseenter` events work better than trying to click each square individually.
- Random RGB generation is surprisingly therapeutic.

Enjoy your pixelated doodling!
