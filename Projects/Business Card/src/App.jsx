import Photo from './assets/photo.png';
import Body from './components/BodyText';
import Socials from './components/SocialsFooter';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      {/* Need to change photo once better picture is available */}
      <img src={Photo} className="self-photo" />
      <div className="text--container">
        <Header />  {/* Consolodated the PersonalInfo and Buttons components into a Header component */}
        <Body />
        <Socials />
      </div>
    </div>
  )
}

export default App
