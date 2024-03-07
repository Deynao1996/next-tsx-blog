import { Download, MessageSquare, MonitorSmartphone } from 'lucide-react'

export default function Stats() {
  return (
    <div className="my-8 flex flex-wrap items-center gap-6">
      <div className="flex h-20 flex-1 basis-16 min-w-[150px] flex-col items-center justify-center rounded-md border border-gray-200 transition-colors duration-100 ease-in-out text-foreground">
        <div className="flex flex-row items-center justify-center gap-4">
          <MessageSquare />
          <span className="font-bold text-inherit"> 4.6K </span>
        </div>

        <div className="mt-2 text-sm ">Comments</div>
      </div>

      <div className="flex h-20 flex-1 basis-16 min-w-[150px] flex-col items-center justify-center rounded-md border border-gray-200 transition-colors duration-100 ease-in-out">
        <div className="flex flex-row items-center justify-center gap-4">
          <MonitorSmartphone />

          <span className="font-bold"> 45 </span>
        </div>

        <div className="mt-2 text-sm">Projects</div>
      </div>

      <div className="flex h-20 flex-1 basis-16 min-w-[150px] flex-col items-center justify-center rounded-md border border-gray-200 transition-colors duration-100 ease-in-out">
        <div className="flex flex-row items-center justify-center gap-4">
          <Download />
          <span className="font-bold"> 120K </span>
        </div>

        <div className="mt-2 text-sm">Downloads</div>
      </div>
    </div>
  )
}
