import React, { Component } from 'react';
import { Media } from 'reactstrap';


class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'testmenu A',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'hot',
                    price: '4.99',
                    description:'description A',
                },
                {
                    id: 1,
                    name: 'testmenu B',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: 'hot',
                    price: '1.99',
                    description:'description B',
                },

            ]
        }

    }

    render() {
        const menu = this.state.dishes.map(  (dish) => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading> {dish.name} </Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return ( 

            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>

                </div>
            </div>
        );
    }
}

export default Menu;