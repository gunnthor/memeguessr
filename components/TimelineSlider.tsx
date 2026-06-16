"use client";

import { MIN_YEAR, MAX_YEAR, SLIDER_MAX, sliderToDate, formatMonthYear } from "@/lib/game";

export function TimelineSlider({
  value,
  onChange,
  disabled,
}: {
  value: number;
  onChange: (v: number) => void;
  disabled?: boolean;
}) {
  const guessDate = sliderToDate(value);

  // Year tick marks across the track.
  const years: number[] = [];
  for (let y = MIN_YEAR; y <= MAX_YEAR; y++) years.push(y);

  return (
    <div className="w-full">
      <div className="mb-3 text-center">
        <span className="text-sm uppercase tracking-wide text-slate-400">
          Your guess
        </span>
        <div className="text-2xl font-bold text-brand">
          {formatMonthYear(guessDate)}
        </div>
      </div>

      <input
        type="range"
        className="timeline w-full"
        min={0}
        max={SLIDER_MAX}
        step={1}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label="Guess the month the meme went viral"
      />

      <div className="mt-2 flex justify-between text-[10px] text-slate-500">
        {years
          .filter((_, i) => i % 2 === 0)
          .map((y) => (
            <span key={y}>{y}</span>
          ))}
      </div>
    </div>
  );
}
