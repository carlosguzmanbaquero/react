import React from 'react';
import { Card, CardImg, CardText, CardBody ,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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

    function RenderComments({comments}){
        
        if(comments){
            const commentsList = comments.map((comment) =>{
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
                    {commentsList}
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
                    <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.selectedDish.name}</h3>
                            <hr></hr>
                        </div>
                    </div>
                        <div className="row list-unstyled">
                            <RenderDish dish={props.selectedDish}></RenderDish>
                            <RenderComments comments={props.comments}></RenderComments>
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