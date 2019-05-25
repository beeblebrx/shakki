import React from 'react'

class Square extends React.PureComponent {
    render() {
        const { color, children } = this.props;
        const style = {
            width: '12.5%',
            height: '12.5%',
            backgroundColor: color
        };
    

        return (
        <span style={style}>
            {children}
        </span>
        )
    }
}

export default Square;
