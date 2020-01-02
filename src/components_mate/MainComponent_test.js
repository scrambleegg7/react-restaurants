import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null,
    };
  }

  pickupID(dish) {


    
    const flag = dish.id === this.state.selectedDish
    
    console.log(flag)

    return(flag)

  }
  

  showID(id) {

    const result = [
      'foo',
      undefined,
      '',
      'hoge',
      undefined,
      'bar',
    ];
     
    const validResult = result.filter((v) => v !== undefined);
    console.log(validResult); // => [ 'foo', '', 'hoge', 'bar' ]
    console.log(this.state.dishes[0].id.toString()) 
    console.log(this.state.dishes[1].id.toString()) 
    console.log(this.state.dishes[2].id.toString()) 
    console.log(this.state.dishes[3].id.toString()) 
    console.log(this.state.selectedDish)

    // var selectedDishWithFilter = this.state.dishes.filter( this.pickupID )

    // console.log(selectedDishWithFilter)

    const existing = this.state.dishes.some((v) => {v.id === this.state.selectedDish} );
    if (existing) {
      console.log('あったよ。');
    }
    else {
      console.log('なかったよ。');
    }

    return(
      <div>
        <h3>DISHID  {id.toString()}   </h3>
      </div>



    )
    console.log("showID");
  }

  

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const filteredDish = this.state.dishes.filter( dish => {return dish.id === this.state.selectedDish});
    const filteredDishID = filteredDish.id;

    return (
        
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
            
            <div>
              {this.showID( this.state.dishes.filter( (dish) => {return dish.id === this.state.selectedDish} )  )  }
              <h4>TEST show id</h4>
              <p>value of filteredDishID : {filteredDishID}</p>
              <p>this is a selecteddish  with onClick : {this.state.selectedDish}</p>
            </div>
        </div>
    );
  }
}

export default Main;