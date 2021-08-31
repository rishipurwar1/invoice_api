// models/Book.js

const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    "id": {
        "type": "String"
    },
    "paymentDue": {
        "type": "Date"
    },
    "description": {
        "type": "String"
    },
    "paymentTerms": {
        "type": "Number"
    },
    "clientName": {
        "type": "String"
    },
    "clientEmail": {
        "type": "String"
    },
    "status": {
        "type": "String"
    },
    "senderAddress": {
        "street": {
            "type": "String"
        },
        "city": {
            "type": "String"
        },
        "postCode": {
            "type": "String"
        },
        "country": {
            "type": "String"
        }
    },
    "clientAddress": {
        "street": {
            "type": "String"
        },
        "city": {
            "type": "String"
        },
        "postCode": {
            "type": "String"
        },
        "country": {
            "type": "String"
        }
    },
    "items": {
        "type": [
            "Mixed"
        ]
    },
    "total": {
        "type": "Number"
    }
});

InvoiceSchema.set('timestamps', true);

module.exports = Invoice = mongoose.model('invoice', InvoiceSchema);