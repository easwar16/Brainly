import { FaXTwitter } from "react-icons/fa6";
import { SideBarItem } from "./SideBarItem";
import { FiYoutube } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";

export const SideBar = () => {
  return (
    <div className="border-2-r border-slate-200 h-screen w-76 bg-white position-fixed left-0 top-0  ">
      <div className="flex justify-start pl-2">
        <div className="text-[#4A5BFF] pr-2 pt-3 text-2xl">
          <LuBrain />
        </div>
        <div className="text-2xl pt-2">Brainly</div>
      </div>
      <SideBarItem text="YouTube" icon={<FiYoutube />} />
      <SideBarItem text="Twitter" icon={<FaXTwitter />} />
    </div>
  );
};
