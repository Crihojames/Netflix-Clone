import React, { useState } from "react"
import Card from "./Card"
import styled from "styled-components"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(function MovieSlider({ data, title }) {
  const [controlVisibility, setControlVisibility] = useState(false)

  return (
    <Container
      controlVisibility={controlVisibility}
      onMouseEnter={() => setControlVisibility(true)}
      onMouseLeave={() => setControlVisibility(false)}
    >
      <h1>{title}</h1>
      <div className="wrapper">
        <div
          className={`slice-action left ${!controlVisibility ? "none" : ''}`}
        >
          <AiOutlineLeft />
        </div>
        <div className="slider">
          {data.map((movie, index) => {
            return (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
              />
            )
          })}
        </div>
        <div
          className={`slice-action right ${!controlVisibility ? "none" : ''}`}
        >
          <AiOutlineRight />
        </div>
      </div>
    </Container>
  )
})

const Container = styled.div`
  gap: 0.7rem;
  position: relative;
  padding: 1rem 0;
  h1 {
    margin-left: 5px;
    font-size: 25px;
    font-family: "Framklin Gothic Medium", "Arial Narrow", Arial, Helvetica,
      sans-serif;
    color: white;
  }
  .wrapper {
    .slider {
      display: flex;
      width: max-content;
      gap: 0.6rem;
      transform: translateX(0px);
      transition: 1s ease-in-out;
      margin-left: 5px;
    }
    .slice-action {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 2rem;
      bottom: 0;
      width: 50px;
      transition: 1s ease-in-out;
      svg {
        font-size: 2rem;
        cursor: pointer;
        color: white;
      }
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
    .none{
        display: none;
    }
  }
`
