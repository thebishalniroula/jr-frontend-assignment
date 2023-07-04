type TrackCardProps = {
    title:string
    duration:number
    explicit_lyrics:boolean
  }
  const TrackCard = ({title, duration, explicit_lyrics}:TrackCardProps)=>{
    return <div className="p-3 bg-slate-300 rounded-md">
        {explicit_lyrics && <span className="bg-slate-200 px-2 py-2 text-sm">Explicit lyrics</span>}
        <p className="mt-2 text-lg">{title}</p>
        <p className="text-sm">Duration: {duration} seconds</p>
    </div>
  }

  export default TrackCard