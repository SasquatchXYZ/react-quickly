class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();

    this.state = {
      currentTime: new Date().toLocaleString()
    };
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating Time...');
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    console.log('Rendering CLock...');
    return React.createElement(
      'div',
      null,
      this.state.currentTime
    );
  }

}