// Without Constructor but rather using babel-plugin-transform-class-properties
// and fat arrow functions.....

class Content extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      textbook: ''
    }, this.handleChange = event => {
      console.log(event.target.value);
      console.log(this);
      this.setState({ textbook: event.target.value });
    }, _temp;
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", {
        type: "text",
        onChange: this.handleChange,
        placeholder: "Testing Not using the Constructor..."
      }),
      React.createElement("br", null),
      React.createElement(
        "span",
        null,
        this.state.textbook
      )
    );
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