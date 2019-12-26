
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


export class DishDetail extends Component {
    
    constructor(props) {
        super(props);
        //this.state = {};
        console.log('DishDetail component constructor is invoked.');
    }

    renderComments() {
        return(
            <div>

            </div>
        )
    }

    renderDish(dish) {

        if (dish!=null) {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width='100%' object src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
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

        const dish = this.props.selectedDish;
        return(
            <div>
                {this.renderDish(dish)}
            </div>
        )
    }
}


export default DishDetail;