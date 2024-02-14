import styled from "styled-components"

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img
        src="public\images\netflixBackground.jpg"
        alt="non internet connection"
      />
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`

export default BackgroundImage
