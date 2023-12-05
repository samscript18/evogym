import { ClassType } from "../interfaces/types";

const SingleClass = ({ id, name, description, image }: ClassType) => {
  return (
    <div
      id={`${id}`}
      className="relative md:w-[275px] sm:w-[400px] xs:w-[100vw] h-[235px] rounded-md class"
    >
      <div className="w-full h-full">
        <img src={image} className="w-full h-full" alt="class-img" />
      </div>
      <div className="absolute w-full h-full py-10 px-4 bg-primary-500 text-center class-item">
        <h1 className="text-base text-gray-50 mb-3">{name}</h1>
        <p className="text-[13px] text-gray-50">{description}</p>
      </div>
    </div>
  );
};
export default SingleClass;
