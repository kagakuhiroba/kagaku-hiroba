export interface ContactLink {
  label: string;
  href: string;
  variant?: 'pattern';
}

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface AchievementItem {
  title: string;
  date: string;
  venue: string;
  detail?: string;
  image: string;
  alt: string;
}

export interface ScheduleVenue {
  id: string;
  title: string;
  venue: string;
  images: GalleryPhoto[];
}

export interface SpecialEvent {
  title: string;
  date: string;
  dateISO: string;
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

// 開催スケジュールボタン用のロゴ(黒縁取り・音符つきデザイン)。
export const logoImage2 = {
  src: asset('images/karagaku-hiroba-logo-2.png'),
  alt: '歌楽ひろば',
};

// 画面右下に常時表示するマスコットイラスト。
export const mascotImages = {
  open: asset('images/hime-mascot-open.png'),
  alt: 'あいたひめのイラスト',
};

// 「歌楽ひろば とは」ページ下部に横スクロールで表示する活動風景の写真。
export const karagakuHirobaGallery: GalleryPhoto[] = Array.from({ length: 16 }, (_, i) => i + 1)
  .filter((n) => n !== 3 && n !== 4 && n !== 5 && n !== 6 && n !== 8)
  .map((n) => ({
    src: asset(`images/karagaku-hiroba-gallery-${String(n).padStart(2, '0')}.jpg`),
    alt: `歌楽ひろばの活動風景 ${n}`,
  }));

// 活動実績と同じカード形式で、ポスター写真・日時・会場名をそのまま表示する特別編イベント。
export const specialEvents: SpecialEvent[] = [
  {
    title: '歌楽コンサート2024',
    date: '2024年8月17日(土)',
    dateISO: '2024-08-17',
    venue: '函館市芸術ホール',
    image: asset('images/schedule-special-concert2024.jpg'),
    alt: '歌楽コンサート2024 ポスター',
  },
  {
    title: '春の歌楽祭2025',
    date: '2025年4月26日(土)',
    dateISO: '2025-04-26',
    venue: '函館市公民館',
    image: asset('images/schedule-special-haru-kagakusai-2025.jpg'),
    alt: '春の歌楽祭2025 ポスター',
  },
  {
    title: '歌声×歌楽スペシャルライブ',
    date: '2025年6月10日(火)',
    dateISO: '2025-06-10',
    venue: '函館市民会館 小ホール',
    image: asset('images/schedule-special-utagoe-kagaku.jpg'),
    alt: '歌声×歌楽スペシャルライブ ポスター',
  },
  {
    title: '歌楽コンサート2025',
    date: '2025年8月16日(土)',
    dateISO: '2025-08-16',
    venue: '函館市芸術ホール',
    image: asset('images/schedule-special-concert2025.jpg'),
    alt: '歌楽コンサート2025 ポスター',
  },
  {
    title: '春の歌楽祭',
    date: '2026年4月29日(水・祝)',
    dateISO: '2026-04-29',
    venue: '函館市芸術ホール 地下リハーサル室',
    image: asset('images/schedule-special-showa-festival.jpg'),
    alt: '春の歌楽祭 ポスター',
  },
];

// クリックすると詳細画像をモーダル表示。画像が未定の会場はimagesを空配列にしておくと「準備中」表示になる。
export const scheduleVenues: ScheduleVenue[] = [
  {
    id: 'g-square',
    title: '歌楽ひろば　Gスクエア　開催スケジュール',
    venue: 'Gスクエア',
    images: [{ src: asset('images/schedule-g-square.jpg'), alt: 'Gスクエア会場スケジュール' }],
  },
  {
    id: 'kuumin',
    title: '歌楽ひろば　北斗市くーみん　開催スケジュール',
    venue: '北斗市くーみん',
    images: [{ src: asset('images/schedule-kuumin.jpg'), alt: '北斗市くーみん会場スケジュール' }],
  },
  {
    id: 'shimin-kaikan',
    title: '歌楽ひろば　函館市民会館　開催スケジュール',
    venue: '函館市民会館',
    images: [{ src: asset('images/schedule-shimin-kaikan.jpg'), alt: '函館市民会館会場スケジュール' }],
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
        variant: 'pattern',
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
      '定期開催以外にもご依頼に応じて、お祭り、函館市内の公益施設、介護予防団体、町内会、シニア大学講師、北斗市町内会連合会などなど、様々な場所でも開催しております。ご依頼もお受けしておりますので、お気軽にお問い合わせください。',
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
        title: '歌楽コンサート2024',
        date: '2024年8月17日',
        venue: '函館市芸術ホール',
        image: asset('images/achievement-kagaku-concert-2024.jpg'),
        alt: '歌楽コンサート2024の様子',
      },
      {
        title: '春の歌楽祭2025',
        date: '2025年4月26日',
        venue: '函館市公民館',
        image: asset('images/achievement-haru-kagakusai-2025.jpg'),
        alt: '春の歌楽祭2025の様子',
      },
      {
        title: '五稜郭祭2025',
        date: '2025年5月18日',
        venue: '五稜郭公園',
        image: asset('images/achievement-goryokaku-2025.jpg'),
        alt: '五稜郭祭2025の様子',
      },
      {
        title: '歌楽コンサート2025',
        date: '2025年8月16日',
        venue: '函館市芸術ホール',
        image: asset('images/schedule-special-concert2025.jpg'),
        alt: '歌楽コンサート2025ポスター',
      },
      {
        title: '湯倉神社例大祭',
        date: '2025年9月7日',
        venue: '湯倉神社',
        image: asset('images/achievement-yukura-jinja-2025.jpg'),
        alt: '湯倉神社例大祭の様子',
      },
      {
        title: 'Gスクエアクリスマスコンサート',
        date: '2025年12月14日',
        venue: 'Gスクエア',
        image: asset('images/achievement-gsquare-christmas-2025.jpg'),
        alt: 'Gスクエアクリスマスコンサートの様子',
      },
      {
        title: 'Gスクエア正月コンサート',
        date: '2026年1月3日',
        venue: 'Gスクエア',
        image: asset('images/achievement-gsquare-new-year-2026.jpg'),
        alt: 'Gスクエア正月コンサートの様子',
      },
      {
        title: '函館ロータリークラブ定例会',
        date: '2026年1月22日',
        venue: '函館国際ホテル',
        image: asset('images/achievement-rotary-club-2026.jpg'),
        alt: '函館ロータリークラブ定例会の様子',
      },
      {
        title: 'Hot Mottou LIVE',
        date: '2026年1月24日',
        venue: 'Drum Bar Sticks',
        image: asset('images/achievement-hot-mottou-live-2026.jpg'),
        alt: 'Hot Mottou LIVEの様子',
      },
      {
        title: '春の歌楽祭2026',
        date: '2026年4月29日',
        venue: '函館市芸術ホール　地下リハーサル室',
        image: asset('images/schedule-special-showa-festival.jpg'),
        alt: '春の歌楽祭2026ポスター',
      },
      {
        title: '五稜郭祭2026',
        date: '2026年5月17日',
        venue: '五稜郭公園',
        image: asset('images/achievement-goryokaku-2026.jpg'),
        alt: '五稜郭祭2026の様子',
      },
      {
        title: '歌で街を元気に！',
        date: '2026年5月31日',
        venue: 'まちづくりセンター',
        image: asset('images/achievement-machizukuri-center-2026.jpg'),
        alt: '歌で街を元気に！の様子',
      },
      {
        title: 'GATHER ROUND EVERYONE',
        date: '2026年7月11日',
        venue: 'ブルーポイント',
        image: asset('images/achievement-gather-round-everyone-2026.jpg'),
        alt: 'GATHER ROUND EVERYONEの様子',
      },
      {
        title: 'サマー音楽フェス',
        date: '2026年7月18日',
        venue: '千秋庵総本家',
        image: asset('images/achievement-summer-music-fes-2026.jpg'),
        alt: 'サマー音楽フェスの様子',
      },
      {
        title: '海の日スペシャル歌楽祭',
        date: '2026年7月20日',
        venue: 'Gスクエア',
        image: asset('images/achievement-umi-no-hi-2026.jpg'),
        alt: '海の日スペシャル歌楽祭の様子',
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
      {
        label: 'あいたひめインスタグラム',
        href: 'https://www.instagram.com/hakodate_hime/?utm_source=ig_web_button_share_sheet',
      },
    ],
    image: asset('images/contact-splatter-logo.jpg'),
    imageFit: 'cover',
  },
];
