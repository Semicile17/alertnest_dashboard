'use client'

import {
  Dialog, DialogTrigger, DialogContent, DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Info, PlusCircle } from 'lucide-react'
import { useState } from 'react'

const availableOperators = [
  { name: 'Rohit Mahant', phone: '9546745645' },
  { name: 'Kamal Singh', phone: '9456745645' },
  { name: 'Deepak Kumar', phone: '9856745645' }
]

const OperatorSelector = () => {
  const [selectedOperator, setSelectedOperator] = useState<{ name: string, phone: string } | null>(null)

  return (
    <div className="space-y-2 font-[family-name:var(--font-urbanist)] ">
      <Label htmlFor="operator">Assigned Operator</Label>
      <div className="flex items-center gap-2">
        <Input id="operator" readOnly value={selectedOperator?.name ?? 'None'} className="bg-green-100 w-2/5 cursor-not-allowed " />
        {selectedOperator && (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Info className="w-5 h-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className='font-[family-name:var(--font-urbanist)] '>
              <DialogTitle>{selectedOperator.name}</DialogTitle>
              <p className="text-sm text-gray-500 mt-2">{selectedOperator.phone}</p>
            </DialogContent>
          </Dialog>
        )}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className='cursor-pointer'><PlusCircle className='text-[#104e64]'/></Button>
          </DialogTrigger>
          <DialogContent className='font-[family-name:var(--font-urbanist)] border-none rounded-sm bg-black/70 backdrop-blur-xl'>
            <DialogTitle className='text-white'>Select Operator</DialogTitle>
            <div className="space-y-2 mt-4">
              {availableOperators.map((op, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="w-full text-white bg-black/30 justify-between"
                  onClick={() => setSelectedOperator(op)}
                >
                  {op.name}
                  <span>✔</span>
                </Button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default OperatorSelector
