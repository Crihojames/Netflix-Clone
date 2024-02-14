import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <div className="logo">
                <img src="public\images\Netflix_Logo_PMS.png" 
                alt="no internet connect" />
            </div>
            <button onClick={()=>navigate(props.login ? "/login" : "/signup")}>
                {props.login ? "Login" : "sign In"}
            </button>

        </HeaderContainer>
    );
};

const HeaderContainer =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 4rem;
.logo{
    img{
        height:3rem;
        cursor: pointer;
    }
}
button{
    padding: 0.5rem 1rem;
    background-color: red;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bold;
    font-size: 1.05rem;
}
`

export default Header;