import { FaEyeSlash, FaEye } from "react-icons/fa6";

const InputLabel = ({ label, inputType, toggle, hidePassword }) => {
  return (
    <div className="flex justify-between items-center">
      <label
        htmlFor={label}
        className="capitalize font-bold"
      >
        {label}
      </label>
      {label === "password" && (
        <div
          className="p-2"
          onClick={hidePassword}
        >
          {toggle ? <FaEyeSlash /> : <FaEye />}
        </div>
      )}
    </div>
  );
};
export default InputLabel;
