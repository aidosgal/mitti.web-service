import { HiOutlineBars3 } from "react-icons/hi2";

interface Props {
    children: React.ReactNode;
}

const NavBar: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="flex justify-between text-md py-3 px-5 items-center">
        <div>
          <HiOutlineBars3 className="text-3xl cursor-pointer" />
        </div>
        <div>
          <img className="w-[40px] h-[40px] object-contain" src="/logo.svg" alt="logo" /> 
        </div>
        <div className="flex text-sm gap-4 items-center">
          <div>Вход</div>
          <div className="bg-white py-2 px-5 text-black cursor-pointer">Регистрация</div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default NavBar;
