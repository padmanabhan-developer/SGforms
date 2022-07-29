import { useState } from "react"

const SGTextField = (props) => {
    const {fieldDefinition} = props
    const {name, label, options, type} = fieldDefinition
    const [value, setValue] = useState('')

    return !fieldDefinition?.name ? null : <div className="field-container">
        <legend className="col-form-label field field-label">{label || ''}</legend>
        <input name={name} className="form-control" style={{color: '#888'}} id={`id-${name}`} type={type || 'text'} value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
}

export default SGTextField