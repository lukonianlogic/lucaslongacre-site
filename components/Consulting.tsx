"use client";

import { useState } from "react";
import { person, consulting } from "@/data/site";
import Eyebrow from "@/components/Eyebrow";
import BookCallButton from "@/components/BookCallButton";

export default function Consulting() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `Consulting inquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const mailto = `mailto:${person.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <section id="consulting" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Eyebrow>Consulting</Eyebrow>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {consulting.headline}
        </h2>
        <p className="mt-1.5 text-sm text-muted">{consulting.entity}</p>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
              {consulting.pitch}
            </p>

            <ul className="mt-6 space-y-2.5">
              {consulting.services.map((service) => (
                <li key={service} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {service}
                </li>
              ))}
            </ul>

            <BookCallButton
              calLink="consulting-call"
              label="Book a call directly →"
              className="mt-8 inline-flex items-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-6"
          >
            <p className="text-sm text-muted">{consulting.ctaNote}</p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
              />
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </div>

            <textarea
              required
              placeholder="What are you working on?"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent"
            />

            <button
              type="submit"
              className="mt-1 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Send message
            </button>
            <p className="text-xs text-muted">
              Opens your email client with this pre-filled — or reach me directly at{" "}
              <a href={`mailto:${person.email}`} className="text-accent hover:underline">
                {person.email}
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
