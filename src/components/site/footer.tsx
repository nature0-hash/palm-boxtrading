"use client";

import { Mail, MessageCircle, Clock, ArrowUp, Globe } from "lucide-react";
import { navLinks, siteConfig, whatsappLink } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#082920] text-white mt-auto">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand column - wider */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#0C3B2E] to-[#145E48] flex items-center justify-center border border-[#C97B3C]/30">
                <PalmMark className="h-6 w-6 text-[#C97B3C]" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C97B3C] font-semibold">
                  Palmbox
                </span>
                <span className="text-base font-extrabold tracking-tight text-white">
                  TRADING LIMITED
                </span>
              </div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed mb-5 max-w-xs">
              Your trusted global gift card partner. Secure, instant, and
              reliable gift card trading worldwide — paid out in minutes.
            </p>

            {/* Quick WhatsApp CTA - no phone number shown */}
            <a
              href={whatsappLink("Hello Palmbox Trading, I'd like to trade a gift card.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with us
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C97B3C] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-[#C97B3C] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C97B3C] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-white/65 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                Gift Card Trading
              </li>
              <li className="text-sm text-white/65 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                Bulk Gift Card Trading
              </li>
              <li className="text-sm text-white/65 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                Instant Cash Payouts
              </li>
              <li className="text-sm text-white/65 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                Global Money Payouts
              </li>
              <li className="text-sm text-white/65 inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-white/30" />
                24/7 WhatsApp Support
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#C97B3C] mb-4">
              Reach Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-white/65 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 text-[#C97B3C] flex-shrink-0" />
                  <span>
                    <span className="block text-xs text-white/45">Email</span>
                    {siteConfig.emailDisplay}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/65">
                <Clock className="h-4 w-4 mt-0.5 text-[#C97B3C] flex-shrink-0" />
                <span>
                  <span className="block text-xs text-white/45">Hours</span>
                  {siteConfig.hours}
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/65">
                <Globe className="h-4 w-4 mt-0.5 text-[#C97B3C] flex-shrink-0" />
                <span>
                  <span className="block text-xs text-white/45">Website</span>
                  {siteConfig.domain}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar - this is the ONLY place the WhatsApp phone number is visible */}
      <div className="border-t border-white/10 bg-[#0C3B2E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/55 text-center md:text-left">
              &copy; {year} {siteConfig.brand}. All rights reserved.
            </p>

            {/* WhatsApp phone number - visibly displayed ONLY here */}
            <a
              href={whatsappLink("Hello Palmbox Trading, I'd like to trade a gift card.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#C97B3C] transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              WhatsApp: {siteConfig.whatsappDisplay}
            </a>

            <a
              href="#home"
              className="text-xs text-white/55 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              Back to top
              <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PalmMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M11.6 22h.8c.3 0 .5-.2.5-.5v-7.4c0-.3-.2-.5-.5-.5h-.8c-.3 0-.5.2-.5.5v7.4c0 .3.2.5.5.5z" />
      <path d="M12 4.5c-1.2-1.5-3.4-2.2-5.4-1.7-.3.1-.4.4-.2.6 1.4 1.6 3.4 2.2 5.6 1.8.2 0 .3-.2.3-.4V4.9c0-.1 0-.3-.1-.4h-.2z" />
      <path d="M12 4.5c1.2-1.5 3.4-2.2 5.4-1.7.3.1.4.4.2.6-1.4 1.6-3.4 2.2-5.6 1.8-.2 0-.3-.2-.3-.4V4.9c0-.1 0-.3.1-.4h.2z" />
      <path d="M12 6.2c-2-.8-4.3-.5-6 .8-.2.2-.2.5.1.6 2 .9 4.3.5 6-.9.1 0 .1-.2.1-.3v-.1z" />
      <path d="M12 6.2c2-.8 4.3-.5 6 .8.2.2.2.5-.1.6-2 .9-4.3.5-6-.9-.1 0-.1-.2-.1-.3v-.1z" />
      <path d="M12 8.2c-1.6-.4-3.4.1-4.6 1.4-.2.2-.1.5.2.5 1.7.3 3.4-.3 4.5-1.6.1-.1.1-.2.1-.3v-.1z" />
      <path d="M12 8.2c1.6-.4 3.4.1 4.6 1.4.2.2.1.5-.2.5-1.7.3-3.4-.3-4.5-1.6-.1-.1-.1-.2-.1-.3v-.1z" />
      <path d="M12 10.3c-1 .1-1.9.8-2.4 1.7-.1.2 0 .5.3.5 1-.1 1.9-.7 2.4-1.7.1-.2 0-.4-.3-.5z" />
      <path d="M12 10.3c1 .1 1.9.8 2.4 1.7.1.2 0 .5-.3.5-1-.1-1.9-.7-2.4-1.7-.1-.2 0-.4.3-.5z" />
    </svg>
  );
}
