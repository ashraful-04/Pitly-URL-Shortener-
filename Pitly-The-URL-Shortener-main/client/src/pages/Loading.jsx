import React from 'react'
import { Progress } from '../components';

const Loading = (props) => {
    return (
        <div className='bg-background h-screen flex justify-center items-center'>
            <Progress color={props.color} size={props.size} />
        </div>
    )
}

export default Loading