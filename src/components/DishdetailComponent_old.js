
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


    /*componentDidMount() {
        console.log("DishDetail componentDidMount.");
    }
    
    componentDidUpdate() {
        console.log("DishDetail componentDidUpdate.");
    }*/

function RenderComments({comments}) {

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
                    <RenderComments comments = {props.comments} />
                </div>
            </div>
        )

    }
    else {
        return(<div></div>)
    }
}

export default DishDetail;