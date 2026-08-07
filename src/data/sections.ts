export interface SiteSection {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  body: string[];
  image: string;
  imageFit: 'cover' | 'contain';
}

// GitHub Pagesなどサブパス配信時にも画像が解決できるよう、Viteのbase URLを付与する。
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const heroImage = {
  src: asset('images/aitahime-portrait.jpg'),
  alt: '歌手 あいたひめ',
};

export const logoImage = {
  src: asset('images/karagaku-hiroba-logo.jpg'),
  alt: '歌楽ひろば ロゴ「歌でいきいき、楽しい時間を」',
};

export const sections: SiteSection[] = [
  {
    id: 'profile',
    eyebrow: '01 / Profile',
    title: '人物紹介',
    lead: '“心に寄り添うあたたかい歌で街に笑顔を”を大切に想い続け、故郷『函館』にて活動中のシンガーソングライター。',
    body: [
      '子どもからお年寄りまで世代を超えた歌を届け、2025年8月には函館市芸術ホールにて「あいたひめ歌楽コンサート2025」を開催し、372名を動員。',
      '2025年リリース、オリジナルアルバム「わたしのうた I」各種サブスクにて配信中。',
      '日々歌の力を感じながら心を込めて歌っています。',
    ],
    image: asset('images/karagaku-hiroba-stage.jpg'),
    imageFit: 'cover',
  },
  {
    id: 'about',
    eyebrow: '02 / About',
    title: '歌楽ひろば とは',
    lead: '「歌でいきいき、楽しい時間を」をコンセプトにした活動です。',
    body: ['活動の概要や想いは今後追加予定です。'],
    image: asset('images/karagaku-hiroba-logo.jpg'),
    imageFit: 'contain',
  },
  {
    id: 'schedule',
    eyebrow: '03 / Schedule',
    title: '今後の活動予定',
    lead: '開催予定のイベント情報は今後追加予定です。',
    body: [],
    image: asset('images/aitahime-portrait.jpg'),
    imageFit: 'cover',
  },
  {
    id: 'achievements',
    eyebrow: '04 / Achievements',
    title: '活動実績',
    lead: 'これまでの開催実績は今後追加予定です。',
    body: [],
    image: asset('images/karagaku-hiroba-stage.jpg'),
    imageFit: 'cover',
  },
  {
    id: 'contact',
    eyebrow: '05 / Contact',
    title: '問い合わせ先',
    lead: '出演依頼・お問い合わせ方法は今後追加予定です。',
    body: [],
    image: asset('images/karagaku-hiroba-logo.jpg'),
    imageFit: 'contain',
  },
];
