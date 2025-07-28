import { useRef } from 'react';
import React, {  useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import { toast } from 'react-hot-toast';

const Home = () => {

    // Cart Hide Message Related State
    const [hideCartMessage, setHideCartMessage] = useState(false);

const [selectedProduct,setSelectedProduct]=useState([]);

const [price,setPrice]=useState(0);

const handleAddToCart=(product,currentBidPrice)=>{
    // console.log(currentBidPrice);
    setPrice(price+currentBidPrice);

    setSelectedProduct([...selectedProduct,product]);
}
// console.log(selectedProduct);

const handleRemover=(id)=>{
    const remainigProduct = selectedProduct.filter(product => product.id !== id);
    setSelectedProduct(remainigProduct);
    setPrice(price - selectedProduct.find(product => product.id === id).currentBidPrice);
    toast.error('Item Removed Successfully ❌');
    if (remainigProduct.length === 0) {
        setHideCartMessage(false);
      }
   
}
const scrollTargetRef = useRef(null);


    return (
        <div>
            <Navbar selectedProduct={selectedProduct} price={price} scrollTargetRef={scrollTargetRef}></Navbar>
            <Banner scrollTargetRef={scrollTargetRef}></Banner>

<div  ref={scrollTargetRef} className='bg-[#ebf0f5] '>
    <div className='pt-[132px] px-15'>
    <h1 className='text-2xl font-semibold'> Active Auctions</h1>
<h2 className='text-xl mb-8'>Discover and bid on extraordinary items</h2> 
    </div>
       
<div className='products-container md:flex justify-between gap-1 '>

    <div className='w-7/10 mx-auto '>


    <Products
     handleAddToCart={handleAddToCart} 
     setHideCartMessage={setHideCartMessage} >
        
        
     </Products>


    </div>

   

    <div className='w-3/10 flex flex-col bg-base-100 rounded-lg overflow-hidden mr-12 h-5/10'>
 
    <Cart selectedProduct={selectedProduct} price={price} handleRemover={handleRemover}  hideCartMessage={hideCartMessage}></Cart>
        
    </div>
</div>

            <Footer></Footer>
        </div>
        </div>
    );
};

export default Home;