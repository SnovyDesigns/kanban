import React from 'react';
import PropTypes from 'prop-types';
import Lanes from '../Lane/Lanes';
import styles from '../Lane/Lane.css';

const Kanban = props => (
  <div>
    <button
      className={styles.AddLane}
      onClick={() =>
        props.createLane({
          name: 'New lane'
        })
      }
    >
      Add lane
    </button>
    <Lanes lanes={props.lanes} />
  </div>
);

// Kanban.need = [
//   () => {
//     return fetchLanes();
//   }
// ];

Kanban.propTypes = {
  lanes: PropTypes.array,
  createLane: PropTypes.func
};

export default Kanban;
