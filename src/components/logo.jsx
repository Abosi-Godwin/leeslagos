import { Link } from "react-router-dom";

const Logo = ({ location }) => {
    return (
        <Link to="/">
            <img
                src="/logo.png"
                className={`${location === "header" ? "w-24" : "w-full"} h-fit`}
            />
            
        </Link>
    );
};

export default Logo;
