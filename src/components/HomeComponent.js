import React from 'react';
import  { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import {Loading} from './LoadingComponent';


function RenderCard({item, isLoading, errMess}) {

    if (isLoading) {
        return(

                <Loading />
        )

    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        )
    }
    else {

            const img = item.image;
            const name = item.name;
            return(

                <Card>
                    <CardImg src={img}  alt={name} />
                    <CardBody>
                        <CardTitle>
                            {name}
                        </CardTitle>
                        { item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }  
                        <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        }

}


function Home(props) {

    // rendering 3 Cards 
    // 1. dish explaining
    // 2. promotion
    // 3. leader 
    console.log("home components. " + (props.dish) )
    return(
        <div className="container">


            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess = {props.dishesErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </div>

    );
}

export default Home;