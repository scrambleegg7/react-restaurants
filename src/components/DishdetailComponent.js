
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import {Breadcrumb, BreadcrumbItem, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Control, LocalForm, Errors}  from 'react-redux-form';

    /*componentDidMount() {
        console.log("DishDetail componentDidMount.");
    }
    
    componentDidUpdate() {
        console.log("DishDetail componentDidUpdate.");
    }*/

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length) <= len;
const minLength = (len) => (val) => (val) && (val.length) >= len;

export class CommentForm extends Component {


    constructor(props) {
        super(props)

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isModalOpen: false,
        };
    }

    toggleModal() {
        this.setState(
            {
                isModalOpen: !this.state.isModalOpen
            }
        );
    }

    handleSubmit(values) {
        //console.log("current state : " + JSON.stringify(values));
        //alert("current state : " + JSON.stringify(values));

        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }


    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg">
                    </span>Submit Comments
                </Button> 

            
                <div className="row row-content">


                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader>
                            Submit Comment
                        </ModalHeader>
                        <ModalBody>
                            <div className="col-12 col-md-9">
                            <LocalForm onSubmit={ (values) => this.handleSubmit(values) } >
                                <Row className="form-group">
                                    <Label htmlFor="rating" >Rating</Label>
                                        <Control.select model=".rating" name="rating" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Control.select>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="yourname">Your Name</Label>
                                    
                                        <Control.text model=".yourname" id="yourname" name="yourname" placeholder="Yourname" 
                                        className="form-control"                                         
                                        validators={{ required, minLength:minLength(3), maxLength:maxLength(15) }}/>
                                        <Errors className="text-danger" model=".yourname" show="touched" messages={{
                                            required: 'Required',
                                            minLength: 'Mus be >= 2 chars.', 
                                            maxLength: 'Mus be <= 15 chars.'
                                        }} />
                                    
                                </Row>
                                <Row className="form-group">
                                <Label htmlFor="comment" >Comment</Label>
                                        <Control.textarea model=".comment" id="comment" name="comment" row="6" className="form-control" />
                                </Row>
                                <Button type="submit" value="submit" className="bg-primary">Submit</Button>
                            
                            </LocalForm>
                            </div>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        )
    }

}

function RenderComments({comments, addComment, dishId}) {

    const listComments = (
        <ul className="list-unstyled">
            {comments.map((comment) =>
                <li key={comment.id}>
                    <p>{comment.comment} </p>
                    <p>-- {comment.author},   {new Intl.DateTimeFormat('en-US', 
                                    {year: 'numeric', month:'short', day:'2-digit' }).format( new Date(Date.parse(comment.date))   ) }   </p>

                </li>
                
            )}
        </ul>
    );
    
    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4> 
            {listComments}
            <p></p>
            <CommentForm dishId={dishId} addComment={addComment}/>
        </div>
    );        

}

function RenderDish({dish}) {


    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
            </Card>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </div>
    );
}

const DishDetail = (props) => {

    console.log("DishDetail render invoked.");
    if ( props.dish != null) {

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish = {props.dish} />
                    <RenderComments comments = {props.comments} 
                     addComment={props.addComment} 
                     dishId={props.dish.id}/>
                </div>
            </div>
        )

    }
    else {
        return(<div></div>)
    }
}

export default DishDetail;