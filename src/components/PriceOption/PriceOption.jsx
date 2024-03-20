import PropTypes from 'prop-types'; 
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name,price,features} = option;
    return (
        <div className='bg-blue-500 p-4 text-white rounded-md flex flex-col text-center'>
            <h1 >
                <span className='text-7xl font-bold'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h1>
            <h4 className='text-5xl text-center my-4'>{name}</h4>
           <div className='pl-6 flex-grow'>
           {
                features.map(feature=> <Feature key={feature.index} feature={feature}></Feature>)
            }
           </div>
           <button className='mt-12 bg-green-600 hover:bg-green-900 w-full py-3 rounded-xl font-bold'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes ={
    option:PropTypes.object
}
export default PriceOption;