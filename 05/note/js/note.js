class Note extends React.Component {
  confirmLeave(e) {
    const confirmationMessage = 'Do you really want to close?';
    e.returnValue = confirmationMessage;
    return confirmationMessage;
  }

  componentDidMount() {
    console.log('Attaching confirmLeave even listener for beforeunload');
    window.addEventListener('beforeunload', this.confirmLeave);
  }

  componentWillUnmount() {
    console.log('Removing confirmLeave event listener for beforeunload');
    window.removeEventListener('beforeunload', this.confirmLeave);
  }

  render() {
    console.log('Render');
    return React.createElement(
      'div',
      null,
      'Here will be our input field for notes (parent will remove in ',
      this.props.secondsLeft,
      ' seconds.'
    );
  }
}