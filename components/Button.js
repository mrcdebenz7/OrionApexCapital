import clsx from "clsx";

export default function Button({
  as: Tag = "a",
  href,
  children,
  variant = "primary",
  className,
  ...props
}) {
  const base =
    "btn " +
    (variant === "primary"
      ? "btn-primary"
      : variant === "secondary"
      ? "btn-secondary"
      : "");

  return (
    <Tag href={href} className={clsx(base, className)} {...props}>
      {children}
    </Tag>
  );
}

