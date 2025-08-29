import Link from "next/link";
import Logo from "@/components/Logo";

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-slate-200 hover:text-white transition">
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-7 w-7" />
          <span className="font-semibold">Orion Apex Capital</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/insights">Insights</NavLink>
          <NavLink href="/bio">Personal Bio</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <Link href="/contact" className="btn btn-primary hidden sm:inline-flex">Partner With Us</Link>
      </div>
    </header>
  );
}