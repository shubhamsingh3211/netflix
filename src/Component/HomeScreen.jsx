import React from 'react'
import { Banner } from './Banner'
import { NavBar } from './NavBar'
import { Row } from './Row'
// import { Row2 } from "../Component/Row2" 

export const HomeScreen = () => {
    return (
        <div>
            {/* NavBar */}
            <NavBar />
            
            {/* Banner */}
            <Banner />

            {/* Row */}
            <Row title="NETFLIX ORIGINALS" fetchUrl="/discover/tv?api_key=dd229825107a92713d83a649e77aece1&with_networks=213" isLargeRow />
            <Row title="Trending Now" fetchUrl="/trending/all/week?api_key=dd229825107a92713d83a649e77aece1&language=en-US" />
            <Row title="Top Rated" fetchUrl="/movie/top_rated?api_key=dd229825107a92713d83a649e77aece1&language=en-US" />
            <Row title="Action Movies" fetchUrl="/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=28" />
            <Row title="Comedy Movies" fetchUrl="/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=35" />
            <Row title="Horror Movies" fetchUrl="/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=27" />
            <Row title="Romance Movies" fetchUrl="/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=10749" />
            <Row title="Documentaries" fetchUrl="/discover/movie?api_key=dd229825107a92713d83a649e77aece1&language=en-US&with_genres=99" />
        </div>
    )
}
