import { MouseEvent, useState } from "react";

const CursorTracking: React.FC = () => {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  });
  const onHover = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e);
    setTimeout(() => {
      setPosition({ left: e.clientX, top: e.clientY });
    }, 100);
  };
  return (
    <div onMouseMove={onHover} className="h-screen max-[1000px] relative border border-slate-700">
      <Circle left={position.left} top={position.top} />
    </div>
  );
};

export default CursorTracking;

function Circle({ left, top }: { left: number; top: number }) {
  return (
    <div
      style={{ left: left + "px", top: top + "px" }}
      className={`h-[30px] w-[30px] absolute bg-slate-950 dark:bg-white `}
    ></div>
  );
}
