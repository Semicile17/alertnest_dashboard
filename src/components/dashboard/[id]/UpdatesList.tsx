import { Card } from '@/components/ui/card'

const UpdatesList = () => (
  <div className='font-[family-name:var(--font-urbanist)] pb-6'>
    <h2 className="text-sm font-semibold mb-2 ">UPDATES</h2>
    <div className="space-y-2">
      {[1, 2, 3,4,5,6,7,8].map(i => (
        <Card key={i} className="h-10 bg-muted w-full" />
      ))}
    </div>
  </div>
)

export default UpdatesList
