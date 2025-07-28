import React from 'react';

const Banner = ({ scrollTargetRef }) => {

  const handleScroll = () => {
    scrollTargetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
    return (
        <div>
 

 <div
  className="flex items-center h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/CqmH2R9/Banner-min.jpg)",
  }}
>

  <div className=" text-neutral-content text-left">
    <div className="ml-10 w-3/6 ">
  {/* max-w-md */}
    <h1 className=" text-white text-4xl lg:text-5xl font-bold overflow-hidden  w-[50%] xl:w-full ">Bid on Unique Items from <br></br> Around The World !   .</h1>

    
      <p className="text-xl text-[#FFFFFF80] mt-5  2xl:text-3xl">
      Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>


      <button onClick={handleScroll} className="btn bg-white text-black rounded-4xl mt-5 px-6 py-3 font-semibold shadow-md hover:shadow-lg hover:bg-amber-100 hover:text-amber-900 transition-all duration-300 ease-in-out animate-bounce">
  Explore Auctions
</button>


    
    
    </div>
  </div>
</div>



        </div>
    );
};

export default Banner;