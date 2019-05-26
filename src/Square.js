import React from 'react';
import { DropTarget } from 'react-dnd';
import Types from './Types';

const squareTarget = {
    drop(props, monitor) {
        //console.log(props);
        //console.log(monitor.getItem());
    }
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
    }
}

class Square extends React.PureComponent {
    render() {
        const { color, children, connectDropTarget } = this.props;
        const style = {
            width: '12.5%',
            height: '12.5%',
            backgroundColor: color
        };

        return connectDropTarget(
        <span style={style}>
            {children}
        </span>
        )
    }
}

export default DropTarget(Types.CHESSPIECE, squareTarget, collect)(Square);
