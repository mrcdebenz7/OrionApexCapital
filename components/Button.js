import clsx from "clsx";

export default function Button({
  as: Tag = "a",
  href,
  children,
  variant = "primary",
  className,
  ...props
}) {
  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-lg overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black shadow-lg shadow-gold-500/25 hover:shadow-xl hover:shadow-gold-500/50 focus:ring-gold-500",
    secondary: "border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black shadow-lg shadow-teal-400/25 hover:shadow-xl hover:shadow-teal-400/50 focus:ring-teal-400",
    outline: "border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 shadow-lg hover:shadow-xl focus:ring-white",
    ghost: "text-neutral-300 hover:text-white hover:bg-white/5 focus:ring-neutral-400"
  };

  const variantStyles = variants[variant] || variants.primary;

  return (
    <Tag 
      href={href} 
      className={clsx(baseStyles, variantStyles, className)} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
    </Tag>
  );
}

