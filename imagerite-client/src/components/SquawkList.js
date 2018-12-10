import React from "react";
import { connect } from "react-redux";
import  SquawkItem  from './SquawkItem';
import {getAllSquawks, addSquawk} from "../actions/squawkActions";
import AddSquawkForm from "../forms/AddSquawkForm";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class  SquawkList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {addModalOpen: false}
    }

    componentDidMount() {
        this.props.dispatch(getAllSquawks());
    }

    handleClickOpen = () => {
        this.setState({addModalOpen: true});
    };
    handleClose = () => {
        this.setState({addModalOpen: false});
        console.log('dialog closed =>', this.state);
    };

    handleSubmit = (values) => {
        this.setState({addModalOpen: false});
        console.log('values: ', values);
        console.log('dialog closed =>', this.state);
        console.log('handleSubmit props ', this.props);
        this.props.dispatch(addSquawk(values));

    };
    render() {
        const {error, loading, allSquawks} = this.props;

        if (error) {
            return <div>We encountered an error of the sort you don't want. Please contact your administrator</div>;
        }
        if (loading)
        {
            return <div>We are loading up the browser one box at a time.</div>;
        }
        return (
            <div>

                <h4>Announcements</h4>
                {allSquawks && allSquawks.length ? allSquawks.map((squawk) => {

                        return <SquawkItem key={squawk._id} item={squawk}/>;
                    })
                    : "No Announcements"
                }

                <button onClick={() => this.handleClickOpen()}>Add</button>
                <div>

                    <Dialog
                        open={this.state.addModalOpen}
                        onClose={this.handleClose}
                        area-labelledy="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Add New Announcement</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Please complete the following:</DialogContentText>
                            <AddSquawkForm onSubmit={this.handleSubmit}/>

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color='primary'>Cancel</Button>
                        </DialogActions>
                    </Dialog>

                </div>
            </div>
        )
    }
}

//<!-- AddSquawkForm onSubmit={()=>this.addSquawkSubmit()} /-->
const mapStateToProps = state => {
    console.log('mapStateToProps->', state );
    return {
        allSquawks: state.squawks.squawkItems,
        loading: state.squawks.squawkLoading,
        error: state.squawks.squawError,
        currentSquawk: state.squawks.current_Squawk,
        form: state.addSquawk

    } ;

}
export default connect(mapStateToProps)(SquawkList);
