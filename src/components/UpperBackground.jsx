import { useRef } from "react"
import Card from "./Card"

const UpperBackground = () => {

  const data = [
    {
      desc: "Embrace the journey, not just the destination.",
      size: '.4mb',
      icon: true,
      type: 'Download'
    },
    {
      desc: "In the midst of chaos, find your peace.",
      size: '.9mb',
      icon: false,
      type: 'Upload'
    },
    {
      desc: "Your potential is endless; explore it fearlessly.",
      size: '1.2mb',
      icon: true,
      type: 'Download'
    },
    {
      desc: "Kindness is a language that the deaf can hear and the blind can see.",
      size: '2.3mb',
      icon: true,
      type: 'Download'
    },
    {
      desc: "The only way to do great work is to love what you do.",
      size: '1.5mb',
      icon: false,
      type: 'Upload'
    },
  ]

  const ref = useRef(null)
  
  return (
    <div ref={ref} className="w-full h-screen relative top-0 left-0 px-10 py-24 flex flex-wrap gap-10">
     {data.map((item, index) => (
      <Card data={item} reference={ref} />
     ))}
    </div>
  )
}

export default UpperBackground