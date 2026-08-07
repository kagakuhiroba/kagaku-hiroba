export interface SiteSection {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  body: string[];
  image: string;
  imageAlt: string;
  imageFit: 'cover' | 'contain';
}

// GitHub Pagesなどサブパス配信時にも画像が解決できるよう、Viteのbase URLを付与する。
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const heroImage = {
  src: asset('images/karagaku-hiroba-stage.jpg'),
  alt: '「歌楽ひろば」のステージに立つメンバーと客席の観客たち',
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
    lead: '歌手・あいたひめのプロフィールです。',
    body: ['経歴やプロフィール写真は今後追加予定です。'],
    image: asset('images/aitahime-portrait.jpg'),
    imageAlt: '歌手 あいたひめ',
    imageFit: 'cover',
  },
  {
    id: 'about',
    eyebrow: '02 / About',
    title: '歌楽ひろば とは',
    lead: '「歌でいきいき、楽しい時間を」をコンセプトにした活動です。',
    body: ['活動の概要や想いは今後追加予定です。'],
    image: asset('images/karagaku-hiroba-logo.jpg'),
    imageAlt: '歌楽ひろば ロゴ',
    imageFit: 'contain',
  },
  {
    id: 'schedule',
    eyebrow: '03 / Schedule',
    title: '今後の活動予定',
    lead: '開催予定のイベント情報は今後追加予定です。',
    body: [],
    image: asset('images/karagaku-hiroba-stage.jpg'),
    imageAlt: '歌楽ひろば ステージの様子',
    imageFit: 'cover',
  },
  {
    id: 'achievements',
    eyebrow: '04 / Achievements',
    title: '活動実績',
    lead: 'これまでの開催実績は今後追加予定です。',
    body: [],
    image: asset('images/aitahime-portrait.jpg'),
    imageAlt: 'あいたひめ',
    imageFit: 'cover',
  },
  {
    id: 'contact',
    eyebrow: '05 / Contact',
    title: '問い合わせ先',
    lead: '出演依頼・お問い合わせ方法は今後追加予定です。',
    body: [],
    image: asset('images/karagaku-hiroba-logo.jpg'),
    imageAlt: '歌楽ひろば ロゴ',
    imageFit: 'contain',
  },
];
