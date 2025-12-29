const CtaButton = ({ data = "", disable, text, type, handler = () => {} }) => {
    return (
        <button
          
            className={`py-2 px-4 rounded-md w-full font-bold outline-none
            border-0 ${type ? "bg-primary-normal text-white" : "bg-gray-100"}
            ${disable && "opacity-50 cursor-not-allowed"}`}
            onClick={() => handler(data)}
        >
            {text}
        </button>
    );
};

export default CtaButton;
