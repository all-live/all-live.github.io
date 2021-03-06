import {
  IoHome,
  IoHomeOutline,
  IoBookmark,
  IoBookmarkOutline,
  IoGrid,
  IoGridOutline,
  IoChatbubbles,
  IoChatbubblesOutline,
  IoPersonCircle,
  IoPersonCircleOutline,
} from 'react-icons/io5';

export const STYLE_CONSTANTS = {
  NAVBAR_HEIGHT: 80,
  MIN_WHEEL_COUNT: 3,
  MIN_WHEEL_MOMENTUM: 20,
  MAX_PAGE: 3,
} as const;

export const RESPONSIVE = {
  MOBILE: 360,
  TABLET: 768,
  DESKTOP: 1024,
} as const;

export const TABS = [
  {
    icon: {
      active: IoHome,
      inActive: IoHomeOutline,
    },
    name: 'ν',
    title: 'ν π ',
    subtitle: 'μ΅κ·Ό λ±λ‘λ μ¬λ₯κΈμ κ΅¬κ²½ ν΄λ³΄μΈμ\nλμμ£ΌκΈ°, λμλ°κΈ°, ν¨κ»νκΈ° μ¬λ₯κΈμ΄ μμ΄μ',
  },
  {
    icon: {
      active: IoBookmark,
      inActive: IoBookmarkOutline,
    },
    name: 'μΉ΄νκ³ λ¦¬',
    title: 'μ¬λ₯ μΉ΄νκ³ λ¦¬ π',
    subtitle: 'μ΄μ λ μ·¨λ―Έμν, μκΈ°κ°λ° λͺ¨λ μ¬λ¦¬λΈμμ ~!\nμκΈ°κ°λ°, μ·¨λ―Έ, μμ λΆμΌ μΉ΄νκ³ λ¦¬κ° μ€λΉλμ΄ μμ΄μ',
  },
  {
    icon: {
      active: IoGrid,
      inActive: IoGridOutline,
    },
    name: 'λͺ¨μλ³΄κΈ°',
    title: 'μ¬λ₯κΈ λͺ¨μλ³΄κΈ° π',
    subtitle: 'μ’μμν μΉ΄νκ³ λ¦¬ μ¬λ₯κΈμ λͺ¨μλ΄μ\nλ΄ μ£Όλ³ μ¬λ₯κΈλ νν°λ§ ν΄μ λ³Ό μ μμ΄μ',
  },
  {
    icon: {
      active: IoChatbubbles,
      inActive: IoChatbubblesOutline,
    },
    name: 'μ±ν',
    title: 'μ±ννκΈ° π­',
    subtitle: 'μ¬λ₯μ μ μ²­ν΄μ λ€λ₯Έ νμκ³Ό μ±νν΄μ\nλμ μ’λ₯μ λ°λΌ 1:1 μ±ν, λ¨μ²΄ μ±νμ μμν΄λ΄μ',
  },
  {
    icon: {
      active: IoPersonCircle,
      inActive: IoPersonCircleOutline,
    },
    name: 'νλ‘ν',
    title: 'νλ‘ν λ³΄κΈ° ππ»ββοΈ',
    subtitle: 'νλ‘νμμ μμ μ μ¬λ₯μ λν μ€λͺμ μ¨λ΄μ\nμ΄μ  μ¬λ¦¬λΈμμ λͺ¨λ μ¬λ₯λλ ν¨κ»ν΄μ:)',
  },
] as const;

export const API = {
  GH_USER_BASE_URL: 'https://api.github.com/users',
} as const;

export const LINKS = {
  APP_STORE: 'https://apps.apple.com/kr/app/%EC%98%AC%EB%A6%AC%EB%B8%8C-allive/id1591382146',
  PLAY_STORE: 'https://play.google.com/store/apps/details?id=kr.co.alllive.app',
} as const;
