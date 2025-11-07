import React from 'react'
import { CircularProgress } from '@mui/material';

const Progress = (props) => {
    return (
        <div className={props.color}>
            <CircularProgress color='inherit' size={props.size} />
        </div>
    )
}

export default Progress;