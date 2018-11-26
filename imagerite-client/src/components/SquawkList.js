import React from "react";
import { connect } from "react-redux";
import  SquawkItem  from './SquawkItem';
import { getAllSquawks} from "../actions/squawkActions";

class  SquawkList extends React.Component {

    componentDidMount() {
        this.props.dispatch(getAllSquawks());
    }

    render() {
        const {error, loading, allSquawks, currentSquawk } = this.props;

        if (error) {
            return <div>We encountered an error of the sort you don't want.</div>;
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
                        } )
                        : "No Announcements"
                    }
            </div>

        )



    }
}

const mapStateToProps = state => {
    console.log('mapStateToProps->', state );
    return {
        allSquawks: state.squawks.squawkItems,
        loading: state.squawks.squawkLoading,
        error: state.squawks.squawError,
        currentSquawk: state.squawks.current_Squawk
    } ;

}
export default connect(mapStateToProps)(SquawkList);
