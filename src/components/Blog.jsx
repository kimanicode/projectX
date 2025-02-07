const Blog = ({ image, date, category, title, description }) => {
    return (
      <div className="flex flex-col md:w-[30%] w-full bg-white shadow-lg rounded-lg overflow-hidden hover:bg-myBlack/50 ">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="p-5 flex flex-col flex-grow">
          <p className="text-sm text-myGreen uppercase">
            {date} &mdash; <span className="font-semibold">Read, {category}</span>
          </p>
          <h3 className="text-xl font-semibold text-myRed mt-2">{title}</h3>
          <p className="text-gray-600  mt-2 flex-grow">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Blog;
  