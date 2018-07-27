import { connect } from 'react-redux';
import { createLane } from '../Lane/LaneActions';
import Kanban from './Kanban';

const mapStateToProps = state => ({
  lanes: state.lanes
});

const mapDispatchToProps = {
  createLane
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Kanban);
