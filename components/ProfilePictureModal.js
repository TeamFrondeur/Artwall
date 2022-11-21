import React, { useState } from "react";
import Image from "next/image";

const ProfilePictureModal = ({ setProfileModal, refresh, setRefresh}) => {
  const [uploaded, setUploaded] = useState(false);
  const [image, setImage] = useState();
  const [url, setURL] = useState();

  const uplpoadProfilePicture = async (event) => {
    event.preventDefault();
    const body = new FormData();
    body.append("file", image, localStorage.getItem('user') + "." + image.name.split(".")[1]);
    const response = await fetch("/api/uploadprofilepic", {
      method: "POST",
      body,
    });

    console.log(response.json());
  };

  const updateProfileData = async (event) => {
    event.preventDefault();

    uplpoadProfilePicture(event);

    const response = await fetch("/api/updateprofilepic", {
      method: "POST",
      body: JSON.stringify({
        userName: localStorage.getItem("user"),
        imagePath:
          localStorage.getItem("user") + "." + image.name.split(".")[1],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data.results);
    alert("Updated Profile Picture!");
    setRefresh(!refresh);
    setProfileModal(false);
  };

  const handleClose = () => {
    setProfileModal(false)
  };

  return (
    <div className="bg-black bg-opacity-50 fixed inset-0 h-auto flex justify-center items-center">
      <div className="bg-Card h-[30rem] w-[60rem] flex flex-col gap-5 justify-center items-center rounded-lg">
        <div className="flex flex-col gap-4 justify-center items-center">
          {uploaded ? (
            <></>
          ) : (
            <h1 className="text-3xl font-Space text-white">
              Upload Profile Picture
            </h1>
          )}
          <label>
            <input
              type="file"
              hidden
              onChange={({ target }) => {
                const file = target.files[0];
                setImage(file);
                setURL(URL.createObjectURL(file));
                setUploaded(true);
              }}
            />
            {uploaded ? (
              <Image
                src={`${url}`}
                alt=""
                width={400}
                height={400}
                className="rounded-full"
              />
            ) : (
              <span>
                <Image
                  src="/images/icons/upload-50.png"
                  width={50}
                  height={50}
                  alt=""
                />
              </span>
            )}
          </label>
        </div>
        <div className="flex justify-around gap-5">
          {uploaded ? (
            <button
              className="btn border-primary border-2 text-white font-Space"
              onClick={updateProfileData}
            >
              Upload
            </button>
          ) : (
            <></>
          )}
          <button
            className="btn border-primary border-2 text-white font-Space"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureModal;
