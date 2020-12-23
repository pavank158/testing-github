


import React from 'react';
import { StateContext } from '../state-context';

// const connect = (Component) => {
const connect = selectState => Component => {
  class Connect extends React.Component {

    render() {
    //   return <Component {...this.context}></Component>
      const slice = selectState(this.context);
      return <Component {...slice}></Component>
    }
  }
  Connect.contextType = StateContext;
  return Connect;
}


export default connect; 