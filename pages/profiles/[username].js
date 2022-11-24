import React from "react";
import ProfileCard from "../../components/ProfileCard";
import ProflieArt from "../../components/ProflieArt";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProfileDetail = () => {
  const router = useRouter();
  const { username } = router.query;
  const [dataResponse, setDataResponse] = useState([]);
  const [artResponse, setArtResponse] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [inventory, setInventory] = useState();
  useEffect(() => {
    getProfileData();
  }, [router.query.username, router.isReady]);

  useEffect(() => {
    getProfileData();
  }, [refresh]);

  async function getProfileData() {
    const response = await fetch("/api/getprofile", {
      method: "POST",
      body: JSON.stringify({ userName: username }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    setDataResponse(res.results);
    console.log(dataResponse);

    const response2 = await fetch("/api/getprofileart", {
      method: "POST",
      body: JSON.stringify({ artistName: username }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res2 = await response2.json();
    setArtResponse(res2.results);
    console.log(artResponse);

    const response3 = await fetch("/api/getprofileinventory", {
        method: "POST",
        body: JSON.stringify({ artistName: username }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res3 = await response3.json();
      setArtResponse(res3.results);
      console.log(artResponse);
  }

  return (
    <div className="bg-Main w-screen overflow-hidden">
      <div className="flex flex-row">
        <div className="px-5 py-5">
          <ProfileCard
            name={dataResponse.userName}
            image={dataResponse.imagePath}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="my-5 mx-5 rounded-md">
            <div className="bg-Card rounded-md">
              <h1 className="max-w-max px-3 py-1 text-3xl font-Space text-white">
                Active Listings
              </h1>
            </div>
            <div className="w-[55rem] overflow-x-auto scroll whitespace-nowrap scroll-smooth">
              <div className="flex flex-row gap-5 py-2 ">
                {artResponse.map((item) => {
                  return (
                    <div key={item.idART}>
                      <ProflieArt
                        artName={item.artName}
                        currentBid={item.currentBid}
                        numBidders={item.numBidders}
                        artPath={item.artPath}
                        imagePath={dataResponse.imagePath}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-Card rounded-md">
              <h1 className="max-w-max px-3 py-1 text-3xl font-Space text-white">
                User Inventory
              </h1>
            </div>
            <div className="w-[55rem] overflow-x-auto scroll whitespace-nowrap scroll-smooth">
              <div className="flex flex-row gap-5 py-2 ">
                {artResponse.map((item) => {
                  return (
                    <div key={item.idART}>
                      <ProflieArt
                        artName={item.artName}
                        currentBid={item.currentBid}
                        numBidders={item.numBidders}
                        artPath={item.artPath}
                        imagePath={dataResponse.imagePath}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <div className='bg-Card rounded-md'>
                    <h1 className='px-3 py-1 text-3xl font-Space text-white'>Inventory</h1>
                  </div>
                  <div className='grid grid-cols-2 py-2 justify-items-center'>
                    <ProflieArt />
                    <ProflieArt />
                  </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
