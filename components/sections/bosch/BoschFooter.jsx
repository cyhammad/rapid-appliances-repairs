import Image from "next/image";
import Link from "next/link";

const BoschFooter = () => {
  return (
    <footer className="flex justify-center bg-[#2D3033] text-white">
      <div className="mt-5 flex w-full max-w-[78rem] flex-col gap-y-5 px-5 py-10">
        <div className="flex items-center gap-2">
          <Link
            href="/services-centers/siemens"
            className="flex max-h-11 max-w-28 items-center"
          >
            {logo}
          </Link>
          <h1 className="text-[20px] font-medium">Repair Center</h1>
        </div>
        <span className="text-sm font-light ">
          An authorized service provider specialized in appliance repair and maintenance services in
          Dubai and Abu Dhabi of all the bosch home appliances.
        </span>
        <div className="flex flex-col gap-y-5 ">
          <span className="hover:underline">Home</span>
          <span className="hover:underline">About Us</span>
          <span className="hover:underline">Services</span>
          <span className="hover:underline">Terms of use</span>
          <span className="hover:underline">Privacy Policy</span>
        </div>
        <span className="border-t border-[#c2c4c4] pt-5 text-center text-xs">
           By Adil Hussain Technical Services LLC.
        </span>
      </div>
    </footer>
  );
};

export default BoschFooter;

const logo = (
  <svg>
    <svg version="1.1" viewBox="0 0 561 224" xmlns="http://www.w3.org/2000/svg">
      <title>Bosch Logo_master</title>
      <g fill="none" fill-rule="evenodd">
        <rect width="109" height="44"></rect>
        <path
          id="Shape"
          d="m239.71 110.32c6.8777-2.6718 11.38-9.3537 11.294-16.761 0-15.085-10.653-22.563-25.284-22.563h-38.375v82h41.712c12.834 0 25.412-9.0252 25.412-22.821 0-16.374-14.76-19.726-14.76-19.855zm-32.327-22.311h15.178c2.1188-0.12391 4.1908 0.63828 5.6917 2.0937s2.2869 3.4646 2.1591 5.5191c-0.041114 2.0511-0.94461 3.997-2.5011 5.3865-1.5565 1.3895-3.6308 2.1021-5.7423 1.9726h-14.786v-14.972zm15.802 46.987h-14.8v-16h14.421c7.2103 0 10.626 3.2 10.626 7.936 0 5.888-4.3009 8.064-10.246 8.064z"
          fill="#ED0007"
        ></path>
        <path
          id="Shape"
          d="m299.05 68c-23.674 0-37.569 18.982-37.569 43 0 24.147 13.895 43 37.569 43 23.802 0 37.569-18.853 37.569-43 0-24.018-13.767-43-37.569-43zm-0.064695 66c-11.645 0-17.468-10.321-17.468-23.064 0-12.742 5.8225-22.936 17.468-22.936 11.645 0 17.597 10.321 17.597 22.936 0 12.87-5.9519 23.064-17.597 23.064z"
          fill="#ED0007"
        ></path>
        <path
          id="Path"
          d="m380.75 102.8-2.8351-0.64315c-6.9589-1.4149-12.5-3.2158-12.5-8.2324 0-5.4025 5.2836-7.5892 9.9229-7.5892 6.3973 0.10038 12.465 2.8492 16.753 7.5892l12.758-12.606c-5.7991-6.5602-15.206-12.863-29.897-12.863-17.268 0-30.413 9.6473-30.413 25.726 0 14.664 10.567 21.867 23.454 24.568l2.8351 0.64315c10.696 2.1867 14.691 3.8589 14.691 9.0041 0 4.888-4.3815 8.1037-11.083 8.1037-7.9898 0-15.206-3.473-20.748-10.548l-13.016 12.863c7.2166 8.6183 16.366 15.307 34.021 15.307 15.335 0 31.702-8.7469 31.702-26.627 0.25774-18.651-13.918-22.253-25.645-24.697z"
          fill="#ED0007"
        ></path>
        <path
          id="a"
          d="m452.27 134.7c-9.0208 0-18.428-7.4606-18.428-23.797 0-14.535 8.763-22.639 17.913-22.639 7.2166 0 11.469 3.3444 14.82 9.1328l16.495-10.934c-8.2476-12.477-18.042-17.751-31.573-17.751-24.743 0-38.145 19.166-38.145 42.32 0 24.311 14.82 43.349 37.887 43.349 16.237 0 23.97-5.6598 32.346-17.751l-16.624-11.191c-3.3506 5.4025-6.9589 9.2614-14.691 9.2614z"
          fill="#ED0007"
        ></path>
        <polygon
          points="538.09 70.638 538.09 100.74 513.22 100.74 513.22 70.638 491.7 70.638 491.7 152.45 513.22 152.45 513.22 120.16 538.09 120.16 538.09 152.45 559.61 152.45 559.61 70.638"
          fill="#ED0007"
        ></polygon>
        <path
          id="b"
          d="m64.115 50c-34.305 0-62.115 27.758-62.115 62 0 34.242 27.81 62 62.115 62 34.305 0 62.115-27.758 62.115-62-0.018486-34.234-27.817-61.982-62.115-62zm0 118c-30.985 0-56.103-25.072-56.103-56s25.118-56 56.103-56c30.985 0 56.103 25.072 56.103 56-0.031844 30.915-25.132 55.968-56.103 56z"
          fill="white"
          fill-rule="nonzero"
        ></path>
        <path
          d="m89.295 73h-4.2585v21.105h-42.714v-21.105h-4.3876c-13.052 8.5369-20.906 23-20.906 38.5 0 15.5 7.8538 29.963 20.906 38.5h4.3876v-21.105h42.714v21.105h4.2585c13.052-8.5369 20.906-23 20.906-38.5 0-15.5-7.8538-29.963-20.906-38.5zm-52.229 69c-8.9213-7.7431-14.026-18.843-14.026-30.5 0-11.657 5.1046-22.757 14.026-30.5v61zm48.089-19h-43.079v-23h43.079v23zm6.0111 19v-12.951-35.098-12.951c8.927 7.7767 14.026 18.864 14.026 30.5 0 11.636-5.0988 22.723-14.026 30.5z"
          fill="white"
          fill-rule="nonzero"
        ></path>
      </g>
    </svg>
  </svg>
);
