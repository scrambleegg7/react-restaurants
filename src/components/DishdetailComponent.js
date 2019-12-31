
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


export class DishDetail extends Component {
    
    constructor(props) {
        super(props);
        //this.state = {};
        console.log('DishDetail component constructor is invoked.');
        console.log(this.props.id)
    }

    renderComments(dish) {

        const listComments = (
            <ul className="list-unstyled">
                {dish.comments.map((comment) =>
                    <li key={comment.id}>
                        {comment.comment} <br></br>
                        -- {comment.author},   {comment.date} <br></br>

                    </li>
                    
                )}
            </ul>
        );
        
        if (dish.comments!=null) {
            return (
                <div>
                    <h4>Comments</h4> 
                    {listComments}
                </div>
            );        
        }
        else {
            return(
                <div></div>
            )
        }  

    }

    renderDish(dish) {

        //const comments = dish.comments;

        if (dish!=null) {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width='100%' object src={dish.image.toString() } alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">

                        {this.renderComments(dish)}
                    </div>
                </div>

            )}
        else {
            return(
                <div></div>
            )
        }

    }

    render() {

        const dish = this.props.dish;
        //console.log(dish.id)
        return(
            <div>
                {this.renderDish(dish)}
            </div>
        )
    }
}


export default DishDetail;