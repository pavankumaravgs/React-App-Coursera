import React, { Component } from 'react';
import { Card,CardBody,CardImg,CardImgOverlay,CardTitle,CardText} from 'reactstrap';

class Dish extends Component{
    constructor(props){
        super(props);

    }
    renderComment(comment) {
        if (comment != null){
               return(
                   <div key={comment.id}>
                       <p>{comment.comment}</p>
                       <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                       <br />
                   </div>
               );

        }
        else
            return(
                <div></div>
            );
    }
    render() {
        if (this.props.dish != null){
            console.log(this.props.dish)
            const comments = this.props.dish.comments.map((comment)=>{
                return(
                    <div className="col-12">
                        {this.renderComment(comment)}
                    </div>
                );
            });
            return(
                <div className="container">
                    <div className='row'>

                        <div  className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.dish.name}</CardTitle>
                                    <CardText>{this.props.dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>

                        <div  className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {comments}
                        </div>
                        </div>
                </div>
                
                
            );
        }
        else{

            return(
                <div></div>
            );
        }
    }
}

export default Dish;