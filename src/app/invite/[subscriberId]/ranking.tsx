import Image from 'next/image'

import MedalCooper from '@/assets/medal-cooper.svg'
import MedalGold from '@/assets/medal-gold.svg'
import MedalSilver from '@/assets/medal-silver.svg'
export default function Ranking() {
  return (
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
  )
}
