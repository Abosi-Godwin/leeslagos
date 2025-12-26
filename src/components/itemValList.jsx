const ItemValList = ({ label, datas, tagLine }) => {
    return (
        <div className="py-4">
            <h1 className="text-lg font-bold">{label}</h1>
            <div className="py-2">
                {datas.map((data,ind) => (
                    <h1 key={ind} className="font-bold">
                        {data.label}:
                        <span className="font-normal capitalize pl-2">
                            {data.value}
                        </span>
                    </h1>
                ))}
            </div>
            {tagLine && <p className="text-sm tracking-tight">{tagLine}</p>}
        </div>
    );
};
export default ItemValList;
