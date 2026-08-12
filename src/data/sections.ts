export interface ContactLink {
  label: string;
  href: string;
}

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface AchievementItem {
  title: string;
  date: string;
  image: string;
  alt: string;
}

export interface ScheduleEvent {
  date: string; // 'YYYY-MM-DD'
  title: string;
  time?: string;
  venue?: string;
  price?: string;
}

export interface SiteSection {
  id: string;
  title: string;
  navLabel?: string;
  lead: string;
  leadHighlight?: string;
  body: string[];
  bodyImage?: GalleryPhoto;
  image: string;
  imageFit: 'cover' | 'contain';
  links?: ContactLink[];
  achievements?: AchievementItem[];
}

// GitHub Pagesなどサブパス配信時にも画像が解決できるよう、Viteのbase URLを付与する。
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const heroImages = [
  {
    src: asset('images/aitahime-portrait.jpg'),
    alt: '函館・旧函館区公会堂前で微笑むあいたひめ',
    focus: 'center 75%',
  },
  {
    src: asset('images/hero-goryokaku-flower.jpg'),
    alt: '五稜郭タワーを背景に立つあいたひめ',
    focus: 'center 65%',
  },
  {
    src: asset('images/hero-blue-glow.jpg'),
    alt: '青い照明の中で歌うあいたひめ',
    focus: 'center 30%',
  },
  {
    src: asset('images/hero-pink-curtain.jpg'),
    alt: 'ステージで表情豊かに歌うあいたひめ',
    focus: 'center 60%',
  },
  {
    src: asset('images/hero-christmas.jpg'),
    alt: 'クリスマスイベントで歌うあいたひめ',
    focus: 'center 20%',
  },
];

export const noteSprites = [
  asset('images/notes/treble.png'),
  asset('images/notes/orange1.png'),
  asset('images/notes/blue.png'),
  asset('images/notes/green.png'),
  asset('images/notes/pink1.png'),
  asset('images/notes/purple.png'),
  asset('images/notes/yellow.png'),
  asset('images/notes/teal.png'),
  asset('images/notes/pink2.png'),
  asset('images/notes/bass.png'),
];

export const logoImage = {
  src: asset('images/karagaku-hiroba-logo-transparent.png'),
  alt: '歌楽ひろば ロゴ「歌でいきいき、楽しい時間を」',
};

// 見出し内でロゴを大きくはっきり見せるため、余白をトリムしたマーク単体版。
export const logoMarkImage = {
  src: asset('images/karagaku-hiroba-logo-mark.png'),
  alt: '歌楽ひろば ロゴ「歌でいきいき、楽しい時間を」',
};

// 開催が決まり次第、ここにイベントを追加してください。
export const scheduleEvents: ScheduleEvent[] = [];

export const sections: SiteSection[] = [
  {
    id: 'profile',
    title: 'あいたひめ',
    navLabel: '自己紹介',
    lead: '“心に寄り添うあたたかい歌で街に笑顔を”を大切に想い続け、故郷『函館』にて活動中のシンガーソングライター。',
    leadHighlight: '“心に寄り添うあたたかい歌で街に笑顔を”',
    body: [
      '子どもからお年寄りまで世代を超えた歌を届け、2025年8月には函館市芸術ホールにて「あいたひめ歌楽コンサート2025」を開催し、372名を動員。',
      '2025年リリース、オリジナルアルバム「わたしのうた I」各種サブスクにて配信中。',
      '日々歌の力を感じながら心を込めて歌っています。',
    ],
    bodyImage: { src: asset('images/aitahime-self-intro.jpg'), alt: '笑顔で歌うあいたひめ' },
    image: asset('images/aitahime-portrait-goryokaku.jpg'),
    imageFit: 'cover',
  },
  {
    id: 'about',
    title: '歌楽ひろば とは',
    lead: '「歌を楽しむことで身体も心も元気に！」歌の力で歌楽反応（化学反応）を起こして、街にもっと笑顔や音楽を増やしたい！',
    leadHighlight: '「歌を楽しむことで身体も心も元気に！」',
    body: [
      'そんな想いで活動しています。',
      '2022年4月より始動。音楽を身体全体で楽しむことで、健康促進・認知症予防に繋げることを目指して、高齢者の皆様を対象に「唱歌」や「歌謡曲」を一緒に歌いながら楽しむ。2025年夏には函館市芸術ホールにて「あいたひめ歌楽コンサート2025」を開催し372名動員。子どもから〜おじいちゃん、おばあちゃんまで世代を超えてみんなで歌を楽しむ時間を創出。大好きな歌を歌い続けています。',
      '函館市内の公益施設、介護予防団体、町内会、シニア大学講師、北斗市町内会連合会など、様々な場所で実施中。随時、ご依頼受付中。',
    ],
    image: asset('images/karagaku-hiroba-collage.jpg'),
    imageFit: 'cover',
  },
  {
    id: 'schedule',
    title: '今後の活動予定',
    lead: '開催予定のイベント情報は今後追加予定です。',
    body: [],
    image: asset('images/aitahime-portrait.jpg'),
    imageFit: 'cover',
  },
  {
    id: 'achievements',
    title: '活動実績',
    lead: 'これまでの開催実績は今後追加予定です。',
    body: [],
    image: asset('images/performance-goryokaku-festival.jpg'),
    imageFit: 'cover',
    achievements: [
      {
        title: '歌楽ひろばでの演奏',
        date: '開催日：準備中',
        image: asset('images/performance-blue-light.jpg'),
        alt: '歌楽ひろばでの演奏の様子',
      },
      {
        title: '小さな会場でのライブ',
        date: '開催日：準備中',
        image: asset('images/performance-cafe.jpg'),
        alt: '小さな会場でのライブの様子',
      },
      {
        title: 'クリスマスイベントでの演奏',
        date: '開催日：準備中',
        image: asset('images/performance-christmas.jpg'),
        alt: 'クリスマスイベントでの演奏の様子',
      },
      {
        title: 'ステージでの演奏',
        date: '開催日：準備中',
        image: asset('images/performance-red-blazer.jpg'),
        alt: 'ステージでの演奏の様子',
      },
      {
        title: 'バンド編成でのライブ',
        date: '開催日：準備中',
        image: asset('images/performance-band.jpg'),
        alt: 'バンド編成でのライブの様子',
      },
    ],
  },
  {
    id: 'contact',
    title: '問い合わせ先',
    lead: '◆お問い合わせ、ご依頼◆',
    body: ['あいたひめ'],
    links: [
      { label: 'TEL：090-6876-5725', href: 'tel:09068765725' },
      { label: 'Mail：hakodate.aita@gmail.com', href: 'mailto:hakodate.aita@gmail.com' },
    ],
    image: asset('images/contact-splatter-logo.jpg'),
    imageFit: 'cover',
  },
];
