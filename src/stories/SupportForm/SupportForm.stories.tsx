import {storiesOf} from '@storybook/react'
import * as React from 'react'
import SupportText from '../../components/forms/SupportForm/SupportText'
import SupportForm from '../../components/forms/SupportForm/SupportForm'
storiesOf('Support Form', module)
    .add('Support Form Title', () => (
        <SupportText/>
    ))

    .add('Support Form', () => (
        <SupportForm/>
    ))