export default function Component() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="border-b border-gray-200">
        <details className="group">
          <summary className="cursor-pointer p-4 text-lg font-medium text-gray-700 group-hover:bg-gray-100 transition">
            What is TailwindCSS?
            <span className="float-right transform group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          <div className="p-4 text-gray-600">
            TailwindCSS is a utility-first CSS framework for building custom
            designs directly in your markup.
          </div>
        </details>
      </div>
      <div className="border-b border-gray-200">
        <details className="group">
          <summary className="cursor-pointer p-4 text-lg font-medium text-gray-700 group-hover:bg-gray-100 transition">
            How does TailwindCSS work?
            <span className="float-right transform group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          <div className="p-4 text-gray-600">
            TailwindCSS works by applying utility classNamees directly to your
            HTML elements to style them.
          </div>
        </details>
      </div>
      <div className="border-b border-gray-200">
        <details className="group">
          <summary className="cursor-pointer p-4 text-lg font-medium text-gray-700 group-hover:bg-gray-100 transition">
            Is TailwindCSS customizable?
            <span className="float-right transform group-open:rotate-180 transition-transform">
              ▼
            </span>
          </summary>
          <div className="p-4 text-gray-600">
            Yes, TailwindCSS is highly customizable with its configuration file.
          </div>
        </details>
      </div>
    </div>
  )
}

/*

<div classNameNameNameName="flex gap-2">
      <div classNameNameNameName="bg-white p-3 rounded-lg shadow-lg max-w-96">
        <img
          classNameNameNameName="h-40 rounded w-full object-cover object-center mb-6"
          src="https://via.placeholder.com/150"
          alt="Product"
        />
        <h3 classNameNameNameName="tracking-widest text-indigo-500 text-xs font-medium title-font">
          CATEGORY
        </h3>
        <h2 classNameNameNameName="text-lg text-gray-900 font-medium title-font mb-4">
          Product Name
        </h2>
        <p classNameNameNameName="leading-relaxed text-base">
          This is a short description of the product. It highlights the key
          features and benefits.
        </p>
        <div classNameNameNameName="mt-4">
          <span classNameNameNameName="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <button classNameNameNameName="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Buy Now
          </button>
        </div>
      </div>
      <div classNameNameNameName="bg-gray-700 p-3 rounded-lg shadow-lg max-w-96">
        <img
          classNameNameNameName="h-40 rounded w-full object-cover object-center mb-6"
          src="https://via.placeholder.com/150"
          alt="Product"
        />
        <h3 classNameNameNameName="tracking-widest text-indigo-300 text-xs font-medium title-font">
          CATEGORY
        </h3>
        <h2 classNameNameNameName="text-lg text-gray-300 font-medium title-font mb-4">
          Product Name
        </h2>
        <p classNameNameNameName="leading-relaxed text-gray-300 text-base">
          This is a short description of the product. It highlights the key
          features and benefits.
        </p>
        <div classNameNameNameName="mt-4">
          <span classNameNameNameName="title-font font-medium text-2xl text-gray-300">
            $58.00
          </span>
          <button classNameNameNameName="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
    */
