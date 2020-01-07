import React, { Component } from 'react';
import Home from './HomeComponent';
//import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

//import { DISHES } from '../shared/dishes2';
//import { COMMENTS } from '../shared/comments';//
//import { LEADERS } from '../shared/leaders';
//import { PROMOTIONS } from '../shared/promotions';

import { Switch, Route, Redirect, withRouter   } from 'react-router-dom';
import { connect } from 'react-redux'

import { addComment } from '../redux/ActionCreators';

const mapStoreToProps = state => {

  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
  
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment) ) 
})

class Main extends Component {

  constructor(props) {
    super(props);
  }

  
  render() {

    // set filter to extract just only true flag from JSON data.
    const HomePage = () => {
      
      const dish_selected =  this.props.dishes.filter((dish) => dish.featured)[0];
      const promo_selected =  this.props.promotions.filter((promo) => promo.featured)[0];
      const leader_selected =  this.props.leaders.filter((leader) => leader.featured)[0];

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
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            addComment={this.props.addComment} />
      );
    };    



    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component = {() =>  <Menu dishes={this.props.dishes}  />      }  />
          <Route path="/menu/:dishId"  component={DishWithId}  />
          <Route exact path="/contactus" component = {Contact} />
          <Route exact path="/aboutus" component = {() => <About leaders={this.props.leaders} />    } />
          <Redirect to="/home"/>
        </Switch>
        <Footer />
       
      
      </div>
    );
  }
}

export default withRouter( connect(mapStoreToProps, mapDispatchToProps)(Main) );