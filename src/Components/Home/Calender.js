import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='flex justify-center'>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate} />
        </div>
    );
};

export default Calender;