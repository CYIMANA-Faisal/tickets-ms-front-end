import { FireFilled } from "@ant-design/icons";
const Logo = () => {
  return (
    <div className="flex items-center justify-center p-2.5 text-primary">
      <div className="w-10 h-10 flex items-center justify-center text-2xl rounded-full bg-sky-300 border border-sky-300">
        <FireFilled />
      </div>
    </div>
  );
};

export default Logo;
