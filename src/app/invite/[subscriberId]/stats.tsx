import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '@/services/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export type StatsProps = {
  subscriberId: string
}

export default async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId)
  const { count: inviteCount } = await getSubscriberInviteCount(subscriberId)
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscriberId)
  return (
    <div className="grid gap-3 grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {accessCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>
        <MousePointerClick className="absolute top-3 left-3 size-5 text-purple" />
      </div>
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {inviteCount}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>
        <BadgeCheck className="absolute top-3 left-3 size-5 text-purple" />
      </div>
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          {rankingPosition ? `${rankingPosition}º` : '-'}
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posições no ranking
        </span>
        <Medal className="absolute top-3 left-3 size-5 text-purple" />
      </div>
    </div>
  )
}
