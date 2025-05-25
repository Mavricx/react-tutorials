import React from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/mavricx")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error("Error fetching followers:", error));
//   }, []);

const data=useLoaderData()
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers:{data.followers}
      <img src={data.avatar_url } alt="git picture" width={300} />
    </div>
  );
}

export default Github;


export const gitInfoLoader=async()=>{
    const response=await fetch("https://api.github.com/users/mavricx");
     return response.json();
}