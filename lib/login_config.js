if (Meteor.isClient) {
    Accounts.ui.config({
        requestPermissions: {},
        extraSignupFields: [{
            fieldName: 'first-name',
            fieldLabel: 'First name',
            inputType: 'text',
            visible: true,
            validate: function(value, errorFunction) {
                if (!value) {
                    errorFunction("Please write your first name");
                    return false;
                } else {
                    return true;
                }
            }
        }, {
            fieldName: 'last-name',
            fieldLabel: 'Last name',
            inputType: 'text',
            visible: true,
        }, {
            fieldName: 'country',
            fieldLabel: 'Country',
            inputType: 'select',
            showFieldLabel: true,
            empty: 'Please select your country of residence',
            data: [{
                id: 1,
                label: 'United States',
                value: 'us'
            }, {
                id: 2,
                label: 'Russia',
                value: 'ru',
            }, {
                id: 3,
                label: 'Belarus',
                value: 'by',
            }],
            visible: true
        }
        ]
    });
}