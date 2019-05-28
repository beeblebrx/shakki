export const pieceSource = {
    beginDrag(props) {
        return {
            pieceId: props.id
        }
    }
}

export function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}