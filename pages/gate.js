import React from 'react';

const Gate = () => {

    const [showShare, setShowShare] = React.useState(false);
    const [shares,setShares]=React.useState('2')

    return ( 
        <div className='flex flex-row w-screen h-screen bg-slate-900' >
            <div className='flex flex-col w-[50%] p-[7vmax]' >
                <p className='text-3xl font-bold text-white'>Create Subscriptions & Licenses</p>
                <div className='flex flex-col mt-10' >
                    <p className='mb-2 text-xl font-semibold' >Name :</p>
                    <input className='bg-transparent border-[1px] border-white rounded-2xl px-2 py-3' placeholder='Subscription Name' />
                </div>

                <div className='flex flex-col mt-10' >
                    <p className='mb-2 text-xl font-semibold' >Price :</p>
                    <input className='bg-transparent border-[1px] border-white rounded-2xl px-2 py-3' placeholder='Price' />
                </div>

                <div className='flex flex-col mt-10' >
                    <p className='mb-2 text-xl font-semibold' >Membership Duration :</p>
                    <input className='bg-transparent border-[1px] border-white rounded-2xl px-2 py-3' type={"number"} placeholder='Subscription Name' />
                </div>

                <div className='flex flex-col mt-10' >
                    <p className='mb-2 text-xl font-semibold' >Shareable <input className='ml-3'  onClick={() => setShowShare(!showShare)} type={"checkbox"} /> </p>
                    {showShare ? <input className='bg-transparent border-[1px] border-white rounded-2xl px-2 py-3' placeholder='Shared Addresses' type={"number"} onChange={(e)=>setShares(e.target.value)} /> : <p>Default 1 Address</p>}
                </div>

                <button className='w-full h-fit bg-white mt-14 text-slate-900 text-xl py-4 rounded-3xl ' >Create NFT</button>
            </div>
        </div>
     );
}
 
export default Gate;