
import Image from 'next/image'
const Hero = () => {
  return (
   
   <div className='bg-[#211C24]  w-full h-[100vh] flex items-center gap-0   m-0 flex-col md:flex-row '>
    <div className='px-2  h-[255px] w-[700px]  my-auto ml-[115px] pt-7 leading-tight flex flex-col mt-[80px]'>
       <h2 className='font-semibold text-[25px]  text-[#909090] opacity-100'>Pro.Beyond.</h2>
       <h1 className='font-thin font-inter text-[86px] text-[#FFFFFF] traching-tighter leading-tight '>IPhone 14 <span className='font-semibold text-[#FFFFFF] text-[86px]'>Pro</span></h1>
       <h1 className='font-medium text-[18px] text-[#909090] mb-6'>Created to change everything for the better. For Everyone</h1>
       <button className='p-4 mb-7 border-2 border-white text-[#ffffff] rounded-lg w-[191px]'>Shop Now</button>
    </div>
    <div className=' mr-[20px]   '>
       <Image src={"/images/Iphone Image.png"} alt='' width={406} height={600} className=''></Image>
    </div>
   </div>
   
  )
}

export default Hero
