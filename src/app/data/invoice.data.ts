import { Invoice } from "../models/invoice";

//In Angular, it is much easier to export a TS class than a JSON, hence we turned this JSON into TS
export const invoiceData: any = {
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
      price: 299,
      quantity: 3
    }
  ]
}
