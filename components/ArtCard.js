import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const ArtCard = () => {
  const router = useRouter();
  const [dataResponse, setDataResponse] = useState([]);
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const [dateTime, setDateTime] = useState();

  // console.log("Datetime: " + dataResponse.endDate.split('-')[0] + " " + dataResponse.endDate.split('-')[1]);
  // console.log(Date(dataResponse.endDate) - Date().get);

  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `/api/gettrendingart`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      console.log(res.results);
      setDataResponse(res.results);
      // difTime();
    }
    getPageData();

  }, []);

  useEffect(() => {
    startTimer();
  });

  // let t = dateTime.split(/[: -]/);
  // let d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));

  // console.log(d);

  const startTimer = () => {
    interval = setInterval(() => {
      const date1 = new Date();
      const date2 = new Date(date1.toISOString());
      const date3 = new Date(dataResponse.endDate);
      const distance = date3 - date2;
      console.log(distance);
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  return (
    <div
      className="bg-Card h-[29rem] w-[22rem] rounded-md flex flex-col font-Space"
      onClick={() => {
        router.push(`/biddings/${dataResponse.artName}`);
      }}
    >
      <Image
        src={`/images/arts/${dataResponse.artPath}`}
        className="rounded-lg self-center my-6"
        alt=""
        width="200"
        height="100"
      />
      <div className="flex flex-row justify-between px-6">
        <h1 className="text-lg text-white">{dataResponse.artName}</h1>
        <Image
          src={`/images/profiles/${dataResponse.imagePath}`}
          width="45"
          height="45"
          className="rounded-full"
          alt=""
        />
      </div>
      <div className="flex flex-row py-2 px-2 justify-around">
        <ul className="flex flex-col items-center">
          <li>
            <h2 className="text-gray-500 text-lg">Current Bid</h2>
          </li>
          <li>
            <h3 className="text-white text-md">
              {dataResponse.currentBid} BDT
            </h3>
          </li>
        </ul>
        <ul className="flex flex-col items-center">
          <li>
            <h2 className="text-gray-500 text-lg">Bidders</h2>
          </li>
          <li>
            <h3 className="text-white text-md">{dataResponse.numBidders}</h3>
          </li>
        </ul>
        <ul className="flex flex-col items-center">
          <li>
            <h2 className="text-gray-500 text-lg">Ending In</h2>
          </li>
          <li>
            <h3 className="text-white text-md">
              {timerDays}d {timerHours}h {timerMinutes}m {timerSeconds}s
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ArtCard;
