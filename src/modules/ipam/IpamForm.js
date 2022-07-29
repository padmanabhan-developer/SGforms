import { useEffect, useState } from "react"
import SGRadioField from "../../components/elements/SGRadioField"
import SGSelectField from "../../components/elements/SGSelectField"
import SGTextAreaField from "../../components/elements/SGTextAreaField"
import SGTextField from "../../components/elements/SGTextField"
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap"
import { formDefinitions } from "./FormDefinitions"

const IpamForm = (props) => {
    const [formType, setFormType] = useState('')
    const [selectedCollection, setSelectedCollection] = useState('')

    const closeForm = () => setFormType('')
    const forms = {
        addZoneRecord: 'addZoneRecord',
        zoneRequest: 'zoneRequest'
    }
    const availableCollections = [
        {
            label: 'Exclusion Detail',
            form: 'exclusionDetail'
        },
        {
            label: 'UD Probe Table',
            form: 'udProbeTable'
        },
        {
            label: 'SNT Records',
            form: 'sntRecords'
        },
        {
            label: 'Subnet CIDR',
            form: 'subnetCidr'
        },
        {
            label: 'Probe Names',
            form: 'probeNames'
        },
    ]

    const validateFieldValue = (val) => { return true }

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

    useEffect(() => {
        if (!selectedCollection) return
        const formToBeDisplayed = availableCollections.filter(item => item.label === selectedCollection)
        if (!formToBeDisplayed?.length) return
        setFormType(formToBeDisplayed[0].form)
    }, [selectedCollection])

    return <>
        <div className="page-container">
            <>
                <h1>IPAM forms</h1>
                <div style={{ width: '50%', textAlign: 'left' }}>
                    <SGSelectField
                        fieldDefinition={{
                            label: 'Available collections',
                            name: 'selectedCollection',
                            options: ['Select collection', ...availableCollections.map(item => item.label)]
                        }}
                        updateHandler={(val) => setSelectedCollection(val)}
                    />
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
                                        case 'search':
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

export default IpamForm
