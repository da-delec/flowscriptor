import React, { ReactNode } from "react";
import Navigation from "./components/navigation";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
     <Navigation />
      {children}
    </div>
  );
};

export default layout;
