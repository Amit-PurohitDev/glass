import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import images from "@/constants";

export default function Home() {
  const productData = [
    {
      id: "001",
      name: "Wine Glass",
      image: images.p1,
    },
    {
      id: "002",
      name: "Wine Glass",
      image: images.p2,
    },
    {
      id: "003",
      name: "Wine Glass",
      image: images.p3,
    },
    {
      id: "004",
      name: "Wine Glass",
      image: images.p4,
    },
    {
      id: "005",
      name: "Wine Glass",
      image: images.p5,
    },
    {
      id: "006",
      name: "Wine Glass",
      image: images.p6,
    },
    {
      id: "007",
      name: "Wine Glass",
      image: images.p7,
    },
    {
      id: "008",
      name: "Wine Glass",
      image: images.p8,
    },
    {
      id: "009",
      name: "Wine Glass",
      image: images.p9,
    },
    {
      id: "0011",
      name: "Wine Glass",
      image: images.p11,
    },
    {
      id: "0012",
      name: "Wine Glass",
      image: images.p12,
    },
  ];
  return (
    <main className="">
      <HeroBanner />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Choose the one that suits your hand
          </div>
          <div className="text-md md:text-xl">
            The effect of glass shape on the taste of wine has not been
            demonstrated decisively by any scientific study and remains a matter
            of debate.
          </div>
        </div>
        {/* heading and paragaph end */}

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {productData &&
            productData.map((item) => {
              return <ProductCard prod={item} key={item.id} />;
            })}
        </div>
        {/* products grid ends */}
      </Wrapper>
    </main>
  );
}
