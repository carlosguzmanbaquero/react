import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    //ciclo de vida
    constructor(props){
        super(props);
        
        this.state = {
            selectedDish:null,
        };

        console.log('DishDetail constructor()');
    }

    //ciclo de vida
    componentDidMount(){
        console.log('DishDetail componentDidMount()');
    }
/*
    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }
*/
    renderDish(dish){
        if(dish != null){
            return (
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }

    renderComments(dish){
        
        if(dish != null && dish.comments!=null){
            const comments = dish.comments.map((comment) =>{
                return (
                    <div key={comment.id}>
                        <CardBody>
                            <CardText>{comment.comment}</CardText>
                            <CardText>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</CardText>
                        </CardBody>
                    </div>
                );
            });

            /*
                return (
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {Comments}
                    
                        </ul>
                    </div>
                );
            */

            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                    <h4>Comments</h4>
                    {comments}
                    </Card>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }

    //ciclo de vida
    render(){
        console.log('DishDetail render()');
        if(this.props.selectedDish){
            return (
                <div>
                    <center><h1>Dish Selected</h1></center>
                    <div className="container">
                    <div className="row list-unstyled">
                        
                        {this.renderDish(this.props.selectedDish)}
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;