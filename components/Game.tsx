"use client";

import { useEffect, useRef } from "react";
import { shipGrid, shipCols, shipRows, invaderGrid, invaderCols, invaderRows } from "@/lib/shipGrid";

const CELL = 3;
const PLAYER_W = shipCols * CELL;
const PLAYER_H = shipRows * CELL;
const INVADER_W = invaderCols * CELL;
const INVADER_H = invaderRows * CELL;
const CANVAS_W = 340;
const CANVAS_H = 460;
const ROWS = 4;
const COLS = 6;
const WAVE_CLEAR_AUTO_ADVANCE_FRAMES = 150;

type Bullet = { x: number; y: number };
type Enemy = { row: number; col: number; alive: boolean };

type GameState = {
  playerX: number;
  keys: { left: boolean; right: boolean };
  bullets: Bullet[];
  enemyBullets: Bullet[];
  enemies: Enemy[];
  formationX: number;
  formationY: number;
  dir: number;
  speed: number;
  fireCooldown: number;
  enemyFireCooldown: number;
  score: number;
  lives: number;
  wave: number;
  invulnerable: number;
  started: boolean;
  gameOver: boolean;
  waveClear: boolean;
  waveClearTimer: number;
  waveShots: number;
  waveHits: number;
  waveLivesLost: number;
  waveRatingVerdict: string;
  waveAccuracy: number;
  stars: { x: number; y: number; r: number }[];
};

function freshEnemies(): Enemy[] {
  const enemies: Enemy[] = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      enemies.push({ row, col, alive: true });
    }
  }
  return enemies;
}

function freshState(): GameState {
  return {
    playerX: CANVAS_W / 2 - PLAYER_W / 2,
    keys: { left: false, right: false },
    bullets: [],
    enemyBullets: [],
    enemies: freshEnemies(),
    formationX: 30,
    formationY: 40,
    dir: 1,
    speed: 0.6,
    fireCooldown: 0,
    enemyFireCooldown: 0,
    score: 0,
    lives: 3,
    wave: 1,
    invulnerable: 0,
    started: false,
    gameOver: false,
    waveClear: false,
    waveClearTimer: 0,
    waveShots: 0,
    waveHits: 0,
    waveLivesLost: 0,
    waveRatingVerdict: "",
    waveAccuracy: 0,
    stars: Array.from({ length: 40 }, () => ({
      x: Math.random() * CANVAS_W,
      y: Math.random() * CANVAS_H,
      r: Math.random() < 0.2 ? 1.5 : 1,
    })),
  };
}

function rateWave(s: GameState): { verdict: string; accuracy: number } {
  const accuracy = s.waveShots > 0 ? Math.round((s.waveHits / s.waveShots) * 100) : 100;
  let verdict: string;
  if (s.waveLivesLost === 0 && accuracy >= 70) verdict = "FLAWLESS WAVE!";
  else if (s.waveLivesLost === 0) verdict = "NO DAMAGE TAKEN";
  else if (s.waveLivesLost === 1) verdict = "SOLID RUN";
  else verdict = "TOUGH WAVE";
  return { verdict, accuracy };
}

