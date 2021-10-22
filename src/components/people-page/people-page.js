import React, { Component } from "react";

import ItemList from "../item-list";
import ItemDetails from "../item-details";
// import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row/row";
import { Record } from "../item-details/item-details";
import ErrorBoundry from "../error-boundry/error-boundry";


import './people-page.css'
// class ErrorBoundry extends Component {
//   state = {
//     hasError: false
//   }

//   componentDidCatch () {
//     this.setState({hasError: true});
//   }

//   render() {

//     if(this.state.hasError) {
//       return <ErrorIndicator />
//     }

//     return this.props.children;
//   }
// }

// const Row = ({ left, right }) => {
//   return (
//     <div className="row mb2">
//         <div className="col-md-6">
//           {left}
//         </div>
//         <div className="col-md-6">
//           {right}
//         </div>
//       </div>
//   );
// };

export default class PeoplePage extends Component {

  swapiService = new SwapiService ();

  state = {
    selectedPerson: Math.floor(Math.random()*83)+1,
    // hasError: false
  };

  // componentDidCatch (err, info) {
  //   this.setState({hasError: true});
  // }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };


  render() {
    // if(this.state.hasError) {
    //   return <ErrorIndicator />
    // }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
        {(i) => (`${i.name} (${i.birthYear})`)}
      </ItemList>
    );

    const {getPerson, getPersonImage} = this.swapiService

    const personDetails = (
      <ItemDetails itemId={this.state.selectedPerson} getData={getPerson} getImageUrl={getPersonImage} >
        <Record field="gender" label="Gender"/>
        <Record field="eyeColor" label="Eye Color"/>
      </ItemDetails>
    );

    // const personDetails = (
    //   <ErrorBoundry>
    //     <ItemDetails itemId={this.state.selectedPerson} getData={this.swapiService.getPerson} getImageUrl={this.swapiService.getPersonImage}/>
    //   </ErrorBoundry>
    // )

    return (
      // <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      // </ErrorBoundry>
    );
  }
}