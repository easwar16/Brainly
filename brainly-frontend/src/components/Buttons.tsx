export interface Buttonprops {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void;
}
const variantStyles = {
  primary: "bg-[#4A5BFF] text-white hover:bg-[#3E4DE5] active:bg-[#3542C7]",
  secondary:
    "bg-[#E4E6FF] text-[#4A4BFF] hover:bg-[#c2c6fb] active:bg-[#6875ff] ",
};

const sizeStyles = {
  sm: "text-sm px-3 py-1.5 rounded-md",
  md: "text-base px-4 py-2 rounded-l",
  lg: "text-lg px-6 py-3 rounded-xl",
};
export const Button = (props: Buttonprops) => {
  return (
    <button
      onClick={props.onClick}
      className={`
        inline-flex items-center gap-2 rounded-md font-medium
        ${variantStyles[props.variant]}
        ${sizeStyles[props.size]}
        transition-colors duration-200
      `}
    >
      {props.startIcon && <span>{props.startIcon}</span>}
      {props.text}
      {props.endIcon && <span>{props.endIcon}</span>}
    </button>
  );
};
