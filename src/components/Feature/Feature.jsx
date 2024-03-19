import PropTypes from 'prop-types'; 
import { FaCircleCheck } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex '> <FaCircleCheck className='mt-1 mr-2'></FaCircleCheck> {feature}</p>
        </div>
    );
};
Feature.propTypes ={
    feature:PropTypes.array
}

export default Feature;