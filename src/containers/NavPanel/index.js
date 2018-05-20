import { connect } from 'react-redux';

import NavPanel from '../../components/NavPanel';

const mapStateToProps = (state) => ({
    sections: state.sections,
});

export default connect(mapStateToProps)(NavPanel);