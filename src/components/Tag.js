import React, {useState} from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("car");

  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] mb-[40px]">
      <h1 className="text-2xl underline font-bold mt-[15px]">A RANDOM GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} alt="Random GIF" width="450" />) 
      }

      <input 
        className="w-10/12 text-black text-lg py-2 rounded-lg mb-[2px] text-center"
        onChange={(event) => setTag(event.target.value)} 
        value={tag}
      />

      <button onClick={ () => fetchData(tag)} 
      className="w-10/12 bg-green-200 text-black text-lg py-2 rounded-lg mb-[20px]">
      GENERATE
      </button>
    </div>
  )
}
export default Tag;