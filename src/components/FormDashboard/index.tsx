import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from './validator'
import { IInputKeys } from '../../context/interfaces'
import { useAntecipationContext } from '../../context'
import { Input } from '../Input'

export const FormDashboard = () => {
  const { postAntecipation } = useAntecipationContext()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputKeys>({
    resolver: yupResolver(formSchema),
  })

  return (
    <form onChange={handleSubmit(postAntecipation)}>
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
    </form>
  )
}
