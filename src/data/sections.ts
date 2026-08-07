export interface ContactLink {
  label: string;
  href: string;
}

export interface SiteSection {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  body: string[];
  image: string;
  imageFit: 'cover' | 'contain';
  links?: ContactLink[];
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
    lead: '「歌を楽しむことで身体も心も元気に！」歌の力で歌楽反応（化学反応）を起こして、街にもっと笑顔や音楽を増やしたい！そんな想いで活動しています。',
    body: [
      '2022年4月より始動。音楽を身体全体で楽しむことで、健康促進・認知症予防に繋げることを目指して、高齢者の皆様を対象に「唱歌」や「歌謡曲」を一緒に歌いながら楽しむ。2025年夏には函館市芸術ホールにて「あいたひめ歌楽コンサート2025」を開催し372名動員。子どもから〜おじいちゃん、おばあちゃんまで世代を超えてみんなで歌を楽しむ時間を創出。大好きな歌を歌い続けています。',
      '函館市内の公益施設、介護予防団体、町内会、シニア大学講師、北斗市町内会連合会など、様々な場所で実施中。随時、ご依頼受付中。',
      '【主催】あいたひめ（相田日芽）',
      '「心に寄り添うあたたかい歌で街に笑顔を」をテーマに、故郷「函館」にて活動中のシンガーソングライター。道南唯一の児童合唱団「函館少年少女合唱団」副指揮者。2022年より「歌楽ひろば」を主催し、函館市内各所・北斗市など道南にて活動中。',
    ],
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
    lead: '◆お問い合わせ、ご依頼◆',
    body: ['あいたひめ（相田日芽）'],
    links: [
      { label: 'TEL：090-6876-5725', href: 'tel:09068765725' },
      { label: 'Mail：hakodate.aita@gmail.com', href: 'mailto:hakodate.aita@gmail.com' },
    ],
    image: asset('images/karagaku-hiroba-logo.jpg'),
    imageFit: 'contain',
  },
];
