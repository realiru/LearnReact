import Photo from './assets/photo.png';
import PersonalInfo from './components/PersonalInfo';
import Buttons from './components/Buttons';
import Body from './components/BodyText';
import Socials from './components/SocialsFooter';

function App() {
  return(
    <div className="container">
    {/* Need to change photo once better picture is available */}
    <img src={Photo} className="self-photo"/> 
    <div className="text--container">
    <PersonalInfo />
    <Buttons />
    <Body />
    <Socials />
    </div>
    </div>
  )
}

export default App
