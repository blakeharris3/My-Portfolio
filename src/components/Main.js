import React from 'react'
import PropTypes from 'prop-types'

import pic02 from '../images/pic01.jpg'
import pic01 from '../images/pic02.jpg'
import gits from '../images/gits.png'
import blackjack from '../images/blackjack.png'
import scheduler from '../images/scheduler.png'
import nfl from '../images/nfl.png'


class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p className='phoneNum'>I am a Full-Stack Developer and sports fan who enjoys the outdoors. A determined individual with an engineering background, I love being challenged and I'm constantly striving to improve. I collaborate well with others and bring lots of ideas to the table, but I’m also very self-driven and tenacious when working alone.</p>
          <p></p>
          {close}
        </article>

        <article id="skills" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <ul className= 'phoneNum'>
            <li>JavaScript</li>
            <li>Node</li>
            <li>Express</li>
            <li>React</li>
            <li>SQL</li>

            <li>CSS/HTML5</li>
            <li>Python</li>
            <li>Django</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            
          </ul>
          
          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><a href='https://thescheduler.netlify.com/'><img src={scheduler} alt="" /></a></span>
          <p><a href='https://thescheduler.netlify.com/'>Scheduler</a> is a React client-side and Auth0 authentication application with an express backend that allows employers to post schedules or important news to their employees. The individuals modifying the schedules can use an access key (1234) to update or change the information as needed. The employees who just get to see the uploaded forms can be assigned the key (1111).</p>
          <span className="image main"><a href='https://nflstandings.netlify.com/'><img src={nfl} alt="" /></a></span>
          <p><a href='https://nflstandings.netlify.com/'>NFL Standings</a> is a project I created that allows you to follow your favorite team, and keep track of their record as the season progresses.</p>
          <span className="image main"><a href='https://gits-project.herokuapp.com/'><img src={gits} alt="" /></a></span>
          <p><a href='https://gits-project.herokuapp.com/'>G.I.T.S.</a> is a collabored project that we designed where you can buy tickets and travel through space. We implemented Node, Express, JavaScript, MongoDB, Mongoose as well as Passport. It contains a fully functional login after a registration, or you are able to login using your google account.</p>
          <span className="image main"><a href='https://blakeharris3.github.io/blackjack/'><img src={blackjack} alt="" /></a></span>
          <p><a href='https://blakeharris3.github.io/blackjack/'>Blackjack</a> is my built jQuery version of a classic casino table game.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <h3 className="major">Phone</h3>
          <div>
            <label className="icon fa-phone phoneNum"> (480) 252-3838</label>
          </div>
          <h3 className="major">Email</h3>
          <form form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
              <button type="submit" className="special">Send</button>
          </form>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/blakeharrisdev/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/blakeharris3" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main