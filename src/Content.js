import React from 'react';
import Question from "./Question";
import Answer from "./Answer";
import Tip from "./Tip";
import ImageUser from "./images/user-default.png";
import ImageContent from "./images/no-image.png";
import './css/prueba.css';
import Image from 'react-bootstrap/Image';


export default class Content extends React.Component {


authorImage = () => {
  try{
    return this.props.question.author.photo.url;
  }catch{
    return ImageUser;
  }
}

contentImage = () => {
  try{
    return this.props.question.attachment.url;
  }catch{
    return ImageContent;
  }
}

  render() {
    return (
      <div>
      <div>
      <div>
        <Question question={this.props.question.question}/>
        <img style={{width: 500, height: 281}} src={this.contentImage()}/>
        <p></p>
      </div>
      <div>
        <Answer question={this.props.question} inputChange={this.props.inputChange}/>

        <ul>{this.props.question.tips.map((elemento, i) => {
            return <Tip tip={elemento}/>;
          })
        }
        </ul>
        </div>
        </div>
        <Image style={{width:80}}src={this.authorImage()} roundedCircle />
        <p>{this.props.question.author.username}</p>





      </div>
  );
}
}
