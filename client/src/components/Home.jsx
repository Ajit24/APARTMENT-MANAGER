import "./Home.css"
import { useNavigate } from "react-router-dom";

export const Home = () =>{
    const navigate = useNavigate();
    const handleClick = ()=>{
    navigate("/red")
    }

    return (<div id="homeMain">
        <div id="homeDiv_1">
        <h1 id="homeHead">Welcome to HouseClub</h1>
        <p>A House for Everyone Everywhere</p>
        <button onClick={handleClick}>Click Here..</button>
        </div>
        
    </div>)
}