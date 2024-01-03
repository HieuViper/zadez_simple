import Header from '../../components/Header'
import Footer from '../../components/Footer'
// import './globals.css'
import { Inter } from 'next/font/google'
import { RootStyleRegistry } from '../../library/RootStyleRegistry'
import Loading from './loading'
import { Suspense } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'ZadezVn',
    description: 'Create By Zadez',
}

export default function RootLayout({ children, params }) {
    return (
        <html >
            <body className={inter.className}>
                <Header />
                {/* <RootStyleRegistry> */}
                <Suspense fallback={<Loading />}>{children}</Suspense>
                {/* </RootStyleRegistry> */}
                <Footer />
            </body>
        </html>
    )
}