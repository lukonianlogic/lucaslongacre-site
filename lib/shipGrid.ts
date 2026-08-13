// Shared pixel-art grid for the ship used across the favicon, hero texture,
// and the arcade mini-game — keeps the "same ship" feeling consistent.
export const shipGrid = [
  "......W......",
  "......W......",
  ".....WWW.....",
  "...R.WWW.R...",
  "...W.WWW.W...",
  "...WBWRWBW...",
  ".R.WBRRRBW.R.",
  "RWWRRWRWRRWWR",
  "WWWWWWWWWWWWW",
  ".WWWWWWWWWWW.",
  "..RR.WWW.RR..",
  "W...........W",
];

export const shipCols = shipGrid[0].length;
export const shipRows = shipGrid.length;

// Simple original invader glyph — distinct silhouette, single accent color.
export const invaderGrid = [
  "..X...X..",
  "...XXX...",
  "..XXXXX..",
  ".XX.X.XX.",
  "XXXXXXXXX",
  "X.X...X.X",
];

export const invaderCols = invaderGrid[0].length;
export const invaderRows = invaderGrid.length;
