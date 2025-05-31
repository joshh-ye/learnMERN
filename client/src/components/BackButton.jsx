import { Link } from 'react-router-dom'
import { AiFillAlipayCircle } from "react-icons/ai";

const BackButton = ({Destination = '/ '}) => {
  return (
    <div>
        <Link to = {Destination}>
        <AiFillAlipayCircle />
        </Link>
    </div>
  )
}

export default BackButton