import React from 'react'
import ReactMarkdown from 'react-markdown';
import { DialogDemo } from './modal_save';
import { RippleButton } from '@/components/magicui/ripple-button';
import { TypingAnimation } from '@/components/magicui/typing-animation'

const Script_ = ({script}:{script:string}) => {
  return (
    <div className=' flex-1 min-h-56 h-4/5 w-full flex-col flex justify-center items-center '>
      <div className=' overflow-y-auto  rounded-lg mt-12 mr-4 h-[98%] border border-gray-300/35 shadow-md w-[98%]'>
      <TypingAnimation duration={10} className=' mx-2 my-2 text-start font-normal text-sm'>
        
        
        {script}
        
        </TypingAnimation>
      </div>
      <DialogDemo scriptprops={script} />
      
    </div>
  )
}

export default Script_
