
import React from 'react';

export const Properties = (props) => {
    return (
        <div>
            <p>{props.name} is {props.age} years old, and comes
                from {props.village}</p>
            {props.children}
        </div>
    )
}

