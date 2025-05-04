import React from "react";

export type CustomBoxProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  borderColor: string;
  backgroundColor: string;
};

const generateWavyClipPath = (): string => {
  const segments = 12;
  const variation = 3;
  const rand = (base: number) => base + (Math.random() * 2 - 1) * variation; // base ± variation

  const top = Array.from({ length: segments + 1 }, (_, i) => {
    const x = (i * 100) / segments;
    const y = i % 2 === 0 ? rand(0) : rand(variation);
    return `${x}% ${y}%`;
  });

  const right = Array.from({ length: segments }, (_, i) => {
    const y = ((i + 1) * 100) / segments;
    const x = i % 2 === 0 ? 100 - rand(0) : 100 - rand(variation);
    return `${x}% ${y}%`;
  });

  const bottom = Array.from({ length: segments + 1 }, (_, i) => {
    const x = 100 - (i * 100) / segments;
    const y = i % 2 === 0 ? 100 - rand(0) : 100 - rand(variation);
    return `${x}% ${y}%`;
  });

  const left = Array.from({ length: segments }, (_, i) => {
    const y = 100 - ((i + 1) * 100) / segments;
    const x = i % 2 === 0 ? rand(0) : rand(variation);
    return `${x}% ${y}%`;
  });

  return `polygon(${[...top, ...right, ...bottom, ...left].join(", ")})`;
};

const CustomBox = ({
  children,
  style,
  borderColor,
  backgroundColor,
  ...rest
}: CustomBoxProps) => {
  const clipPath = React.useMemo(() => generateWavyClipPath(), []);

  return (
    <div
      {...rest}
      style={{
        clipPath,
        background: borderColor,
        padding: "8px",
        width: "300px",
        height: "300px",
        boxSizing: "border-box",
        ...style,
      }}
    >
      <div
        style={{
          clipPath,
          background: backgroundColor,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomBox;
