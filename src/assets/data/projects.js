import { v4 as uuidv4 } from 'uuid';
import BudgeImg from '../images/budcalcu.jpg';
import UserAuthImg from '../images/userauth.jpeg';
import DictImf from '../images/dict.png';
import SpeechImg from '../images/spchrecog.jpg';
import TeslaImg from '../images/Capture.JPG';
import WeathImg from '../images/Capture1.JPG';
import UTrackerImg from '../images/download.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';
import disneyImg from '../images/disney.JPG';

const projects = [
  {
    id: uuidv4(),
    name: 'Oracle',
    desc: 'This is a AI program created to assist me in daily work, still under development though...',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Play-Your-Music',
    desc: 'This is a music player GUI created using Tkinter Framework and Python.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Tiny Yourl',
    desc: 'This is a url shortner created with django as backend and Html, Css and JavaScript as frontend.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Disney-Plus-Clone',
    desc: 'Its a clone of Disney/Hotstar web-application with tech used like react-redux app with firebase used as the database.',
    img: disneyImg,
  },
  {
    id: uuidv4(),
    name: 'Speech Recognition System',
    desc: 'This is a speech recognition flask app created in which we upload an audio file from our system and it delivers all the audio in the form of text as output.',
    img: SpeechImg,
  },
  {
    id: uuidv4(),
    name: 'Make My Budget',
    desc: 'This is a budget calculator app which take the income and expense of a user and is used to calculate the balance with a graph.',
    img: BudgeImg,
  },
  {
    id: uuidv4(),
    name: 'User-Authentication System',
    desc: 'This is a user registration web app created with Django with functionalities of user registration, login-logout, email confirmation functionality.',
    img: UserAuthImg,
  },
  {
    id: uuidv4(),
    name: 'Get to know',
    desc: 'This is a dictionary web app build with Django, HTML, CSS, JS. Which tells you the meaning of the word you search.',
    img: DictImf,
  },
  {
    id: uuidv4(),
    name: 'Tesla-Clone',
    desc: 'This is a clone of the Tesla Website created with reactjs- [redux, styled componenets]',
    img: TeslaImg,
  },
  {
    id: uuidv4(),
    name: 'Weather App',
    desc: 'This is a weather app GUI using python which tell multiple things regarding the weather at a particular city.',
    img: WeathImg,
  },
  {
    id: uuidv4(),
    name: 'Portfolio Website',
    desc: 'Website you sare currently seeing this on was made with the help of Reactjs.',
    img: CavinImg,
  },
];

export default projects;
