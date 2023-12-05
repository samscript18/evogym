type titleType = {
  title: string;
};

const Title = ({ title }: titleType) => {
  return <h1 className="text-3xl font-bold cursor-pointer">{title}</h1>;
};
export default Title;
