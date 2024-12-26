import Link from "next/link"
import { PawPrint } from 'lucide-react'
import { Button } from "@/components/ui/button"


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <PawPrint className="h-6 w-6 text-purple-400" />
          <span className="text-xl font-bold">PawPerfect</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Services
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Contact
          </Link>
          <Link href="/insights" className="text-sm font-medium hover:text-purple-400 transition-colors">
            Insights
          </Link>
          <Link href="/book">
            <Button variant="secondary" className="bg-purple-600 hover:bg-purple-700 transition-colors">
              Book Now
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

