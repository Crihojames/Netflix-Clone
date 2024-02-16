import { useState } from "react";


const Netflix = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = ()=>{
        setIsScrolled(window.pageYoffSet === 0 ? false: true)
        return ()=>(window.onscroll = null)
    }
    console.log(isScrolled);
    return (
        <div className="hero">
            <img src="public\images\avengers age of ultron team together poster.png"  
            alt="Hero image" />
            <img src="public\images\avengers age of ultron team together poster.png" 
            alt="Hero image" />
            <img src="public\images\avengers age of ultron team together poster.png" 
            alt="Hero image" />
            <img src="public\images\avengers age of ultron team together poster.png" 
            alt="Hero image" />
        </div>
    );
};

export default Netflix;