import React, {useState, useEffect} from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/constant"
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    getVideos()
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API)
    const json = await data.json()
    
    // console.log(json.items);

    setVideos(json.items);

  }

  return (
    <div className="m-2 flex flex-wrap">
      {videos.map((video) => (
        
          <Link to={"/watch?v="+ video.id} key={video.id}><VideoCard info={video} /></Link>
       
      ))}
    </div>
  )
}

export default VideoContainer
