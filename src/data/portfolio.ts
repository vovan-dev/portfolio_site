export type Shot = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  shots: Shot[];
  href?: string;
};

export const projects: Project[] = [
  {
    id: "espo-crm",
    title: "CRM для управления продажами",
    summary: "Управление клиентами, продажами, сделками и бизнес-процессами.",
    href: "https://www.espocrm.com",
    stack: ["PHP", "JavaScript", "SQL"],
    shots: [
      {
        src: "/portfolio/crm-home.jpg",
        width: 1024,
        height: 508,
        alt: "Главная страница CRM: планшет с графиками продаж и кнопка демо",
        caption: "Главная страница показывает CRM и демо с графиками продаж.",
      },
      {
        src: "/portfolio/crm-features.png",
        width: 1024,
        height: 509,
        alt: "Обзор возможностей CRM: продажи, лиды, сделки, контакты и календарь",
        caption: "Обзор возможностей: продажи, поддержка, маркетинг и календарь.",
      },
      {
        src: "/portfolio/crm-extensions.png",
        width: 1024,
        height: 508,
        alt: "Страница расширений CRM: отчёты, продажи, проекты и интеллектуальные функции",
        caption: "Расширения: отчёты, продажи, проекты и интеллектуальные функции.",
      },
      {
        src: "/portfolio/crm-demo.png",
        width: 1024,
        height: 508,
        alt: "Страница тест-драйва CRM: локальное демо и облачная версия",
        caption: "Страница демо: локальный просмотр и облачная версия.",
      },
      {
        src: "/portfolio/crm-forum.png",
        width: 1024,
        height: 508,
        alt: "Форум поддержки CRM: объявления, вопросы, расширения и помощь разработчикам",
        caption: "Форум поддержки: вопросы, расширения и помощь разработчикам.",
      },
    ],
  },
  {
    id: "accounting",
    title: "Онлайн-бухгалтерия",
    summary: "Счета, клиенты, расходы и финансовые отчёты.",
    href: "https://akaunting.com",
    stack: ["PHP", "Laravel", "Vue.js", "Tailwind CSS", "SQL"],
    shots: [
      {
        src: "/portfolio/accounting-home.png",
        width: 1024,
        height: 506,
        alt: "Главная страница онлайн-бухгалтерии: описание продукта и панель с денежным потоком, прибылью и балансом счетов",
        caption: "Главная страница показывает продукт и финансовую панель.",
      },
      {
        src: "/portfolio/accounting-product.jpg",
        width: 1024,
        height: 506,
        alt: "Страница Easy Accounting: текст о счетах и расходах и ноутбук с открытой панелью учёта",
        caption: "Страница продукта открывает рабочий экран учёта.",
      },
      {
        src: "/portfolio/accounting-projects.png",
        width: 1024,
        height: 507,
        alt: "Страница приложения Projects: задачи, команды, учёт времени и этапы поставки",
        caption: "Projects собирает задачи, команды и этапы.",
      },
      {
        src: "/portfolio/accounting-blog.png",
        width: 1024,
        height: 506,
        alt: "Блог онлайн-бухгалтерии со статьями для малого бизнеса",
        caption: "Блог публикует материалы для малого бизнеса.",
      },
    ],
  },
  {
    id: "client-platform",
    title: "Платформа клиентского взаимодействия",
    summary: "CRM, маркетинг и поддержка.",
    href: "https://erxes.io",
    stack: ["React", "Node.js", "JavaScript", "Cloudflare", "NextAuth.js"],
    shots: [
      {
        src: "/portfolio/erxes-home.jpg",
        width: 1024,
        height: 503,
        alt: "Главная страница платформы: схема продуктов и связь агентов с рабочим пространством",
        caption: "Главная страница показывает платформу и связь продуктов в реальном времени.",
      },
      {
        src: "/portfolio/erxes-community.png",
        width: 1024,
        height: 504,
        alt: "Страница Community Edition: открытая версия для самостоятельной установки",
        caption: "Community Edition: открытая версия для самостоятельной установки.",
      },
      {
        src: "/portfolio/erxes-everything.png",
        width: 1024,
        height: 505,
        alt: "Страница продукта Everything: продажи, задачи, контакты и тарифы",
        caption: "Everything собирает продажи, задачи, контакты и автоматизацию.",
      },
      {
        src: "/portfolio/erxes-solutions.png",
        width: 1024,
        height: 503,
        alt: "Страница решений для технологических компаний: поддержка, продукт и маркетинг",
        caption: "Решения для технологических компаний: поддержка, продукт и маркетинг.",
      },
      {
        src: "/portfolio/erxes-handbook.png",
        width: 1024,
        height: 507,
        alt: "Справочник компании: старт, миссия, карьера и обновления",
        caption: "Справочник компании: старт, карьера и обновления.",
      },
    ],
  },
  {
    id: "twenty-crm",
    title: "Современная CRM-платформа",
    summary: "Управление контактами, компаниями, задачами и рабочими процессами.",
    href: "https://twenty.com",
    stack: ["React", "TypeScript", "NestJS", "PostgreSQL", "GraphQL"],
    shots: [
      {
        src: "/portfolio/twenty-teams.png",
        width: 1024,
        height: 509,
        alt: "Главная страница CRM: карточка компании, задачи, заметки и календарь",
        caption: "Главная страница показывает CRM для команд и карточку компании.",
      },
      {
        src: "/portfolio/twenty-enterprise.png",
        width: 1024,
        height: 511,
        alt: "Рабочее пространство CRM: список компаний, людей и записей",
        caption: "Рабочее пространство собирает компании, людей и записи.",
      },
      {
        src: "/portfolio/twenty-interface.png",
        width: 1024,
        height: 508,
        alt: "Страница интерфейса CRM: скорость, данные в реальном времени и боковые панели",
        caption: "Интерфейс: скорость, живые данные и боковые панели.",
      },
      {
        src: "/portfolio/twenty-apps.png",
        width: 1024,
        height: 511,
        alt: "Маркетплейс приложений CRM: звонки, данные, поиск и мессенджеры",
        caption: "Маркетплейс приложений: звонки, данные, поиск и мессенджеры.",
      },
      {
        src: "/portfolio/twenty-customers.png",
        width: 1024,
        height: 512,
        alt: "Истории команд, которые собрали CRM под свой рабочий процесс",
        caption: "Истории команд, которые собрали CRM под свой процесс.",
      },
    ],
  },
  {
    id: "plane",
    title: "Система управления проектами",
    summary: "Задачи, спринты, командная работа и дорожные карты.",
    href: "https://plane.so",
    stack: ["Next.js", "React", "Python", "Django", "PostgreSQL"],
    shots: [
      {
        src: "/portfolio/plane-home.png",
        width: 1024,
        height: 505,
        alt: "Главная страница системы управления проектами: задачи, документы и рабочее пространство команды",
        caption: "Главная страница собирает проекты, документы и работу команды.",
      },
      {
        src: "/portfolio/plane-selfhosted.png",
        width: 1024,
        height: 506,
        alt: "Страница самостоятельной установки: доска задач, циклы и модули на своей инфраструктуре",
        caption: "Самостоятельная установка: задачи, циклы и модули на своей инфраструктуре.",
      },
      {
        src: "/portfolio/plane-context.png",
        width: 1024,
        height: 504,
        alt: "Страница о контексте: задача, активность команды и свойства работы",
        caption: "Задача хранит контекст: статус, сроки, исполнителей и обсуждение.",
      },
      {
        src: "/portfolio/plane-ai.png",
        width: 1024,
        height: 509,
        alt: "Страница о локальном ИИ: инфраструктура, поиск и рабочие элементы",
        caption: "ИИ работает на своей инфраструктуре и ищет по проектам и страницам.",
      },
      {
        src: "/portfolio/plane-forum.png",
        width: 1024,
        height: 506,
        alt: "Форум сообщества: вопросы по установке, уведомлениям и обновлениям",
        caption: "Форум сообщества: установка, обновления и вопросы пользователей.",
      },
    ],
  },
  {
    id: "monica",
    title: "Персональная CRM",
    summary: "Контакты, заметки, события и напоминания.",
    href: "https://www.monicahq.com",
    stack: ["PHP", "Laravel", "Vue.js", "SQL"],
    shots: [
      {
        src: "/portfolio/monica-home.png",
        width: 1024,
        height: 486,
        alt: "Главная страница персональной CRM: напоминания о людях и личных обещаниях",
        caption: "Главная страница помогает помнить людей и важные моменты.",
      },
      {
        src: "/portfolio/monica-contacts.png",
        width: 1024,
        height: 487,
        alt: "Карточка контакта: близкие, дети, заметки и способы связи",
        caption: "Карточка контакта хранит заметки, связи и способы связаться.",
      },
      {
        src: "/portfolio/monica-dashboard.png",
        width: 1024,
        height: 485,
        alt: "Панель персональной CRM: последние контакты, события и напоминания",
        caption: "Панель показывает последние контакты, события и напоминания.",
      },
      {
        src: "/portfolio/monica-blog.png",
        width: 1024,
        height: 484,
        alt: "Блог персональной CRM: заметки о разработке и приватности данных",
        caption: "Блог рассказывает о разработке и приватности личных данных.",
      },
    ],
  },
];
