import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const upload = () => {

    const [artName, setArtname] = useState();
    const [genre, setGenre] = useState();
    const [startingBid, setStartingBid] = useState();
    const [endingDate, setEndingDate] = useState();
    const [image, setImage] = useState();
    const [url, setURL] = useState();

    const [selectedImage, setSelectedImage] = useState();
    const [selectedURL, setSelectedURL] = useState();
   // const [uploaded, setUploaded] = useState(false);

    // console.log(artName)
    // console.log(genre)
    // console.log(startingBid)
    // console.log(endingDate)
    console.log(image);
    console.log(url);

    var uploaded = false;
    console.log(uploaded);
    const uploadData = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/uploadartinfo', {
            method: 'POST',
            body: JSON.stringify( {artName: artName, artistName: artistName, genre: genre, currentBid: startingBid, endDate:endingDate} ),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        console.log(data.results);
    }

    const uploadImagetoServer = async (event) => {
       const body = new FormData();
       body.append("file", image);
       const response = await fetch("/api/uploadart", {
            method: 'POST',
            body
       });

       console.log(response.json());
    };

    const uploadImagetoClient = ({target}) => {
        if (target.files && target.files[0]) {
            const img = target.files[0];
            setImage(img);
            setURL(URL.createObjectURL(img));
            console.log(image);
            console.log(url);
        }
    }

  return (
    <div className='bg-Main flex justify-center items-center'>
        <div className='bg-Card h-[30rem] w-[60rem] flex flex-row justify-items-center rounded-lg'>
            <div className='flex flex-col justify-center items-center w-[20rem] gap-[4rem]'>
                <div className='flex flex-col gap-4 justify-center items-center'> 
                    <label>
                        <input type="file"
                            hidden  
                            onChange={({target}) => {
                                setImage(target.files[0]);
                                setURL(URL.createObjectURL(target.files[0]));
                            }}/>
                        {uploaded ? 
                            <Image src={`/images/arts/${selectedImage}`} alt='' /> 
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
                        onChange={({target}) => setArtname(target?.value)}/>
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
                <div className='flex justify-center'>
                    <button className='btn border-primary border-2 text-white font-Space' onClick={() => {
                        uploadData();
                        uploaded = true;
                    }}>
                        Upload
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default upload