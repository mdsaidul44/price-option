import PropTypes from 'prop-types';


const Link = ({route}) => {
    return (
        
        <li className="mr-10 px-6 hover:bg-yellow-300">
            <a href={route.path}></a>{route.name}
        </li>
    );
};
Link.propTypes={
    route:PropTypes.objcet
}
export default Link;