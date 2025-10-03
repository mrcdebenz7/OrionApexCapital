export default function LogoGrid() {
  const logos = [
    "03-icon_crest_white-transparent.png",
    "04-wordmark_white-transparent.png",
    "03-icon_crest_white-transparent.png",
    "04-wordmark_white-transparent.png",
    "03-icon_crest_white-transparent.png",
    "04-wordmark_white-transparent.png"
  ];

  return (
    <div className="container py-10">
      <p className="text-center text-slate-400 text-sm mb-6">
        Operators & Partners We've Worked With
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-60">
        {logos.map((src, i) => (
          <img
            key={i}
            src={`/images/branding/${src}`}
            alt="Partner logo"
            className="h-8 mx-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}

