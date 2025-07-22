import image1 from "../assets/imagesTshirt/AC-MILAN.jpeg";
import image2 from "../assets/imagesTshirt/ARGENTINA FIVE.jpeg";
import image3 from "../assets/imagesTshirt/ARGENTINA POLO.jpeg";
import image4 from "../assets/imagesTshirt/BARCELONA 2009.jpeg";
import image5 from "../assets/imagesTshirt/BARCELONA 2014-15.jpeg";
import image6 from "../assets/imagesTshirt/DORTMUND POLO.jpeg";
import image7 from "../assets/imagesTshirt/ENGLAND POLO.jpeg";
import image8 from "../assets/imagesTshirt/GERMANY FIVE.jpeg";
import image9 from "../assets/imagesTshirt/INTER MILAN 1995-96.jpeg";
import image10 from "../assets/imagesTshirt/JUVENTUS.jpeg";
import image11 from "../assets/imagesTshirt/MAN UTD POLO.jpeg";
import image12 from "../assets/imagesTshirt/SPAIN POLO.jpeg";
import image13 from "../assets/imagesTshirt/ZANETTI INTER-MILAN.jpeg";

const products = [
  {
    id: 1,
    name: "AC-MILAN",
    href: "#",
    imageSrc: image1,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "ARGENTINA FIVE SLEEVE",
    href: "#",
    imageSrc: image2,
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  {
    id: 3,
    name: "ARGENTINA POLO",
    href: "#",
    imageSrc: image3,
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "$35",
    color: "Charcoal",
  },
  {
    id: 4,
    name: "Artwork Tee",
    href: "#",
    imageSrc: image4,
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
    color: "Iso Dots",
  },
  {
    id: 5,
    name: "AC-MILAN",
    href: "#",
    imageSrc: image5,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: image6,
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: image7,
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "$35",
    color: "Charcoal",
  },
  {
    id: 4,
    name: "Artwork Tee",
    href: "#",
    imageSrc: image8,
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
    color: "Iso Dots",
  },
  {
    id: 1,
    name: "AC-MILAN",
    href: "#",
    imageSrc: image9,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: image10,
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "Aspen White",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: image11,
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "$35",
    color: "Charcoal",
  },
  {
    id: 12,
    name: "SPAIN POLO",
    href: "#",
    imageSrc: image12,
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "$35",
  },
  {
    id: 13,
    name: "ZANETTI INTER-MILAN",
    href: "#",
    imageSrc: image13,
    imageAlt:
      "ZANETTI INTER-MILAN",
    price: "350",
  },
];

export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
