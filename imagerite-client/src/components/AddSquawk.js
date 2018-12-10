import React from 'react';
import AddSquawkForm from '../forms/AddSquawkForm';
import connect from "react-redux/es/connect/connect";
import {addSquawk} from "../actions/squawkActions";

export class AddSquawk extends React.Component {
    handleSubmit(values) {
        console.log('AddSquawk - handle Submit', values);

        this.props.handleSubmit(values);
    }

    render() {
        return <AddSquawkForm onSubmit={this.handleSubmit}/>
    }
}

//
// const mapStateToProps = state => {
//     console.log('mapStateToProps->', state );
//     return {
//         loading: state.squawks.squawkLoading,
//         error: state.squawks.squawError,
//         form : state.addSquawk
//     } ;
// }
//
// export default connect(
//     mapStateToProps
// )(AddSquawk);
