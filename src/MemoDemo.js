import React, { useState, useEffect } from 'react';
import Child from './Child';
const MemoDemo = () => {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)

    }, [])
    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({
    //             time: new Date()
    //         })
    //     }, 1000);
    // }
    return (
        <div>
            <Child seconds={1} />
            {time.toString()}
        </div>
    )
}
export default MemoDemo;