export default function Game({ open, onClose }: { open: boolean; onClose: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<GameState>(freshState());
  const activateRef = useRef<() => void>(() => {});

  useEffect(() => {
    if (!open) return;

    stateRef.current = freshState();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = CANVAS_W * dpr;
    canvas.height = CANVAS_H * dpr;
    ctx.scale(dpr, dpr);

    const s = stateRef.current;

    function advanceWave() {
      s.wave++;
      s.enemies = freshEnemies();
      s.formationX = 30;
      s.formationY = 40;
      s.speed = 0.6 + s.wave * 0.15;
      s.dir = 1;
      s.waveClear = false;
      s.waveClearTimer = 0;
      s.waveShots = 0;
      s.waveHits = 0;
      s.waveLivesLost = 0;
    }

    function startOrRestart() {
      if (s.gameOver) {
        stateRef.current = { ...freshState(), started: true };
      } else if (!s.started) {
        s.started = true;
      }
    }

    function playerFire() {
      if (s.fireCooldown <= 0 && s.started && !s.gameOver && !s.waveClear) {
        s.bullets.push({ x: s.playerX + PLAYER_W / 2 - 1, y: CANVAS_H - 60 });
        s.fireCooldown = 16;
        s.waveShots++;
      }
    }

    function handleActivate() {
      if (!s.started || s.gameOver) startOrRestart();
      else if (s.waveClear) advanceWave();
      else playerFire();
    }
    activateRef.current = handleActivate;

    function onKeyDown(e: KeyboardEvent) {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", " ", "Enter"].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") s.keys.left = true;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") s.keys.right = true;
      if (e.key === " " || e.key === "ArrowUp" || e.key === "Enter") handleActivate();
    }
    function onKeyUp(e: KeyboardEvent) {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") s.keys.left = false;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") s.keys.right = false;
    }
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    let raf = 0;

    function formationBounds() {
      let minCol = COLS,
        maxCol = -1,
        minRow = ROWS,
        maxRow = -1;
      for (const e of s.enemies) {
        if (!e.alive) continue;
        minCol = Math.min(minCol, e.col);
        maxCol = Math.max(maxCol, e.col);
        minRow = Math.min(minRow, e.row);
        maxRow = Math.max(maxRow, e.row);
      }
      return { minCol, maxCol, minRow, maxRow };
    }

    function update() {
      if (!s.started || s.gameOver) return;

      if (s.waveClear) {
        s.waveClearTimer++;
        if (s.waveClearTimer > WAVE_CLEAR_AUTO_ADVANCE_FRAMES) advanceWave();
        return;
      }

      if (s.keys.left) s.playerX -= 3.2;
      if (s.keys.right) s.playerX += 3.2;
      s.playerX = Math.max(4, Math.min(CANVAS_W - PLAYER_W - 4, s.playerX));

      if (s.fireCooldown > 0) s.fireCooldown--;
      if (s.invulnerable > 0) s.invulnerable--;

      s.bullets = s.bullets.filter((b) => b.y > -10);
      for (const b of s.bullets) b.y -= 6;

      s.enemyBullets = s.enemyBullets.filter((b) => b.y < CANVAS_H + 10);
      for (const b of s.enemyBullets) b.y += 3.4;

      const { minCol, maxCol, minRow, maxRow } = formationBounds();
      const aliveCount = s.enemies.filter((e) => e.alive).length;

      if (aliveCount === 0) {
        const { verdict, accuracy } = rateWave(s);
        s.waveRatingVerdict = verdict;
        s.waveAccuracy = accuracy;
        s.waveClear = true;
        s.waveClearTimer = 0;
        s.bullets = [];
        s.enemyBullets = [];
        return;
      }

      s.formationX += s.dir * s.speed;
      const leftEdge = s.formationX + minCol * (INVADER_W + 12);
      const rightEdge = s.formationX + maxCol * (INVADER_W + 12) + INVADER_W;
      if (leftEdge < 8 || rightEdge > CANVAS_W - 8) {
        s.dir *= -1;
        s.formationY += 14;
        s.speed = Math.min(s.speed + 0.08, 3.5);
      }

      const bottomY = s.formationY + maxRow * (INVADER_H + 12) + INVADER_H;
      if (bottomY >= CANVAS_H - 70) {
        s.gameOver = true;
      }

      if (s.enemyFireCooldown > 0) {
        s.enemyFireCooldown--;
      } else if (s.enemyBullets.length < 3) {
        const shooters = s.enemies.filter((e) => e.alive);
        if (shooters.length > 0 && Math.random() < 0.35) {
          const shooter = shooters[Math.floor(Math.random() * shooters.length)];
          const ex = s.formationX + shooter.col * (INVADER_W + 12) + INVADER_W / 2;
          const ey = s.formationY + shooter.row * (INVADER_H + 12) + INVADER_H;
          s.enemyBullets.push({ x: ex, y: ey });
          s.enemyFireCooldown = 40;
        }
      }

      for (const enemy of s.enemies) {
        if (!enemy.alive) continue;
        const ex = s.formationX + enemy.col * (INVADER_W + 12);
        const ey = s.formationY + enemy.row * (INVADER_H + 12);
        for (const b of s.bullets) {
          if (b.x >= ex && b.x <= ex + INVADER_W && b.y >= ey && b.y <= ey + INVADER_H) {
            enemy.alive = false;
            b.y = -100;
            s.score += 10;
            s.waveHits++;
          }
        }
      }

      if (s.invulnerable <= 0) {
        const py = CANVAS_H - 60;
        for (const b of s.enemyBullets) {
          if (
            b.x >= s.playerX &&
            b.x <= s.playerX + PLAYER_W &&
            b.y >= py &&
            b.y <= py + PLAYER_H
          ) {
            b.y = CANVAS_H + 100;
            s.lives--;
            s.waveLivesLost++;
            s.invulnerable = 90;
            if (s.lives <= 0) s.gameOver = true;
          }
        }
      }
    }

    function drawPixelGrid(
      grid: string[],
      colorMap: Record<string, string>,
      x: number,
      y: number
    ) {
      for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
          const ch = grid[row][col];
          if (ch === "." || !colorMap[ch]) continue;
          ctx!.fillStyle = colorMap[ch];
          ctx!.fillRect(x + col * CELL, y + row * CELL, CELL, CELL);
        }
      }
    }

    function draw() {
      ctx!.fillStyle = "#0a0a0e";
      ctx!.fillRect(0, 0, CANVAS_W, CANVAS_H);

      ctx!.fillStyle = "#3f3f52";
      for (const star of s.stars) {
        ctx!.fillRect(star.x, star.y, star.r, star.r);
      }

      if (s.invulnerable <= 0 || Math.floor(s.invulnerable / 6) % 2 === 0) {
        drawPixelGrid(
          shipGrid,
          { W: "#f4f4f5", R: "#ef4444", B: "#2563eb" },
          s.playerX,
          CANVAS_H - 60
        );
      }

      for (const enemy of s.enemies) {
        if (!enemy.alive) continue;
        const ex = s.formationX + enemy.col * (INVADER_W + 12);
        const ey = s.formationY + enemy.row * (INVADER_H + 12);
        drawPixelGrid(invaderGrid, { X: "#818cf8" }, ex, ey);
      }

      ctx!.fillStyle = "#fef3c7";
      for (const b of s.bullets) ctx!.fillRect(b.x, b.y, 3, 10);
      ctx!.fillStyle = "#ef4444";
      for (const b of s.enemyBullets) ctx!.fillRect(b.x, b.y, 3, 8);

      ctx!.font = "12px ui-monospace, monospace";
      ctx!.fillStyle = "#a1a1aa";
      ctx!.textAlign = "left";
      ctx!.fillText(`SCORE ${s.score}`, 10, 20);
      ctx!.textAlign = "right";
      ctx!.fillText(`WAVE ${s.wave}`, CANVAS_W - 10, 20);
      ctx!.textAlign = "left";
      ctx!.fillText(`LIVES ${"♦".repeat(Math.max(s.lives, 0))}`, 10, CANVAS_H - 12);

      if (!s.started) {
        ctx!.textAlign = "center";
        ctx!.fillStyle = "#f4f4f5";
        ctx!.font = "bold 16px ui-monospace, monospace";
        ctx!.fillText("ARCADE", CANVAS_W / 2, CANVAS_H / 2 - 20);
        ctx!.font = "12px ui-monospace, monospace";
        ctx!.fillStyle = "#a1a1aa";
        ctx!.fillText("SPACE / TAP TO START", CANVAS_W / 2, CANVAS_H / 2 + 6);
        ctx!.fillText("ARROWS OR BUTTONS TO MOVE", CANVAS_W / 2, CANVAS_H / 2 + 24);
      } else if (s.gameOver) {
        ctx!.textAlign = "center";
        ctx!.fillStyle = "#ef4444";
        ctx!.font = "bold 16px ui-monospace, monospace";
        ctx!.fillText("GAME OVER", CANVAS_W / 2, CANVAS_H / 2 - 20);
        ctx!.fillStyle = "#f4f4f5";
        ctx!.font = "12px ui-monospace, monospace";
        ctx!.fillText(`SCORE ${s.score}`, CANVAS_W / 2, CANVAS_H / 2 + 2);
        ctx!.fillStyle = "#a1a1aa";
        ctx!.fillText("SPACE / TAP TO RETRY", CANVAS_W / 2, CANVAS_H / 2 + 24);
      } else if (s.waveClear) {
        ctx!.textAlign = "center";
        ctx!.fillStyle = "#818cf8";
        ctx!.font = "bold 16px ui-monospace, monospace";
        ctx!.fillText(`WAVE ${s.wave} CLEAR`, CANVAS_W / 2, CANVAS_H / 2 - 28);
        ctx!.fillStyle = "#f4f4f5";
        ctx!.font = "bold 13px ui-monospace, monospace";
        ctx!.fillText(s.waveRatingVerdict, CANVAS_W / 2, CANVAS_H / 2 - 4);
        ctx!.fillStyle = "#a1a1aa";
        ctx!.font = "12px ui-monospace, monospace";
        ctx!.fillText(`${s.waveAccuracy}% ACCURACY`, CANVAS_W / 2, CANVAS_H / 2 + 16);
        ctx!.fillText("SPACE / TAP FOR NEXT WAVE", CANVAS_W / 2, CANVAS_H / 2 + 38);
      }
    }

    function loop() {
      update();
      draw();
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);

    function onCanvasPress() {
      handleActivate();
    }
    canvas.addEventListener("pointerdown", onCanvasPress);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("pointerdown", onCanvasPress);
    };
  }, [open, onClose]);

  if (!open) return null;

  const setLeft = (v: boolean) => (stateRef.current.keys.left = v);
  const setRight = (v: boolean) => (stateRef.current.keys.right = v);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-wider text-muted">Arcade</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close game"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-muted hover:text-foreground"
          >
            ×
          </button>
        </div>

        <canvas
          ref={canvasRef}
          style={{ width: CANVAS_W, height: CANVAS_H }}
          className="touch-none rounded-lg border border-border"
        />

        <div className="flex w-full items-center justify-between gap-3">
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Move left"
              onPointerDown={() => setLeft(true)}
              onPointerUp={() => setLeft(false)}
              onPointerLeave={() => setLeft(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-lg text-foreground active:bg-accent-soft"
            >
              ◀
            </button>
            <button
              type="button"
              aria-label="Move right"
              onPointerDown={() => setRight(true)}
              onPointerUp={() => setRight(false)}
              onPointerLeave={() => setRight(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-lg text-foreground active:bg-accent-soft"
            >
              ▶
            </button>
          </div>
          <button
            type="button"
            aria-label="Fire"
            onPointerDown={() => activateRef.current()}
            className="flex h-11 w-16 items-center justify-center rounded-full border border-border text-xs font-medium text-foreground active:bg-accent-soft"
          >
            FIRE
          </button>
        </div>
      </div>
    </div>
  );
}
