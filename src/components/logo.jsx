 import { Link } from "react-router-dom";
 
 const Logo = ({ location }) => {
    return (
        <Link to="/" className="flex items-center">
            <img
                src="/logo.png"
                className={`${location === "header" ? "w-24" : "w-full"} h-auto block`}
            />
        </Link>
    );
};

export default Logo;
 