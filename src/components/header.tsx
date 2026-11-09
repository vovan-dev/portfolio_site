"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/resume";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = nav
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0.15, 0.4] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
    <header className={`header${scrolled || open ? " is-scrolled" : ""}`}>
      <a className="skip" href="#content">
        К содержанию
      </a>
      <div className="wrap header-bar">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            ВБ
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="nav-desktop" aria-label="Разделы">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a
            className="btn btn-small"
            href={profile.mailHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать
          </a>
          <button
            type="button"
            className={`nav-toggle${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Закрыть меню" : "Открыть меню"}</span>
            <span className="nav-toggle-lines" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>

      {open ? (
        <nav id="mobile-nav" className="nav-panel" aria-label="Разделы">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={close}>
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={close}>
            Контакт
          </a>
          <a
            className="nav-panel-mail"
            href={profile.mailHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.email}
          </a>
        </nav>
      ) : null}
    </>
  );
}
