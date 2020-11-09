import React from 'react';
import { Card, CardImg, CardText, CardBody ,CardTitle } from 'reactstrap';


    function RenderDish({dish}){
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

    function RenderComments({dish}){
        
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
    const DishDetail =(props)=>{
        console.log('DishDetail render()');
        if(props.selectedDish){
            return (
                <div>
                    <center><h1>Dish Selected</h1></center>
                    <div className="container">
                    <div className="row list-unstyled">
                        <RenderDish dish={props.selectedDish}></RenderDish>
                        <RenderComments dish={props.selectedDish}></RenderComments>
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


export default DishDetail;