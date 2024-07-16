const ServiceCard = ({ title, image, rating }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center mt-2">
          <span className="text-gray-600">{rating}</span>
          <div className="flex ml-2">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                className={`h-4 w-4 fill-current ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-6.16 3.26L5 11.25.48 6.74 7.16 6 10 0l2.84 6 6.68.74L15 11.25l1.16 6.01L10 15z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
