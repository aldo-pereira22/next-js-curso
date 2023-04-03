import NavBar from "./Navbar"
import Footer from "./Footer"

export default function MainContainer({children}){
    return (
        <>
            <div>{children}</div>
            <NavBar/>
            <Footer/>
        </>
    )
}