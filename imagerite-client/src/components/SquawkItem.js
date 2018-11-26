import React from "react";
import { connect } from "react-redux";
import { selectSquawk} from "../actions/squawkActions";
import {Icon} from 'react-materialize';


class SquawkItem extends React.Component  {

    boxColor = 'card blue darken-1';
    textTitle = 'yellow';
    textContent = 'white';
    textAction = 'card-action black-text';
    priority=1;
    myaction = "";

    render(){
        console.log(this.props.item);
       switch (this.props.item.priority)
       {
           case 1: {
               this.boxColor='card red darken-1';
               this.textTitle = 'card-title yellow-text';
               this.textContent = 'card-content white-text';
               this.textAction = 'card-action white-text';
               break;
           }
           case 2: {
               this.boxColor='card yellow';
               this.textTitle = 'card-title grey-text';
               this.textContent = 'card-content black-text';
               this.textAction = 'card-action black-text';
               break;
           }
           default: {
               this.boxColor='card blue lighten-1';
               this.textTitle = 'card-title indigo-text';
               this.textContent = 'card-content indigo-text';
               this.textAction = 'card-action-update indigo-text';
           }
       }

        if (this.props.item.url){
          this.myaction  =  <div className={this.textAction}><a href={this.props.item.url}>Find out more...</a></div>;

        }

       return (

           <div className="row">
               <div className={this.boxColor} onClick={()=> this.props.dispatch(selectSquawk(this.props.item))}>
                   <div className={this.textContent}>
                       <span className={this.textTitle} style={{display: 'inline '}}><b>{this.props.item.title}</b></span>
                       <span class="right" style={{display: 'inline '}}>{new Date(this.props.item.createdOn).toDateString()}</span>

                       <p>{this.props.item.content}</p>
                   </div>
                   {this.myaction}
               </div>
           </div>
        );
    }
}

export default connect(
    null
    )(SquawkItem);
