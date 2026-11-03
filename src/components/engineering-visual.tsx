"use client";

import { useState } from "react";
import { ArrowDownRight, Crosshair } from "lucide-react";

const steps = [
  {
    name: "Understand",
    caption: "Find the right problem.",
    detail: "Start with context, constraints, and a good question.",
    word: "THINK",
  },
  {
    name: "Build",
    caption: "Make the idea tangible.",
    detail: "Turn a considered approach into something that works.",
    word: "MAKE",
  },
  {
    name: "Refine",
    caption: "Good work is iterative.",
    detail: "Test assumptions, listen to feedback, and improve.",
    word: "GROW",
  },
];

export function EngineeringVisual() {
  const [active, setActive] = useState(0);
  const step = steps[active];
  return (
    <div className="engineering-visual">
      <div className="visual-topline">
        <span className="eyebrow">FROM IDEA TO IMPACT</span>
        <Crosshair size={16} aria-hidden="true" />
      </div>
      <div className={`orbital-art orbital-step-${active}`} aria-hidden="true">
        <div className="orbit-orbit orbit-one" />
        <div className="orbit-orbit orbit-two" />
        <div className="orbit-orbit orbit-three" />
        <div className="orbit-core">
          <span>{step.word}</span>
          <ArrowDownRight size={56} strokeWidth={1} />
        </div>
        <span className="orbit-node node-one" />
        <span className="orbit-node node-two" />
        <span className="orbit-cross cross-one">+</span>
        <span className="orbit-cross cross-two">+</span>
        <span className="orbit-coordinate coordinate-one">x: curiosity</span>
        <span className="orbit-coordinate coordinate-two">y: craft</span>
      </div>
      <div className="process-copy" aria-live="polite">
        <p>{step.caption}</p>
        <span>{step.detail}</span>
      </div>
      <div
        className="process-tabs"
        role="group"
        aria-label="Explore the engineering process"
      >
        {steps.map((item, index) => (
          <button
            key={item.name}
            type="button"
            aria-pressed={index === active}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}
