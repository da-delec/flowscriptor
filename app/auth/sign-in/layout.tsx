import React, { ReactNode } from 'react'
import Image from 'next/image'
import src from "@/lib/Frame 2.png"
import { unstable_ViewTransition as ViewTransition } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Image alt='calia-logo' height={60} width={60} src={src} />
        <ViewTransition enter={"slide-in"}>
         
      {children}
      </ViewTransition>
    </div>
  )
}

export default layout
