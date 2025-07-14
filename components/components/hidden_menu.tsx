import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Add_script_button from "./add_script_button";

const Hidden_menu = ({isOpen}:{isOpen:boolean}) => {
  return (
    <motion.div
      initial={{ x: 150 }}
      animate={{ x: 0 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={` md:hidden  absolute top-[68px] flex  items-center flex-col right-0 bg-[hsl(0,0%,100%)] border-l h-screen w-1/3`}
    >
      <Link  className=" h-12 rounded-md w-2/3 flex justify-center items-center font-medium hover:bg-[hsl(0,0%,95%)]  text-gray-950 text-[14px] mt-16 my-6 " href={"/"}>
        Dashbaord
      </Link>
      <Link className=" h-12 rounded-md w-2/3 flex justify-center items-center  font-medium hover:bg-[hsl(0,0%,95%)] text-gray-950 text-[14px] my-6 " href={"/"}>
        Scripts
      </Link>

      <Link className=" h-12 rounded-md w-2/3 flex justify-center items-center  font-medium hover:bg-[hsl(0,0%,95%)] text-gray-950 text-[14px] my-6 " href={"/"}>
        Ressources
      </Link>
      <Add_script_button />
    </motion.div>
  );
};

export default Hidden_menu;
