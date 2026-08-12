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

export interface ScheduleVenue {
  id: string;
  title: string;
  images: GalleryPhoto[];
}

export interface SpecialEvent {
  title: string;
  date: string;
  venue: string;
  image: string;
  alt: string;
}

export interface SiteSection {
  id: string;
  title: string;
  navLabel?: string;
  lead?: string;
  leadHighlight?: string;
  body: string[];
  bodyImage?: GalleryPhoto;
  image: string;
  imageFit: 'cover' | 'contain';
  links?: ContactLink[];
  achievements?: AchievementItem[];
  gallery?: GalleryPhoto[];
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

// 画面右下に常時表示するマスコットイラスト。
export const mascotImages = {
  open: asset('images/hime-mascot-open.png'),
  alt: 'あいたひめのイラスト',
};

// 「歌楽ひろば とは」ページ下部に横スクロールで表示する活動風景の写真。
export const karagakuHirobaGallery: GalleryPhoto[] = Array.from({ length: 16 }, (_, i) => i + 1)
  .filter((n) => n !== 3)
  .map((n) => ({
    src: asset(`images/karagaku-hiroba-gallery-${String(n).padStart(2, '0')}.jpg`),
    alt: `歌楽ひろばの活動風景 ${n}`,
  }));

// 活動実績と同じカード形式で、ポスター写真・日時・会場名をそのまま表示する特別編イベント。
export const specialEvents: SpecialEvent[] = [
  {
    title: 'あいたひめ歌楽コンサート2025',
    date: '2025年8月16日(土)',
    venue: '函館市芸術ホール ハーモニー五稜郭',
    image: asset('images/schedule-special-concert2025.jpg'),
    alt: 'あいたひめ歌楽コンサート2025 ポスター',
  },
  {
    title: '春の歌楽祭(Aita Hime × Sherry)',
    date: '2026年4月29日(水・祝)',
    venue: '函館市芸術ホール 地下リハーサル室',
    image: asset('images/schedule-special-showa-festival.jpg'),
    alt: '春の歌楽祭(Aita Hime × Sherry) ポスター',
  },
];

// クリックすると詳細画像をモーダル表示。画像が未定の会場はimagesを空配列にしておくと「準備中」表示になる。
export const scheduleVenues: ScheduleVenue[] = [
  {
    id: 'g-square',
    title: '歌楽ひろば　Gスクエア　開催スケジュール',
    images: [{ src: asset('images/schedule-g-square.jpg'), alt: 'Gスクエア会場スケジュール' }],
  },
  {
    id: 'kuumin',
    title: '歌楽ひろば　北斗市くーみん　開催スケジュール',
    images: [],
  },
  {
    id: 'shimin-kaikan',
    title: '歌楽ひろば　函館市民会館　開催スケジュール',
    images: [],
  },
];

export const sections: SiteSection[] = [
  {
    id: 'profile',
    title: 'あいたひめ',
    navLabel: '自己紹介',
    lead: '“心に寄り添うあたたかい歌で街に笑顔を”を大切に想い続け、故郷『函館』にて活動中のシンガーソングライター。',
    leadHighlight: '“心に寄り添うあたたかい歌で街に笑顔を”',
    body: [
      '子どもからお年寄りまで世代を超えた歌を届け、2025年8月には函館市芸術ホールにて「あいたひめ歌楽コンサート2025」を開催し、372名を動員。',
      '日々歌の力を感じながら心を込めて歌っています。',
      '2025年リリース、オリジナルアルバム「わたしのうた I」各種サブスクにて配信中。',
    ],
    bodyImage: { src: asset('images/aitahime-self-intro.jpg'), alt: '笑顔で歌うあいたひめ' },
    links: [
      {
        label: 'あいたひめオリジナルソング',
        href: 'https://www.tunecore.co.jp/artists?id=898042&lang=ja',
      },
    ],
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
      '2022年4月より始動。音楽を身体全体で楽しむことで、健康促進・認知症予防に繋げることを目指して、高齢者の皆様を対象に「唱歌」や「歌謡曲」を一緒に歌いながら楽しむ。子ども〜おじいちゃん、おばあちゃんまで世代を超えてみんなで歌を楽しむ時間を創出。大好きな歌を歌い続けています。',
      '函館市内の公益施設、介護予防団体、町内会、シニア大学講師、北斗市町内会連合会など、様々な場所で実施中。随時、ご依頼受付中。',
    ],
    gallery: karagakuHirobaGallery,
    image: asset('images/karagaku-hiroba-collage.jpg'),
    imageFit: 'cover',
  },
  {
    id: 'schedule',
    title: '今後の活動予定',
    lead: '歌楽ひろば　各会場にて定期開催！お気軽にお越しください',
    leadHighlight: '歌楽ひろば　各会場にて定期開催！お気軽にお越しください',
    body: [
      '定期開催以外にもご依頼に応じて、お祭り、函館市内の公益施設、介護予防団体、町内会、シニア大学講師、北斗市町内会連合会などなど、様々な場所でも開催しております。ご依頼をお受けしておりますので、お気軽にお問い合わせください。',
    ],
    image: asset('images/aitahime-portrait.jpg'),
    imageFit: 'cover',
  },
  {
    id: 'achievements',
    title: '活動実績',
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
