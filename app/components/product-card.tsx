export function ProductCard() {
  return (
    <div className="flex gap-2">
      <div className="bg-white p-3 rounded-lg shadow-lg max-w-96">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://via.placeholder.com/150"
          alt="Product"
        />
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          CATEGORY
        </h3>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
          Product Name
        </h2>
        <p className="leading-relaxed text-base">
          This is a short description of the product. It highlights the key
          features and benefits.
        </p>
        <div className="mt-4">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Buy Now
          </button>
        </div>
      </div>
      <div className="bg-gray-700 p-3 rounded-lg shadow-lg max-w-96">
        <img
          className="h-40 rounded w-full object-cover object-center mb-6"
          src="https://via.placeholder.com/150"
          alt="Product"
        />
        <h3 className="tracking-widest text-indigo-300 text-xs font-medium title-font">
          CATEGORY
        </h3>
        <h2 className="text-lg text-gray-300 font-medium title-font mb-4">
          Product Name
        </h2>
        <p className="leading-relaxed text-gray-300 text-base">
          This is a short description of the product. It highlights the key
          features and benefits.
        </p>
        <div className="mt-4">
          <span className="title-font font-medium text-2xl text-gray-300">
            $58.00
          </span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}
