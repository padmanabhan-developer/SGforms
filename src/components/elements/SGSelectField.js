import { useState } from "react"

const SGSelectField = (props) => {
    const { fieldDefinition, updateHandler } = props
    const { name, label, options, defaultValue } = fieldDefinition
    const [value, setValue] = useState(defaultValue || '')

    const updateValue = (val) => {
        setValue(val)
        if(!!updateHandler) updateHandler(val)
    }

    return !name || !options?.length ? null : <>
        <legend className="col-form-label field field-label">{label || ''}</legend>
        <select name={name} className="form-control" onChange={(event) => updateValue(event.target.value)} value={value} style={{color: '#888'}}>
        {
            options.map((item,idx) => <option value={item} key={idx}>{item}</option>)
        }
      </select>
    </>
}

export default SGSelectField
