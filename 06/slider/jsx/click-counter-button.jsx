const ClickCounterButton = props => {
  return (
    <button
      onClick={props.handler}
      className="btn btn-info"
    >
      Don't Touch me with your dirty hands!
    </button>
  )
}

/*
class ClickCounterButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.handler}
        className="btn btn-info"
      >
        Don't Touch me with your dirty hands!
      </button>
    )
  }
}*/
