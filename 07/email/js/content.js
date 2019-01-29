// Without the constructor... would probably work better this way since we don't even have a state to set...

class Content extends React.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.prompt = 'Please Enter your email to win $1,000,000.', this.submit = () => {
      const emailAddress = this.refs.emailAddress;
      const comments = this.refs.comments;
      console.log(ReactDOM.findDOMNode(emailAddress).value);
      console.log(ReactDOM.findDOMNode(comments).value);
    }, _temp;
  }

  render() {
    return React.createElement(
      "div",
      { className: "well" },
      React.createElement(
        "p",
        null,
        this.prompt
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        "Email: ",
        React.createElement("input", { ref: "emailAddress", className: "form-control", type: "text", placeholder: "hi@azat.co" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        "Comments: ",
        React.createElement("textarea", { ref: "comments", className: "form-control", placeholder: "I like your website!" })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "a",
          { className: "btn btn-primary", value: "submit", onClick: this.submit },
          "Submit"
        )
      )
    );
  }
}

// With the constructor... pretty much pointless really since we don't even set the state, and all that we
// are doing is typing more to establish the constructor and bind 'this'...

/*
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.propmt = 'Please Enter your  Email to win $1,000,000.'
  }

  submit() {
    let emailAddress = this.refs.emailAddress;
    let comments = this.refs.comments;
    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value)
  }

  render() {
    return (
      <div className="well">
        <p>{this.prompt}</p>
        <div className="form-group">
          Email: <input ref="emailAddress" className="form-control" type="text" placeholder="hi@azat.co"/>
        </div>
        <div className="form-group">
          Comments: <textarea ref="comments" className="form-control" placeholder="I like your website!"/>
        </div>
        <div className="form-group">
          <a className="btn btn-primary" value="submit" onClick={this.submit}>Submit</a>
        </div>
      </div>
    )
  }
}*/