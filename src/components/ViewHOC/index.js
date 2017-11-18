import React, { Component } from 'react';
import getData from 'UTILS/getData';

const defaultView = () => (
  <div>
    <h1>View Title</h1>
  </div>
);

const ViewHOC = ({
  reqOpts={},
  View=defaultView
}) => (
  class Wrapper extends Component {
    constructor(props){
      super(props);

      this.state = {
        // if the initial data is being hydrated, don't show `loading`
        loading: !(props.data && props.data.length)
      };
    }

    componentDidMount(){
      const self = this;

      this.setState({
        loading: true
      });

      getData(reqOpts)
      .then(resp => {
        self.setState({
          data: resp.data,
          loading: false
        });
      })
      .catch(err => {
        console.error(err);
      });
    }

    render() {
      const mergedProps = {
        ...this.props,
        ...this.state
      };

      return (
        <View { ...mergedProps } />
      );
    }
  }
);

export default ViewHOC;
