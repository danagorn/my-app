import React from 'react';
import Question from "./Question";
import Answer from "./Answer";
import Tip from "./Tip";
import ImageContent from "./no-image.png";
import './css/prueba.css';
import Image from 'react-bootstrap/Image';


export default class Content extends React.Component {

contentImage = () => {
  try{
    return this.props.question.attachment.url;
  }catch{
    return ImageContent;
  }
}

  render() {
    return (
      <div className="container">
      <div>
      <p></p>
        <Question question={this.props.question.question}/>
          <p></p>
        <img style={{width: 500, height: 281}} src={this.contentImage()}/>
        <p></p>
      </div>

      <div>
        <h3>Answer</h3>
        <Answer question={this.props.question} inputChange={this.props.inputChange}/>

        <div class="tips">
        <ul>
        {this.props.question.tips.map((elemento, i) => {
            return <Tip tip={elemento}/>;
          })
        }

        </ul>
        </div>
      </div>
      </div>
  );
}
}
