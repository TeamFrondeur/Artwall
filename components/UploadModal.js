import React, { useState } from 'react'
import Image from 'next/image'
import { data } from 'autoprefixer';

const UploadModal = ({setModalOn}) => {

    const [artName, setArtname] = useState();
    const [genre, setGenre] = useState();
    const [startingBid, setStartingBid] = useState();
    const [endingDate, setEndingDate] = useState();
    const [image, setImage] = useState();
    const [url, setURL] = useState();
    const [uploaded, setUploaded] = useState(false);

    
    console.log(artName)
    console.log(genre)
    console.log(startingBid)
    console.log(endingDate)
    console.log(image);
    console.log(url);
    console.log(uploaded);
    // console.log(image.name);
    // console.log(endingDate.split("T")[0])
    // console.log(endingDate.split("T")[1] + ":00")

    const uploadImagetoServer = async (event) => {
        event.preventDefault();
       const body = new FormData();
       body.append("file", image, artName + '.' + image.name.split('.')[1]);
       const response = await fetch("/api/uploadart", {
            method: 'POST',
            body
       });

       console.log(response.json());
    };

    // const verifyName = async () => {
    //     const response = await fetch('/api/verifyartname', {
    //         method: 'POST',
    //         body: JSON.stringify( {artPath: artName}),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
        
    //     const data = await response.json();

    //     if (data.results != undefined)
    //     {
  
    //     }
    //     else console.log("Name already in use!");
    // }

    const uploadData = async (event) => {
        event.preventDefault();

        uploadImagetoServer(event);
        const datetime = endingDate.split('T')[0] + " " + endingDate.split('T')[1] + ":00";
        const response = await fetch('/api/uploadartinfo', {
            method: 'POST',
            body: JSON.stringify( {
                                    artName: artName,
                                    artistName: localStorage.getItem("user"), 
                                    genre: genre, 
                                    currentBid: startingBid, 
                                    artPath: artName + '.' + image.name.split('.')[1], 
                                    endDate:datetime} ),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data.results);
        setModalOn(false);
    }

    const handleClose = () => {
        setModalOn(false);
    }
  return (
    <div className='bg-black bg-opacity-50 fixed inset-0 h-auto flex justify-center items-center'>
        <div className='bg-Card h-[30rem] w-[60rem] flex flex-row justify-items-center rounded-lg'>
            <div className='flex flex-col justify-center items-center w-[20rem] gap-[4rem]'>
                <div className='flex flex-col gap-4 justify-center items-center'> 
                    <label>
                        <input type="file"
                                hidden  
                                onChange={({target}) => {
                                    const file = target.files[0];
                                    setImage(file);
                                    setURL(URL.createObjectURL(file));
                                    setUploaded(true);
                                }}/>
                        {uploaded ? 
                            <Image src={`${url}`} alt='' width={300} height={500}/> 
                        :
                            <span>
                                <Image src='/images/icons/upload-50.png' width={50} height={50} alt=''/>
                            </span>
                        }
                    </label>
                </div>
            </div>
            <div className='bg-White border-x-[0.01rem] my-10'></div>
            <div className='grid gap-4 my-10 mx-10 justify-center items-center font-Space'>
                <div className='flex flex-row gap-4'>
                    <h1 className='text-2xl text-white'>Artname </h1>
                    <input type={'text'} className='sm form-input rounded-md' placeholder='Artname'
                        onChange={({target}) => {
                            setArtname(target?.value);
                            // verifyName();
                        }}/>
                </div>

                <div className='flex flex-row gap-4'>
                    <h1 className='text-2xl text-white'>Genre </h1>
                    <input type={'text'} className='sm form-input rounded-md' placeholder='Genre'
                        onChange={({target}) => setGenre(target?.value)}/>
                </div>

                <div className='flex flex-row gap-4'>
                    <h1 className='text-2xl text-white'>Initial Bid </h1>
                    <input type={'text'} className='sm form-input rounded-md' placeholder='Initial Bid'
                        onChange={({target}) => setStartingBid(target?.value)}/>
                </div>

                <div className='flex flex-row gap-4'>
                    <h1 className='text-2xl text-white'>Ending Date </h1>
                    <input type={'datetime-local'} className='sm form-input rounded-md'
                        onChange={({target}) => setEndingDate(target?.value)}/>
                </div>
                <div className='flex  justify-around'>
                    <button className='btn border-primary border-2 text-white font-Space' onClick={uploadData}>
                        Upload
                    </button>
                    <button className='btn border-primary border-2 text-white font-Space' onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UploadModal