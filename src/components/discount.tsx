
import { IoIosHeartEmpty } from "react-icons/io";
import Image from "next/image";
const disc = [
  {
    image: "/images/appleiphone.png",
    desc: "Apple iPhone 14 Pro 512GB",
    specs: "Gold (MQ233)",
    price: "$1437",
  },
  {
    image: "/images/appAirpods.png",
    desc: "Airpods Max Silver",
    specs: "Starlight Aluminium",
    price: "$549",
  },
  {
    image: "/images/appwatch.png",
    desc: "Apple Watch eries 9GPS",
    specs: "41mm Starlight Aluminium",
    price: "$399",
  },
  {
    image: "/images/appiphone2.png",
    desc: "ppple Iphone 14 Pro 1TB Gold ",
    specs: " (MQ2V3)",
    price: "$1499",
  },
];
const Discount = () => {
  return (
    <div className="w-full h-full  flex flex-col">
      <div className=" ml-9 ">
        <p className="my-8 text-[24px]">Discount upto 50%</p>
      </div>
      <div className="w-[1120px] ml-9 h-[432px]  flex justify-between">
        {disc.map((discount) => (
          <div className="w-[268px] h-[100%]  bg-[#F6F6F6] ">
            <div className="w-[236px] h-[32px] mt-9 ml-4 flex justify-end">
              <IoIosHeartEmpty className="w-[20px] h-[20px]" />
            </div>
            <div className="flex flex-col mx-auto items-center">
              <Image
                src={discount.image}
                alt=""
                className="mx-auto mt-4"
                width={160}
                height={160}
              ></Image>
              <div className="flex flex-col w-[236px] h-[48px] mt-3">
                <div className=" mx-auto text-black text-[16px]">
                  {discount.desc}
                </div>
                <div className="mx-auto pl-3">{discount.specs}</div>
                <div className="w-[236px] h-[24px] font-semibold text-[24px] mx-[80px] mt-3">
                  {discount.price}
                </div>
                  <button className="w-[188px] h-[50px] mx-auto bg-black p-3 text-white rounded-lg mt-5">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discount;
