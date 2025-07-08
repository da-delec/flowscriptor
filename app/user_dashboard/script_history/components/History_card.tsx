"use server";
import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { delete_item } from "../action/delete_action";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";

type userInfos = {
  Id: string;
  CreatedAt: Date;
  Title: string;
  Script: string;
  Category: string;
  UserId: string;
};

const History_card = ({ infos }: { infos: userInfos }) => {
  const date = infos.CreatedAt;
  const dateFormat = date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className=" w-[90%] bg-[hsl(0,0%,%)] md:w-[70%] flex justify-between  border shadow-lg border-[hsl(0,0%,90%)] min-h-[75px] h-[75px] rounded-lg ">
      <div id="information" className="flex flex-col  ml-2 mt-1">
        <h1 className=" text-lg font-semibold text-[hsl(0,0%,5%)] ">
          {infos.Title}
        </h1>
        <h2 className=" text-sm ml-1 text-indigo-500">{infos.Category}</h2>
        <p className=" text-sm">Created at {dateFormat}</p>
      </div>
      <div className="flex justify-center mr-3 items-center" id="button-group">
     

       <Button id="favoris" className=" bg-white border border-indigo-500 mx-3">

       </Button>
        <form action={delete_item}>
          <input type="hidden" name="idValue" value={infos.Id} />
       
          <Button type="submit" className=" bg-red-400">
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
};

export default History_card;
