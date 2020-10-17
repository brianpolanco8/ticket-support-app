import * as React from 'react'
import './SupportForm.css'
import {Card, Input, Button} from 'antd'
const SupportForm: React.FunctionComponent<any> = (props) => {
    return(
        <div className="formContainer">
            <Card>
                <p className="nameTextContainer">Nombre</p>
                <Input className="nameFormContainer" placeholder="Introduzca su nombre..."/>
            </Card>
        </div>
    )
}

export default SupportForm