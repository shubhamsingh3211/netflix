import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bannerImage } from '../Redux/Banner/action'

export const Banner = () => {
    
    const dispatch = useDispatch()

    const banner_details = useSelector((state) => state.banner.bannerImage)
    
    const {backdrop_path, name, title, original_name, overview} = banner_details

    React.useEffect(() => {
        dispatch(bannerImage())
    },[dispatch])

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0,n - 1) + "..." : str
    }
    return (
        <div className="bg-cover bg-center text-white object-contain" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${backdrop_path}")`}}>
            {/* Description div */}
            <div className="pt-40 pl-6">
                {/* Title div */}
                <div>
                    <h1 className="text-5xl font-extrabold">{name || title || original_name}</h1>
                </div>
                {/* Button Div */}
                <div>
                    <button className="w-32 p-1.5 mt-3 bg-gray-900 font-bold hover:text-black hover:bg-white transition duration-150 ease-in">Play</button>
                    <button className="w-32 ml-4 p-1.5 bg-gray-900 font-bold hover:text-black hover:bg-white transition duration-150 ease-in">My List</button>
                </div>
                {/* Detail */}
                <div className="mt-3 text-sm pr-5 md:w-1/4 font-bold">
                    {truncate(overview, 150)}
                </div>
            </div>
            {/* Bottom */}
            <div className="pt-10"></div>
            <div className="bg-gradient-to-t from-gray-900" />
        </div>
    )
}
