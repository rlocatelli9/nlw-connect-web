import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { BadgeCheck, Copy, Link, Medal, MousePointerClick } from 'lucide-react'
import Image from 'next/image'
import Logo from '../../assets/logo.svg'

import MedalCooper from '../../assets/medal-cooper.svg'
import MedalGold from '../../assets/medal-gold.svg'
import MedalSilver from '../../assets/medal-silver.svg'
export default function InvitePage() {
  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={Logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="text-4xl font-semibold font-heading text-gray-100 leading-none">
            Inscrição confirmada
          </h1>
          <p className="text-gray-300 text-sm md:text-base">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
              Indique e ganhe
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <Input.Root>
            <Input.Icon>
              <Link className="size-5" />
            </Input.Icon>
            <Input.Field
              type="text"
              defaultValue="https://devstage.com.br/invite/123456"
              readOnly
            />
            <Button.Icon className="-mr-2">
              <Copy className="size-5" />
            </Button.Icon>
          </Input.Root>

          <div className="grid gap-3 grid-cols-3">
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1042
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Acessos ao link
              </span>
              <MousePointerClick className="absolute top-3 left-3 size-5 text-purple" />
            </div>
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                1042
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Inscrições feitas
              </span>
              <BadgeCheck className="absolute top-3 left-3 size-5 text-purple" />
            </div>
            <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                3º
              </span>
              <span className="text-sm text-gray-300 leading-none text-center">
                Posições no ranking
              </span>
              <Medal className="absolute top-3 left-3 size-5 text-purple" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 w-full max-w-[440px]">
        <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
          Ranking de indicações
        </h2>
        <div className="space-y-4">
          <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">1º</span> | Robson Locatelli
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              3000
            </span>
            <Image
              src={MedalGold}
              alt="medal-gold"
              className="absolute top-0 right-8"
            />
          </div>
          <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">2º</span> | Robson Locatelli
            </span>
            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              2000
            </span>
            <Image
              src={MedalSilver}
              alt="medal-gold"
              className="absolute top-0 right-8"
            />
          </div>
          <div className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6">
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">3º</span> | Robson Locatelli
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1042
            </span>
            <Image
              src={MedalCooper}
              alt="medal-gold"
              className="absolute top-0 right-8"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
