
const ServiceCard = ({ imageUrl, heading, description }) => {
  return (
     <div
      className="flex  transition-transform duration-300 transform hover:scale-95 flex-col justify-end   bg-cover bg-center  bg-no-repeat hover:bg-[#c2c4c4] h-[490px]"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="grad flex text-center flex-col gap-y-5  bg-gradient-to-t from-black p-5 text-white sm:p-9 sm:pb-10 pb-10 ">
        <h1 className="text-2xl font-semibold">{heading}</h1>
        <span className="text-sm">{description}</span>
      </div>
    </div>

  );
};

export default ServiceCard;
const arrow = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.52 13.98L59.89 39.34H0.5V56.66H59.89L34.52 82.02L48 95.5L95.5 48L48 0.5L34.52 13.98Z"
      fill="white"
    />
  </svg>
);
