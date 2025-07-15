"use client"
import React from 'react'
import History_card from './History_card'
import { useState } from 'react';
import { Button } from '@/components/ui/button';




type userInfos  =  {
  Script: string;
  Id: string;
  Title: string;
  Category: string;
  CreatedAt: Date;
  UserId: string;
  isFavorite: boolean;
}[];;

const Script_list =  ({data}:{data:userInfos}) => {
   
    const [filteredData,setFilterData] = useState(false)
    
     const showFavorites = filteredData ? 
     data.filter((item)=>{
        return item.isFavorite == true
     }): data;
    
   //probleme de type entre ce qu on recois de l api et ce qu on envoit en props pour le mapping , a regler  
  return (
    <>
    <div id='button-container-title' className=' w-full  ml-14 md:ml-24'>
    <Button variant={'outline'} className={`${filteredData ? "bg-indigo-500 hover:bg-indigo-300 hover:text-white hover:border-none text-white":" text-indigo-500 hover:text-white hover:border-none hover:bg-indigo-300"}  border-indigo-500  cursor-pointer left-10`} onClick={()=>setFilterData(!filteredData)}>Filter Data</Button>
    </div>
    {showFavorites.map((item)=>{
        return (
          <History_card setIsFavorite ={setFilterData} infos={item} key={item.Id} />
        )
      })}
      </>
  )
}

export default Script_list
