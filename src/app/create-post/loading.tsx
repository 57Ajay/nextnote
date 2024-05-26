
export default function Loading() {
    return (
      <div>
          <div className="text-center text-2xl font-bold">Loading......</div>
          <div className="flex items-center justify-center h-screen bg-zinc-100">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-500"></div>
          </div>
      </div>
    )
  }
  