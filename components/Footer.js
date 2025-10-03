import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <Logo variant="crestWhite" size={28} />
            <h4 className="font-semibold">Orion Apex Capital</h4>
          </div>
          <p className="text-slate-300 text-sm">
            Precision strategies for sustainable growth across digital and
            real-world assets.
          </p>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Navigate</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:underline" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/insights">
                Insights
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/freelance">
                Freelance Work
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/bio">
                Bio
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/contact">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:underline" href="/legal">
                Legal
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Connect</h5>
          <p className="text-sm">
            Email:{" "}
            <a className="underline" href="mailto:contact@orionapexcapital.com">
              contact@orionapexcapital.com
            </a>
          </p>
          <div className="mt-4 flex gap-3 text-sm text-slate-300">
            <a href="#" aria-disabled="true" className="underline opacity-60">
              LinkedIn
            </a>
            <a href="#" aria-disabled="true" className="underline opacity-60">
              X
            </a>
            <a href="#" aria-disabled="true" className="underline opacity-60">
              YouTube
            </a>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <Logo variant="wordmarkWhite" size={100} className="opacity-80" alt="Orion Apex Capital wordmark" />
          </div>
          <p className="text-xs text-slate-400 mt-2">© {new Date().getFullYear()} Orion Apex Capital. All rights reserved.</p>
        </div>
      </div>

      <div className="container pb-10">
        <p className="text-[11px] text-slate-400">
          Nothing on this site constitutes financial, legal, or tax advice.
          Markets carry risk. Do your own research.
        </p>
      </div>
    </footer>
  );
}
