
import Image from 'next/image'
const Popular = () => {
  return (
    <div className='w-full h-auto flex  '>
      <div className='w-1/4 h-[620px]  flex flex-col'>
       <div className='p-5 w-[360px] h-[366px] '>
        <Image src={"/images/products.png"} alt='' width={340} height={300} className='pr-8 pb-8 mb-7'>

        </Image>
       </div>
       <div className='w-[296px] h-[208px] ml-5 mb-[60px] '>
          <h1 className='text-[33px] font-light '>Popular Products</h1>
          <p className='text-[909090] text-[14px] mt-3'>iPad combines a magnificent 10-2-inch Retina display, incredible performance, multitasking and ease of use.</p>
          <button className="w-[191px] h-[56] p-3 border-2 border-black mt-4 rounded-lg mb-4">Shop Now</button>
       </div>

      </div>
      <div className='w-1/4 h-[620px]  bg-[#F9F9F9] flex flex-col  '>
         <div className='w-[360px] h-[366px] p-5'>

      <Image src={"/images/ipadpro.png"} alt='' width={340} height={300} className='pr-8'></Image>
         </div>
         <div className='w-[296px] h-[208px] ml-5 mb-[60px] mt-5'>
            <h1 className='text-[33px] font-light mt-4'>Ipad Pro</h1>
            <p className='text-[#909090] text-[14px] mt-3'>iPad combines a magnificent 10-2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="w-[191px] h-[56] p-3 border-2 border-black mt-4 rounded-lg mb-4">Shop Now</button>
           
         </div>

      </div>
      <div className='w-1/4 h-[620px] bg-[#EAEAEA] flex flex-col  '>
      <div className='w-[360px] h-[366px] p-5'>

      <Image src={"/images/SAMSUNG.png"} alt='' width={340} height={300} className='pr-8'></Image>
         </div>
         <div className='w-[296px] h-[208px] ml-5 mb-[60px] mt-5'>
            <h1 className='text-[33px] font-light mt-5'>Samsung Galaxy</h1>
            <p className='text-[#909090] text-[14px] mt-4'>iPad combines a magnificent 10-2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="w-[191px] h-[56] p-3 border-2 border-black mt-4 rounded-lg mb-4">Shop Now</button>
           
         </div>
      </div>
      <div className='w-1/4 h-[620px] bg-[#2c2c2c] flex flex-col  '>
      <div className='w-[360px] h-[366px] p-5'>

<Image src={"/images/SAMSUNG.png"} alt='' width={340} height={300} className='pr-8'></Image>
   </div>
   <div className='w-[296px] h-[208px] ml-5 mb-[60px] mt-5'>
            <h1 className='text-[33px] font-light mt-5 text-white'>Macbook Pro</h1>
            <p className='text-[#909090] text-[14px] mt-4'>iPad combines a magnificent 10-2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="w-[191px] h-[56] text-white  p-3 border-2 border-white mt-4 rounded-lg mb-4">Shop Now</button>
           
         </div>
      </div>
    </div>
  )
}

export default Popular
