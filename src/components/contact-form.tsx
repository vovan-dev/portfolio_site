"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/resume";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = new URL("https://mail.google.com/mail/");
    url.searchParams.set("view", "cm");
    url.searchParams.set("fs", "1");
    url.searchParams.set("to", profile.email);
    url.searchParams.set("su", `Сообщение с сайта от ${name.trim()}`);
    url.searchParams.set(
      "body",
      `Имя: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    );
    window.open(url.toString(), "_blank", "noopener,noreferrer");
    setOpened(true);
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <p className="kicker">Написать сообщение</p>
      <div className="contact-fields">
        <label>
          Имя
          <input
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Ваше имя"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
      </div>
      <label>
        Краткое сообщение
        <textarea
          name="message"
          placeholder="Напишите короткое сообщение..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </label>
      <button className="contact-submit" type="submit">
        Отправить
      </button>
      <p className="contact-form-status" role="status">
        {opened ? "Письмо открыто в новой вкладке." : ""}
      </p>
    </form>
  );
}
