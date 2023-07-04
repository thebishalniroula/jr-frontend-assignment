import Image from "next/image"
import Button from "../ui/Button"
const Hero = () => {
  return (
    <div className="h-96 bg-slate-300 flex items-center justify-between px-10 rounded-md mt-5">
        <div>
        <h1 className="text-4xl uppercase font-semibold tracking-wider">Music Sansar</h1>
        <p>Sansar for music lovers</p>
        <Button className="mt-2">Play now</Button>
        </div>
        <div className="h-[500] w-[500] overflow-hidden rounded-lg">
            <Image src={"/hero.jpg"} alt="hero image" height={500} width={400}/>
        </div>
    </div>
  )
}

export default Hero
