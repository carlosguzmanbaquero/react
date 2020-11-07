import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component{

    //ciclo de vida
    constructor(props){
        super(props);
        this.state = {
            selectedDish:null,
        };

        console.log('Menu constructor()');
    }

    //ciclo de vida
    componentDidMount(){
        console.log('Menu componentDidMount()');
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if(dish != null){
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        }else{
            return (
                <div></div>
            );
        }
    }

    //ciclo de vida
    render(){
        console.log('Menu render()');
        const menu = this.props.dishes.map((dish) =>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>{this.onDishSelect(dish); /*this.dishDetail.onDishSelect(dish);*/}}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
//<DishDetail ref={instance => { this.dishDetail = instance; }}></DishDetail>
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                
                <DishDetail selectedDish={this.state.selectedDish}></DishDetail>
                
            </div>
        );
    }
}

/*class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        const menu = this.props.dishes.map((dish) =>{
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                            <Media heading >{dish.name}</Media>
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
}*/

export default Menu;