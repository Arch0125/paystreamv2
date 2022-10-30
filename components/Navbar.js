import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

const Navbar = () => {
    return ( 
        <div className='flex flex-row justify-between item-center w-screen bg-bgcolor h-fit ml-5' >
            <ConnectButton/>
        </div>
     );
}
 
export default Navbar;