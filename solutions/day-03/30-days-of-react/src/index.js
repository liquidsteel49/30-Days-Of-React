// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import levitate from './images/junior_state_levitate.jpg'
import tech from './images/frontend_technologies.png'
import profile from './images/sugar_face.jpg'
import { div } from 'prelude-ls'

// JSX element variables, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Alfredo',
  lastName: 'Maldonado',
  suffix: 'III'
}
const date = 'Oct 2, 2020'

const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName} {author.suffix}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1989
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old.
  </p>
)

const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map(tech => <li>{tech}</li>)

const album = (
  <div className="levitate">
    <img src={levitate} alt='levitate cover art' />
  </div>
)

const frontEndTech = (
  <div className="tech">
    <img src={tech} alt='images of technology used' />
  </div>
)

const userCard = (
  <div className="user-card">
    <img className="profile" src={profile} /> {' '}
    <h2>{author.firstName} {author.lastName} {author.suffix} {' '}</h2>
    <p>Learning person</p>
    <h2>SKILLS</h2>
    <div className="skills">
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Sass</li>
        <li>JS</li>
        <li>React</li>
      </ul>
    </div>
  </div>
)

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      {frontEndTech}
      <ul>
        {techsFormatted}
      </ul>
      {userCard}
      {album}
    </div>
  </main>
)

//footer JSX variables
const copyright = 'Copyright 2020'

const subscribe = (
  <div class="subcribe-form">
    <h1>SUBSCRIBE{' '}</h1>
    <p>Sign up with your email address to receive news and updates{' '}</p>
    <form id="user-info" class="form" name="user-info">
      <label for="fname"></label>
      <input class="input" type="text" id="fname" name="fname" placeholder="first name"></input>
      <label for="lname"></label>
      <input class="input" type="text" id="lname" name="lname" placeholder="last name"></input>
      <label for="email"></label>
      <input class="input" type="text" id="email" name="email" placeholder="email"></input>
      {/* <button class="submit-button" form="user-info">Subscribe</button> */}
    </form>
    <button class="submit-button" form="user-info">Subscribe</button>
  </div>
)

// JSX element, footer
const footer = (
  <footer>
    <div className="footer-wrapper">
      {subscribe}
      <p>{copyright}</p>
    </div>
  </footer>
)

// JSX element, app
const app = (
  <div className='app'>
    {header}
    {main}
    {footer}
  </div>
)


const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)