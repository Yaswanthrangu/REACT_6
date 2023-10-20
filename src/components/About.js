import {Link} from "react-router-dom";
import "./portfolio.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';

function About(){
    
    const aboutstyle = {
        textDecoration: "underline blue",
        textUnderlineOffset: "10px",
    }

    return(
        <div class="outerdiv">
            <nav class="navbar navbar-expand-lg navbar-expand-md">
                <div class="container-fluid">
                    <Link to="#" class="navbar-brand">Rangu Yaswanth</Link>
                </div>
                <button type="button" class="navbar-toggler btn btn-primary" data-bs-target="#demo" data-bs-toggle="collapse">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div class="collapse navbar-collapse" id="demo">
                    <div class="navbar-nav">
                        <Link to="/" class="nav-link me-5" >Home</Link>
                        <Link to="/about" class="nav-link me-5" style={aboutstyle}>About</Link>
                        <Link to="/skill" class="nav-link me-5">Skills</Link>
                        <Link to="/projects" class="nav-link me-5">Projects</Link>
                    </div>
                </div>
            </nav>
            <div class="skillhead"><h2>About</h2></div>
            <div class="main-details">
                <div>
                    <label>Name:</label><span class="details">Rangu Yaswanth</span><br/><br/>
                    <label>Date of Birth:</label><span class="details">12 December 2004</span><br/><br/>
                    <label>Age:</label><span class="details">19</span><br/><br/>
                    <label>Degree:</label><span class="details">Bachelor of Technology</span><br/><br/>
                    <label>College:</label><span class="details">Vellore Institute of Technology, Amaravati</span><br/><br/>
                    <label>Phone No:</label><span class="details">+91 9000914090</span><br/><br/>
                    <label>Email:</label><span class="details">yaswanthrangu789@gmail.com</span><br/><br/>

                </div>
                <div class="education">
                    <h3>Education details:</h3>
                    <h5 class="clgname">VIT-AP University</h5>
                    <h6>(2021-2025)</h6>
                    <h6>B.Tech in Computer Science and Engineering</h6>
                    <br/>
                    <h5 class="clgname">Krishnaveni Junior College</h5>
                    <h6>(2019-2021)</h6>
                    <h6>Intermediate - M.P.C</h6>
                    <h6>Percentage: <span class="result">98.5%</span></h6>

                </div>
            </div>
            <div class="work">
                <h2>Work experience</h2>
                <h5 class="clubname">CSI Club - VIT AP (2022-2023)</h5>
                <p>Worked as a web member for
                CSI club during the
                academic year 2022-2023.</p>
                <br/>
            </div>
        </div>
    )
}
export default About;