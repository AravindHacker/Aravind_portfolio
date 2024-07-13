// TypedText.js
import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import './index.css'

const TypedText = () => {
    return (
        <div className="typed-container">
            <Typed
                strings={[
                    'I am a Full stack web developer.',
                    'I am a Frontend web developer.',
                    'I am a Backend web developer.',
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
        </div>
    );
};

export default TypedText;
