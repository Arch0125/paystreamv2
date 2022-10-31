import React, { useState } from 'react';
import { ContractFactory, ethers, logger } from 'ethers';
import contractdet from '../smartcontracts/artifacts/contracts/Paystream.sol/Paystream.json'
import loggerdet from '../smartcontracts/artifacts/contracts/Logger.sol/Logger.json'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSigner } from 'wagmi';

const Gate = () => {

    const {data:signer}=useSigner();

    const loggercontract = new ethers.Contract("0xc244803e413669f4F0093D01e4523658705DaeDF",loggerdet.abi,signer);

    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[duration,setDuration]=useState('');
    const [shares,setShares]=React.useState('1')

    var uri={
        "name":`${name}`,
        "price":`${price}`,
        "duration":`${duration}`,
        "shares":`${shares}`
    }


    const deployContract=async()=>{

        console.log(contractdet)

        const factory = new ContractFactory(contractdet.abi,contractdet.bytecode,signer);
        const contract = await factory.deploy();
        console.log(contract.address);
        var addr = contract.address;
        await loggercontract.AddNft(contract.address);
        const nftcontract = new ethers.Contract(addr,contractdet.abi,signer);
        await nftcontract.setURI(JSON.stringify(uri));

    }

    const [showShare, setShowShare] = React.useState(false);

    return ( 
        <div className='flex flex-row w-screen h-screen bg-bgcolor text-secondary' >
            <div className='flex flex-col w-[50%] p-[7vmax]' >
                <p className='text-3xl font-bold '>Create Subscriptions & Licenses</p>
                <div className='flex flex-col mt-10' >
                    <p className='mb-2 text-xl font-semibold' >Name :</p>
                    <input onChange={(e)=>setName(e.target.value)} className='bg-transparent border-[1px] border-secondary rounded-2xl px-2 py-3' placeholder='Subscription Name' />
                </div>

                <div className='flex flex-col mt-10' >
                    <p className='mb-2 text-xl font-semibold' >Price :</p>
                    <input onChange={(e)=>setPrice(e.target.value)} className='bg-transparent border-[1px] border-secondary rounded-2xl px-2 py-3' placeholder='Price' />
                </div>

                <div className='flex flex-col mt-10' >
                    <p className='mb-2 text-xl font-semibold' >Membership Duration :</p>
                    <input onChange={(e)=>setDuration(e.target.value)} className='bg-transparent border-[1px] border-secondary rounded-2xl px-2 py-3' type={"number"} placeholder='Subscription Name' />
                </div>

                <div className='flex flex-col mt-10' >
                    <p className='mb-2 text-xl font-semibold' >Shareable <input className='ml-3 text-white'  onClick={() => setShowShare(!showShare)} type={"checkbox"} /> </p>
                    {showShare ? <input className='bg-transparent border-[1px] border-secondary rounded-2xl px-2 py-3' placeholder='Shared Addresses' type={"number"} onChange={(e)=>setShares(e.target.value)} /> : <p>Default 1 Address</p>}
                </div>

                <button className='w-full h-fit bg-primary text-white mt-14 text-xl py-4 rounded-3xl ' onClick={()=>deployContract()} >Create NFT</button>
            </div>
            <div className='flex flex-col w-[50%] h-screen justify-center items-center ' >
            <img src="https://i.ibb.co/HP08p56/vecteezy-white-clipboard-task-management-todo-check-list-efficient-8879446-261.png" alt="vecteezy-white-clipboard-task-management-todo-check-list-efficient-8879446-261" border="0"/>
            </div>
        </div>
     );
}
 
export default Gate;