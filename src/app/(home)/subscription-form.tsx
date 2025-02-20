import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { ArrowRight, Mail, User } from 'lucide-react'

export default function SubscriptionForm() {
  return (
    <form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <Input.Root>
          <Input.Icon>
            <User />
          </Input.Icon>
          <Input.Field type="text" placeholder="Nome completo" />
        </Input.Root>
        <Input.Root>
          <Input.Icon>
            <Mail />
          </Input.Icon>
          <Input.Field type="email" placeholder="Seu melhor e-mail" />
        </Input.Root>
      </div>

      <Button.Default type="submit">
        Confirmar
        <ArrowRight />
      </Button.Default>
    </form>
  )
}
