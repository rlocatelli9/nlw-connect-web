'use client'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Copy, Link } from 'lucide-react'

export interface InviteLinkInputProps {
  inviteLink: string
}

export default function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <Input.Root>
      <Input.Icon>
        <Link className="size-5" />
      </Input.Icon>
      <Input.Field type="text" defaultValue={inviteLink} readOnly />
      <Button.Icon className="-mr-2" onClick={handleCopy}>
        <Copy className="size-5" />
      </Button.Icon>
    </Input.Root>
  )
}
