import React from "react";
import ItemDetails, { Record } from "../item-details";
// import { SwapiServiceConsumer } from "../swapi-service-context";
import { withSwapiService } from "../hoc-helpers";

const StarshipDetails = (props) => {
  // return (
  //   <SwapiServiceConsumer>
  //     {(swapiService) => {
        return (
          <ItemDetails {...props}
            // itemId={item.itemId}
            // getData={swapiService.getStarship}
            // getImageUrl={swapiService.getStarshipImage}
          >
            <Record field="model" label="Model" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
          </ItemDetails>
    //     );
    //   }}
    // </SwapiServiceConsumer>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);