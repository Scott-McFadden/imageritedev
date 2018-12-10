import React from 'react';
import {MaterialIconList} from '../services/materialIconsList';
import Dialog from "@material-ui/core/Dialog/Dialog";
import Button from "@material-ui/core/Button/Button";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Icon from '@material-ui/core/Icon';

import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


class IconSelector extends React.Component {
    constructor(props) {
        super(props);
        console.log("iconselector constructor =>", props);
        this.state = {
            iconSelectionModalOpen: false,
            selectedIcon: props.input.value
        }
        this.selectedIcon = props.input.value;

        this.iconMenu = this.renderAllIcons();

        console.log('iconMenu =>', this.iconMenu);
    }


    iconMenu = '';
    itemKeyNumber = 0;
    selectedIcon = '';

    getItemKey() {
        this.itemKeyNumber++;
        return 'IS' + this.itemKeyNumber.toString();
    }

    componentDidMount() {

    }

    handleClose() {
        this.setState({
            iconSelectionModalOpen: false
        });
    }

    showSelections() {
        this.setState({
            iconSelectionModalOpen: true
        });

        console.log('showSelections =>', this.state);
    }

    selectThisOne(selectedName) {
        console.log('selectedName =>', this.props);
        this.setState((state) => ({
            selectedIcon: selectedName
        }));

        this.props.input.onChange(selectedName);
        this.handleClose();
    }

    renderAllIcons() {

        let iconSets = [];
        let tset = [{}];
        for (var a = 0; a < MaterialIconList.length && a > 0; a++) {

            if (a % 10 === 0 && a > 0) {
                iconSets.push(tset);
                tset = [];
            }
            tset.push(MaterialIconList[a]);
        }
        iconSets.push(tset);

        return this.icons;
    }

    icons = MaterialIconList.map((item, index) => {
        // console.log("icons =>", item);
        return (<div key={index} onClick={() => this.selectThisOne(item.iconName)}>
            <Icon
                className={'material-icons md-18' + (this.selectedIcon === item.iconName ? ' green-text' : '')}>{item.iconName}</Icon>
        </div>);
    });


    render() {
        return (<div>
            <div> Icon Name: {this.state.selectedIcon} <Icon
                className='material-icons md-18'>{this.state.selectedIcon}</Icon>
                <Button onClick={() => this.showSelections()}>Change</Button></div>
            <div>
                <Dialog
                    open={this.state.iconSelectionModalOpen}
                    onClose={this.handleClose}
                    area-labelledy="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Select Icon</DialogTitle>
                    <DialogContent>
                        {this.icons}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color='primary'>Cancel</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>);
    }
}

export default IconSelector;
