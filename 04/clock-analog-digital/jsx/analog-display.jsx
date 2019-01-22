const AnalogDisplay = (props) => {
  const date = new Date(props.time);
  const dialStyle = {};
  const secondHandStyle = {};
  const minuteHandStyle = {};
  const hourHandStyle = {};

  return (
    <div>
      <div style={dialStyle}>
        <div style={secondHandStyle}/>
        <div style={minuteHandStyle}/>
        <div style={hourHandStyle}/>
      </div>
    </div>
  )
};