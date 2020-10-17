import {storiesOf} from '@storybook/react'
import * as React from 'react'
import SupportText from '../../components/forms/SupportForm/SupportText'

storiesOf('Support Form', module)
    .add('Support Form Title', () => (
        <SupportText/>
    ))