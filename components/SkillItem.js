function SkillItem({ children, title, icon }) {
  return (
    <div className="flex flex-col justify-center items-center space-y-2 font-[600] shadow-[0px_5px_15px_rgba(0,0,0,0.35)] w-44 h-44 rounded-3xl dark:bg-indigo-600">
      {icon}
      <p>{title}</p>
    </div>
  );
}

export default SkillItem;
