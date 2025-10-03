export function Card({ children, as: Tag = "div", className = "" }) {
  return <Tag className={"card " + className}>{children}</Tag>;
}

