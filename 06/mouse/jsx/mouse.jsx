// Nullifying a Synthetic Event
class Mouse extends React.Component {
  handleMouseOver(event) {
    console.log('mouse is over with event');
    window.e = event;
    console.dir(event.target);
    setTimeout(() => {
      console.table(event.target);
      console.table(window.e.target)
    }, 2345)
  }

  render() {
    return (
      <div>
        <div
          style={{border: '1px solid red'}}
          onMouseOver={this.handleMouseOver.bind(this)}
        >
          Open DevTools and move your mouse cursor over here
        </div>
      </div>
    )
  }
}

// Event Handler as a Class Method; binding in render()
/*class Mouse extends React.Component {
  handleMouseOver (event) {
    console.log('mouse is over with event');
    console.dir(event.target)
  }

  render() {
    return (
      <div>
        <div
          style={{border: '1px solid red'}}
          onMouseOver={this.handleMouseOver.bind(this)}
        >
          Open DevTools and move your mouse cursor over here.
        </div>
      </div>
    )
  }
}*/

// Event Handler Receiving a Synthetic Event
/*
class Mouse extends React.Component {

  render() {
    return (
      <div>
        <div
          style={{border: '1px solid red'}}
          onMouseOver={(event => {
            console.log('mouse is over with event');
            console.dir(event)
          })}
        >
          Open DevTools and Move Your Mouse Cursor Over Here.
        </div>
      </div>
    )
  }
}*/
