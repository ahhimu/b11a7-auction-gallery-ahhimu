import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProducts/SingleProduct'

const Products = ({handleAddToCart,setHideCartMessage,}) => {

const [products,setProducts] = useState([]);

    useEffect(() => {
    
        fetch('Products.json')
            .then(response => response.json()) 
            .then(data => setProducts(data)) 
            
    }, []);


    return (
        <div className='w-[90%] mx-auto '>
        <div className="overflow-x-auto bg-amber-50 rounded-lg shadow-md ">
            <table className="w-full border-collapse text-center">
                <thead className="bg-amber-100 text-center ">
                    <tr>
                        <th className="p-3 text-left">Item</th>
                        <th className="p-3 text-right">Bid Price</th>
                        <th className="p-3 text-right">Time Left</th>
                        <th className="p-3 text-center">Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    products.map((product) => (
                        <SingleProduct key={product.id} 
                        product={product} 
                        handleAddToCart={handleAddToCart}  
                        setHideCartMessage={setHideCartMessage}                       
                        />
                    ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Products;