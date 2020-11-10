import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import Menu from './MenuComponent'
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Footer from './Footer';

class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish:null,
    };
  }

  onDishSelect(dishId){
    this.setState({selectedDish: dishId});
}

  render(){
    return (
      <div>
        <Header/>
        <Menu dishes={this.state.dishes} 
        onClick={(dishId)=>{this.onDishSelect(dishId);}}/>
        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id===this.state.selectedDish)[0]}>
        </DishDetail>
        <Footer/>
      </div>
    );
  }
}

export default Main;