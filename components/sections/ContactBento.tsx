"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send, Clock } from "lucide-react";

export default function ContactBento() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Wholesale Inquiry",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section className="px-8 py-16 bg-[#f3f3f6]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* ── Inquiry Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm"
          >
            <h2
              className="text-3xl font-black mb-8 tracking-tight text-[#1a1c1e]"
              style={{ fontFamily: "Epilogue, sans-serif" }}
            >
              Drop An Inquiry
            </h2>

            {success ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#001e40] rounded-full flex items-center justify-center">
                  <Send size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-[#1a1c1e]">Message Sent!</h3>
                <p className="text-[#43474e]">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                  ].map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="text-xs font-bold text-[#43474e] px-1 uppercase tracking-wider">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full bg-[#eaeaed] border-none rounded-[1rem] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#001e40] text-[#1a1c1e]"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#43474e] px-1 uppercase tracking-wider">
                    Inquiry Type
                  </label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full bg-[#eaeaed] border-none rounded-[1rem] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#001e40] text-[#1a1c1e] appearance-none"
                  >
                    <option>Wholesale Inquiry</option>
                    <option>Export Partnership</option>
                    <option>Product Availability</option>
                    <option>Sustainability Inquiry</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#43474e] px-1 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your sourcing needs..."
                    rows={4}
                    required
                    className="w-full bg-[#eaeaed] border-none rounded-[1rem] py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#001e40] text-[#1a1c1e] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#001e40] text-white py-5 rounded-full font-black text-lg shadow-lg hover:bg-[#001229] transition-colors flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  <Send size={18} />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* ── Side Details ── */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#dededf] p-8 rounded-[2rem] flex items-start gap-6 hover:bg-[#e4e4e8] transition-colors group"
            >
              <div className="bg-[#003366] p-4 rounded-[1rem] text-white shrink-0">
                <Mail size={22} />
              </div>
              <div>
                <h3
                  className="text-xl font-black mb-2 tracking-tight text-[#1a1c1e]"
                  style={{ fontFamily: "Epilogue, sans-serif" }}
                >
                  Email Our Desk
                </h3>
                <p className="text-[#43474e] font-medium mb-4 text-sm">
                  For wholesale orders, sourcing inquiries, and general questions.
                </p>
                <a
                  href="mailto:sales@adaleseafood.com"
                  className="text-[#001e40] font-bold text-lg underline decoration-2 underline-offset-4 group-hover:text-[#001229]"
                >
                  sales@adaleseafood.com
                </a>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#001229] text-white p-8 rounded-[2rem] flex items-start gap-6 relative overflow-hidden"
            >
              <div className="bg-[#003366] p-4 rounded-[1rem] text-white relative z-10 shrink-0">
                <MessageCircle size={22} />
              </div>
              <div className="relative z-10">
                <h3
                  className="text-xl font-black mb-2 tracking-tight"
                  style={{ fontFamily: "Epilogue, sans-serif" }}
                >
                  WhatsApp Direct
                </h3>
                <p className="text-white/60 font-medium mb-4 text-sm">
                  Immediate assistance for urgent orders and daily availability.
                </p>
                <p className="font-bold text-2xl tracking-tighter text-[#c4952a]">
                  +252 61 444 9036
                </p>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <MessageCircle size={160} />
              </div>
            </motion.div>

            {/* HQ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-[2rem] border-l-8 border-[#001e40] shadow-sm"
            >
              <h3
                className="text-xl font-black mb-6 tracking-tight text-[#1a1c1e] flex items-center gap-2"
                style={{ fontFamily: "Epilogue, sans-serif" }}
              >
                <MapPin size={20} className="text-[#001e40]" />
                Mogadishu HQ
              </h3>
              <div className="space-y-4 font-medium text-[#43474e] text-sm">
                <p>
                  Hedan District
                  <br />
                  Mogadishu, Somalia
                </p>
                <div className="pt-4 flex flex-col gap-2">
                  <div className="flex justify-between border-b border-[#eaeaed] pb-2">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> Mon – Fri
                    </span>
                    <span className="text-[#1a1c1e] font-bold">8 AM – 6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> Sat
                    </span>
                    <span className="text-[#1a1c1e] font-bold">9 AM – 2 PM</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
