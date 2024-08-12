export type ADD = {
  id: number;
  title: string;
  description: string;
  images: string[];
  type: string;
  user: {
    image: string;
    name: string;
    phone: string;
  };
  createdAt: Date;
  station: string;
  address: string;
  view: number;
};

export type MyAdd = {
  id: number;
  title: string;
  description: string;
  images: string[];
  type: string;
  user: {
    image: string;
    name: string;
    phone: string;
  };
  createdAt: Date;
  station: string;
  address: string;
  view: number;
  updatedAt: Date;
  isActive: boolean;
  isBorder: boolean;
  isColor: boolean;
  isPinned: boolean;
};

export type Transaction = {
  id: number;
  created_at: Date;
  name: string;
  total: string;
  order_number: string;
};

export const categories = [
  {
    id: 1,
    name: "Авто",
    count: 876,
  },
  {
    id: 2,
    name: "Автомобильные запчасти и прочее",
    count: 200,
  },
  {
    id: 3,
    name: "Авто",
    count: 200,
  },
  {
    id: 1,
    name: "Авто",
    count: 876,
  },
  {
    id: 2,
    name: "Автомобильные запчасти и прочее",
    count: 200,
  },
  {
    id: 3,
    name: "Авто",
    count: 200,
  },
  {
    id: 1,
    name: "Авто",
    count: 876,
  },
  {
    id: 2,
    name: "Автомобильные запчасти и прочее",
    count: 200,
  },
  {
    id: 3,
    name: "Авто",
    count: 200,
  },
  {
    id: 1,
    name: "Авто",
    count: 876,
  },
  {
    id: 2,
    name: "Автомобильные запчасти и прочее",
    count: 200,
  },
  {
    id: 3,
    name: "Авто",
    count: 200,
  },
  {
    id: 1,
    name: "Авто",
    count: 876,
  },
  {
    id: 2,
    name: "Автомобильные запчасти и прочее",
    count: 200,
  },
  {
    id: 3,
    name: "Авто",
    count: 200,
  },
  {
    id: 1,
    name: "Авто",
    count: 876,
  },
  {
    id: 2,
    name: "Автомобильные запчасти и прочее",
    count: 200,
  },
  {
    id: 3,
    name: "Авто",
    count: 200,
  },
];

export const ADDS: ADD[] = [
  {
    id: 0,
    title: "Здесь заголовок объявления",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
    images: ["/images/mockPoster.png", "/images/mockPoster.png"],
    type: "common",
    user: {
      image: "/images/userImage.png",
      name: "Сергей  Ваневский",
      phone: "+8 (985) 660-76-96",
    },
    createdAt: new Date(),
    station: "Пушкинская",
    address: "г.Бишкек улица Абдрахманова дом 22",
    view: 8,
  },
  {
    id: 1,
    title: "Здесь заголовок объявления",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
    images: ["/images/mockPoster.png", "/images/mockPoster.png"],
    type: "vip",
    user: {
      image: "/images/userImage.png",
      name: "Сергей  Ваневский",
      phone: "+8 (985) 660-76-96",
    },
    createdAt: new Date(),
    station: "Пушкинская",
    address: "г.Бишкек улица Абдрахманова дом 22",
    view: 8,
  },
  {
    id: 2,
    title: "Здесь заголовок объявления",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
    images: ["/images/mockPoster.png", "/images/mockPoster.png"],
    type: "premium",
    user: {
      image: "/images/userImage.png",
      name: "Сергей  Ваневский",
      phone: "+8 (985) 660-76-96",
    },
    createdAt: new Date(),
    station: "Пушкинская",
    address: "г.Бишкек улица Абдрахманова дом 22",
    view: 8,
  },
  {
    id: 3,
    title: "Здесь заголовок объявления",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
    images: ["/images/mockPoster.png", "/images/mockPoster.png"],
    type: "common",
    user: {
      image: "/images/userImage.png",
      name: "Сергей  Ваневский",
      phone: "+8 (985) 660-76-96",
    },
    createdAt: new Date(),
    station: "Пушкинская",
    address: "г.Бишкек улица Абдрахманова дом 22",
    view: 8,
  },
  {
    id: 4,
    title: "Здесь заголовок объявления",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
    images: ["/images/mockPoster.png", "/images/mockPoster.png"],
    type: "vip",
    user: {
      image: "/images/userImage.png",
      name: "Сергей  Ваневский",
      phone: "+8 (985) 660-76-96",
    },
    createdAt: new Date(),
    station: "Пушкинская",
    address: "г.Бишкек улица Абдрахманова дом 22",
    view: 8,
  },
  {
    id: 5,
    title: "Здесь заголовок объявления",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
    images: ["/images/mockPoster.png", "/images/mockPoster.png"],
    type: "premium",
    user: {
      image: "/images/userImage.png",
      name: "Сергей  Ваневский",
      phone: "+8 (985) 660-76-96",
    },
    createdAt: new Date(),
    station: "Пушкинская",
    address: "г.Бишкек улица Абдрахманова дом 22",
    view: 8,
  },
  {
    id: 6,
    title: "Здесь заголовок объявления",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
    images: ["/images/mockPoster.png", "/images/mockPoster.png"],
    type: "common",
    user: {
      image: "/images/userImage.png",
      name: "Сергей  Ваневский",
      phone: "+8 (985) 660-76-96",
    },
    createdAt: new Date(),
    station: "Пушкинская",
    address: "г.Бишкек улица Абдрахманова дом 22",
    view: 8,
  },
  {
    id: 7,
    title: "Здесь заголовок объявления",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
    images: ["/images/mockPoster.png", "/images/mockPoster.png"],
    type: "vip",
    user: {
      image: "/images/userImage.png",
      name: "Сергей  Ваневский",
      phone: "+8 (985) 660-76-96",
    },
    createdAt: new Date(),
    station: "Пушкинская",
    address: "г.Бишкек улица Абдрахманова дом 22",
    view: 8,
  },
  {
    id: 8,
    title: "Здесь заголовок объявления",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
    images: ["/images/mockPoster.png", "/images/mockPoster.png"],
    type: "premium",
    user: {
      image: "/images/userImage.png",
      name: "Сергей  Ваневский",
      phone: "+8 (985) 660-76-96",
    },
    createdAt: new Date(),
    station: "Пушкинская",
    address: "г.Бишкек улица Абдрахманова дом 22",
    view: 8,
  },
];

