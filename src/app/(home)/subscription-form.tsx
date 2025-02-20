'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subscriptionSchema = z.object({
  name: z.string().min(2, 'Digite seu nome completo'), // required
  email: z.string().email('Digite um e-mail válido'), // required and email
})

export type SubscriptionFormProps = z.infer<typeof subscriptionSchema>

export default function SubscriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscriptionFormProps>({
    resolver: zodResolver(subscriptionSchema),
  })

  function onSubscribe(data: SubscriptionFormProps) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <Input.Root error={!!errors.name}>
            <Input.Icon>
              <User />
            </Input.Icon>
            <Input.Field
              type="text"
              id="name"
              placeholder="Informe o nome completo"
              {...register('name')}
            />
          </Input.Root>
          {errors.name ? (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Input.Root error={!!errors.email}>
            <Input.Icon>
              <Mail />
            </Input.Icon>
            <Input.Field
              type="email"
              id="email"
              placeholder="Insira o e-mail"
              {...register('email')}
            />
          </Input.Root>
          {errors.email ? (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <Button.Default type="submit">
        Confirmar
        <ArrowRight />
      </Button.Default>
    </form>
  )
}
