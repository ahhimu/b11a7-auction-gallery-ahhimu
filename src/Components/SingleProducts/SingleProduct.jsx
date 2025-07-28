import { useState } from "react";
import { toast } from 'react-hot-toast';

const SingleProduct = ({ product, handleAddToCart,setHideCartMessage }) => {

    // Button Disable Related State
    const [status,setStatus]=useState(false);

    // Hert Icon Related State
    const [isFavorited, setIsFavorited] = useState(false);

    const { title,  currentBidPrice, timeLeft,  image } = product;


    const handleSelect=()=>{
        handleAddToCart(product,currentBidPrice);




        // Hert Clcicked Calling Vlaue Changed
        setIsFavorited(true);

        setHideCartMessage(true);
        setStatus(true);
        toast.success('❤️ Item Added to Favourites!');
    }
    
    return (
        <tr className="border-t border-amber-200 hover:bg-amber-50">
        <td className="p-3 flex items-center">
            <img src={image} alt={title} className="w-16 h-16 object-cover rounded mr-3" />
            <span className="font-medium">{title}</span>
        </td>
        <td className="p-3 text-right font-bold">${currentBidPrice.toFixed(2)}</td>
        <td className="p-3 text-right">{timeLeft}</td>
        <td className="text-center flex items-center justify-center"> 

            <button disabled={status} onClick={handleSelect} className={`rounded-full text-white px-1 py-1 font-semibold hover:bg-[#FFD337]  transition duration-300 flex items-center justify-center  ${status ? 'cursor-not-allowed' : 'cursor-pointer'}`}>   
                
                
                <img className="h-8 w-8" src={
                    isFavorited? "https://i.ibb.co.com/xKwWkjZY/letter.png" : "https://i.ibb.co.com/bjv8b96y/heart.png"
                }
                 alt="" />


            </button>
            
            </td>
    </tr>


    );
};

export default SingleProduct;