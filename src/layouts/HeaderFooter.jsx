import { Link } from "react-router-dom";
const HeaderFooter = ({ children }) => {
  return (
    <>
      <div>
        {/* <Link to="/projects/" className="addProjectBtn">
          Start a Beebay Project
        </Link> */}
      </div>
      {children}
      {/* <div>
        <button className="btn">See more projects</button>
      </div> */}
    </>
  );
};

export default HeaderFooter;
