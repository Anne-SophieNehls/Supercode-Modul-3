import { useEffect, useRef } from "react"

export default function Fanfare(){
    const audioRef = useRef<HTMLAudioElement>(null)
    useEffect(()=>{
        audioRef.current!.play()
    },[])
    return <audio ref={audioRef} src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Fanfares_of_President_of_the_Czech_Republic.ogg"></audio>
}