import React from 'react';
import Question from "./Question";
import Answer from "./Answer";
import Tip from "./Tip";
import ImageUser from "./images/user-default.png";
import ImageContent from "./images/no-image.png";

export default class Content extends React.Component {

authorImage = () => {
  if (this.props.question.author.photo.url == null || this.props.question.author.photo.url != ""){
    return this.props.question.author.photo.url;
  }else{
    return ImageUser;
  }
}

contentImage = () => {
  if (this.props.question.attachment.url == null || this.props.question.attachment.url != ""){
    return this.props.question.attachment.url;
  }else{
    return ImageContent;
  }
}

  render() {
    return (
      <div>
        <Question question={this.props.question.question}/>
        <Answer question={this.props.question} inputChange={this.props.inputChange}/>

        <ul>{this.props.question.tips.map((elemento, i) => {
            return <Tip tip={elemento}/>;
          })
        }
        </ul>

        <h4>{this.props.question.author.username}</h4>


        <img src={this.authorImage()}/>
        <img src={this.contentImage()}/>

      </div>
  );
}
}
