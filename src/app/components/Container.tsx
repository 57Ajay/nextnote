
export default function Container({ children } : { children: React.ReactNode }) {
  return (
    <div className="max-w-[1080px] mx-auto px-4 min-h-screen shadow-lg bg-zinc-100">
        {children}
    </div>
  )
}
