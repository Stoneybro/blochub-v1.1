import './globals.css'
import localFont from 'next/font/local'
import Nav from './components/Navbar'

const roobert = localFont({
  src: [
    {
      path: '../fonts/Roobert-Regular.otf',
      weight: '400',
      style: 'normal',
      
    },
    {
      path: '../fonts/Roobert-Light.otf',
      weight: '300',
      style: 'light',
      
    },
    {
      path: '../fonts/Roobert-Bold.otf',
      weight: '700',
      style: 'bold',
      
    },
    {
      path: '../fonts/Roobert-Heavy.otf',
      weight: '900',
      style: 'heavy',
      
    },
    {
      path: '../fonts/Roobert-SemiBold.otf',
      weight: '600',
      style: 'semibold',
      
    },
    {
      path: '../fonts/Roobert-Medium.otf',
      weight: '500',
      style: 'medium',
      
    },

  ],
})
export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={`${roobert.className}`}>
    
        {children}


        </body>
    </html>
  )
}
