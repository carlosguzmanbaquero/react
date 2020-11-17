import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody ,CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);

    class CommentForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
              isModalOpen: false
            };
        
            this.toggleModal = this.toggleModal.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        toggleModal() {
            this.setState({
              isModalOpen: !this.state.isModalOpen
            });
        }

        handleSubmit(values) {
            console.log('Current State is: ' + JSON.stringify(values));
            alert('Current State is: ' + JSON.stringify(values));
            // event.preventDefault();
        }

        render() {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                      <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                           
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="10"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 0}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            );
        }
    }

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
                        <CommentForm/>
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