class Content extends React.Component {
  constructor(props) {
    super(props);
    console.log('I log, therefore I am');
  }

  componentWilMount() {
    console.log(ReactDOM.findDOMNode(this));
  }

  componentDidMount() {
    console.dir(ReactDOM.findDOMNode(this));
  }

  render() {
    console.log('render');
    return React.createElement('div', null);
  }
}