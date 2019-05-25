import React from 'react'

class King extends React.PureComponent {
    render() {
        if (this.props.color === 'white') {
            return <span>♔</span>
        } else {
            return <span>♚</span>
        }
    }
}

export default King;
