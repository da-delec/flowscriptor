import React from "react";
type scriptType = {
    Title: string;
    Id: string;
    CreatedAt: Date;
    Script: string;
    Category:string;
    UserId: string;
}

const Script_cards = ({itemInfos}:{itemInfos:scriptType}) => {

  return (
    <div
      id="card"
      className=" w-[80%] my-3 md:my-3 h-[70px]  flex items-center rounded-lg "
    >
      <div
        id="rectangle-image"
        className=" h-[50px] min-h-[50px] min-w-[50px] md:min-w-[55px] md:min-h-[55px] md:h-[55px] md:w-[55px] flex justify-center items-center  ml-1 md:my-2  w-[50px] bg-[hsl(0,0%,90%)] rounded-xl"
      >
        <svg
        className="  text-[hsl(0,0%,5%)]"
          height="20"
          width="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          >
            <path d="M7.998 16h4m-4-5h8M7.5 3.5c-1.556.047-2.483.22-3.125.862c-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C5.253 22 6.668 22 9.496 22h5c2.829 0 4.243 0 5.121-.88c.88-.879.88-2.294.88-5.126V9.488c0-2.83 0-4.246-.88-5.126c-.641-.642-1.569-.815-3.125-.862" />
            <path d="M7.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 0 1-1.75-1.75" />
          </g>
        </svg>
      </div>
      <div id="card-content" className=" ml-3">
        <h1 className=" text-[hsl(0,0%,5%)] my-1 md:text-xl font-medium text-md">{itemInfos.Title}</h1>
        <p className=" text-[hsl(0,0%,70%)] my-1 text-sm md:text-lg font-light">{itemInfos.Category}</p>
      </div>
    </div>
  );
};

export default Script_cards;
