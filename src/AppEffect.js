import React, { useState, useEffect } from 'react';

const App = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("rails365")

    useEffect(() => {
        console.log(`render ${count}`);
        document.title = `You clicked ${count} times`;
    }, []);

    useEffect(() => {
        console.log("render name");
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
            <div>
                <button onClick={() => setName("")}>
                    Click me
        </button>
            </div>
        </div>
    );
}

export default App;