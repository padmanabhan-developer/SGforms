export const formDefinitions = {
    addZoneRecord: {
        caption: 'Add Zone Record',
        conditions: {
            baseField: 'recordType',
            maps: [
                {
                    'A': ['name', 'ipv4addr', 'override ttl', 'ttl'],
                    'AAAA': [],
                    'CNAME': [],
                    'MX': [],
                    'NAPTR': [],
                    'PTR': [],
                    'TXT': [],
                    'SRV': []
                }
            ]
        },
        fields: [
            {
                name: 'recordType',
                label: 'recordType',
                type: 'select',
                options: ['A', 'AAAA', 'CNAME', 'MX', 'NAPTR', 'PTR', 'TXT', 'SRV']
            },
            {
                name: 'name',
                label: 'name',
                type: 'text',
            },
            {
                name: 'mailExchanger',
                label: 'mailExchanger',
                type: 'text',
            },
            {
                name: 'preference',
                label: 'preference',
                type: 'number',
            },
            {
                name: 'canonical',
                label: 'canonical',
                type: 'text',
            },
            {
                name: 'ipv4addr',
                label: 'ipv4addr',
                type: 'text',
            },
            {
                name: 'ipv6addr',
                label: 'ipv6addr',
                type: 'text',
            },
            {
                name: 'override ttl',
                label: 'override ttl',
                type: 'radio',
                options: ['Yes', 'No']
            },
            {
                name: 'ttl',
                label: 'ttl',
                type: 'number',
            },
            {
                name: 'order',
                label: 'order',
                type: 'number',
            },
            {
                name: 'port',
                label: 'port',
                type: 'number',
            },
            {
                name: 'priority',
                label: 'priority',
                type: 'number',
            },
            {
                name: 'weight',
                label: 'weight',
                type: 'number',
            },
            {
                name: 'target',
                label: 'target',
                type: 'text',
            },
            {
                name: 'replacement',
                label: 'replacement',
                type: 'text',
            },
            {
                name: 'ptrdname',
                label: 'ptrdname',
                type: 'text',
            },
            {
                name: 'text',
                label: 'text',
                type: 'text',
            },
        ]
    },
    zoneRequest: {
        caption: 'Zone Request',
        conditions: {},
        fields: [
            {
                name: 'zone',
                label: 'Zone',
                type: 'text',
            },
            {
                name: 'zoneType',
                label: 'Zone Type',
                type: 'select',
                options: ['master', 'slave']
            },
            {
                name: 'notes',
                label: 'Notes',
                type: 'textarea',
            },
        ]
    }
}