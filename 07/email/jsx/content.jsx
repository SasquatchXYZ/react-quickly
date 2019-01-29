// Without the constructor... would probably work better this way since we don't even have a state to set...

class Content extends React.Component {
  prompt = 'Please Enter your email to win $1,000,000.';

  submit = () => {
    const emailAddress = this.refs.emailAddress;
    const comments = this.refs.comments;
    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value)
  };

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
