import { cn } from "@/lib/utils";
import { useId } from "react";

const SpinningText = ({
  text,
  radius = 37,
  textClassName = "text-[8px]",
  speed = 10,
  direction = "normal",
  className,
}) => {
  const pathId = `circlePath-${useId()}`;

  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <g
          className="origin-center animate-spin"
          style={{
            animationDuration: `${speed}s`,
            animationDirection: direction,
          }}>
          <path
            id={pathId}
            d={`
              M 50,50
              m -${radius},0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
            fill="none" />
          <text
            className={cn(
              "uppercase font-normal fill-slate-500 tracking-widest",
              textClassName
            )}>
            <textPath href={`#${pathId}`} startOffset="0%">
              {text}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

const SpinningTextLoader = () => {
  return (
    <SpinningText
      className="size-56"
      text="EXPLORE • EXPLORE • EXPLORE • EXPLORE • EXPLORE • EXPLORE •"
      radius={25}
      textClassName="text-[4px]"
      speed={12}
      direction="normal"
    />
  );
};

export default SpinningTextLoader;
