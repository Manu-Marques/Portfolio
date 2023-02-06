import "./styles.css";

export default function Skills() {
    return (
        <div className="main">  
        <div className="btn-box">  
             <button className="btn active">Tab One</button>  
             <button className="btn"> Tab Two</button>  
             <button className="btn">Tab Three</button>  
        </div>  
        <div className="contents">  
             <h1>Heading One</h1>  
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  
             tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  
             consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse  
             cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non  
             proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  
             <a href="#" className="hero-btn">Learn More</a>  
        </div>  
   </div>  
    );
}