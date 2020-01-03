import React, { Component } from 'react';
import Home from './HomeComponent';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';

import { DISHES } from '../shared/dishes2';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';


import { Switch, Route, Redirect   } from 'react-router-dom';


// for the test purpose, show some value from the main
function ShowImage({item}) {
  const img = ( <p>  {item.image}   </p> );
  console.log("", item.image);
  return(
    <div>
      <h4>showImage</h4>
      {img}
    </div>
  );
}

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: LEADERS,
        promotions: PROMOTIONS,
    };
  }

  
  render() {

    // set filter to extract just only true flag from JSON data.
    const HomePage = () => {
      
    const dish_selected =  this.state.dishes.filter((dish) => dish.featured)[0];
    const promo_selected =  this.state.promotions.filter((promo) => promo.featured)[0];
    const leader_selected =  this.state.leaders.filter((leader) => leader.featured)[0];

      return(
        <div>

          <Home dish={dish_selected}  
                promotion={promo_selected}
                leader={leader_selected}
          />
        </div>          
      );
    }

    const DishWithId = ({match}) => {

      return(
        <DishDetail dish={this.state.dishes.filter( (dish) => dish.id === parseInt( match.params.dishId,10 ) )[0] }  
        
          comments={this.state.comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId, 10))[0]  }

          
        />

        
      );

    }


    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component = {() =>  <Menu dishes={this.state.dishes}  />      }  />
          <Route path="/menu/:dishId"  component={DishWithId}  />
          <Route exact path="/contactus" component = {Contact} />
          <Redirect to="/home"/>
        </Switch>
        <Footer />
       
      
      </div>
    );
  }
}

export default Main;