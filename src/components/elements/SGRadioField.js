import { useState } from "react"
import Form from 'react-bootstrap/Form';

const SGRadioField = (props) => {
    const { fieldDefinition } = props
    const { name, label, options, defaultValue } = fieldDefinition
    const [value, setValue] = useState('')

    return !name || !options?.length ? null : <>
        <legend className="col-form-label field field-label">{label || ''}</legend>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {            
                options.map((item, idx) => <div key={idx} style={{ display: 'flex', alignItems: 'center' }}>
                    <input 
                        type="radio" 
                        id={`id-${name}-${item}`} 
                        name={name} 
                        value={value} 
                        checked={defaultValue === item} 
                        onChange={(e) => setValue(e.target.value)}
                        style={{color: '#888'}}
                    />
                    <label className="sgRadioBox" htmlFor={`id-${name}-${item}`}>{item}</label>
                    </div>
                )
            }
        </div>
    </>
}

export default SGRadioField