import { useRouter } from 'next/router'
import i18nextConfig from '../next-i18next.config'
import Emoji from './Emoji';

export type LanguageToggleProps = {
    className: string
}

export default function LanguageToggle(props: LanguageToggleProps) {
    const router = useRouter()

    const languageMap: Record<string, string> = {
        en: '🇮🇪',
        de: '🇩🇪',
        no: '🇳🇴'
    }

    const changeLanguage = (language: string) => {
        router.push(router.pathname, router.pathname, { locale: language })
    }

    const locales = i18nextConfig.i18n.locales || []

    return <div className={`flex flex-row justify-around ${props.className}`}>
        {locales.map(lng => {
            return <div className='m-auto cursor-pointer' key={lng} onClick={() => changeLanguage(lng)}>
                <Emoji symbol={languageMap[lng]} />
            </div>
        })}
    </div>
}