import Link from "next/link";

export default function Contact() {
  return (
    <div className="max-w-[1080px] mx-auto px-4 min-h-screen shadow-lg bg-zinc-100 text-center">
      <h1 className="text-3xl font-bold mb-5">Contact Details</h1>
      <div className="flex flex-col gap-4">
        <div className="text-zinc-700 font-medium hover:underline cursor-pointer pt-2">Email: 57ajay.u@gmail.com</div>
        <div className="text-zinc-700 font-medium">
          <Link href="https://github.com/57ajay" className="hover:underline">
            GitHub: Ajay Upadhyay
          </Link>
        </div>
        <div className="text-zinc-700 font-medium">
          <Link href="https://www.linkedin.com/in/upajay" className="hover:underline">
            LinkedIn: Ajay Upadhyay
          </Link>
        </div>
          <div className="text-zinc-700 font-medium">
            <Link href="https://x.com/57ajy" className="hover:underline">X/Twitter: Ajay Upadhyay
            </Link>
          </div>
          <div className="text-zinc-700 font-medium">
            <Link href="https://instagram.com/57aja.y" className="hover:underline">Instagram: Ajay Upadhyay
            </Link>
          </div>
          <div className="text-zinc-700 font-medium">
            <Link href="https://threads.com/57aja.y" className="hover:underline">Threads: Ajay Upadhyay
            </Link>
          </div>
        </div>
      </div>
  )
}
