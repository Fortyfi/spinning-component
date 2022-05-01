import './sass/App.scss'
import woman from './assets/woman.png'
import man from './assets/man.png'
import analytics from './assets/analytics.svg'
import calendar from './assets/calendar.svg'
import person from './assets/person.svg'
import fingerPrint from './assets/finger-print.svg'
import coconut from './assets/coconut.svg'
import logout from './assets/logout.svg'
import plane1 from './assets/plane-1.svg'
import law from './assets/law.svg'

function App() {
  return (
    <div>
      <div className="orbit">
    <div className="center-image">
      <img src={woman} alt=""/>
      <img src={man} alt=""/>
    </div>
    <ul>
      <li>
        <div><img src={analytics} alt=""/></div>
        <p>Analytics & Reporting</p>
      </li>
      <li>
        <div><img src={calendar} alt=""/></div>
        <p>Time & Attendance</p>
      </li>
      <li>
        <div><img src={person} alt=""/></div>
        <p>Onboarding</p>
      </li>
      <li>
        <div><img src={fingerPrint} alt=""/></div>
        <p>HR Information System</p>
      </li>
      <li>
        <div><img src={coconut} alt=""/></div>
        <p>Leaves & Holidays</p>
      </li>
      <li>
        <div><img src={logout} alt=""/></div>
        <p>Exit & Off-boarding</p>
      </li>
      <li>
        <div><img src={plane1} alt=""/></div>
        <p>Travel & Requisitions</p>
      </li>
      <li>
        <div><img src={law} alt=""/></div>
        <p>Disciplinary</p>
      </li>
    </ul>
  </div>
    </div>
      );
}

      export default App;
