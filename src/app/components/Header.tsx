'use client'
import Image from 'next/image'
import Designer from '/src/app/components/images/Designer.jpeg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
    { name: 'Create Post', href: '/create-post' },
    { name: 'Contact', href: '/contact' },
]
export default function Header() {
    const pathname = usePathname();
  return (
    <header className='flex justify-between items-center py-4 px-6 border-b-2 '>

        <Link href='/'>
            <Image src={Designer} alt='Designer' width={35} height={35} className='rounded-full w-[35px] h-[35px]' />
        </Link>

        <nav className='flex gap-4'>
            {navLinks.map((link) => (
                <Link className={`${pathname === link.href ? "text-zinc-900" : "text-zinc-400"}`} key={link.name
                } href={link.href}>
                    {link.name}
                </Link>
            ))}
        </nav>

    </header>
  )
}
