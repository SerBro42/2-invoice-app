import { Invoice } from "../models/invoice";

export const invoiceData: Invoice = {
  id: 1,
  name: 'Componentes de PC',
  client: {
    name: 'Pepe',
    lastName: 'Larrana',
    address: {
      country: 'Spain',
      city: 'Orxeta',
      street: 'Federico Garcia Lorca',
      number: 13
    }
  },
  company: {
    name: 'New Age',
    fiscalNumber: 42424242
  },
  items: [
    {
      id:1,
      product: 'Cpu Intel i9',
      price: 599,
      quantity: 1
    },
    {
      id:2,
      product: 'Corsair Teclado Mecanico',
      price: 399,
      quantity: 1
    },
    {
      id:3,
      product: 'Monitor Asus',
      price: 899,
      quantity: 1
    }
  ]
}
