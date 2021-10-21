import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import Spinner from '../spinner';

import './item-details.css';

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  onItemLoaded = (item) => {
    this.setState({item, loading: false});
  }

  updateItem () {
    const { itemId } = this.props;
    if (!itemId) {
      return
    }
    this.setState({loading: true});
    // this.swapiService.getPerson(personId).then((person) => {this.setState({ person })})
    this.swapiService.getPerson(itemId).then(this.onItemLoaded);
  }

  render() {
    const {item, loading} = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <ItemView item={item}/> : null;

    if (!this.state.item) {
      return (
        // <span>Select a person from a list</span>
        <div className="select-item">
          <div>
            <span>Select a item from a list</span>
          </div>
          <div className="spinner">
            {spinner}
          </div>
        </div>
      )
    }

    // const { id, name, gender, birthYear, eyeColor } = this.state.person;
    return (
      <div>
        <div className="spinner">{spinner}</div>
        <div>{content}</div>
      </div>
    );
  }
}


const ItemView = ({item}) => {
  const {id, name, gender, birthYear, eyeColor} = item;
  return (
    // <React.Fragment>
      <div className="item-details card">
        <img className="item-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
            {/* <li className="list-group-item">
              <ErrorButton/>
            </li> */}
          </ul>
          <ErrorButton/>
        </div>
      </div>
    // {/* </React.Fragment> */}
  );
}