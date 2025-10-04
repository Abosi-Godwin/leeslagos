import { highlights } from "../assets/mockDatas";
import Highlight from "../components/highlight";
const Highlights = () => {
    return (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:px-3">
            {highlights.map(data => (
                <Highlight data={data} key={data.id} />
            ))}
        </div>
    );
};

export default Highlights;
