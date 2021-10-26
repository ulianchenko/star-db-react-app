import React from "react";
import ItemDetails, { Record } from "../item-details";
// import { SwapiServiceConsumer } from "../swapi-service-context";
import { withSwapiService } from "../hoc-helpers";

const PlanetDetails = (props) => {
  // return (
  //   <SwapiServiceConsumer>
  //     {(swapiService) => {
        return (
          <ItemDetails {...props}
            // itemId={item.itemId}
            // getData={swapiService.getPlanet}
            // getImageUrl={swapiService.getPlanetImage}
          >
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
          </ItemDetails>
    //     );
    //   }}
    // </SwapiServiceConsumer>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);