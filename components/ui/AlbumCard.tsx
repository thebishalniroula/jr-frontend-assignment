import Image from "next/image"
import Link from "next/link"

type AlbumCardPropsType = {
    id:string
    title:string
    image:string
    artist:{
      name:string
      link:string
      tracklist:string
      [key:string]:string
    }
  }
  const AlbumCard = ({id, title, image, artist}:AlbumCardPropsType)=>{
    return (<div className="p-2 border shadow-md">
          <Link href={"/album/"+id} className="flex flex-col">
            <span className="self-center">
              <Image src={image} height={180} width={180} alt={title}/>
            </span>
            <span className="text-lg mt-2">{title}</span>
          </Link>
          <span className="text-sm">Artist: <Link href={artist.link} className="underline">{artist.name}</Link></span>
    </div>
          )
  }
  export default AlbumCard