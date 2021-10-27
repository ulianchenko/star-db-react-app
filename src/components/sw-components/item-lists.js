import React from 'react';
import ItemList from '../item-list';
import { withData, withSwapiService, compose, withChildFunction } from '../hoc-helpers';
// import SwapiService from '../../services/swapi-service';

// const swapiService = new SwapiService();

// const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const renderName = (item) => <span>{item.name}</span>;
const renderModelAndName = (item) => <span>{item.name} ({item.model})</span>;

// look lessons 89 and 90
// const add = (a) => (b) => a+b

const PersonList = compose(
                    withSwapiService(mapPersonMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                  )(ItemList);

const PlanetList = compose(
                    withSwapiService(mapPlanetMethodsToProps),
                    withData,
                    withChildFunction(renderName)
                  )(ItemList);

const StarshipList = compose(
                    withSwapiService(mapStarshipMethodsToProps),
                    withData,
                    withChildFunction(renderModelAndName)
                  )(ItemList);

export {                  
  PersonList,
  PlanetList,
  StarshipList
};