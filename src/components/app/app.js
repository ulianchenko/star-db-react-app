import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from '../../services/dummy-swapi-service';
import "./app.css";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";
import ErrorBoundry from "../error-boundry/error-boundry";
export default class App extends React.Component {

  state = {
    swapiService: new SwapiService(),
    // selectedPerson: Math.floor(Math.random()*10)+1,
    hasError: false
  };

  onServiceChange = () => {
    this.setState((state) => {
      const Service = state.swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      }
    });
  }

  // toggleRandomPlanet = () => {
  //   this.setState((state) => {
  //     return {
  //       showRandomPlanet: !state.showRandomPlanet,
  //     };
  //   });
  // };
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

    // const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    // const {
    //   getPerson,
    //   getStarship,
    //   getPersonImage,
    //   getStarshipImage
    // } = this.state.swapiService;

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

            <RandomPlanet />

            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />

            {/* <PersonDetails itemId={11} /> */}

            {/* <PlanetDetails itemId={5} />

            <StarshipDetails itemId={9} /> */}

            {/* <PersonList /> */}

            {/* <PlanetList />

            <StarshipList /> */}

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