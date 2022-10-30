import React from 'react';
import { ContractFactory } from 'ethers';
import contractdet from '../smartcontracts/artifacts/contracts/Paystream.sol/Paystream.json'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useSigner } from 'wagmi';

const Gate = () => {

    const {data:signer}=useSigner();

    const deployContract=async()=>{

        console.log(contractdet)

        const factory = new ContractFactory(contractdet.abi,contractdet.bytecode,signer);
        const contract = await factory.deploy();
        console.log(contract.address);

    }

    const [showShare, setShowShare] = React.useState(false);
    const [shares,setShares]=React.useState('2')

    return ( 
        <div className='flex flex-row w-screen h-screen bg-bgcolor text-secondary' >
            <div className='flex flex-col w-[50%] p-[7vmax]' >
            <ConnectButton/>
                <p className='text-3xl font-bold '>Create Subscriptions & Licenses</p>
                <div className='flex flex-col mt-10' >
                    <p className='mb-2 text-xl font-semibold' >Name :</p>
                    <input className='bg-transparent border-[1px] border-secondary rounded-2xl px-2 py-3' placeholder='Subscription Name' />
                </div>

                <div className='flex flex-col mt-10' >
                    <p className='mb-2 text-xl font-semibold' >Price :</p>
                    <input className='bg-transparent border-[1px] border-secondary rounded-2xl px-2 py-3' placeholder='Price' />
                </div>

                <div className='flex flex-col mt-10' >
                    <p className='mb-2 text-xl font-semibold' >Membership Duration :</p>
                    <input className='bg-transparent border-[1px] border-secondary rounded-2xl px-2 py-3' type={"number"} placeholder='Subscription Name' />
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