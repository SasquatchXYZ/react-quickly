let dataURL = '/ch05/users/real-user-data.json';
ReactDOM.render(
  <div>
    <Users data-url={dataURL}/>
  </div>,
  document.getElementById('content')
);