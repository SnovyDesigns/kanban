import { connect } from 'react-redux';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';
import Kanban from './Kanban';

Kanban.need = [
  () => {
    return fetchLanes();
  }
];

const mapStateToProps = state => ({
  lanes: Object.values(state.lanes)
});

const mapDispatchToProps = {
  createLane: createLaneRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kanban);
