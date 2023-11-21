type Props = {
  children: string;
  color: string;
  onClick?: () => void;
};

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button
      className={`mx-auto rounded-md ${color} px-4 py-3 shadow-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
