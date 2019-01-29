// Without Constructor but rather using babel-plugin-transform-class-properties
// and fat arrow functions.....

class Content extends React.Component {
  state = {
    textbook: ''
  };

  handleChange = event => {
    console.log(event.target.value);
    console.log(this);
    this.setState({textbook: event.target.value})
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Testing Not using the Constructor..."
        />
        <br/>
        <span>{this.state.textbook}</span>
      </div>
    )
  }
}

// Using the constructor.... which requires no additional plugin, but rather
// requires that 'this' be bound to the constructor...

/*
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textbook: ''};
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({textbook: event.target.value})
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Eloquent TypeScript: Myth or Reality"
        />
        <br/>
        <span>{this.state.textbook}</span>
      </div>
    )
  }
}*/
