import { IInputKeys } from '../../context/interfaces'
import { useForm, SubmitHandler } from 'react-hook-form'
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

  const onSubmit: SubmitHandler<IInputKeys> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="amount"
        label="Informe o valor da venda"
        type="text"
        register={register}
        errors={errors.amount?.message}
        required
      />
      <Input
        id="installments"
        label="Em quantas parcelas"
        type="number"
        register={register}
        errors={errors.installments?.message}
        required
      />
      <Input
        id="mdr"
        label="Informe o percentual de MDR"
        type="number"
        register={register}
        errors={errors.mdr?.message}
        required
      />

      <button type="submit">enter</button>
    </form>
  )
}
