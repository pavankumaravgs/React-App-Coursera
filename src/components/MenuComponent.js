import React, { Component } from 'react';
import { Card,CardBody,CardImg,CardImgOverlay,CardTitle,CardText } from 'reactstrap';
import Dish from './DishDetailComponent'

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
   
    
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.props.onClick(dish.id)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <Dish dish ={this.state.selectedDish} />
                </div>
            </div>
        );
    }
}

export default Menu;