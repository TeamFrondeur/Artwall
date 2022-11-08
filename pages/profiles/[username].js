import React from 'react'
import ProfileCard from '../../components/ProfileCard'
import ProflieArt from '../../components/ProflieArt'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


const ProfileDetail = () => {

    const router = useRouter();
    const { username } = router.query;
    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        async function getProfileData() {
            const response = await fetch('/api/getprofile', {
                method: 'POST',
                body: JSON.stringify({username: username}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const res = await response.json();
            setDataResponse(res.results);
        }
        getProfileData();
    },[router.query.username, router.isReady]);

    return (
    <div className='bg-Main h-screen w-screen'>
        <div className='flex flex-row'>
            <div className='px-5 py-5'>
                <ProfileCard name={dataResponse.username}/>
            </div>
            <div className='bg-red-500 '>
              <ProflieArt />
            </div>
        </div>
    </div>
    )
}

export default ProfileDetail;