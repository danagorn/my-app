import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default class Numbers extends React.Component {

  render() {
    return (
      <div>
        {this.props.questions.map((elemento, i) => {
          if (this.props.currentQuestion == i){
            return <Button variant="primary" disabled={true} onClick={()=>this.props.selectNewQuestion(i)}>{i+1}</Button>;
          }else{
            return <Button variant="primary" onClick={()=>this.props.selectNewQuestion(i)}>{i+1}</Button>;
          }
        })
      }
      </div>
  );
}
}
