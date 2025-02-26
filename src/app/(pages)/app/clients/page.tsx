import { Metadata } from 'next'
import { Search, User } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/data-table'

import { columns } from './columns'

export const metadata: Metadata = {
  title: 'Clientes | TrampoSync',
}

const clients = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@example.com',
    phone: '41 998978780',
    totalReceived: '2023-05-15',
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@example.com',
    phone: '41 998978780',
    totalReceived: '2023-03-20',
  },
]

export default function Clients() {
  return (
    <div className="p-20 m-auto px-16 w-full max-w-6xl">
      <header>
        <h2 className="text-xl text-primary-foreground text-left font-semibold">
          Seus clientes
          <span className="text-primary">.</span>
        </h2>

        <p className="text-secondary-foreground font-medium">
          Acompanhe os seus clientes
        </p>
      </header>

      <main className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-8">
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground" />

            <Input
              type="search"
              placeholder="Buscar cliente"
              className="p-6 pl-12 text-popover-foreground font-medium bg-popover border-0"
            />
          </div>

          <Button variant="secondary">
            <User className="text-primary h-6 w-6" />
            Adicionar cliente
          </Button>
        </div>

        <DataTable data={clients} columns={columns} />
      </main>
    </div>
  )
}
