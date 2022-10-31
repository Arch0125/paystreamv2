import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='flex flex-row w-screen h-screen font-plays bg-bgcolor' > 
      <div className='flex flex-col w-[50%] pl-[5vmax] pt-[7vmax] h-screen' >
        <p className='text-[3vmax] text-primary'>The most advance <br/> On-Chain Subscriptions powered by <br/> Superfluid streams and ERC1155</p>
        <a href='/gate' ><button className='px-4 py-2 bg-bgcolor border-2 border-primary text-primary w-1/2 mt-14 rounded-2xl text-2xl' >Create a Subscription</button></a>
        <button className='px-4 py-2 bg-primary  text-bgcolor w-1/2 mt-2 rounded-2xl text-2xl' >Get a Subscription</button>
      </div>
      <div className='flex flex-col w-[50%] overflow-y-hidden' >
        <img src="https://i.ibb.co/ckLLjqd/vecteezy-3d-hand-holding-mobile-isolated-on-pastel-purple-background-9315288-582.png" alt="vecteezy-3d-hand-holding-mobile-isolated-on-pastel-purple-background-9315288-582" border="0"/>
      </div>
    </div>
  )
}
