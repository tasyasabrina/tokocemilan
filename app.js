import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
    scream() {
       alert('WE WANT MORE!'); 
    }
    render() {
        return <button onClick{this.scream}>PINK DESSERT</button>;
    }
}
React.DOM<Button /, document.getElementById('app'));