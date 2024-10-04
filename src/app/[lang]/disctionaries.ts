/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import 'server-only'
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: any = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ge: () => import('./dictionaries/ge.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: string) => dictionaries[locale]()