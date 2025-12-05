import React, { ReactNode } from 'react'
import Image from 'next/image'
import src from "@/lib/Frame 2.png"

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout
