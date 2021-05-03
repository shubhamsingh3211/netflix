import React from 'react'

export const NavBar = () => {
    const [show, handleShow] = React.useState(false)

    const tarnsitionNavBar = () => {
        if(window.scrollY > 100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", tarnsitionNavBar)
        return () => window.removeEventListener("scroll", tarnsitionNavBar)
    }, [])
    return (
        <div className={`flex justify-between items-center fixed top-0 w-full transition ease-in duration-500 ${show && "bg-black"}`}>
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix logo" className="w-36 object-contain ml-3"/>
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="profile" className="w-18 h-14 mr-3" />
        </div>
    )
} 
