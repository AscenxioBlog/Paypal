import React from 'react'
import { FaPaypal } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import real from './images/real.PNG'
import pay from './images/pay.png'
import pp from './images/pp-r.png'
import not from './images/not.png'

function Container() {
  return (
    <div className=' h-[100vh] w-full bg-[]'>
        <header className=" h-[80px] w-full bg-[#006EAF] grid grid-cols-[55%,42%] gap-2">
            <nav className=" bg-[] pl-[60px] pt-3">
                <ol className=' h-[40px] list1 flex justify-between text-[18px] text-white font-semibold'>
                    <li className=' text-[30px] text-white overflow-hidden'><a href="">
                        <img src={pay} alt="" className=' h-[100%] w-[100%]' />
                        </a></li>
                    <li><a href="">Summary</a></li>
                    <li><a href="">Activity</a></li>
                    <li><a href="">Send & Request</a></li>
                    <li><a href="">Wallet</a></li>
                    <li><a href="">Offers</a></li>
                    <li><a href="">Help</a></li>
                </ol>
            </nav>

            <nav className=" bg-[] pt-[10px]">
                <ol className=' flex justify-end space-x-8 items-center text-white text-[18px]'>
                    <li className=' text-[25px]'><a href=""><IoMdNotifications /></a></li>
                    <li className=' text-[25px]'><a href=""><MdOutlineSettings /></a></li>
                    <li className=' font-bold'><a href="">Log Out</a></li>
                </ol>
            </nav>
        </header>


        <main className='h-[450px] w-full bg-white relative'>
            <div className=" h-[450px] w-full bg-[] flex justify-center items-end">
                <div className=" h-[350px] w-[400px] bg-white">
                    <img src={real} alt="" className=' h-[100%] w-[100%]' />
                </div>
            </div>

            <div className=" h-[200px] w-[260px] bg-[] absolute top-3 left-[70px]">
                <div className=" h-[80px]">
                    <img src={pp} alt="" className=' h-[100%] w-[60%]'/>
                </div>
                <h1 className=' text-[25px] font-semibold'>Your account has been suspended</h1>
            </div>


            <div className="abs h-[200px] w-[250px] bg-white absolute top-[20px] right-[30px] flex flex-col items-center">
                <div className=" text-[90px] text-[#74C0FC]"><i class="fa-solid fa-spinner fa-spin-pulse" ></i></div>
                <h1 className=' text-[25px] text-[#74C0FC] font-semibold'>Waiting for paypal.....</h1>
            </div>
        </main>

        <div className=" h-[20px] bg-[] w-full flex justify-center">
            <div className=" h-[20px] w-[170px] grid grid-cols-4 gap-7  ">
                <div className="bg-[#74C0FC] rounded-[50%]"></div>
                <div className="bg-[#bcd2e2] rounded-[50%]"></div>
                <div className="bg-[#bcd2e2] rounded-[50%]"></div>
                <div className="bg-[#bcd2e2] rounded-[50%]"></div>
            </div>
        </div>

        <div className=" h-[150px] w-[250px] absolute bottom-[10px] left-[30px] ">
            <div className=" h-[40px] w-full  grid grid-cols-[20%,80%] gap-1">
                <section className='  flex items-center text-[18px]'><img src={not} alt="" /></section>
                <section className=' flex items-center text-[18px] font-semibold'>
                    <h1>Account Suspend</h1>
                </section>
            </div>

            <div className=" h-[40px] w-full  grid grid-cols-[20%,80%] gap-1">
                <section className='  flex items-center text-[18px]'><img src={not} alt="" /></section>
                <section className='  flex items-center text-[18px] font-semibold'>
                    <h1>Unlocking required</h1>
                </section>
            </div>

            <div className=" h-[40px] w-full grid grid-cols-[20%,80%] gap-1">
                <section className='  flex items-center text-[18px]'><img src={not} alt="" /></section>
                <section className='  flex items-center text-[18px] font-semibold'>
                    <h1>Unlock Fee: $200.00</h1>
                </section>
            </div>
        </div>

        <div className=" h-[100px] w-[250px] bg-[] flex flex-col items-center justify-center absolute bottom-[30px] right-[60px] font-bold">
            <h1>Acc email</h1>
            <h1>Karen_mitchellQ@live.co.uk</h1>
        </div>
      

    </div>
  )
}

export default Container
