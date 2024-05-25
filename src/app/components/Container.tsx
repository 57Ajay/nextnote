
export default function Container({ children } : { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px] mx-auto px-4 ">
        {children}
    </div>
  )
}
