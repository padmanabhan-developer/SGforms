import { useState } from "react"

const SGTextAreaField = (props) => {
    const {fieldDefinition} = props
    const {name, label, options} = fieldDefinition
    const [value, setValue] = useState('')

    return !fieldDefinition?.name ? null : <div className="field-container">
        <legend className="col-form-label field field-label">{label || ''}</legend>
        <textarea name={name} className="form-control" style={{color: '#888'}} id={`id-${name}`} value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
}

export default SGTextAreaField
