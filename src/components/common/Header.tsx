import Link from 'next/link'
import Navbar, { DesktopNavbar, MobileNavBar } from './NavBar'
import Image from 'next/image'
import MobileMenuButton from './MobileMenuButton'
import { useEffect, useRef } from 'react'
import Container from '../structure/Container'

const Header = (props) => {
  
  const headerContent = {
    ctaName: props.homeSettings.bookBtnContent,
    ctaUrl: props.siteSettings.demoBtnUrl,
    loginUrl: props.siteSettings.loginBtnUrl,
  }

  const headerRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const nextSection = document.querySelector('#hero-section')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          header.classList.remove('bg-black')
          header.classList.add('backdrop-blur-sm')
        } else {
          header.classList.remove('backdrop-blur-sm')
          header.classList.add('bg-black')
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the next section is visible
    )

    if (nextSection) {
      observer.observe(nextSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full py-4 backdrop-blur-sm z-[999] transition-colors duration-300  flex flex-col items-center "
    >
      <Container className="justify-between">
        <div className="flex flex-row  xl:px-0">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg">
              <Image
                src="/AceDSN.png"
                width={135}
                height={26}
                alt="OSDental"
              />
            </span>
          </Link>
        </div>
        <MobileMenuButton className="lg:hidden p-2 border-0 focus:outline-none text-white" />
        <DesktopNavbar
          ctaUrl={headerContent?.ctaUrl}
          ctaName={headerContent?.ctaName}
          loginUrl={headerContent?.loginUrl}
        />
      </Container>
      <MobileNavBar
        ctaUrl={headerContent?.ctaUrl}
        ctaName={headerContent?.ctaName}
        loginUrl={headerContent?.loginUrl}
      />
    </header>
  )
}

export default Header
