
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY, YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import CommentsContainer from "./CommentsContainer";
import { ThumbsDown, ThumbsUp, Forward } from "lucide-react";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [videoList, setVideoList] = useState([]);
  const [VideoDetailsById, SetVideoDetailsById] = useState([]);
  const [channelDetails, setChannelDetails] = useState([]);

  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    // giveApiResponse();
    getRelatedVideo();
    getVideoDetailsById();
  }, [searchParam]);

  const getVideoDetailsById = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${searchParam.get(
        "v"
      )}&key=AIzaSyAXXswR90gvfIHnJCpf12LPgz2-XDQR4uA`
    );
    const jsonOne = await response.json();

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${jsonOne.items[0].snippet.channelId}&key=${GOOGLE_API_KEY}`
    );
    const jsonTwo = await res.json();

    SetVideoDetailsById(jsonOne.items[0].snippet);
    setChannelDetails(jsonTwo.items[0].snippet);
  };

  const getRelatedVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideoList(json.items);
  };

  return (
    <div className="grid grid-flow-col">
      <div className="col-span-11 m-2">
        <div className="">
          <iframe
            width="100%"
            height="600"
            src={`https://www.youtube.com/embed/${searchParam.get("v")}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <h1 className="py-3 font-semibold text-xl">{VideoDetailsById.title}</h1>
        <div className="lg:flex md:flex-wrap sm:flex-wrap">
          <div className="flex">
            <img
              className="h-10 my-8 rounded-full"
              src={channelDetails.thumbnails?.high.url} 
              alt="img"
            />
            <h1 className="py-10 px-2 font-semibold text-xl">
              {VideoDetailsById.channelTitle}
            </h1>
            <img
              className="h-28 cursor-pointer"
              src="https://cdn.pixabay.com/photo/2021/03/18/10/21/subscribe-6104536_1280.png" alt="img"
            ></img>
          </div>
          <div className=" h-11 my-8 mx-12 flex bg-gray-200 rounded-3xl">
            <ThumbsUp className="mx-4 cursor-pointer my-3" />
            <ThumbsDown className="mx-4 cursor-pointer my-3" />
          </div>
          <div className=" h-11 my-8 bg-gray-200 flex rounded-3xl cursor-pointer">
            <Forward size={32} className="my-2 mx-2" />
            <h1 className="my-3 mx-2">Share</h1>
          </div>
        </div>
        <div className="shadow-lg h-auto rounded-lg p-2 hover:bg-gray-100 w-auto">
          <p className="font-medium whitespace-pre-line">
            {VideoDetailsById.description}
          </p>
        </div>
        <CommentsContainer />
      </div>
      <div className="col-span-1 pl-4">
        <LiveChat />
        <h1 className="font-bold pt-4 px-2 text-lg">Realted Videos</h1>
        {videoList.map((item) => {
          return (
            <Link to={`/watch?v=${item.id}`} key={item.id}>
              <VideoCard info={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WatchPage;
