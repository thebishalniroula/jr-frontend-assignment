import axios from "axios";
import Image from "next/image";
import TrackCard from "@/components/ui/TrackCard"
async function getAlbums(id:string) {
    const options = {
      method: 'GET',
      url: 'https://api.deezer.com/album/'+id,
    };
    const response = await axios.request(options);
    return response.data
    }

    const AlbumDetailPage = async ({params}:{params:{id:string}}) => {
    const albumDetails = await getAlbums(params.id)
    const {title, cover_big, genres, release_date, tracklist, tracks, contributors} = albumDetails    

    return (
      <div className="mt-10">
        <div className="flex items-center justify-start gap-10">
        <Image src={cover_big} alt={title} height={400} width={400}/>
        <div>
            <h1 className="text-xl">Title: <span className="font-medium">{title}</span></h1>    
        <p>Release: {release_date}</p>
        <p>Genres: {genres.data.map((genre:{name:string})=><span>{genre.name}</span>)}</p>
        </div>
        </div>
        <div className="mt-10"></div>
        <h2 className="mt-5 text-xl font-medium">Tracks</h2>
      <div className="h-[2px] w-52 bg-slate-600 mb-5"></div>
      <div className="grid grid-cols-3 gap-3 mb-3">
        {tracks.data.map((track:{id:string, title:string, duration:number, explicit_lyrics:boolean})=><TrackCard key={track.id} title={track.title} duration={track.duration} explicit_lyrics={track.explicit_lyrics}/>)}
      </div>
      </div>
    )
  }
  
  export default AlbumDetailPage
  
