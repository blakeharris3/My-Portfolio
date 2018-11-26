import React from 'react'
import PropTypes from 'prop-types'

import pic02 from '../images/pic01.jpg'
import pic01 from '../images/pic02.jpg'
import gits from '../images/gits.png'
import blackjack from '../images/blackjack.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p className='phoneNum'>Full-Stack Web Developer and sports fan who enjoys the outdoors and being challenged. I am inspired by hard work, obstacles and responsibility. I'm also very passionate and motivated by greater outcomes and finding solutions to substantial problems.</p>
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
            <li>CSS</li>
    
            <li>HTML5</li>
            <li>Python</li>
            <li>Django</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            
          </ul>
          
          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><a href='https://gits-project.herokuapp.com/'><img src={gits} alt="" /></a></span>
          <p><a href='https://gits-project.herokuapp.com/'>G.I.T.S.</a> is a collabored project that we designed where you can buy tickets and travel through space. We implemented Node, Express, JavaScript, MongoDBm Mongoose as well as Passport. It contains a fully functional login after a registration, or you are able to login using your google account.</p>
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
          <form form-name="contact" method="POST" data-netlify="true" onSubmit={(e) => e.preventDefault()}>
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
            <div className="actions">
              <p><button type="submit" className="special">Send</button></p>
              <p><input type="reset" value="Clear" /></p>
            </div>
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