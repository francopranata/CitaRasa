import React from 'react';
import useCountUp from '../hooks/useCountUp';

const StatsCounter = ({ value, label }) => {
    const [ref, count] = useCountUp(value);
    return (
        <div ref={ref} className="text-center">
            <p className="text-5xl font-serif font-bold text-amber-600">{count}+</p>
            <p className="text-gray-500 mt-1">{label}</p>
        </div>
    );
};

export default StatsCounter;