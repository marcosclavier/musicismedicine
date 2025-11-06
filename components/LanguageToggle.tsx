'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { FaGlobe } from 'react-icons/fa'

interface LanguageToggleProps {
  isScrolled?: boolean
}

export default function LanguageToggle({ isScrolled = false }: LanguageToggleProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '')
    // Navigate to the new locale
    router.push(`/${newLocale}${pathWithoutLocale || ''}`)
  }

  return (
    <div className={`flex items-center gap-2 transition-colors duration-300 ${
      isScrolled ? 'text-text-primary' : 'text-white'
    }`}>
      <FaGlobe className="text-lg" />
      <button
        onClick={() => switchLocale(locale === 'en' ? 'fr' : 'en')}
        className="font-medium hover:text-accent-purple transition-colors duration-300"
        aria-label={locale === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
      >
        {locale === 'en' ? 'FR' : 'EN'}
      </button>
    </div>
  )
}
