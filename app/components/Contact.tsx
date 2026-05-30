"use client";

import Image from "next/image";
import { Mail, Send } from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
import { Turnstile } from "@marsidev/react-turnstile";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  // add inside your form JSX
  <Turnstile
    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
    onSuccess={(token) => setTurnstileToken(token)}
    onExpire={() => setTurnstileToken(null)}
  />;

  console.log(turnstileToken);

  const handleSubmit = async (e: any) => {
    if (!turnstileToken) {
      toast.error("Please complete the captcha.");
      return;
    }

    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        // show first validation error if exists
        const firstError = data.invalidParams ? Object.values(data.invalidParams)[0] : data.message;

        toast.error(firstError as string);
        return;
      }

      toast.success("Message sent! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <Fade triggerOnce cascade damping={0.1} className="w-full">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/4 p-8 backdrop-blur-xl md:p-14">
          <div
            aria-hidden
            className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[var(--accent-cyan)]/25 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-(--accent-amber)/20 blur-3xl"
          />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Slide direction="left" triggerOnce cascade damping={0.1}>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-(--accent-amber)">04 — Contact</p>
                <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                  Let's build <br />
                  <span className="bg-linear-to-r from-white to-(--accent-amber) bg-clip-text text-transparent">
                    something great.
                  </span>
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">
                  Have a project in mind, a role to fill, or just want to say hi? Drop a message — I usually reply
                  within a day.
                </p>

                <a
                  href="mailto:saman.ezzatabadi@gmail.com"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 underline-offset-4 hover:text-white hover:underline"
                >
                  <Mail size={16} />
                  saman.ezzatabadi@gmail.com
                </a>

                <div className="mt-8 flex items-center gap-3">
                  {[
                    { img: "/github.svg", href: "https://github.com/Saman-EY", label: "GitHub" },
                    { img: "/linkedin.svg", href: "https://www.linkedin.com/in/saman-ezzatabadi", label: "LinkedIn" },
                    { Icon: Mail, href: "mailto:saman.ezzatabadi@gmail.com", label: "Email" },
                  ].map(({ Icon, href, label, img }) => (
                    <Link
                      target="_blank"
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:text-white"
                    >
                      {img ? <Image src={img} width={50} height={50} alt={label} className="h-5 w-5" /> : null}
                      {Icon ? <Icon size={17} /> : null}
                    </Link>
                  ))}
                </div>
              </div>
            </Slide>
            <Slide direction="right" triggerOnce cascade damping={0.1}>
              <form
                onSubmit={(e) => handleSubmit(e)}
                className="relative rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-xl md:p-8"
              >
                <div className="space-y-5">
                  <Field value={name} setValue={setName} label="Name" placeholder="Your name" />
                  <Field value={email} setValue={setEmail} label="Email" type="email" placeholder="you@mail.com" />
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">Message *</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder="Tell me about your project…"
                      className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.07]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.4)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none `}
                  >
                    Send Message
                    <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </form>
            </Slide>
          </div>
        </div>
      </Fade>

      <footer className="mt-12 flex flex-col items-center justify-between gap-3 text-xs text-white/45 sm:flex-row">
        <span>© {new Date().getFullYear()} Saman Ezzatabadi</span>
        <span>Crafted with React & Tailwind</span>
      </footer>
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  type?: string;
  placeholder?: string;
};

function Field({ label, setValue, value, type = "text", placeholder }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-white/60">{label} *</label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.07]"
        onInput={(e) => {
          e.currentTarget.value = e.currentTarget.value.replace(/^\s+/, "");
        }}
      />
    </div>
  );
}
