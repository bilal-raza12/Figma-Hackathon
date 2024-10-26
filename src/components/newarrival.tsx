
import { IoIosHeartEmpty } from "react-icons/io";
import Image from 'next/image';
const NewProducts = [
    {
        id:1,
        imageUrl : "/images/newiphone.png",
        title : "Apple Iphone 14 Pro Max ",
        specs:"128GB Deep Purple",
        price : "$900",

    },
    {
        id:2,
        imageUrl:"/images/newcamera.png",
        title:"Black Magic Pocket Cinema ",
        specs:"Camera 6k",
        price:"$2535",
    },
    {
        id:3,
        imageUrl:"/images/newwatch.png",
        title:"Apple Watch Series 9GPS ",
        specs:"41mm Starlight Aluminium",
        price:"$399",
    },
    {
        id:4,
        imageUrl:"/images/newheadphone.png",
        title:"Airpods Max Silver ",
        specs:"Starlight Aluminium",
        price:"$549",
    },
    {
        id:5,
        imageUrl:"/images/newsimplewatch.png",
        title:"Samsung Galaxy Watch6 ",
        specs:"Classic 47mm Black",
        price:"$369",
    },
    {
        id:6,
        imageUrl:"/images/newgalaxy.png",
        title:"Galaxy Z Fold5 Unlocked |",
        specs:" 256GB Phantom Black",
        price:"$1799",
    },
    {
        id:7,
        imageUrl:"/images/newairpods.png",
        title:"Galaxy Buds FE ",
        specs:"Graphite",
        price:"$99.99",
    },
    {
        id:8,
        imageUrl:"/images/newipad.png",
        title:"Apple iPad 9.10.2\" 64GB Wi-Fi ",
        specs:"Silver (MK2L3) 2021",
        price:"$398",
    },

]

const NewArrival = () => {
  return (
    <div className='w-full h-[1056px] '>
        <div className='w-[1120px] h-[32px]  my-10 mx-auto'>
            <ul className='flex gap-3 items-center'>
                <li className='text-black text-[14px] font-medium border-b-2 border-black'>New Arrival</li>
                <li className='text-[14px] font-medium text-[#8B8B8B]'>Bestseller</li>
                <li className='text-[14px] font-medium text-[#8B8B8B]'>Featured Products</li>
            </ul>

        </div>
          <div className='w-[1120px] h-auto  grid grid-cols-4 gap-5 justify-between  mx-auto'>
            {NewProducts.map((newproducts) => (
               <div key={newproducts.id} className='bg-[#F6F6F6] p-6 w-[268px] h-[432px]'>
                  <div className=' flex justify-end w-[230px] h-[20px]  my-6 '>
                  <IoIosHeartEmpty className='w-[20px] h-[20px]'/>
                  </div>
                  <div className='mx-auto flex flex-col'>
                        <Image src={newproducts.imageUrl} alt='' width={160} height={160} className='mx-auto mt-4'></Image>
                        <div className="flex flex-col w-[236px] h-[48px] mt-3">

                        <div className=' mx-auto text-black text-[16px]'>
                            {newproducts.title}
                            </div>
                            <div className='mx-auto'>{newproducts.specs}</div>  
                            <div className='w-[236px] h-[24px] font-semibold text-[24px] mx-[80px] mt-3'>{newproducts.price}</div>   

                        </div>
                  </div>
               </div>
            ))}

        </div>
      
    </div>
  )
}

export default NewArrival
