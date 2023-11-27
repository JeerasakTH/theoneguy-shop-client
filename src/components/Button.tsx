type Props = {
  children: string;
  color: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const Button = ({ children, color, type, onClick }: Props) => {
  return (
    <button
      className={`mx-auto rounded-md ${color} px-4 py-3 shadow-lg`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
