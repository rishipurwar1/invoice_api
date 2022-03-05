# Invoice API

## Base URL: [https://invoicesapi.herokuapp.com](https://invoicesapi.herokuapp.com)

### Endpoints:

- To GET all the invoices: [/invoices](https://invoicesapi.herokuapp.com/invoices)
- To POST a new invoice: [/invoices](https://invoicesapi.herokuapp.com/invoices)
- To DELETE a new invoice: [/invoices/:id](https://invoicesapi.herokuapp.com/invoices)
- To UPDATE a new invoice: [/invoices/:id](https://invoicesapi.herokuapp.com/invoices/)
- Query the invoices using **status** parameter: [/invoices?status=paid](https://invoicesapi.herokuapp.com/invoices?status=paid)

> Note: **status** parameter can be any of the following values: [paid](https://invoicesapi.herokuapp.com/api/invoices?status=paid), [pending](https://invoicesapi.herokuapp.com/api/invoices?status=pending) and [draft](https://invoicesapi.herokuapp.com/api/invoices?status=draft)

### Tech Stack:

NodeJs, ExpressJs and MongoDB
