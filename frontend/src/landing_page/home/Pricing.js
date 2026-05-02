import React from 'react';

function Pricing() {
    return ( 
        <div className='cointainer p-5 '>
            <div className='row p-5'>
                <div className='col-4 p-5'>
                    <h1>Unbeatable pricing</h1>
                    <p>we poineered the concept of discount broking and price transparency in India. Flat fees and no. hidden charges.</p>
                    <a href='www.def.com'>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                </div>
                <div className='col-2'>

                </div>
                <div className='col-6 p-3'>
                    <div className='row text-center p-3'>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free eqity delievery and<br/> direct mutual funds</p>
                        </div>
                        <div className='col p-3 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Infrday and</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Pricing;