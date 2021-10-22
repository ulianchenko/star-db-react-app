import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ErrorButton from '../error-button';
import Spinner from '../spinner';

import './item-details.css';

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
        <span className="term">{label}</span>
        {/* <span>{item[field]}</span> */}
        <span>{item[field]}</span>
      </li>
  );
};
export {Record};

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image:null,
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
    const { getImageUrl } = this.props;
    // console.log(item);
    this.setState({item, image: getImageUrl(item), loading: false});
  }

  updateItem () {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return
    }
    this.setState({loading: true});
    // this.swapiService.getPerson(personId).then((person) => {this.setState({ person })})
    getData(itemId).then(this.onItemLoaded);
  }

  render() {
    const {item, image, loading} = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <ItemView item={item} image={image} children={this.props.children}/> : null;

    if (!item) {
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


const ItemView = ({item, image, children}) => {
  const {id, name, gender, birthYear, eyeColor} = item;
  return (
    // <React.Fragment>
      <div className="item-details card">
        <img className="item-image"
          src={image}
          alt="item" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {/* <li className="list-group-item">
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
            <li className="list-group-item">
              <ErrorButton/>
            </li> */}
            
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, {item});
            })}
          </ul>
          <ErrorButton/>
        </div>
      </div>
    // {/* </React.Fragment> */}
  );
}