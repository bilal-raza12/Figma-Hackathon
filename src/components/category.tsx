
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import Image from "next/image";
const Category = () => {
  return (
    <div className="h-[352px] w-full bg-[#FAFAFA]  ">
      <div className="my-[8%] px-auto ">
        <div className="w-[1120px] h-[32px] flex justify-between mx-auto">
          <h2 className="text-[24px] font-medium">Browse By Category</h2>
          <div className="flex gap-2">
            <div>
              <GrPrevious />
            </div>
            <div>
              <GrNext />
            </div>
          </div>
        </div>
        <div className=" w-[1120px] h-[128px] flex gap-[35px] justify-between mx-auto mt-8">

        <div className=" w-[150px] h-[128px] flex flex-col justify-center items-center bg-[#EDEDED]">
          <Image src={"/images/Phones.png"} alt="" width={48} height={48} ></Image>
          <p className="font-medium">Phones</p>
        </div>
        <div className=" bg-[#EDEDED] w-[150px] h-[128px] flex items-center justify-center flex-col">
          <Image src={"/images/Smart Watches.png"} alt="" width={48} height={48}></Image>
          <p className="font-medium">Smart Watches</p>
        </div>
        <div className=" w-[150px] bg-[#EDEDED] h-[128px] justify-center items-center flex flex-col">
          <Image src={"/images/Cameras.png"} alt="" width={48} height={48}></Image>
          <p className="font-medium">Cameras</p>
        </div>
        <div className=" w-[150px] bg-[#EDEDED] h-[128px] justify-center items-center flex flex-col">
          <Image src={"/images/Headphones.png"} alt="" width={48} height={48}></Image>
          <p className="font-medium">Headphones</p>
        </div>
        <div className=" w-[150px] h-[128px] bg-[#EDEDED] flex flex-col items-center justify-center">
          <Image src={"/images/Computers.png"} alt="" width={48} height={48}></Image>
          <p className="font-medium">Computers</p>
        </div>
        <div className=" bg-[#EDEDED]  w-[150px] h-[128px] flex flex-col items-center justify-center">
          <Image src={"/images/Gaming.png"} alt="" width={48} height={48}></Image>
          <p className="font-medium">Gaming</p>
        </div>
        </div>


      </div>
    </div>
  );
};

export default Category;
