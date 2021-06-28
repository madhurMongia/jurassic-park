import React from 'react'
import "./styles/footer.css";
import { useLocation} from "react-router-dom";


export default function Footer() {

    const location = useLocation();
    const [fixed,setFixed] = React.useState(false);
    React.useEffect(() => {
        if(location.pathname === "/gallery"){
            setFixed(true);
        }
        else {
            setFixed(false);
        }
    },[location])
    return (
        <div className="footer" style = {{
            position: fixed? "fixed":"relative"
        }}>
            <div className="policy">JURRASSIC PARK © 2021 | PRIVACY POLICY</div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p>Molestiae, eveniet?</p>
            <div className="icons">
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-pinterest-p"></i>
            </div>
        </div>
    )
}
