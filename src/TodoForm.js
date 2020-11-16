import React, { useState } from 'react';

const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        onChange: e => setValue(e.target.value),
        resetValue: () => setValue("")
    }
}

const Froms = ({ onSubmit }) => {
    const { resetValue, ...text } = useInputValue("")
    return (
        <form onSubmit={e => {
            e.preventDefault();
            onSubmit(text.value);
            resetValue();
        }}>
            <input type="text" {...text} />
        </form>
    )
}
export default Froms;