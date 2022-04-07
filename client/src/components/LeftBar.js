import Logo from '../assets/logo.svg';
import Moon from '../assets/icon-moon.svg';
import Sun from '../assets/icon-sun.svg';
import Grav from '../assets/image-avatar.jpg';
import EditForm from './EditForm.js';

const LeftBar = ({lightMode, toggleLightMode, showEdit}) => {
  const mode = lightMode ? Sun : Moon
  return (
    <>
      <div className="left-bar-wrap">
        <div className="left-bar-logo">
          <img src={Logo}/>
      </div>
        <div className="left-bar-user-section">
          <img className="mode-icon" onClick={toggleLightMode} src={mode}/>
          <img className="gravatar" src={Grav}/>
        </div>
      </div>
    </>
  )
}

export default LeftBar;
