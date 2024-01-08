import { LuFileSpreadsheet } from "react-icons/lu";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
 return (
  <motion.div drag dragConstraints={reference} whileTap={{scale: 1.1, zIndex: 2}} layout className="cursor-pointer select-none relative shrink-0 w-[270px] h-[350px] bg-zinc-900/85 rounded-[50px] py-[40px] px-[30px] text-gray-300 overflow-hidden">
   <LuFileSpreadsheet size={'30px'} />
   <p className="mt-[15px] font-gilroy font-semibold tracking-wider">{data.desc || 'Hello, Everyone. My name is Adarsh Jain.'}</p>
   <h1 className="font-gilroy font-semibold absolute bottom-[75px] tracking-widest">{data.size}</h1>

   {data.icon
    ? (<LiaDownloadSolid className="cursor-pointer text-white text-[28px] bg-zinc-800 p-[6px] rounded-full absolute bottom-[75px] right-[30px]" />)
    : (<IoClose className="cursor-pointer text-white text-[28px] bg-zinc-800 p-[6px] rounded-full absolute bottom-[75px] right-[30px]" />)
    }

   <button className={`absolute bottom-0 w-full ${data.type === 'Download' ? 'bg-green-600' : 'bg-sky-600'} left-0 py-[19px] text-[16px] font-semibold`}>{data.type}</button>
  </motion.div>
 )
}

export default Card