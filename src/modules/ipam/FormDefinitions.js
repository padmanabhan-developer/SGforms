export const formDefinitions = {
    exclusionDetail: {
        caption: 'Exclusion Detail',
        conditions: {},
        fields: [
            {
                name: 'type',
                label: 'Type',
                type: 'select',
                options: ['IP', 'RANGE', 'CIDR']
            },
            {
                name: 'address',
                label: 'Address',
                type: 'text',
            },
            {
                name: 'startAddress',
                label: 'Start Address',
                type: 'text',
            },
            {
                name: 'endAddress',
                label: 'End Address',
                type: 'text',
            },
        ]
    },
    udProbeTable: {
        caption: 'UD Probe Detail',
        conditions: {},
        fields: [
            {
                name: 'probeName',
                label: 'Probe Name',
                type: 'search',
            },
            {
                name: 'sntCode',
                label: 'SNT Code',
                type: 'search',
            },
            {
                name: 'idcCode',
                label: 'IDC Code',
                type: 'search',
            },
            {
                name: 'sharedOrDedicated',
                label: 'Shared or Dedicated',
                type: 'search',
            },
        ]
    },
    probeNames: {
        caption: 'UD Probe Name',
        conditions: {},
        fields: [
            {
                name: 'name',
                label: 'Name',
                type: 'text',
            }
        ]
    }
}