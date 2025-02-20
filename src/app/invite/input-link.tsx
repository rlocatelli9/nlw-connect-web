import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Copy, Link } from 'lucide-react'

export default function InputLink() {
  return (
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
  )
}
