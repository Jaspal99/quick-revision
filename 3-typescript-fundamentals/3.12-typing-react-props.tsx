type ButtonProps = {
  variant: "primary" | "secondary";
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  variant,
  disabled,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button data-variant={variant} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
