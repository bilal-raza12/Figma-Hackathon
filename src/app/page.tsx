import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Category from "@/components/category";
import NewArrival from "@/components/newarrival";
import Popular from "@/components/populaer";
import Discount from "@/components/discount";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="">
      <Navbar />
       <Hero/>
       <Products />
       <Category />
       <NewArrival />
       <Popular />
       <Discount />
       <Banner />
       <Footer />

    </div>
  );
}
