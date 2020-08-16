import React from 'react';

// Component
import Skeleton from '../Skeleton/Skeleton';
import SongTable from '../Song/SongTable';

function Album(props) {

  return (
    <Skeleton>
      <SongTable id={props.match.params.related} />
    </Skeleton >
  )
}

export default Album;
