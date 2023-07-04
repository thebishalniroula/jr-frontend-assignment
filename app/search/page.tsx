"use client"

import TrackCard from "@/components/ui/TrackCard"
import axios from "axios"
import { useEffect, useState } from "react"

const SearchPage = () => {
    const [tracks, setTracks] = useState([])
    const [searchPhrase, setSearchPhrase] = useState("")
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const options = {
            method: 'GET',
            url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
            params: {q: searchPhrase},
            headers: {
              'X-RapidAPI-Key': '2d886154dbmshac5f1b78c96f11fp109984jsnec5e55a01953',
              'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
          };
            (async ()=>{
                const res = await axios.request(options)
                console.log(res);
                                
                if (res.status===200) {
                    setTracks(res.data.data)
                }    
            })()
        }
    return (
    <div className="flex flex-col items-center gap-3 justify-center mt-10">
        <p className="text-lg">Which track are you looking for?</p>
        <form action="submit" className="flex" onSubmit={handleSubmit}>
            <input placeholder="Search..." className="block border h-12 p-2 w-96" value={searchPhrase} onChange={(e)=>setSearchPhrase(e.target.value)}/>
            <button type="submit" className="py-2 px-3 bg-slate-500 text-white">Submit</button>
        </form>
        <div>
        <div className="grid grid-cols-1 gap-2">
        {tracks?.map((track:{id:string, title:string, duration:number, explicit_lyrics:boolean, type:string})=>track.type==="track"?<TrackCard key={track.id} title={track.title} duration={track.duration} explicit_lyrics={track.explicit_lyrics}/>:null)}
        </div>
        </div>
    </div>

  )
}

export default SearchPage
