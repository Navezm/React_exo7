import React, {Component} from 'react';

class Article extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.children}</h1>
                <span>{this.props.price}€</span>
            </div>
        );
    };
};

export default Article;