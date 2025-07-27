
import { Button } from "@/components/ui/button"
import { FaArrowRight } from "react-icons/fa";

const FinalPart = () => {
  return (
    <div className=' flex justify-center items-center  h-[250px] mt-20  '>
        <div id='final-part' className=' max-w-3xl flex flex-col bg-indigo-500 border border-indigo-300/60 text-center h-full w-[90%] rounded-md items-center '>
      <h1 className=' mx-3 mt-4  text-slate-50 text-3xl font-semibold'>Ready to Transform Your Cold Calling?</h1>
      <p className=' text-slate-300 mt-2 text-center mx-10'>Join thousands of sales professionals who've already improved their conversion rates with Callia.</p>
      <Button variant="secondary" className=" cursor-pointer mt-8">Start your free trials <FaArrowRight />
</Button>
      </div>
    </div>
  )
}

export default FinalPart
