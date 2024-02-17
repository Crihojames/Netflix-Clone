import { AiOutlineLogout } from 'react-icons/ai';
import styled from "styled-components";
import { Link } from "react-router-dom";

const TopNav = () => {
    const navlink = [
        {name: "Home", link: '/'},
        {name: "Tv Show", link: '/tv'},
        {name: "My List", link: '/mylist'},
        {name: "Movies", link: '/movies'},
    ]
    return (
        <NavContainer>
            <div className="leftSide">
                <div className="logo">
                    <img src="public\images\Netflix_Logo_PMS.png" 
                    alt="Logo" />
                </div>
                <ul className="links">
                    {
                        navlink.map(({name, link})=>{
                            return(
                                <li key={name}>
                                    <Link to={link}>{name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="righSide">
                <button>
                    <AiOutlineLogout/>
                </button>
            </div>
        </NavContainer>
    );
};

const NavContainer = styled.div`

`

export default TopNav;