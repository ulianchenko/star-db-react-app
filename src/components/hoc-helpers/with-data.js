import React, { Component } from 'react';
import Spinner from '../spinner';
// import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry/error-boundry';
// import ErrorButton from '../error-button';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      hasError: false
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.update();
      };
    };
  
    componentDidMount() {
      this.update();
    };

    update() {
      this.props.getData().then((data) => this.setState({data}));
    };

    componentDidCatch() {
      this.setState({hasError: true});
    };

    render() {

      const { data } = this.state;
      if (!data) {
        return <Spinner />;
      }
      return (
        <ErrorBoundry>
          <View { ... this.props} data={ data }/>
          {/* <ErrorButton /> */}
        </ErrorBoundry>
      )
    }
  };
};

export default withData;