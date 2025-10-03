import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-900/70 backdrop-blur-md">
      <div className="container py-4 flex items-center justify-between">
        <Link className="flex items-center gap-3" href="/">
          <img
            src="/images/branding/03-icon_crest_white-transparent.png"
            alt="Orion Apex"
            className="h-8 w-8"
          />
          <span className="font-semibold">Orion Apex Capital</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:text-white" href="/about">
            About
          </Link>
          <Link className="hover:text-white" href="/services">
            Services
          </Link>
          <Link className="hover:text-white" href="/insights">
            Insights
          </Link>
          <Link className="hover:text-white" href="/freelance">
            Freelance Work
          </Link>
          <Link className="hover:text-white" href="/bio">
            Bio
          </Link>
          <Link className="hover:text-white" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact">Partner With Us</Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
          className="md:hidden rounded p-2 border border-white/10"
        >
          ≡
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container py-4 grid gap-3">
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/insights" onClick={() => setOpen(false)}>
              Insights
            </Link>
            <Link href="/freelance" onClick={() => setOpen(false)}>
              Freelance Work
            </Link>
            <Link href="/bio" onClick={() => setOpen(false)}>
              Bio
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <Button href="/contact" className="mt-2">
              Partner With Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
