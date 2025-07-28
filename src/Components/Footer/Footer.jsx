import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 mt-28">
            <div className="flex-1">
    <span className='text-[#003EA4] font-semibold text-2xl'>Auction<span className='text-3xl text-[#FFD337] font-bold'>Gallery</span></span>
  </div>
  <nav>
    <div className="grid grid-flow-col gap-4 font-semibold">
      <a>
        <span>Bid.</span>
      </a>
      <a>
        <span>Win.</span>
      </a>
      <a>
       <span>Won.</span>
       
      </a>

    </div>


    <ul className="menu menu-horizontal gap-10 font-semibold">
      <li><a>Home</a></li>
      <li><a>Auctions</a></li>
      <li><a>Categories</a></li>
      <li><a>How to works</a></li>
    </ul>
    
  </nav>
  
  <aside >
    
    <small> © {new Date().getFullYear()} - All right reserved</small>

   
  </aside>
</footer>
        </div>
    );
};

export default Footer;