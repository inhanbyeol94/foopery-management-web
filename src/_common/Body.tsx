import { Menu } from "./Menu";
import React, { ReactNode, useState } from "react";

function Body({ children, title, description, rightHeaderRender }: { children: ReactNode; title: string; description: string | null; rightHeaderRender?: ReactNode }) {
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <div className={`flex lg:bg-gray-50 lg:h-screen sm:bg-white sm:h-[100svh] sm:flex-col sm:pt-[5rem] sm:px-[1.5rem] sm:pb-[1.5rem]`}>
      <Menu setToggle={setToggleOpen} toggle={toggleOpen} />
      <div
        className={`lg:flex lg:flex-col lg:w-full lg:m-10 lg:rounded-lg lg:bg-white lg:shadow-xl lg:p-10 lg:overflow-hidden
                      ${toggleOpen && "sm:hidden"}
                       
      `}
      >
        {/** Body Header*/}
        <div className={`flex flex-row gap-1 mb-5 justify-between`}>
          {/** Body Left Header Item */}
          <div>
            <h1 className={`text-2xl uppercase text-gray-800 font-bold tracking-[0.08rem]`}>{title}</h1>
            <h3 className={`text-gray-500 text-sm`}>{description}</h3>
          </div>
          {/** Body Right Header Item */}
          <div className={"flex"}>{rightHeaderRender}</div>
        </div>
        {/** Body Main */}
        {children}
      </div>
    </div>
  );
}

export default Body;
