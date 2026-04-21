"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-32 bg-[#f9f6f2]">
      <div className="max-w-5xl mx-auto px-8">
        <div className="bg-[#001e40] rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#003366] rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <div className="w-full h-full" style={{ background: "radial-gradient(circle at top right, #c4952a 0%, transparent 60%)" }} />
          </div>
          <div className="relative z-10 flex flex-col md:items-center text-center">
            <h2
              className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              Join Our Trade Network
            </h2>
            <p className="text-lg text-white/70 font-medium mb-10 max-w-lg">
              Get early access to seasonal harvests, exclusive wholesale pricing,
              and export availability updates straight to your inbox.
            </p>

            {submitted ? (
              <p className="text-[#c4952a] font-black text-xl">
                Thank you! We&apos;ll be in touch soon.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-md flex flex-col md:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#c4952a]/50"
                />
                <button
                  type="submit"
                  className="bg-[#c4952a] text-[#3d2f00] font-bold px-10 py-4 rounded-full hover:bg-[#a87818] hover:text-white transition-colors whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
