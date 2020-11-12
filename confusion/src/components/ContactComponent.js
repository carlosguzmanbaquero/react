import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/Home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contactenos</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contactenos</h3>
                    <hr></hr>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Información de ubicación</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Nuestra dirección</h5>
                        <address>
                        avenida cali<br />
		                Cali, Colombia
                        <br />
                        <i className="fa fa-phone"></i>: +1234567789<br />
                        <i className="fa fa-fax"></i>: +12345678888<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@prueba.com</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Mapa de nuestra localización</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@prueba.com"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;