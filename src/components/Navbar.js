import React, {useState} from 'react';
import './Navbar.scss'; 
function Toppages(props) {
    const [NavWidth, setNavWidth] = useState('150px');
    return (
        <div>
            <div className="sidenav" style={{width : NavWidth}}>
                <div className="sidenav-link">About</div>
                <div className="sidenav-link ">Projects</div>
                <div className="nav-close" onClick={() => setNavWidth('0px')}><span>aaa</span></div>
                <div className="sidenav-link ">Educations</div>
                <div className="sidenav-link ">Experence</div>
            </div>
            <div className="sidenav-icon">
                <div className="nav-open-button"><i></i></div>
            </div>
                
        </div>
        
    );
}
export default Toppages;