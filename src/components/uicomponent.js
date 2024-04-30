import React from 'react';


const UiComponent = (props) => {
    return (
        <div>
            <ul>
                {
                    props.list.map((value, key)=>(
                        <div key={key}>
                            <p>{`${value.name}, ${value.age}`}</p>
                        </div>
                    ))
                }
            </ul>
        </div>
    );
}

export default UiComponent;
