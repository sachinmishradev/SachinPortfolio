import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () =>
{
    return(
        <div>   
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="#"><span id='fs'>S</span><span id='fa'>a</span><span id='fc'>c</span><span id='fh'>h</span><span id='fi'>i</span><span id='fn'>n</span><span id=''> </span><span id='lm'>M</span><span id='li'>i</span><span id='ls'>s</span><span id='lh'>h</span><span id='lr'>r</span><span id='la'>a</span></a>      
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
    <FontAwesomeIcon icon={faBars}/>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item a ctive">
        <a className="nav-link"  href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link" href="#">How work</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
      </li>            
      <li className="nav-item">
        <a className="nav-link" href="#">Contacts</a>
      </li> 
    </ul>    
  </div>
</nav>
        </div>
    );
}

export default NavBar;