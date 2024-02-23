import { useEffect, useState } from "react"
import styled from "styled-components"
// import { AiOutlineInfoCircle } from "react-icons/ai"
// import {FaPlay} from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import TopNav from "../components/TopNav"
import Card from "../components/Card"
import { fetchMovies, getGenres } from "../store"

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const navigate = useNavigate()

  const generesLoaded = useSelector((state)=>state.netflix.generesLoaded)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenres())
  }, [ ])

  useEffect(() => {
    if(generesLoaded){
        dispatch(fetchMovies({type: "all"}))
    }
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYoffSet === 0 ? false : true)
    return () => (window.onscroll = null)
  }
  console.log(isScrolled)
  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src="public\images\avengers age of ultron team together poster.png"
          alt="Hero image"
        />
        <div className="container">
          <div className="title">
            <h1>Avengers: Age of Ultron</h1>
            <p>
              When Tony Stark (RobertDowney Jr.) jump-starts a dormant
              peacekeeping program, things go terribly awry, forcing him, Thor
              (Chris Hemsworth), the Incredible Hulk (Mark Ruffalo) and the rest
              of the Avengers to reassemble. As the fate of Earth hangs in the
              balance, the team is put to the ultimate test as they battle
              Ultron, a technological terror hell-bent on human extinction.
              Along the way, they encounter two mysterious and powerful
              newcomers, Pietro and Wanda Maximoff.
            </p>
          </div>
          <div className="buttons">
            <button
              onClick={() => navigate("/player")}
              className="playBtn"
            >
              Play
            </button>
            <button className="moreBtn">More</button>
          </div>
        </div>
      </div>
      <Card />
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  .hero {
    position: relative;
    .background-image {
      filter: brightness(40%);
    }
    img {
      height: 70vh;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 1rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 73px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p {
          margin-bottom: 50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }
      .playBtn { 
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font: 1.4rem;
        gap: 0, 9;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
      }
      .moreBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        border-radius: 1rem;
        font: 1.4rem;
        gap: 0, 9;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: 0.1rem solid white;
        cursor: pointer;
      }
    }
  }
`

export default Netflix
