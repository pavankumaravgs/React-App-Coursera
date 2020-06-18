import React from 'react';
import { Card,CardBody,CardImg,CardImgOverlay,CardTitle,CardText} from 'reactstrap';

function RenderComment({comment}) {
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
function RenderDish({dish}){
    return(
        <div>
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
function Dish(props){
        if (props.dish != null){
            const comments = props.dish.comments.map((comment)=>{
                return(
                    <div className="col-12">
                        <RenderComment comment={comment} />
                    </div>
                );
            });
            return(
                <div className="container">
                    <div className='row'>

                        <div  className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish}/>
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

export default Dish;