const CtaButton = ({ text }) => {
    return (
        <button
            className="p-4 rounded-md w-fit text-white font-bold outline-none border-0 bg-primary-normal"
        >
            {text}
        </button>
    );
};

export default CtaButton;
