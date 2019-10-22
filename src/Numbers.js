import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

export default class Numbers extends React.Component {

  render() {
    return (
      <div>
        {this.props.questions.map((elemento, i) => {
          if (this.props.currentQuestion == i){
            if(i == 0){
              return <Button variant="outline-primary" style={{borderTopRightRadius:0, borderBottomRightRadius:0}} disabled={true} onClick={()=>this.props.selectNewQuestion(i)}>{i+1}</Button>;
            }else if(i == this.props.questions.length-1){
              return <Button variant="outline-primary" style={{borderTopLeftRadius:0, borderBottomLeftRadius:0}} disabled={true} onClick={()=>this.props.selectNewQuestion(i)}>{i+1}</Button>;
            }else{
              return <Button variant="outline-primary" style={{borderRadius:0}} disabled={true} onClick={()=>this.props.selectNewQuestion(i)}>{i+1}</Button>;
            }
          }else{
            if(i == 0){
              return <Button variant="primary" style={{borderTopRightRadius:0, borderBottomRightRadius:0}} onClick={()=>this.props.selectNewQuestion(i)}>{i+1}</Button>;
            }else if(i == this.props.questions.length-1){
              return <Button variant="primary" style={{borderTopLeftRadius:0, borderBottomLeftRadius:0}} onClick={()=>this.props.selectNewQuestion(i)}>{i+1}</Button>;
            }else{
              return <Button variant="primary" style={{borderRadius:0}} onClick={()=>this.props.selectNewQuestion(i)}>{i+1}</Button>;
            }

          }


        })
      }
      </div>
  );
}
}
