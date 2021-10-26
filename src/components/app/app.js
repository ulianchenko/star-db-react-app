import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
// import ItemList from '../item-list';
// import ItemDetails, { Record } from "../item-details/item-details";
// import ErrorButton from "../error-button";
import ErrorIndicator from "../error-indicator";
// import PeoplePage from "../people-page";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from '../../services/dummy-swapi-service';
// import Row from "../row";
import "./app.css";
// import ItemList from "../item-list";
import {
  SwapiServiceProvider,
  // SwapiServiceConsumer,
} from "../swapi-service-context";
// import ItemDetails from "../item-details/item-details";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components";
import ErrorBoundry from "../error-boundry/error-boundry";

export default class App extends React.Component {
  // swapiService = new DummySwapiService()

  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService(),
    // selectedPerson: Math.floor(Math.random()*10)+1,
    hasError: false
  };

  onServiceChange = () => {
    this.setState((state) => {
      const Service = state.swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      console.log("switched to", Service.name)

      return {
        swapiService: new Service()
      }
    });
    // console.log("Change Context Value");
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };
  // onPersonSelected = (id) => {
  //   this.setState({
  //     selectedPerson: id
  //   });
  // };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.state.swapiService;

    // const personDetails = (
    //   <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
    //     <Record field="gender" label="Gender" />
    //     <Record field="eyeColor" label="Eye Color" />
    //   </ItemDetails>
    // );

    // const starshipDetails = (
    //   <ItemDetails
    //     itemId={5}
    //     getData={getStarship}
    //     getImageUrl={getStarshipImage}
    //   >
    //     <Record field="model" label="Model" />
    //     <Record field="length" label="Length" />
    //     <Record field="costInCredits" label="Cost" />
    //   </ItemDetails>
    // );

    // const peopleList = (
    //   <ItemList
    //     getData={getAllPeople}
    //     onItemSelected={(id) => {
    //       console.log(id);
    //     }}
    //   >
    //     {(item) => <span>{item.name}</span>}
    //   </ItemList>
    // );

    // const planetsList = (
    //   <ItemList
    //     getData={getAllPlanets}
    //     onItemSelected={(id) => {
    //       console.log(id);
    //     }}
    //   >
    //     {(item) => <span>{item.name}</span>}
    //   </ItemList>
    // );

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>

            {planet}

            <PersonDetails itemId={11} />

            <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} />

            <PersonList />

            <PlanetList />

            <StarshipList />

            {/* { planet }
        <div className="row mb2 button-row">
          <button
            className = "toggle-planet btn btn-warning btn-lg" onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div> */}

            {/* <PeoplePage /> */}

            {/* <Row left={peopleList} right={planetsList}/> */}

            {/* <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPlanets}
            renderItem={(item) => (<span>{item.name}<button>!</button></span>)}/>
        </div>
        <div className="col-md-6">
          <ItemDetails personId={this.state.selectedPerson}/>
        </div>
      </div>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllStarships}
            renderItem={(item) => item.name}/>
        </div>
        <div className="col-md-6">
          <ItemDetails personId={this.state.selectedPerson}/>
        </div>
      </div> */}
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
