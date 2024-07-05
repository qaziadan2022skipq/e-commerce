import CategoryList from "@/components/CategoryList";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Feature Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">Categories</h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
    </div>
  );
}
