import { createI18n } from 'vue-i18n'

function loadLocaleMessages() {
    const locales = import.meta.globEager('./locales/*.json')
    const messages = {}
    const keysArr = Object.keys(locales)
    keysArr && keysArr.forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
        const locale = matched[1]
        messages[locale] = locales[key]
        }
    })
    return messages
}

export default createI18n({
    locale: import.meta.env.VITE_DEFAULT_LANG,
    fallbackLocale: import.meta.env.VITE_FALLBACKLOCALE,
    messages: loadLocaleMessages(),
    enableInSFC: false,
    legacy: false
})
