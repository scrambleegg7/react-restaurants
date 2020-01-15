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

import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup,  CSSTransition} from 'react-transition-group';

const mapStoreToProps = state => {

  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
  
}

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment) ) ,
    fetchDishes: () => { dispatch( fetchDishes() ) } ,
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    fetchComments: () => { dispatch( fetchComments() ) } ,
    fetchPromos: () => { dispatch( fetchPromos() ) } ,

});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  // called just after component is mounted in my view my application
  // fetchDishes called and then invoke dispatch 
  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();  
    this.props.fetchPromos();
  }

  
  render() {

    // set filter to extract just only true flag from JSON data.
    const HomePage = () => {
      
      const dish_selected =  this.props.dishes.dishes.filter((dish) => dish.featured)[0];
      const promo_selected =  this.props.promotions.promotions.filter((promo) => promo.featured)[0];
      const leader_selected =  this.props.leaders.filter((leader) => leader.featured)[0];

      return(
        <div>

          <Home dish={dish_selected}  
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={promo_selected}
                promosLoading={this.props.promotions.isLoading}
                promosErrMess={this.props.promotions.errMess}

                leader={leader_selected}
          />
        </div>          
      );
    }


    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
            commentsErrMess={this.props.comments.errMess}

            postComment={this.props.postComment} />
      );
    };    



    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component = {() =>  <Menu dishes={this.props.dishes}  />      }  />
          <Route path="/menu/:dishId"  component={DishWithId}  />
          <Route exact path="/contactus" component = {  () => <Contact resetFeedbackForm={this.props.resetFeedbackForm} /> }  />
          <Route exact path="/aboutus" component = {() => <About leaders={this.props.leaders} />    } />
          <Redirect to="/home"/>
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Footer />
       
      
      </div>
    );
  }
}

export default withRouter( connect(mapStoreToProps, mapDispatchToProps)(Main) );