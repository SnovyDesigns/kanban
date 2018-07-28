import React from 'react';
import PropTypes from 'prop-types';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';
import { fetchLanes } from '../Lane/LaneActions';

const Kanban = props => (
  <div className={styles.LanesContainer}>
    <Lanes lanes={props.lanes} />
    <button
      className={styles.AddLane}
      onClick={() =>
        props.createLane({
          name: 'New lane'
        })
      }
    >
      + Add lane
    </button>
  </div>
);

Kanban.need = [
  () => {
    return fetchLanes();
  }
];

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func
};

export default Kanban;
