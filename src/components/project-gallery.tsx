"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Shot } from "@/data/portfolio";

const INTERVAL_MS = 5000;
const TRANSITION_MS = 700;

export function ProjectGallery({ shots }: { shots: Shot[] }) {
  const loop = [...shots, shots[0]];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const shown = index % shots.length;
  const shot = shots[shown];

  useEffect(() => {
    if (shots.length < 2) return;
    const id = window.setTimeout(() => {
      setAnimate(true);
      setIndex((current) => current + 1);
    }, INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [index, shots.length]);

  useEffect(() => {
    if (index !== shots.length) return;
    const id = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, TRANSITION_MS);
    return () => window.clearTimeout(id);
  }, [index, shots.length]);

  return (
    <div className="gallery">
      <figure
        className="gallery-stage"
        aria-roledescription="слайд-шоу"
        aria-label="Скриншоты проекта"
      >
        <div className="gallery-viewport">
          <div
            className={`gallery-track${animate ? " is-animated" : ""}`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {loop.map((item, slideIndex) => (
              <div className="gallery-slide" key={`${item.src}-${slideIndex}`}>
                <Image
                  src={item.src}
                  alt={slideIndex === index ? item.alt : ""}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 1160px) 100vw, 1120px"
                  priority={slideIndex === 0}
                  aria-hidden={slideIndex === index ? undefined : true}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <figcaption>
          <span key={`${shown}-${shot.caption}`} className="gallery-caption">
            {shot.caption}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}
