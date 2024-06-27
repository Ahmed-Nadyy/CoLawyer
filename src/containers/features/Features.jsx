import React from 'react'
import { Feature } from '../../components'
import "./features.css"

const featuresData = [
  {
    title: "User Query",
    text: " User asks a legal question in natural language."
  },
  {
    title: "NLP Processing",
    text: " AI processes the query and understands the context."
  },
  {
    title: "Database Search",
    text: "AI searches the integrated legal databases."
  },
  {
    title: "Generate Response",
    text: "AI provides a detailed and accurate answer."
  },
  {
    title: "User Interaction",
    text: "User receives the response through a user-friendly interface."
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        {/* <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1> */}
        <h1 className="gradient__text rtl">المستقبل هو الآن وما عليك إلا أن تدركه، خطوة نحو المستقبل اليوم وتحقيق ذلك.</h1>

        {/* <p>Request Early Access to Get Started</p> */}
      </div>
      <div className="gpt3__features-container">
        <div>
        {featuresData.map((item, index) =>
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        )}
        </div>
      </div>
    </div>
  )
}

export default Features