import React from 'react';
import ImageUser from "./images/user-default.png";
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

render() {
  return (
    <div className="sideboard">
    <h1> USER </h1>
      <Image style={{width:120}}src={this.authorImage()} roundedCircle />
      <p syle="color:white;">{this.props.question.author.username}</p>
    </div>
);
}
}
