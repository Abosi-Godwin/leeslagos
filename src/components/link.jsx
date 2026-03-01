import { Link } from "react-router-dom";

const LinkTo = ({ to, text, type }) => {
    return (
        <Link
            to={to}
            className={`flex items-center justify-center font-extrabold
      rounded-md p-2 uppercase w-full hover:bg-primary-normal ${
          type === "secondary"
              ? "bg-gray-200 text-neutral-900"
              : "bg-primary-dark text-white"
      }`}
        >
            {text}
        </Link>
    );
};

export default LinkTo;
