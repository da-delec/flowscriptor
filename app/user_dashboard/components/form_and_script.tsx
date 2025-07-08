"use client"

import React from 'react'
import { useState } from 'react'
import Form from './form'
import Script_ from './Script'
const Form_and_script = () => {
    const [script,setScript] = useState("")
  return (
    <div id='form_script_container' className='flex flex-col md:flex-row  flex-1 '>
      <div id='form-part' className=' w-full flex flex-col items-center  md:w-3/5'>  
      <h1 className=' text-xl sm:text-2xl mt-5 ml-5 mb-6 font-semibold'>New Script</h1>
      <Form setScript={setScript}  />
      </div>
      <div>

      
      <h1 className=' text-3xl font-semibold mt-6'>Generated Script</h1>
      <Script_ script={script}/>
      </div>
    </div>
  )
}

export default Form_and_script
