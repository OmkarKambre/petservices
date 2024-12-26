import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'
import Link from "next/link"

export default function TechnicalOverviewPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">PawPerfect: Technical Overview</h1>
      
      {/* GitHub Repository Link */}
      <Card className="bg-purple-900/20 border-purple-800 mb-8">
        <CardContent className="flex items-center justify-between p-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white">View Source Code</h2>
            <p className="text-purple-200">
              Explore the complete source code and implementation details on GitHub
            </p>
          </div>
          <Link 
            href="https://github.com/OmkarKambre/petservices" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </Link>
        </CardContent>
      </Card>
      
      <Card className="bg-purple-900/20 border-purple-800 mb-8">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Project Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-white">
            The PawPerfect project is built using Next.js 15.1 and React 19, leveraging the latest features and best practices in web development. Here&apos;s an overview of the key technical aspects:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-purple-200">
            <li>Next.js 15.1 App Router for efficient, file-based routing</li>
            <li>React Server Components for improved performance and SEO</li>
            <li>Tailwind CSS for responsive and customizable styling</li>
            <li>Shadcn UI components for consistent and accessible UI elements</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-purple-900/20 border-purple-800 mb-8">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Server Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-white">
            We&apos;ve implemented Server Actions, a powerful feature introduced in Next.js 13 and enhanced in later versions. Here are some examples of how we&apos;ve implemented Server Actions:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-purple-200">
            <li>Booking form submission in <code className="text-purple-400">app/actions.ts</code></li>
            <li>Newsletter subscription in the site footer</li>
            <li>Contact form submission on the Contact page</li>
          </ul>
          <p className="mt-4 text-white">
            Server Actions allow us to handle form submissions and data mutations server-side, improving security and reducing client-side JavaScript.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-purple-900/20 border-purple-800 mb-8">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Next.js 15.1 and React 19 Features</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-white">
            While our project doesn&apos;t explicitly use all new features, we&apos;re set up to take advantage of:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-purple-200">
            <li>Improved performance with the Rust-based Turbopack</li>
            <li>Enhanced Server Actions with better error handling</li>
            <li>Partial Prerendering (experimental) for faster initial page loads</li>
            <li>React 19&apos;s automatic batching for improved performance</li>
            <li>New hooks like useFormStatus for better form UX</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-purple-900/20 border-purple-800">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Key Learnings</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2 text-purple-200">
            <li>Effective use of Server and Client Components for optimal performance</li>
            <li>Implementing Server Actions for secure and efficient data handling</li>
            <li>Leveraging the App Router for intuitive project structure</li>
            <li>Balancing aesthetics and functionality with Tailwind CSS and Shadcn UI</li>
            <li>Importance of accessibility in modern web development</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
