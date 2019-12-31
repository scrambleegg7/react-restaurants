
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';




    /*componentDidMount() {
        console.log("DishDetail componentDidMount.");
    }
    
    componentDidUpdate() {
        console.log("DishDetail componentDidUpdate.");
    }*/

function RenderComments({dish}) {

    const listComments = (
        <ul className="list-unstyled">
            {dish.comments.map((comment) =>
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

    //const comments = dish.comments;
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width='100%'  src={dish.image } alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

const DishDetail = (props) => {

    console.log("DishDetail render invoked.");
    if ( props.dish != null) {

        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish = {props.dish} />
                    <RenderComments dish = {props.dish} />
                </div>
            </div>
        )

    }
    else {
        return(<div></div>)
    }
}

export default DishDetail;