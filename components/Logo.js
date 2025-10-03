import clsx from 'clsx';

const sources = {
  crestWhite: '/images/branding/03-icon_crest_white-transparent.png',
  crestMaroonNavy: '/images/branding/03-icon_crest_maroon-navy.png',
  wordmarkWhite: '/images/branding/04-wordmark_white-transparent.png',
  wordmarkMaroonNavy: '/images/branding/04-wordmark_maroon-navy.png',
  horizontalWhite: '/images/branding/02-horizontal_primary_white-transparent.png',
  horizontalMaroonNavy: '/images/branding/02-horizontal_primary_maroon-navy.png'
};

export default function Logo({ variant = 'crestWhite', size = 32, className = '', alt = 'Orion Apex Capital' }) {
  const src = sources[variant] || sources.crestWhite;
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={clsx(className)}
    />
  );
}

export default function Logo({ className = "h-8 w-8" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Orion Apex">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00d4ff"/>
          <stop offset="100%" stopColor="#e6b800"/>
        </linearGradient>
      </defs>
      <path d="M50 8 L88 84 H12 L50 8 Z" stroke="url(#g)" strokeWidth="4" fill="transparent"/>
      <circle cx="50" cy="40" r="4" fill="#00d4ff" />
      <path d="M50 44 V70" stroke="#e6b800" strokeWidth="2" />
    </svg>
  );
}