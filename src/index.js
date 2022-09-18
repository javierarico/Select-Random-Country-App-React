import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import flagImage from './images/arg-flag.png'


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
}

//Country Box component
const CountryBox = () => (
  <div className='country-box'>
    <div className='top-box'>
      <img src={flagImage} alt='flag' style={{width: '7rem', marginTop: '.5rem'}}/>
      <h4 className='main-title'>Argentina</h4>
    </div>
    <div className='bottom-box'>
      <p className='country-txt'>Capital: <span className='country-span-txt'>Buenos Aires</span></p>
      <p className='country-txt'>Language: <span className='country-span-txt'>Espanol</span></p>
      <p className='country-txt'>Population: <span className='country-span-txt'>45M</span></p>
      <p className='country-txt'>Currency: <span className='country-span-txt'>Peso</span></p>
    </div>
  </div>
)

//Main Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      selectCountry,
    } = this.props
    return(
      <main className='main'>
        <div className='main-wrapper'>
          <CountryBox />
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

  }
  //method to select a country
  selectCountry = () => {
    console.log('button clicked')
  }
  render() {
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Javiera',
        lastName: 'Rico',
      },
      date: 'Sep 18, 2022',
      select: 'Select a country for your next holiday'
    }
    return (
      <div className='app'>
        <div className='header-div'>
          <Header data={data} />
        </div>
        <Main 
          selectCountry={this.selectCountry}
        />
        <div className='footer-div'>
          <Footer />
        </div>
      </div>
    )
  }  
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)