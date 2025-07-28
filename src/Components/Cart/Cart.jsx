import React from 'react';

const Cart = ({selectedProduct,price,handleRemover,hideCartMessage}) => {
    return (
        <div>
     <div className='flex justify-center items-center border-b-1 p-3 gap-1 py-4 bg-amber-100'>
        <div>
             <img className="h-8 w-8" src="https://i.ibb.co.com/KjkTXT1x/love.png" alt="" />
        </div>
        <div> 
            <p className='text-center text-2xl font-semibold'>Favorite Items </p>
        </div>
    </div>

{!hideCartMessage && selectedProduct.length === 0 && (
  <div className='text-center p-5'>
    <p className='text-xl font-semibold'>No favourites yet!</p>
    <p className='px-10'>Click the heart icon on any item to add it to your favorites</p>
  </div>
)}

         {
            selectedProduct.map((product) => (
                <div key={product.id} className='flex justify-between items-center p-3 border-1 rounded-2xl bg-black text-white m-2'>
                    <div className='flex items-center gap-2 justify-baseline'>
                        <img className="h-12 w-12" src={product.image} alt="" />
                        <p>{product.title}</p>
                        
                    </div>
                <div className='flex justify-arround items-center p-3 gap-6'>
                <p >Bids:{product.bidsCount}</p>
                <p >${product.currentBidPrice}</p>

                <button onClick={()=>handleRemover(product.id)} className='btn rounded-full font-bold text-xl hover:text-red-600 hover:bg-white bg-amber-200'>X</button>

                </div>

                    
                </div>
            ))
         }

         
        <div className='border-t-2 mb-5'>
        <div className='border-t-2 flex justify-around items-center gap-5'>
  <p className='text-2xl font-semibold'>Total Amount:</p>
  <p className='text-2xl font-semibold'>{price}</p>
</div>
        </div>
        </div>
    );
};

export default Cart;