const Highlight = ({ data }) => {
    const Icon = data.icon;
    return (
        <div
            className="p-3 flex flex-col items-center gap-3 bg-primafry-light
        bg-neutral-100 rounded-md">
            <Icon
                className="text-2xl bg-primary-normal p-1.5 text-white w-8 h-8
            rounded-full"
            />
            <div
                className="flex flex-col items-center justify-center
            text-center gap-2"
            >
                <h1 className="text-xl font-heading font-bold">{data.title}</h1>
                <p className="text-sm">{data.description}</p>
            </div>
        </div>
    );
};

export default Highlight;
