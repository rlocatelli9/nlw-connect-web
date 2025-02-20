import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { ArrowRight, Mail, Radio, User } from 'lucide-react'
import Image from 'next/image'
import Logo from '../assets/logo.svg'

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col justify-center gap-16">
      <div className="flex flex-col gap-8 items-center md:items-start">
        <Image src={Logo} alt="devstage" width={108.5} height={30} />

        <h1 className="text-4xl text-center leading-none font-heading font-medium flex flex-col md:text-7xl md:text-left">
          <span className="text-blue">CodeCraft</span>
          Summit 2025
        </h1>
      </div>
      <div className="flex gap-5 items-stretch flex-col md:flex-row">
        <div className="flex-1 bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
              Sobre o evento
            </h2>
            <span className="text-purple font-semibold text-xs flex items-center gap-2">
              <Radio className="size-5" />
              Ao vivo
            </span>
          </div>
          <p className="text-gray-300 liading-relaxed text-sm md:text-base">
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por
            criar soluções inovadoras e compartilhar conhecimento. Vamos
            mergulhar nas tendências mais recentes em desenvolvimento de
            software, arquitetura de sistemas e tecnologias emergentes, com
            palestras, workshops e hackathons.
            <br />
            <br />
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito
          </p>
        </div>
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
      </div>
    </div>
  )
}
