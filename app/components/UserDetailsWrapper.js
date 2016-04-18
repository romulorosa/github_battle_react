var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  winnerTextColor: {
    color: 'green'
  },
  loserTextColor: {
    color: 'red'
  },
  defaultTextColor: {
    color: 'black'
  }
}

function UserDetailsWrapper (props) {

  if(props.header == 'Winner'){
    styleObj = styles.winnerTextColor;
  }
  else if(props.header == 'Loser'){
    styleObj = styles.loserTextColor;
  }
  else{
    styleObj = styles.defaultTextColor;
  }
  return (
    <div className='col-sm-6'>
      <p className='lead' style={styleObj}>{props.header}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.header = {
  header: PropTypes.string.isRequired,
}

module.exports = UserDetailsWrapper;
