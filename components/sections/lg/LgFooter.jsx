import Image from "next/image";
import Link from "next/link";

const LgFooter = () => {
  return (
    <div className="flex justify-center bg-white">
      <footer className="flex w-full max-w-7xl flex-col gap-y-5 px-5 pb-10 text-[#707070]">
        <div className="mt-5 flex  items-center gap-2">
          <Link
            href="/services-centers/siemens"
            className="flex max-h-11 max-w-20 items-center"
          >
            {logo}
          </Link>
          <h1 className="text-[20px] font-bold sm:text-[30px]">
            Repair Center
          </h1>
        </div>

        <span className="text-sm font-light ">
          An authorized service provider specialized in appliance repair and maintenance services in
          Dubai and Abu Dhabi of all the LG home appliances.
        </span>
        <div className="flex flex-col gap-y-5 ">
          <span className="hover:underline">Home</span>
          <span className="hover:underline">About Us</span>
          <span className="hover:underline">Services</span>
          <span className="hover:underline">Terms of use</span>
          <span className="hover:underline">Privacy Policy</span>
        </div>
       
      </footer>
    </div>
  );
};

export default LgFooter;
const logo = (
  <svg
    width="225"
    height="99"
    viewBox="0 0 225 99"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_415_130964)">
      <path
        d="M134.874 68.7831H165.274V81.2487H120.202V17.2373H134.874V68.7831Z"
        fill="#707070"
      />
      <path
        d="M197.534 56.8451H209.482V68.0462C207.288 68.8892 202.987 69.7323 198.905 69.7323C185.694 69.7323 181.301 62.9711 181.301 49.241C181.301 36.1374 185.483 28.4265 198.682 28.4265C206.039 28.4265 210.213 30.7533 213.675 35.1904L222.802 26.7376C217.227 18.726 207.5 16.2981 198.365 16.2981C177.83 16.2897 167.033 27.5807 167.033 49.1314C167.033 70.5753 176.79 82.2007 198.256 82.2007C208.113 82.2007 217.748 79.6716 222.992 75.9651V44.9078H197.534V56.8451Z"
        fill="#707070"
      />
      <path
        d="M83.831 84.5045C103.008 65.1736 103.007 33.831 83.829 14.499C64.6508 -4.83307 33.5576 -4.83396 14.3805 14.497C-4.79664 33.8279 -4.79576 65.1705 14.3825 84.5025C33.5607 103.835 64.6538 103.835 83.831 84.5045Z"
        fill="#A50034"
      />
      <path
        d="M61.1184 66.6079H51.0826V28.5984H47.3721V70.3594H51.0909V70.3341H61.1268L61.1184 66.6079Z"
        fill="white"
      />
      <path
        d="M86.1485 51.0737H61.1759V47.3447H89.8088C89.8479 48.0669 89.8674 48.7891 89.8674 49.5198C89.8674 71.9725 71.7136 90.1707 49.3252 90.1707C26.9368 90.1707 8.78027 71.9809 8.78027 49.5169C8.78027 27.053 26.9313 8.86597 49.3224 8.86597C49.9134 8.86597 50.5016 8.87814 51.0871 8.9025V12.6034C50.5016 12.5772 49.9153 12.5641 49.328 12.5641C28.9775 12.5641 12.474 29.11 12.474 49.5169C12.474 69.9239 28.9747 86.4726 49.328 86.4726C69.121 86.4726 85.2899 70.8175 86.1457 51.1777L86.1485 51.0737Z"
        fill="white"
      />
      <path
        d="M34.2066 39.8496C35.3263 39.8441 36.4193 39.5043 37.3476 38.8732C38.276 38.2421 38.9981 37.3479 39.4227 36.3036C39.8474 35.2592 39.9557 34.1114 39.7339 33.005C39.5121 31.8987 38.9701 30.8834 38.1764 30.0872C37.3827 29.2911 36.3728 28.7497 35.2742 28.5316C34.1756 28.3134 33.0374 28.4282 32.0035 28.8614C30.9695 29.2946 30.086 30.0268 29.4645 30.9657C28.8429 31.9046 28.5112 33.008 28.5112 34.1367C28.5131 34.8888 28.6618 35.6331 28.949 36.3273C29.2362 37.0214 29.6563 37.6517 30.1851 38.1822C30.714 38.7127 31.3413 39.133 32.0313 39.4191C32.7213 39.7052 33.4605 39.8515 34.2066 39.8496Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_415_130964">
        <rect width="223" height="99" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
