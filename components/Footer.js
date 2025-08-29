import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="font-semibold mb-3">Orion Apex Capital</h4>
          <p className="text-slate-300 text-sm">
            Precision strategies for sustainable growth across digital and real‑world assets.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Navigate</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/insights" className="hover:underline">Insights</Link></li>
            <li><Link href="/bio" className="hover:underline">Personal Bio</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/legal" className="hover:underline">Legal</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Connect</h5>
          <p className="text-sm">Email: <a className="underline" href="mailto:contact@orionapexcapital.com">contact@orionapexcapital.com</a></p>
          <div className="mt-4 flex gap-3 text-sm text-slate-300">
            <a href="#" aria-disabled className="underline opacity-60">LinkedIn</a>
            <a href="#" aria-disabled className="underline opacity-60">X</a>
            <a href="#" aria-disabled className="underline opacity-60">YouTube</a>
          </div>
          <p className="text-xs text-slate-400 mt-6">
            © {new Date().getFullYear()} Orion Apex Capital. All rights reserved.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <p className="text-[11px] text-slate-400">
          Nothing on this site constitutes financial, legal, or tax advice. Markets carry risk. Do your own research.
        </p>
      </div>
    </footer>
  );
}