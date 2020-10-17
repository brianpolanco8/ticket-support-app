import * as React from 'react'
import './SupportForm.css'
import { EditOutlined } from '@ant-design/icons'

const SupportText: React.FunctionComponent<any> = (props) => {
    return (
        <div>
            <div className="iconContainer">
                <EditOutlined/>
            </div>
            <div className="titleContainer">
                <p>Soporte</p>
            </div>
            <div className="descriptionContainer">
                <p>En caso de encontrar algún problema
                Contactenos. Le responderemos lo antes posible</p>
            </div>
        </div>
    )
}

export default SupportText