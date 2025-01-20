export const CenterHr = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} flex flex-row gap-2 mt-3 items-center px-2 select-none`}
    >
      <span className="w-full h-[1px] bg-slate-500"></span>
      <span className="text-slate-500 whitespace-pre">{text}</span>
      <span className="w-full h-[1px] bg-slate-500"></span>
    </div>
  );
};

export const RightHr = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <div
      className={`${className} flex-row gap-2 items-center px-2 hidden lg:flex select-none`}
    >
      <span className="w-full h-[1px] bg-slate-400"></span>
      <span className="text-slate-400 whitespace-pre">{text}</span>
    </div>
  );
};
