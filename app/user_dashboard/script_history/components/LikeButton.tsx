import React from 'react'
import { Button } from '@/components/ui/button'
import { FaHeart } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
type userInfos = {
    Id: string;
    CreatedAt: Date;
    Title: string;
    Script: string;
    Category: string;
    isFavorite:boolean;
    UserId: string;
  };

const LikeButton = ({information}:{information:userInfos}) => {
  return (
    
        <Button type="submit" id="favoris" className=" bg-white border cursor-pointer hover:border-none hover:bg-indigo-200 border-indigo-500 mx-3">
          {information.isFavorite ? (
            <>

            <FaHeart className=" text-indigo-500" />
            <p className=" text-indigo-500">Liked</p>
            </>
          ) : (
            <>
            <FaRegHeart className=" text-indigo-500" />
            <p className=" text-indigo-500">Like</p>
            </>

          )}
       </Button>
      
    
  )
}

export default LikeButton
