import React from 'react'
import {Typography} from 'antd'

const {Title} = Typography;

interface Props {
    title: string;
}

const PageTitle = ({title}: Props) => {
    return (
        <div>
            <Title>{title}</Title>
        </div>
    )
}

export default PageTitle;
