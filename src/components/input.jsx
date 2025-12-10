import { useForm } from "react-hook-form";

import InputLabel from "./inputLabel";

export default function Input({
  label,
  valType,
  placeholder,
  inputType,
  disable,
  toggle,
  defaultVal,
  onHidePassword,
  className,
  register,
}) {
  return (
    <>
      <InputLabel
        label={label}
        inputType={inputType}
        toggle={toggle}
        hidePassword={onHidePassword}
      />

      <input
        id={valType}
        type={inputType}
        placeholder={placeholder}
        disabled={disable}
        className={className}
        defaultValue={defaultVal}
        {...register(valType)}
      />
    </>
  );
}
