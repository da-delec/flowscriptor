import React from 'react'
import Form_and_script from './components/form_and_script'
import Script_history from './components/script_history'
 const page = async () => {
  return (
    <div className=' h-screen flex w-screen '>
       <Script_history />
       <Form_and_script />
      
    </div>
  )
}

export default page
