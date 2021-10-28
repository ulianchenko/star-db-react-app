import React, { Component } from 'react';
import PropTypes from "prop-types";

import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';
import Spinner from '../spinner/spinner';
import './random-planet.css';

export default class RandomPlanet extends Component {

  // look lesson 91
  static defaultProps = {
    updateInterval: 7000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  //   static propTypes = {
  //   updateInterval: (props, propName, componentName) => {
  //     const value = props[propName];
  //     if (typeof value === "number" && !isNaN(value)) {
  //       return null;
  //     }

  //     return new TypeError(`${componentName}: ${propName} must be a Number`)
  //   }
  // };
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  // constructor() {
  //   super();
  //   this.updatePlanet();
  //   this.interval = setInterval(this.updatePlanet, 2500);
  // };

  componentDidMount () {
    const { updateInterval } = this.props
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  };

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false});
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random()*17)+3;
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  };

  render() {

    const { planet, loading, error } = this.state;

    const hasDate = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasDate ? <PlanetView planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

// look lesson 91
// RandomPlanet.defaultProps = {
//   updateInterval: 7000
// };

const PlanetView = ({planet}) => {

  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
             alt="character"/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  );
};