import productData from "../data/productData";

export default function Category() {
  const featured = productData.filter((p) => p.featured);

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-30 ">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featured.map((callout) => (
              <div
                key={callout.id}
                className=" group relative cursor-pointer  "
              >
                <img
                  alt={callout.imageAlt}
                  src={callout.imgSrc}
                  className="w-full rounded-xl bg-white object-cover group-hover:opacity-75  lg:aspect-square"
                />
                <h3 className="mt-2 text-center text-gray-900 font-bold ">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.category}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
