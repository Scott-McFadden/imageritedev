import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from "@material-ui/core/TextField";
import IconSelector from '../components/IconSelector';


const renderTextField = ({
                             input,
                             label,
                             meta: {touched, error},
                             ...custom
                         }) => (
    <TextField
        hinttext={label}
        floatinglabeltext={label}
        errortext={error}
        {...input}
        {...custom}
    />
);

class AddSquawkForm extends React.Component {


    // handleSubmit( e, values) {
    //         e.preventDefault();
    //         console.log("AddSquawk: ", this);
    //
    //         this.props.handleSubmit();
    //
    //     }


    selectedIcon = '';

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label htmlFor='title'>Title</label>
                    <Field name="title" component='input' type='text'/>
                </div>
                <div>
                    <Field name="iconName" component={IconSelector}/>

                </div>
                <div>
                    <label htmlFor='content'>Message</label>
                    <Field name="content" component={renderTextField} multiline={true} rows={3}/>
                </div>
                <div>
                    <label htmlFor='url'>Associated URL</label>
                    <Field name="url" component='input' type='url'/>
                </div>
                <div>
                    <label htmlFor='startOn'>Start On</label>
                    <Field name="startOn" component='input' type='date'/>
                </div>
                <div>
                    <label htmlFor='EndOn'>End On</label>
                    <Field name='endOn' component='input' type='date'/>
                </div>
                <button type="submit">Submit</button>
            </form>


        )


    }

}


export default reduxForm({
    form: 'addSquawk'
})(AddSquawkForm);




