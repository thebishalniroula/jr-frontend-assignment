import Hero from "@/components/home/Hero"
import AlbumCard from "@/components/ui/AlbumCard"
import albumsData from "@/data/albumsData";

async function getAlbums() {
return albumsData
}

export default async function Home() {
  const {data:albums} = await getAlbums()
  return (
    <div>
      <Hero/>
      <h2 className="mt-5 text-2xl font-medium">Trending albums</h2>
      <div className="h-[2px] w-52 bg-slate-600 mb-5"></div>
      <div className="grid grid-cols-5 gap-4 pb-5">
      {albums.map((album)=>{
        return <AlbumCard key={album.id} id={album.id} title={album.title} artist={album.artist} image={album.cover_medium}/>
      })}
      </div>
    </div>
  );
}
