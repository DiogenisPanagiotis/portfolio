import React, { Component } from 'react'
import logo from './logo.svg'
import Nav from './Nav'
import './App.css'
import avatar from './avatar.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="jumbotron jumbotron-avatar">
                        <img className="avatar" src={avatar} />
                    </div>
                    <div id="console" className="jumbotron">
                    <div className="category">
                        > Diogenis.origin
                        <div className="sub-category">=> "Manhattan, NY"</div>
                    </div>
                    <div className="category">
                        > Diogenis.education
                        <div className="sub-category">=> "The Pennsylvania State University"</div>
                        <div className="sub-category">=> "Hack Reactor"</div>
                    </div>
                    <div className="category">
                        > Diogenis.interests
                        <div className="sub-category">=> ["code", "technology", "user experience", "gym", "vaca frita"]</div>
                    </div>
                    <div className="category">
                        > Diogenis.workExperience
                        <div className="sub-category bracket">{"{"}</div>
                        <div className="sub-sub-category">company: "Ask Applications"</div>
                        <div className="sub-sub-category">role: "Software Engineer"</div>
                        <div className="sub-sub-category">team: "Product Optimizations"</div>
                        <div className="sub-sub-category">startDate: "April 2017"</div>
                        <div className="sub-category bracket">{"}"}</div>
                    </div>
                    <div className="category">
                        > Diogenis.email
                        <div className="sub-category">
                            =>&nbsp;"
                            <a className="link" target="_blank" href="mailto:diogenis.panagiotis@gmail.com">
                                diogenis.panagiotis@gmail.com
                            </a>
                            "
                        </div>
                    </div>
                    <div className="category">
                        > Diogenis.linkedIn
                        <div className="sub-category">
                            =>&nbsp;"
                            <a className="link" target="_blank" href="http://linkedin.com/in/diogenispanagiotis">
                                linkedin.com/in/DiogenisPanagiotis
                            </a>
                            "
                        </div>
                    </div>
                    <div className="category">
                        > Diogenis.github
                        <div className="sub-category">
                            =>&nbsp;"
                            <a className="link" target="_blank" href="http://github.com/DiogenisPanagiotis">
                                github.com/DiogenisPanagiotis
                            </a>
                            "
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
      </div>
    )
  }
}

export default App
