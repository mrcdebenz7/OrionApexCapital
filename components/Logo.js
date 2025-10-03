import clsx from 'clsx';
import Image from 'next/image';

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
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={clsx(className)}
    />
  );
}