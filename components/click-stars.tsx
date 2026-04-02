"use client";

import { useEffect, useState } from "react";

type Star = {
  id: number;
  x: number;
  y: number;
  delay: number;
};

export function ClickStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    let starId = 0;

    const handlePointerDown = (event: PointerEvent) => {
      const nextStar = {
        id: starId++,
        x: event.clientX,
        y: event.clientY,
        delay: Math.random() * 40
      };

      setStars((current) => [...current, nextStar]);

      window.setTimeout(() => {
        setStars((current) => current.filter((star) => star.id !== nextStar.id));
      }, 520);
    };

    window.addEventListener("pointerdown", handlePointerDown);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden">
      {stars.map((star) => (
        <span
          key={star.id}
          className="click-star"
          style={
            {
              left: star.x,
              top: star.y,
              animationDelay: `${star.delay}ms`
            } as React.CSSProperties
          }
        >
          ✦
        </span>
      ))}
    </div>
  );
}
