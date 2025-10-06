const CtaButton = ({ data, text, type, handler = () => {} }) => {
    return (
        <button
            className={`py-2 px-4 rounded-md w-fit font-bold
            outline-none border-0 ${
                type ? "bg-primary-normal text-white" : "bg-gray-100"
            }`}
            onClick={() => handler(data)}
        >
            {text}
        </button>
    );
};

export default CtaButton;
