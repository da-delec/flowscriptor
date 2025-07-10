
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { delete_item } from "../action/delete_action";
import LikeButton from "./LikeButton";
import { like } from "../action/like_action";
import Link from "next/link";

import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";

type userInfos = {
  Id: string;
  CreatedAt: Date;
  Title: string;
  Script: string;
  Category: string;
  isFavorite:boolean;
  UserId: string;
};
type propsType = {
    infos:userInfos;
    setIsFavorite:React.Dispatch<React.SetStateAction<boolean>>;
  }

const History_card = ({ infos,setIsFavorite }: propsType ) => {
  const userScript = infos.Script;  
  const date = new Date(infos.CreatedAt);
  const dateFormat = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

 


  
  return (
    <div  className=" w-[90%] hover:border-indigo-500/30 hover:border-2 bg-[hsl(0,0%,%)] md:w-[70%] flex justify-between  border shadow-lg border-[hsl(0,0%,90%)] min-h-[75px] h-[75px] rounded-lg ">
      <Link href={`/user_dashboard/script_history/script_description/${infos.Id}`} id="information" className="flex flex-col  ml-2 mt-1">
        <h1 className=" text-lg font-semibold text-[hsl(0,0%,5%)] ">
          {infos.Title}
        </h1>
        <h2 className=" text-sm ml-1 text-indigo-500">{infos.Category}</h2>
        <p className=" text-sm">Created at {dateFormat}</p>
      </Link>
      <div className="flex justify-center mr-3 items-center" id="button-group">
     
     <form action={like}>
        <input type="hidden"  name="idToLike" value={infos.Id}/>
          <LikeButton information={infos}
        />
       </form>
        <form action={delete_item}>
          <input type="hidden" name="idValue" value={infos.Id} />
       
          <Button   type="submit" className=" hover:bg-red-300 cursor-pointer bg-red-400">
            Delete
          </Button>
       </form>
      </div>
    </div>
  );
};

export default History_card;
