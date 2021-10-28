import React from 'react';
import PropTypes from "prop-types"
import './item-list.css';

const ItemList = (props) => {
  
  const { data, onItemSelected, children: renderLabel } = props 

  const items = data.map((item) => {
    const { id } = item;
     const label = renderLabel(item);
     return(
       <li className="list-group-item" key={id} onClick={() => {
         onItemSelected(id) }}>
           {label}
       </li>
     );
   });

   return (
     <ul className="item-list list-group">
       {items}
     </ul>
  );
  
}

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func, //  It means: "Is onItemSelected a function?"
  data: PropTypes.arrayOf(PropTypes.object).isRequired, //  It means: "Is data an array of objects?" and this property is required
  children: PropTypes.func.isRequired //It means: "Is children a function?" and this property is required
};

export default ItemList;