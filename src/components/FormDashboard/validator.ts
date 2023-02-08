import * as yup from "yup";

export const formSchema = yup.object().shape({
  amount: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[1-9]\d{0,2}(\.\d{3})*,\d{2}$/, "Valor inválido"),
  installments: yup
    .number()
    .max(12, "Máximo de 12 parcelas")
    .typeError("Campo obrigatório"),
  mdr: yup.number().positive().typeError("Campo obrigatório"),
});
