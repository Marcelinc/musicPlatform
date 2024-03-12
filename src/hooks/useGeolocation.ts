import { useEffect, useState } from "react"

const useGeolocation: Function = () => {
    const [locationData,setLocationData] = useState({
        country:'',
        countryCode:''
    });

    useEffect(() => {
        fetch("http://ip-api.com/json")
        .then(res => res.json())
        .then(data => {
            setLocationData(data)
            console.log('locationdata',locationData)
        });
    },[])

    return {
        country: locationData?.country,
        countryCode: locationData?.countryCode,

    };
}

export default useGeolocation;