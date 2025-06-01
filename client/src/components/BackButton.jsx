import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const BackButton = ({ Destination = "/ " }) => {
  return (
    <div>
      <Link to={Destination}>
        <IoArrowBack />
      </Link>
    </div>
  );
};

export default BackButton;
