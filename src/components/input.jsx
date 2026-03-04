import InputLabel from "./inputLabel";

export default function Input({
    label,
    valType = "",
    placeholder,
    inputType,
    disable,
    toggle,
    defaultVal,
    onHidePassword,
    className,
    register,errors,
    config // <-- Your validation rules
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
                /* Pass the config object as the second argument to register! */
                {...register(valType, config || {})}
            />
            {errors?.[valType] && (
                <span className="text-red-500 text-xs mt-1">
                    {errors[valType]?.message}
                </span>
            )}
        </>
    );
}
