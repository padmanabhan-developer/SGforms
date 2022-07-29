import { useState } from "react"
import SGRadioField from "../../components/elements/SGRadioField"
import SGSelectField from "../../components/elements/SGSelectField"
import SGTextAreaField from "../../components/elements/SGTextAreaField"
import SGTextField from "../../components/elements/SGTextField"
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap"
import { formDefinitions } from "./FormDefinitions"

const DnsForm = (props) => {
    const [formType, setFormType] = useState('')
    const closeForm = () => setFormType('')
    const forms = {
        addZoneRecord: 'addZoneRecord',
        zoneRequest: 'zoneRequest'
    }
    const validateFieldValue = (val) => {return true}

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const fieldValues = Object.fromEntries(formData.entries())
        const formIsValid = Object.values(fieldValues).every((value) => validateFieldValue(value))
        if (formIsValid) {
            alert(`Form Submitted - Check console logs`)
            console.log(`Form data`, fieldValues)
        }
    }

    return <>
        <div className="page-container">
            <>
                <h1>DNS forms</h1>
                <div className="buttons-container">
                    <button className=" btn btn-primary mt-3" onClick={() => setFormType(forms.addZoneRecord)}> Add Zone Record </button>
                    <button className=" btn btn-primary mt-3" onClick={() => setFormType(forms.zoneRequest)}> Zone Request </button>
                </div>
            </>
        </div>
        {!!formType && !!formDefinitions[formType] && !!formDefinitions[formType]?.fields?.length && 
            <>
                <Modal show={true} onHide={() => setFormType('')} style={{ margin: 'auto' }}>
                    <Modal.Header closeButton style={{ fontSize: 9 }}>
                        <h1 style={{ textTransform: 'capitalize' }}>{formDefinitions[formType]?.caption || formType}</h1>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-container" onSubmit={handleSubmit} id={`${formType}-form`}>
                            {
                                formDefinitions[formType].fields.map((field, idx) => {
                                    switch (field?.type) {
                                        case 'text':
                                        case 'number':
                                            return <div key={idx} className="field-wrapper"> <SGTextField fieldDefinition={field} /> </div>;
                                        case 'textarea':
                                            return <div key={idx} className="field-wrapper"> <SGTextAreaField fieldDefinition={field} /> </div>;
                                        case 'radio':
                                            return <div key={idx} className="field-wrapper"> <SGRadioField fieldDefinition={field} /> </div>;
                                        case 'select':
                                            return <div key={idx} className="field-wrapper"> <SGSelectField fieldDefinition={field} /> </div>;
                                        default:
                                            return null
                                    }
                                })
                            }
                            <div className="buttons-container">
                                <Button type="submit">Submit</Button>
                                <Button variant="link" onClick={() => setFormType('')}>Cancel</Button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </>
        }

    </>
}

export default DnsForm
