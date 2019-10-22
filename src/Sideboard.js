import React from 'react';
import ImageUser from "./user-default.png";
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
    <div className="text-sideboard">
    <h3> Author </h3>
      <Image style={{width:90}} src={this.authorImage()} roundedCircle />
      <p>{this.props.question.author.username}</p>
    </div>
    </div>
);
}
}
