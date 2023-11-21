import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  children: string;
  iconProp: IconDefinition;
};

const Head = ({ children, iconProp }: Props) => {
  return (
    <div className="mx-auto flex w-fit justify-center gap-3 rounded-lg bg-stone-300 px-4 py-3 shadow-md">
      <FontAwesomeIcon
        icon={iconProp}
        style={{ color: "#3e6ab6" }}
        className="h-6 w-6"
      />
      <p>{children}</p>
    </div>
  );
};

export default Head;
