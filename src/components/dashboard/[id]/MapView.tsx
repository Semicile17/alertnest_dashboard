import { Card, CardContent } from '@/components/ui/card'

const MapView = () => (
  <Card className="w-2/5 h-6/7 overflow-hidden rounded-lg fixed">
    <CardContent className="p-0 h-full">
      <iframe
        className="w-full h-full"
        src="https://www.openstreetmap.org/export/embed.html?bbox=78.3%2C29.2%2C79.2%2C30.2&layer=mapnik"
        frameBorder="0"
        allowFullScreen
      />
    </CardContent>
  </Card>
)

export default MapView
