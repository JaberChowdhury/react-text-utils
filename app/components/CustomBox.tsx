import React from "react";

export type propsType = {
  children: React.ReactNode;
};
const CustomBox = ({ children }: propsType) => {
  return (
    <div
      style={{
        clipPath:
          "polygon(0% 2%, 10% 0%, 20% 2%, 30% 0%, 40% 2%, 50% 0%, 60% 2%, 70% 0%, 80% 2%, 90% 0%, 100% 2%, 100% 10%, 98% 20%, 100% 30%, 98% 40%, 100% 50%, 98% 60%, 100% 70%, 98% 80%, 100% 90%, 98% 98%, 100% 100%, 90% 98%, 80% 100%, 70% 98%, 60% 100%, 50% 98%, 40% 100%, 30% 98%, 20% 100%, 10% 98%, 0% 100%, 2% 90%, 0% 80%, 2% 70%, 0% 60%, 2% 50%, 0% 40%, 2% 30%, 0% 20%, 2% 10%, 0% 2%)",
        background: "#f8e1c4",
        height: "300px",
        width: "300px",
      }}
    >
      {children}
    </div>
  );
};

export default CustomBox;
