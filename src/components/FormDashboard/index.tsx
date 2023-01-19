import { IInputKeys } from '../Input/interfaces'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from './validator'
import { Input } from '../Input'

export const FormDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputKeys>({
    resolver: yupResolver(formSchema),
  })

  return (
    <form>
      <Input
        id="saleValue"
        label="Informe o valor da venda"
        type="text"
        register={register}
        errors={errors.saleValue?.message}
        required
      />
      <Input
        id="installments"
        label="Em quantas parcelas"
        type="text"
        register={register}
        errors={errors.installments?.message}
        required
      />
      <Input
        id="mdr"
        label="Informe o percentual de MDR"
        type="text"
        register={register}
        errors={errors.mdr?.message}
        required
      />
    </form>
  )
}
