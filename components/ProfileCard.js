import React from "react";
import Image from "next/image";
import { useState } from "react";
import UploadModal from "./UploadModal";
import ProfilePictureModal from "./ProfilePictureModal";

const ProfileCard = ({ image, name, refresh, setRefresh }) => {
  const [modalOn, setModalOn] = useState();
  const [profileModal, setProfileModal] = useState();
  return (
    <div className="bg-Card h-[29rem] w-[20rem]">
      <div className="flex flex-col justify-center items-center font-Space">
        <Image
          src={`/images/profiles/${image}`}
          width="150"
          height="150"
          className="rounded-full py-2"
          alt=""
        />
        <h1 className="text-xl py-3 text-white">{name}</h1>
      </div>
      <div>
        {name == localStorage.getItem("user") ? (
          <div className="flex px-5 flex-col gap-4 justify-end">
            <button
              className="rounded-lg py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white"
              onClick={() => {
                setProfileModal(true);
              }}
            >
              Change Profile Picture
            </button>
            <button
              className="rounded-lg py-2 px-3 text-xl font-bold cursor-pointer tracking-wider border-primary border-2 text-white"
              onClick={() => {
                setModalOn(true);
              }}
            >
              Upload Now
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="self-center">
          {modalOn && <UploadModal setModalOn={setModalOn} refresh={refresh} setRefresh={setRefresh}/>}
        </div>
        <div className="self-center">
          {profileModal && (
            <ProfilePictureModal setProfileModal={setProfileModal} setRefresh={setRefresh} refresh={refresh}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
