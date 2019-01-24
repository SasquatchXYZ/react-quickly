let dataURL = './real-user-data.json';
ReactDOM.render(
  <div>
    <Users data-url={dataURL}/>
  </div>,
  document.getElementById('content')
);