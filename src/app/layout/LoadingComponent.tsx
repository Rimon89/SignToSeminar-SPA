import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoadingComponent:React.FC<{content: string}> = ({content}) => {
    return (
        <Dimmer active inverted>
          <Loader content={content} size='large'></Loader>
        </Dimmer>
    )
}

export default LoadingComponent
