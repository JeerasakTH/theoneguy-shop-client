type Props = {
  userInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: string;
  placeholderProp?: string;
  disabledProp?: boolean;
  type?: string;
};

const Input = ({
  userInput,
  children,
  placeholderProp,
  disabledProp,
  type,
}: Props) => {
  return (
    <div className="relative mx-auto w-3/4 rounded-md border border-stone-800 md:w-72 ">
      <label
        htmlFor=""
        className="absolute -top-[10px] left-3 z-50 bg-stone-50 px-2 text-sm"
      >
        {children}
      </label>
      <input
        className="w-full rounded-md bg-stone-50 px-4 py-3"
        placeholder={placeholderProp}
        disabled={disabledProp}
        type={type}
        onChange={userInput}
      />
    </div>
  );
};

export default Input;
