import React from 'react'
import Typography from '@material-ui/core/Typography'

export default function Job({job}) {
    return (
        <div className={'job'}>
            <Typography>{job.title}</Typography>
            <Typography>{job.company}</Typography>
            <Typography>{job.location}</Typography>
        </div>
    )
}