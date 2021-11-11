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
  MAX_PAGE: 4,
} as const;

export const RESPONSIVE = {
  MOBILE: 360,
  TABLET: 768,
  DESKTOP: 1024,
};

export const TABS = [
  {
    icon: {
      active: IoHome,
      inActive: IoHomeOutline,
    },
    name: '홈',
    title: '홈 🏠',
    subtitle: '홈에서 최근 등록된 재능글을 볼 수 있어요\n하단 + 버튼을 통해 자신의 재능을 등록 해보세요',
  },
  {
    icon: {
      active: IoBookmark,
      inActive: IoBookmarkOutline,
    },
    name: '카테고리',
    title: '재능 카테고리 🙌',
    subtitle: '올리브에 재능글 카테고리를 확인 해봐요\n다양한 카테고리가 준비되어 있어요',
  },
  {
    icon: {
      active: IoGrid,
      inActive: IoGridOutline,
    },
    name: '모아보기',
    title: '재능글 모아보기 👀',
    subtitle: '좋아요한 카테고리 재능글을 모아봐요\n내 주변 재능글도 필터링 해서 볼 수 있어요',
  },
  {
    icon: {
      active: IoChatbubbles,
      inActive: IoChatbubblesOutline,
    },
    name: '채팅',
    title: '채팅하기 💭',
    subtitle: '재능을 신청해서 다른 회원과 채팅해요\n도움 종류에 따라 1:1 채팅, 단체 채팅을 시작해봐요',
  },
  {
    icon: {
      active: IoPersonCircle,
      inActive: IoPersonCircleOutline,
    },
    name: '프로필',
    title: '프로필 보기 💁🏻‍♀️',
    subtitle: '프로필에서 자신의 재능에 대한 설명을 써봐요\n이제 올리브에서 모두 재능나눔 함께해요:)',
  },
] as const;

export const API = {
  GH_USER_BASE_URL: 'https://api.github.com/users',
};
