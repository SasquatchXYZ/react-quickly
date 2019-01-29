class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {accountNumber: ''};

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log('Typed:', event.target.value);
    this.setState({accountNumber: event.target.value.replace(/[^0-9]/ig, '')})
  }

  render() {
    return (
      <div>
        Account Number:
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="12345"
          value={this.state.accountNumber}
        />
        <br/>
        <span>{this.state.accountNumber.length > 0 ? `You entered: ${this.state.accountNumber}` : ''}</span>
      </div>
    )
  }
}