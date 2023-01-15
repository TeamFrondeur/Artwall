import React from "react";

const ArtistSection = () => {
    // const [dataResponse, setDataResponse] = useState([]);

    // useEffect(() => {
    //   async function getPageData() {
    //       const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
    //       const response = await fetch(apiUrlEndpoint);
    //       const res = await response.json();
    //       console.log(res.results);
    //       setDataResponse(res.results);
    //   }
    //   getPageData();
    // }, [])

    return (
    <div className="flex flex-col">
      <div className="flex flex-col self-center items-center gap-3 font-Space text-white">
        <h3 className="text-2xl">Artists</h3>
        <h1 className="text-3xl">Top Artists of The Week</h1>
      </div>
    </div>
  );
};

export default ArtistSection;
