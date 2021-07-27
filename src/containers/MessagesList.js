import { connect } from 'react-redux';
import MessagesList from 'src/components/MessagesList';

// eslint-disable-next-line arrow-body-style
const mapStateToProps = (state) => {
  return {
    messages: state.messages,
  };
};

const ConnectedMessagesList = connect(mapStateToProps)(MessagesList);
export default ConnectedMessagesList;
