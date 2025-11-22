interface sideBarType {
  text: string;
  icon: React.ReactNode;
}
export const SideBarItem = ({ text, icon }: sideBarType) => {
  return (
    <div className="flex justify-start gap-2 m-6 pl-8 py-2 hover:bg-[#ebe9e9] rounded-md cursor-pointer transition-all duration-500">
      <div className="pt-1 ">{icon}</div>
      <div>{text}</div>
    </div>
  );
};
