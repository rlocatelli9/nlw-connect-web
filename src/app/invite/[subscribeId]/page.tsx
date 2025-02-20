import Ranking from './ranking'

import Logo from '@/assets/logo.svg'
import Image from 'next/image'
import InviteLinkInput from './invite-link-input'
import Stats from './stats'

export type InvitePageProps = {
  params: Promise<{
    subscribeId: string
  }>
}

export default async function InvitePage({ params }: InvitePageProps) {
  const { subscribeId } = await params
  const inviteLink = `http://localhost:3333/invites/${subscribeId}`

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

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats />
        </div>
      </div>

      <Ranking />
    </div>
  )
}
