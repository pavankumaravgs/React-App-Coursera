import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,Modal,ModalBody,ModalHeader,Button,Row, Col, Label} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

function CommentForm({toggleModal,isModalOpen,handleSubmit}){
    return(
        <div>
            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
                <ModalBody >
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => handleSubmit(values)}>
                            <Row className="form-group">
                            <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                            <Label htmlFor="authorname" md={12}>Author Name</Label>
                                <Col md={12}>
                                    <Control.text model=".authorname" id="authorname" name="authorname"
                                        placeholder="Author Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".authorname"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Your Feedback</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="8"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}
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
class  Dish extends Component{
    constructor(props) {
        super(props)
        this.state ={
            isModalOpen : false
        }
        this.toggleModal = this.toggleModal.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    toggleModal(){
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values){
        this.toggleModal();
        alert(`Current state is: ${JSON.stringify(values)}`);
        console.log(`Current state is: ${JSON.stringify(values)}`)
    }
    render(){

        if (this.props.dish != null){
            const comments = this.props.comments.map((comment)=>{
                return(
                    <div className="col-12">
                        <RenderComment comment={comment} />
                    </div>
                );
            });
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                    <div className='row'>

                        <div  className="col-12 col-md-5 m-1">
                            <RenderDish dish={this.props.dish}/>
                        </div>

                        <div  className="col-12 col-md-5 m-1">
                            <h4>Comments</h4>
                            {comments}
                            
                            <Button outline onClick={this.toggleModal}><i class="fa fa-pencil fa-lg" aria-hidden="true"></i> Submit Comment</Button>
                        </div>
                    </div>
                    <CommentForm toggleModal={this.toggleModal} isModalOpen={this.state.isModalOpen} handleSubmit={this.handleSubmit} />
                    
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