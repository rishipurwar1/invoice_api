// routes/api/invoices.js

const express = require('express');
const router = express.Router();

// Load Invoice model
const Invoice = require('../../models/Invoice');

// @route GET api/invoices
// @description Get all invoices
// @access Public
router.get('/', (req, res) => {
    const { status } = req.query;
    if (status) {
        Invoice.find({ status })
            .then(invoices => res.json(invoices))
            .catch(err => res.status(404).json({ noinvoicesfound: 'No Invoices found' }));
    } else {
        Invoice.find()
            .then(invoices => res.json(invoices))
            .catch(err => res.status(404).json({ noinvoicesfound: 'No Invoices found' }));
    }
});

// @route GET api/invoices/:id
// @description Get single invoice by id
// @access Public
router.get('/:id', (req, res) => {
    Invoice.findById(req.params.id)
        .then(invoice => res.json(invoice))
        .catch(err => res.status(404).json({ noinvoicefound: 'No Invoice found' }));
});

// @route GET api/invoices
// @description add/save invoice
// @access Private
router.post('/', (req, res) => {
    Invoice.create(req.body)
        .then(invoice => res.json({ msg: 'Invoice added successfully' }))
        .catch(err => res.status(400).json({ error: err }));
});

// @route GET api/invoices/:id
// @description Update invoice
// @access Private
router.put('/:id', (req, res) => {
    Invoice.findByIdAndUpdate(req.params.id, req.body)
        .then(invoice => res.json({ msg: 'Updated successfully' }))
        .catch(err =>
            res.status(400).json({ error: 'Unable to update the Database' })
        );
});

// @route GET api/invoices/:id
// @description Delete invoice by id
// @access Private
router.delete('/:id', (req, res) => {
    Invoice.findByIdAndRemove(req.params.id, req.body)
        .then(invoice => res.json({ mgs: 'Invoice entry deleted successfully' }))
        .catch(err => res.status(404).json({ error: 'No such an Invoice' }));
});

module.exports = router;