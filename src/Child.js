import React, { memo } from 'react';
const Child = ({ seconds }) => {
    console.log('I am rendering');
    return <div>I am updating per {seconds}</div>

}
export default memo(Child);