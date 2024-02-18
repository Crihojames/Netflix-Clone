import { AiOutlineLogout } from 'react-icons/ai';
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../utils/firebase-config";

import { onAuthStateChanged, signOut } from "firebase/auth"

const TopNav = ({ isScrolled }) => {
  const navlinks = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "My List", link: "/mylist" },
    { name: "Movies", link: "/movies" },
  ];

  const navigate = useNavigate()
  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(!currentUser)navigate('/login')
    })

  return (
    <NavContainer>
        <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
        <div className="leftSide">
            <div className="logo">
            <img
                src="public\images\Netflix_Logo_PMS.png"
                alt="Logo"
            />
            </div>
            <ul className="links">
            {navlinks.map(({ name, link }) => {
                return (
                <li key={name}>
                    <Link to={link}>{name}</Link>
                </li>
                )
            })}
            </ul>
        </div>
        <div className="righSide">
            <button onClick={()=>signOut(firebaseAuth)}>
            <AiOutlineLogout />
            </button>
        </div>
        </nav>
    </NavContainer>
  )
}

const NavContainer = styled.div`

`

export default TopNav;