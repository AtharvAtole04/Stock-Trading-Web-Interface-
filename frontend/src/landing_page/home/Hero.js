import React from 'react';

function Hero() {
    return ( 
        <div className='container text-center py-5' style={{ minHeight: "80vh" }}>
            <img 
                src='media/images/homeHero.png' 
                alt='HeroImage' 
                className='img-fluid mb-4' 
                style={{ display: "block", margin: "0 auto", maxWidth: "900px" }}
            />

            <h1 className='mt-4'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>

            <button className='p-3 btn btn-primary fs-5 'style={{ width: "200px" }}>
                Signup Now
            </button>
        </div>
     );
}

export default Hero;
