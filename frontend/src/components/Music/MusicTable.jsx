import React from 'react'
import { connect } from 'react-redux';

function MusicTable(props) {

  console.log(props)

  return (
    <div>

    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(MusicTable);
