let dataURL = '/ch05/users/real-user-data.json';
ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Users, { 'data-url': dataURL })
), document.getElementById('content'));