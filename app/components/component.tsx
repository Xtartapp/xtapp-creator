export default function Component() {
  return (
    <div className="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-md">
      <div className="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800"></div>
    </div>
  )
}

/*

<div classNameNameName="flex gap-2">
      <div classNameNameName="bg-white p-3 rounded-lg shadow-lg max-w-96">
        <img
          classNameNameName="h-40 rounded w-full object-cover object-center mb-6"
          src="https://via.placeholder.com/150"
          alt="Product"
        />
        <h3 classNameNameName="tracking-widest text-indigo-500 text-xs font-medium title-font">
          CATEGORY
        </h3>
        <h2 classNameNameName="text-lg text-gray-900 font-medium title-font mb-4">
          Product Name
        </h2>
        <p classNameNameName="leading-relaxed text-base">
          This is a short description of the product. It highlights the key
          features and benefits.
        </p>
        <div classNameNameName="mt-4">
          <span classNameNameName="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
          <button classNameNameName="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Buy Now
          </button>
        </div>
      </div>
      <div classNameNameName="bg-gray-700 p-3 rounded-lg shadow-lg max-w-96">
        <img
          classNameNameName="h-40 rounded w-full object-cover object-center mb-6"
          src="https://via.placeholder.com/150"
          alt="Product"
        />
        <h3 classNameNameName="tracking-widest text-indigo-300 text-xs font-medium title-font">
          CATEGORY
        </h3>
        <h2 classNameNameName="text-lg text-gray-300 font-medium title-font mb-4">
          Product Name
        </h2>
        <p classNameNameName="leading-relaxed text-gray-300 text-base">
          This is a short description of the product. It highlights the key
          features and benefits.
        </p>
        <div classNameNameName="mt-4">
          <span classNameNameName="title-font font-medium text-2xl text-gray-300">
            $58.00
          </span>
          <button classNameNameName="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
    */
