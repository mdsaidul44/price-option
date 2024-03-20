import PropTypes from 'prop-types';


const Link = ({route}) => {
    return (
        
        <div>
            <li className="mr-10 px-6 hover:bg-yellow-300">
            <a href={route.path}></a>{route.name}
        </li>
        {/* <div >
            <li className='mr-10 px-6 hover:bg-yellow-300'><a href={route.path}></a>{route.name}</li>
        </div> */}
        </div>
        
    );
};
Link.propTypes={
    route:PropTypes.object
}
export default Link;