export const RIGHT_BANNERS = [
  {
    id: 1,
    image: "/images/mockRightBanner.png",
  },
  {
    id: 2,
    image: "/images/mockRightBanner.png",
  },
  {
    id: 3,
    image: "/images/mockRightBanner.png",
  },
  {
    id: 4,
    image: "/images/mockRightBanner.png",
  },
  {
    id: 5,
    image: "/images/mockRightBanner.png",
  },
];
export const MY_ADDS: MyAdd[] = [
  {
    id: 0,
    title: "Здесь заголовок объявления",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
    images: ["/images/mockPoster.png", "/images/mockPoster.png"],
    type: "common",
    user: {
      image: "/images/userImage.png",
      name: "Сергей  Ваневский",
      phone: "+8 (985) 660-76-96",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    station: "Пушкинская",
    address: "г.Бишкек улица Абдрахманова дом 22",
    view: 8,
    isActive: true,
    isBorder: false,
    isColor: false,
    isPinned: false,
  },
  {
    id: 1,
    title: "Здесь заголовок объявления",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
    images: ["/images/mockPoster.png", "/images/mockPoster.png"],
    type: "common",
    user: {
      image: "/images/userImage.png",
      name: "Сергей  Ваневский",
      phone: "+8 (985) 660-76-96",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
    station: "Пушкинская",
    address: "г.Бишкек улица Абдрахманова дом 22",
    view: 8,
    isActive: true,
    isBorder: true,
    isColor: true,
    isPinned: true,
  },
];

export const ANOUNCMENT = [
  {
    id: 1,
    created_at: new Date(),
    updated_at: new Date(),
    title:
      "Совсем скоро jerdesh перейдет на новый движок. Следите за нами, и за нашими обновлениями!",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
  },
  {
    id: 2,
    created_at: new Date(),
    updated_at: new Date(),
    title:
      "Совсем скоро jerdesh перейдет на новый движок. Следите за нами, и за нашими обновлениями!",
    description:
      "Безусловно, базовый вектор развития способствует подготовке и реализации инновационных методов управления процессами! Являясь всего лишь частью общей картины, действия представителей оппозиции формируют глобальную экономическую сеть и при этом —  обнародованы.",
  },
];

export const TRANSACTION_HISTORY: Transaction[] = [
  {
    id: 1,
    created_at: new Date("15.06.2024"),
    name: "SUPER VIP ",
    total: "5000",
    order_number: "123134124",
  },
  {
    id: 2,
    created_at: new Date("10.06.2024"),
    name: "SUPER VIP ",
    total: "5000",
    order_number: "123134124",
  },
  {
    id: 3,
    created_at: new Date("15.01.2024"),
    name: "SUPER VIP ",
    total: "5000",
    order_number: "123134124",
  },
  {
    id: 4,
    created_at: new Date("01.01.2024"),
    name: "SUPER VIP ",
    total: "5000",
    order_number: "123134124",
  },
];
