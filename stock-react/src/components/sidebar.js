import React from 'react';

class SideNavPage extends React.Component {
    
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
      return(
  <div className={"ui sidebar inverted vertical menu" + (this.state.isOpen ? ' visible' : '') }>
    <button onClick={this.handleToggle}>close</button>
    <p className="item">
      1
    </p>
    <p className="item">
      2
    </p>
    <p className="item">
      3
    </p>
  </div>
  )
  }
}

export default SideNavPage;