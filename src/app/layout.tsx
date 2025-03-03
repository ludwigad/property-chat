import './globals.css'

export const metadata = {
  title: 'Property Chat',
  description: 'AI-Powered Realtor Assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 