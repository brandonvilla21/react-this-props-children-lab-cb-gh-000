// Code ThemedDecoration Component Here
import React from 'react';
export default class ThemedDecoration extends React.Component {

  render() {
    const childrenProps = React.Children.map(this.props.children, child => {
      return (
        <div className={this.props.heaven}>{child}</div>
      )
    })
    return(
      {childrenProps}
    )
  }
}
