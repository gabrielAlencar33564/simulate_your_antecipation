import * as yup from 'yup'
// saleValue: string
//   installments: string
//   mdr: string

export const formSchema = yup.object().shape({
  saleValue: yup.string().required(),
  installments: yup.number().required(),
  mdr: yup.number(),
})
