import "@/styles/globals.css";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
import CookieConsent from "@/components/CookieConsent";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const consent = localStorage.getItem('consent_analytics');
    if (consent === 'granted') {
      track("page_view", { path: window.location.pathname });
    }
  }, []);

  return <>
    <Component {...pageProps} />
    <CookieConsent />
  </>;
}
