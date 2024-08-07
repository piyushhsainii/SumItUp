/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/YCm9CvFcDpV
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { Cabin } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

cabin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function page1() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <YoutubeIcon className="h-6 w-6" />
          <span className="sr-only">Video Summarizer</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Summarize YouTube Videos with AI
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our AI-powered video summarizer extracts the key points from any YouTube video, saving you time and
                    effort.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Try it Now
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Summarize Any YouTube Video</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simply enter the URL of any YouTube video, and our AI-powered summarizer will generate a concise
                  summary for you.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex gap-2">
                  <Input type="text" placeholder="Enter YouTube video URL" className="max-w-lg flex-1" />
                  <Button type="submit">Summarize</Button>
                </form>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Key Features</h3>
                  <ul className="grid gap-4 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      Accurate video summaries
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      Customizable summary length
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      Easy to share summaries
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-primary" />
                      Integrates with your workflow
                    </li>
                  </ul>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from some of the businesses and individuals who have used our video summarizer to save time and
                  improve their productivity.
                </p>
              </div>
              <div className="grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                <Card className="flex flex-col justify-between gap-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div>
                        <h4 className="text-lg font-medium">Jane Doe</h4>
                        <p className="text-sm text-muted-foreground">Acme Inc</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The video summarizer has been a game-changer for our team. We save so much time and can focus on
                      the key insights."
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Link href="#" prefetch={false}>
                      Read more
                    </Link>
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </Card>
                <Card className="flex flex-col justify-between gap-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div>
                        <h4 className="text-lg font-medium">John Smith</h4>
                        <p className="text-sm text-muted-foreground">Startup Founder</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "As a busy entrepreneur, the video summarizer has been a lifesaver. I can quickly get the key
                      points from any video."
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Link href="#" prefetch={false}>
                      Read more
                    </Link>
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </Card>
                <Card className="flex flex-col justify-between gap-4 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div>
                        <h4 className="text-lg font-medium">Sarah Lee</h4>
                        <p className="text-sm text-muted-foreground">Marketing Manager</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      "The video summarizer has been a game-changer for our marketing team. We can quickly get the key
                      insights from industry videos."
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary">
                    <Link href="#" prefetch={false}>
                      Read more
                    </Link>
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Leading Brands</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our video summarizer is used by some of the top companies and individuals in the world.
                </p>
              </div>
              <div className="grid w-full max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
                <img
                  src="/placeholder.svg"
                  width="140"
                  height="70"
                  alt="Logo"
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Video Summarizer. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function CheckIcon(props: any) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function YoutubeIcon(props: any) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
