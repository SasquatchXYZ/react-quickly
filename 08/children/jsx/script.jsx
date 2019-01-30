ReactDOM.render(
  <div>
    <Content>
      <h1>React</h1>
      <p>Rocks</p>
    </Content>
    <Content>
      <img src="img/cube.png" width="200"/>
    </Content>
    <Content>
      <a href="http://react.rocks">http://react.rocks</a>
    </Content>
    <Content>
      <a className="btn btn-danger" href="http://react.rocks">http://react.rocks</a>
    </Content>
  </div>,
  document.getElementById('root')
);