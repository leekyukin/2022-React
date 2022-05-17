import React, { Component } from 'react'

export default class R005_LifecycleEx extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. construcor Call');
    }

  render(props) {
      console.log('3. render Call');
    return (
      <h2>[ THIS IS CONSTRUCTOR FUNCTION ]</h2>
    )
  }
}
