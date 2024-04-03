
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 px-4 sm:h-20 md:px-6">
        <Link className="inline-flex items-center space-x-2 text-sm font-semibold lg:space-x-4" href="#">
          <FlagIcon className="h-6 w-6" />
          <span>Kaizen Logistics</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4 lg:space-x-6">
          <Link className="text-sm tracking-wide font-medium underline-2 [&:hover]:underline-0" href="#">
            Documentation
          </Link>
          <Link className="text-sm tracking-wide font-medium underline-2 [&:hover]:underline-0" href="#">
            Support
          </Link>
          <Link className="text-sm tracking-wide font-medium underline-2 [&:hover]:underline-0" href="#">
            Pricing
          </Link>
          <Button variant="outline">Login</Button>
        </nav>
      </header>
      <main className="flex-1 flex flex-col justify-center w-full text-center p-4 md:p-6 lg:p-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter lg:text-6xl xl:text-[80px] 2xl:text-7xl/none">
            Modernize your B2B transactions
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The cutting-edge EDI to XML conversion platform. Convert your documents with ease and speed.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row mx-auto justify-center">
            <Link
              className="inline-flex text-white h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm gap-1 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Sign up for free
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow gap-1 transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
