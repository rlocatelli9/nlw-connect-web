import Image from 'next/image'

import { MEDAL_RANKINGS } from '@/constants'
import { getRanking } from '@/services/api'

export default async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="space-y-5 w-full max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        {ranking.map((item, index) => (
          <div
            key={item.id}
            className="relative flex flex-col justify-center gap-3 rounded-xl bg-gray-700 border border-gray-600 p-6"
          >
            <span className="text-sm text-gray-300 leading-none">
              <span className="font-semibold">{index + 1}º</span> | {item.name}
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              {item.score}
            </span>
            <Image
              src={MEDAL_RANKINGS[index]}
              alt="medal-gold"
              className="absolute top-0 right-8"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
