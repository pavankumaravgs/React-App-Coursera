import React from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle, } from 'reactstrap';

const RenderDishes = ({dish,onClick}) =>{
    return (
        // <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card key={dish.id}>
            
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        // </div>
    );
}
const Menu = (props)=>{
        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderDishes dish={dish} onClick={props.onClick} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
}

export default Menu;