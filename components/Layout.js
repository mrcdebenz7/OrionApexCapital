import SEOHead from "./SEOHead";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkipLink from "./SkipLink";

export default function Layout({ title, description, children }) {
  return (
    <>
      <SEOHead title={title} description={description} />
      <SkipLink />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
