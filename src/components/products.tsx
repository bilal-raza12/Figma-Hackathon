
import Image from "next/image";

const Products = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="flex w-full h-[100vh] flex-row">
        <div className="flex flex-col  ">
          {/* Playstation */}
          <div className=" w-[600px]  h-[100vh]  flex items-center ">
            <div className="playstation  w-[360px] h-[343px]">
              <Image
                src={"/images/PlayStation.png"}
                alt=""
                width={360}
                height={343}
                className="mt-4"
              />
            </div>

            <div className=" w-[328px] h-auto mx-auto flex flex-col">
              <h2 className="text-[#000000] font-medium text-[49px] font-inter">
                PlayStation 5
              </h2>
              <p className="leading-6 text-[14px] font-medium">
                Incrediblly powerful CPUs , GPUs and an SSD with integrated I/O
                will redifine your PlayStation experience.
              </p>
            </div>
          </div>
          <div className=" w-[720px] h-[300px] flex  flex-row">
            {/* airpods */}
            <div className=" w-[360px] h-[250px] bg-[#EDEDED] flex items-center">
              <div className="w-[104px] h-[272px]">
                <Image
                  src={"/images/earpods.png"}
                  alt=""
                  width={104}
                  height={272}
                ></Image>
              </div>
              <div className=" mx-auto w-[160px] h-[143px] font-light  ">
                <div className=" text-[29px] leading-10 font-inter ml-4">
                  Apple Airpods <span className="font-semibold">Max</span>
                </div>
                <p className="text-[#909090] font-medium leading-6 text-[14px] ml-4">
                  Computational audio Listen, it's powerful
                </p>
              </div>
            </div>
            {/* 3d */}
            <div className=" w-[360px] h-[250px] bg-[#353535] flex items-center">
              <div className="w-[136px] h-[190px]">
                <Image
                  src={"/images/vision.png"}
                  alt=""
                  width={136}
                  height={190}
                ></Image>
              </div>
              <div className=" w-[160px] h-[144px] ml-4">
                <div className="text-[29px] text-white font-light font-serif">
                  Apple Vision <span className="font-bold">Pro</span>
                </div>
                <div className="text-[#909090] text-[14px] font-medium leading-6 ">
                  An immersive way to experience entertainment
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full h-[590px] bg-[#EDEDED] flex items-center ">
          <div className="  w-[340px] h-[272px] ml-2 pl-6">
            <p className=" text-[64px] font-light leading-tight">MacBook </p>
            <p className="text-[64px] font-medium">Air</p>
            <p className="text-[#909090] text-[14px] font-medium">
              The new 15-inch Macbook makes room for more of what you love with
              a spacious Liquid Ratina display
            </p>
          </div>

          <div className="w-full h-[100vh]  pb-9 pr-9">
            <Image
              src={"/images/Screen.png"}
              alt="macbook"
              width={630}
              height={502}
              className="ml-[25px] mr-4"
            ></Image>
            <Image
              src={"/images/Body.png"}
              alt=""
              width={829}
              height={33.33}
              className=" ml-5 mr-4"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
