import Image from "next/image";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { FiUser } from "react-icons/fi";
const Navbar = () => {
  return (
    <header className="items-center  w-full">
      <nav className="flex justify-around items-center p-2 gap-9   bg-[#F5F5F5] w-full">
        <div className="pl-10">
          <Image
            src={"/images/Logo.png"}
            alt="Logo"
            width={65}
            height={45}
          ></Image>
        </div>
        <div>
          <input
            type="text"
            placeholder="search"
            className="bg-[#e8e4e4] opacity-[100%] pl-10 rounded-lg w-[372px] h-[56px] shadow-2xl outline-none"
          />
        </div>
        <div>
          <ul className="flex gap-10 text-[16px] font-medium font-inter">
            <li className="">Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="mr-[10%]">
          <ul className="flex gap-6">
            <li>
              <IoIosHeartEmpty className="w-[32px] h-[32px]" />
            </li>
            <li>
              <HiOutlineShoppingCart className="w-[32px] h-[32px]" />
            </li>
            <li>
              <FiUser className="w-[32px] h-[32px]" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
