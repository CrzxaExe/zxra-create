export const CenterHr = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className={`${className} flex flex-row gap-2 mt-3 items-center px-2`}>
      <span className="w-full h-[1px] bg-slate-500"></span>
      <span className="text-slate-500 whitespace-pre">{text}</span>
      <span className="w-full h-[1px] bg-slate-500"></span>
    </div>
  );
};
