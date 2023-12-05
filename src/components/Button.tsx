type ButtonType = {
  text: string;
};

const Button = ({ text }: ButtonType) => {
  return (
    <div className="w-full py-3 px-8 bg-secondary-400 hover:bg-secondary-500 transition text-base font-medium rounded-md cursor-pointer">
      {text}
    </div>
  );
};
export default Button;
