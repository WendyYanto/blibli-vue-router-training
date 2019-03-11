import Vuei18n from 'vue-i18n'

import idLocale from '@/i18n/locales/id'
import enLocale from '@/i18n/locales/en'
import Vue from 'vue'

Vue.use(Vuei18n)

const messages = {
  id: idLocale,
  en: enLocale
}

const i18n = new Vuei18n({
  locale: 'id',
  messages
})

export default i18n
