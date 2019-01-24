class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    console.log(this.props['data-url']);
    fetch(this.props['data-url'])
      .then(response => {
        response.json();
        console.log(response)
      })
      .then(users => this.setState({users: users}, console.log(this.state)))
  };

  render() {
    return (
      <div className="container">
        <h1>List of Users</h1>
        <table className="table-striped table-condensed table table-bordered table-hover">
          <tbody>{this.state.users.map(user =>
            <tr key={user.id}>
              <td>{user.first_name} {user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.ip_address}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    )
  }
}