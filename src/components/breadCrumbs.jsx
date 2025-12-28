import { Link } from "react-router-dom";

const BreadCrumbs = ({ paths }) => {
  let breadPath = "";
 
  return (
    <ul className="p-2 bg-gray-100 text-neutral-900">
      <Link to="/">Home</Link>
      {paths.map((item, index) => {
        breadPath += `/${item}`;
        const isLast = index === paths.length - 1;

        return isLast ? (
          <span
            key={breadPath}
            className="text-neutral-700"
          >
            /{item}
          </span>
        ) : (
          <span key={breadPath}>
            /<Link to={breadPath}>{item}</Link>
          </span>
        );
      })}
    </ul>
  );
};

export default BreadCrumbs;
