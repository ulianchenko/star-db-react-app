import React from "react";
import { StarshipList } from "../sw-components";
import { withRouter } from "react-router";
// import Row from "../row";

// export default class StarshipsPage extends Component {

//   state = {
//     selectedItem: null
//   };

//   onItemSelected = (selectedItem) => {
//     this.setState({ selectedItem });
//   };

//   render() {
    
//     const { selectedItem } = this.state;

//     return (
//       <Row
//         left={<StarshipList onItemSelected={this.onItemSelected}/>}
//         right={<StarshipDetails itemId={selectedItem} />}
//       />
//     );
//   }
// }

const StarshipsPage = ({ history }) => { // StarshipsPage doesn't have object history? that's why we use withRouter
  return (
    <StarshipList onItemSelected={(id) => history.push(id)} />
  );
};

export default withRouter(StarshipsPage);