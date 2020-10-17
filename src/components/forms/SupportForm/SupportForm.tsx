import * as React from 'react'
import './SupportForm.css'
import {Card, Input, Button} from 'antd'
const SupportForm: React.FunctionComponent<any> = (props) => {
    return(
        <div>
            <Card className="formContainer">
                <p>Nombre</p>
                <Input placeholder="Introduzca su nombre..."/>
            </Card>
        </div>
    )
}

export default SupportForm