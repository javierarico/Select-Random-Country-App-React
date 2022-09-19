import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import countries from './data/countries_data_old.js'

// Fuction to show month date year
const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    //console.log(this.props.data)
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
      select,
    } = this.props.data
    return (
      <header>
        <div className='header-wrapper'>
          <h1 className='welcome'>{welcome}</h1>
          <h2 className='title'>{title}</h2>
          <h3 className='subtitle'>{subtitle}</h3>
          <p className='txt'>
            {firstName}<span> </span>{lastName}
          </p>
          <small className='txt-date'>{date}</small>
          <p className='txt'>{select}</p>
        </div>
      </header>
    )
  }
}

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
  userSelect: 'none',
}


//Main Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      selectCountry,
    } = this.props
    const {
      flagImage,
      country,
      capital,
      language,
      population,
      currency,
    } = this.props.maindata
    return(
      <main className='main'>
        <div className='main-wrapper'>
          <div className='country-box'>
            <div className='top-box'>
              <img src={flagImage} alt='flag' style={{width: '100px', height:'70px', marginTop: '.5rem'}}/>
              <h4 className='main-title'>{country}</h4>
            </div>
            <div className='bottom-box'>
              <p className='country-txt'>Capital: <span className='country-span-txt'>{capital}</span></p>
              <p className='country-txt'>Language: <span className='country-span-txt'>{language}</span></p>
              <p className='country-txt'>Population: <span className='country-span-txt'>{population}</span></p>
              <p className='country-txt'>Currency: <span className='country-span-txt'>{currency}</span></p>
            </div>
          </div>
          <Button 
            text='Select Country'
            style={buttonStyles}
            onClick={selectCountry}
          />
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p className='footer-txt'>Copyright 2022</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
    maindata: {
      flagImage: countries[10].flag,
      country: countries[10].name,
      capital: countries[10].capital,
      language: countries[10].languages.join(', '),
      population: countries[10].population,
      currency: countries[10].currency,
    }
  }
  //method to select a country
  selectCountry = () => {
    //250 length -- 250 countries
    //console.log(countries.length)
    //console.log(this.randomNum())
    const randomNumber = this.randomNum();
    let flag = countries[randomNumber].flag
    let name = countries[randomNumber].name
    let capital = countries[randomNumber].capital
    let lang = countries[randomNumber].languages.join(', ')
    let popu = countries[randomNumber].population
    let curr = countries[randomNumber].currency
    //console.log(flag, name, capital, lang, popu, curr)
    this.setState({ maindata: {flagImage: flag, country: name, capital: capital, language: lang, population: popu, currency: curr}})
    //console.log(this.state)
  }
  randomNum = () => {
    return Math.floor(Math.random()*251);
  }
  //Date Function
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  render() {
    const data = {
      welcome: '30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Javiera',
        lastName: 'Rico',
      },
      date: this.showDate(new Date()),
      select: 'Select a country for your next holiday',
    }
    const maindata = { 
      flagImage: countries[10].flag,
      country: countries[10].name,
      capital: countries[10].capital,
      language: countries[10].languages,
      population: countries[10].population,
      currency: countries[10].currency,
    }
    return (
      <div className='app'>
        <div className='header-div'>
          <Header data={data} />
        </div>
        <Main 
          maindata={this.state.maindata}
          selectCountry={this.selectCountry}
        />
        <Footer />
      </div>
    )
  }  
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)