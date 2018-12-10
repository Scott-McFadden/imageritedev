import Icon from "@material-ui/core/Icon/Icon";
import React from "react";

class IconButton extends React.Component {

    render() {
        const {name, callback, selected} = this.props;
        return (
            <button key={'IB' + name} onClick={callback}><Icon
                className={'material-icons md-18' + (selected ? ' green-text' : '')}
            >{name}</Icon></button>
        );
    }
}

export default IconButton;
