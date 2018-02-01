// Code ThemedDecoration Component Here
import React from 'react';
export default class Invitation extends React.Component {

  render() {
    const childrenProps = React.Children.map(this.props.children, child => {
      return (
        <div className="">{child}</div>
      )
    })
    return(
      {childrenProps}
    )
  }
}
