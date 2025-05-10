import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const ProfileCard = () => (
  <div className="flex items-center space-x-4  font-[family-name:var(--font-urbanist)]">
    <Avatar className="w-20 h-20">
      <AvatarImage src="/child-profile.jpg" alt="Profile" />
      <AvatarFallback>IM</AvatarFallback>
    </Avatar>
    <div className="space-y-1 text-sm mt-1">
      <p className="font-semibold">Indumati Mishra</p>
      <p>Device Id : <span className='font-bold text-[#104e64]'>7ry4834bdf</span></p>
      <p>Last seen : <span className='font-semibold text-[#104e64]'>Ghurdauri</span></p>
      <p>Emergency Type : <span className='font-semibold text-[#104e64]'>via Confirmation</span></p>
    </div>
  </div>
)

export default ProfileCard
