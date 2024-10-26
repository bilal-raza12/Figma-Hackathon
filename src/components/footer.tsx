import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="">


        <div className='border-2 border-black bg-black text-white  pt-9 w-full h-[100%] bottom-0 relative pb-10'>

            <div className='flex w-[1120px] h-auto mt-10 justify-between  ml-[120px]'>
                <div className='w-[340px] h-[90px]'>
                    <h1 className='font-medium'>cyber</h1>
                    <p className="text-[14px] text-[#CFCFCF] mt-4">We are Residitial interior design firm located in Portland. Our boutique-studio offers more than</p>

                </div>
                <div className='w-[295.5px] h-[256px]'>
                    <h1 className='font-medium mb-2'>Services</h1>
                    <div className='flex flex-col items-between text-[#CFCFCF] text-[14px] list-none gap-3'>
                        <li >Bonus Programs</li>
                        <li >Git Caddrs</li>
                        <li >Credit and Payment</li>
                        <li >Service Contracts</li>
                        <li >Non Cash Account</li>
                        <li>Payment</li>

                    </div>

                </div>
                <div className='w-[295.5px] h-[256px]'>
                    <h1 className='font-medium mb-2'>Assistance to the buyer</h1>
                    <div className='flex flex-col items-between text-[#CFCFCF] text-[14px] list-none gap-3'>
                        <li >Find an Order</li>
                        <li >Terms oof Delivery</li>
                        <li >Exchange and return of goods</li>
                        <li >Guarantee</li>
                        <li >Frequently asked questions</li>
                        <li>Terms of use of the site</li>

                    </div>
                </div>
            </div>
            <div className='flex gap-8  w-[173px] h-[16px] text-white mx-auto mt-4 ml-[120px] '>
                <div className='text-white'><GrTwitter />
                </div>
                <div><FaFacebookF />
                </div>
                <div><FaTiktok />
                </div>
                <div><AiFillInstagram /></div>

            </div>
        </div>

    </footer>
      
    
  )
}

export default Footer
