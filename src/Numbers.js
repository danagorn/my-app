import React from 'react';

export default class Numbers extends React.Component {

  render() {
    return (
      <div>
        {this.props.questions.map((elemento, i) => {
          if (this.props.currentQuestion == i){
            return <button disabled={true} onClick={()=>this.props.selectNewQuestion(i)}>{i+1}</button>;
          }else{
            return <button onClick={()=>this.props.selectNewQuestion(i)}>{i+1}</button>;
          }
        })
      }
      </div>
  );
}
}
