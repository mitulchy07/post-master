import Layout from "../Layout";


const brands = [
  { name: "Brand 1", logo: "/images/image 1.png" },
  { name: "Brand 2", logo: "/images/image 2.png" },
  { name: "Brand 3", logo: "/images/image 3.png" },
  { name: "Brand 4", logo: "/images/image 11.png" },
  { name: "Brand 5", logo: "/images/image 6.png" },
];

export default function Brands() {
  return (
    <Layout>
      <div className="container mx-auto py-20">
        <h1 className="text-3xl font-bold mb-4 text-center">Our Brands</h1>
        <div className="flex flex-wrap justify-center items-center">
          {brands.map((brand) => (
            <div className="w-1/2 md:w-1/4 lg:w-1/5 px-4 py-4" key={brand.name}>
              <img src={brand.logo} alt={brand.name} className="mx-auto object-cover max-w-[100px]" />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}