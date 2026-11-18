"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Roll } from "@/components/roll";
import { site } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

const field =
  "peer w-full border-0 border-b border-white/20 bg-transparent pb-3 pt-1 text-lg text-white outline-none transition-colors duration-300 placeholder:text-white/25 focus:border-white sm:text-xl";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-9">
      <div className="grid gap-9 sm:grid-cols-2">
        <label className="block">
          <span className="type-label mb-3 block text-grey-1">01 — Your name</span>
          <input required autoComplete="name" value={form.name} onChange={set("name")} placeholder="Jane Doe" className={field} />
        </label>
        <label className="block">
          <span className="type-label mb-3 block text-grey-1">02 — Your email</span>
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={set("email")}
            placeholder="jane@company.com"
            className={field}
          />
        </label>
      </div>
      <label className="block">
        <span className="type-label mb-3 block text-grey-1">03 — What do you want to automate?</span>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={set("message")}
          placeholder="We spend 20 hours a week qualifying leads by hand…"
          className={`${field} resize-none`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "loading"}
          className="roll-trigger inline-flex h-14 items-center rounded-full bg-white px-8 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.03] disabled:pointer-events-none disabled:opacity-60"
        >
          <Roll>{status === "loading" ? "Sending…" : "Send message ↗"}</Roll>
        </button>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.p
              key="ok"
              role="status"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-sm text-white"
            >
              <span className="h-2 w-2 rounded-full bg-teal" />
              Message sent — I&apos;ll reply within 24 hours.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              key="err"
              role="alert"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm text-grey-1"
            >
              Something went wrong — email me at{" "}
              <a href={`mailto:${site.links.email}`} className="text-white underline underline-offset-4">
                {site.links.email}
              </a>
              .
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
