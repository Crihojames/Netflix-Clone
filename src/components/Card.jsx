import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { IoPlayCircleSharp } from "react-icons/io5"
import { AiOutlinePlus } from "react-icons/ai"
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri"
import {BiChevronDown} from "react-icons/bi"
import { BsCheck } from "react-icons/bs"

const Card = () => {
  const [onHovered, setOnHovered] = useState(false)
  const navigate = useNavigate()
  return (
    <CardContainer
      onMouseEnter={() => setOnHovered(true)}
      onMouseLeave={() => setOnHovered(false)}
    >
      <img
        src="public\images\netCard.jpg"
        alt="movie poster"
        onClick={() => navigate("/player")}
      />
      {onHovered && (
        <div className="hover">
          <div className="image-video-wrapper">
            <img
              src="public\images\netCard.jpg"
              alt="movie poster"
              onClick={() => navigate("/player")}
            />
            <video
              src="https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4"
              autoPlay
              loop
              controls
              muted
            />
          </div>
          <div className="info-container">
            <h3
              className="movieName"
              onClick={() => navigate("/player")}
            >
              Red Notice
            </h3>
            <div className="icons">
                <div className="controls">
                    <IoPlayCircleSharp title="play" onClick={()=> navigate("/player")} />
                    <RiThumbUpFill title="like" />
                    <RiThumbDownFill title="Dis like" />
                    <BsCheck title="Remove from List" />
                    <AiOutlinePlus title="More Info" />
                </div>
                <div className="info">
                    <BiChevronDown />
                </div>
            </div>
            <div className="genre">
              <ul>
                <li>Action</li>
                <li>Action</li>
                <li>Action</li>
                <li>Action</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  background-color: red;
  img {
    max-width: 230px;
  }
`

export default Card
