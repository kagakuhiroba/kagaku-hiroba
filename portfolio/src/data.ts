export type Skill = {
  name: string
  level: number // 1-5
  category: 'photo' | 'video'
}

export const skills: Skill[] = [
  { name: 'ポートレート撮影', level: 5, category: 'photo' },
  { name: '風景・スナップ撮影', level: 4, category: 'photo' },
  { name: 'Lightroom / Photoshop', level: 4, category: 'photo' },
  { name: '動画撮影（一眼・ジンバル）', level: 5, category: 'video' },
  { name: 'ドローン空撮', level: 3, category: 'video' },
  { name: 'Premiere Pro / DaVinci Resolve', level: 4, category: 'video' },
]

export type WorkCategory = 'すべて' | '写真' | '動画'

export type Work = {
  title: string
  category: Exclude<WorkCategory, 'すべて'>
  tags: string[]
  accent: 'blue' | 'orange'
}

export const works: Work[] = [
  { title: '結婚式スナップ撮影', category: '写真', tags: ['ポートレート', 'イベント'], accent: 'orange' },
  { title: '街角スナップコレクション', category: '写真', tags: ['スナップ', 'モノクロ'], accent: 'blue' },
  { title: 'カフェ紹介ムービー', category: '動画', tags: ['商品PR', 'Vlog'], accent: 'blue' },
  { title: '四季の風景写真集', category: '写真', tags: ['風景', '自然'], accent: 'orange' },
  { title: 'イベント記録映像', category: '動画', tags: ['イベント', 'ダイジェスト'], accent: 'orange' },
  { title: 'ドローン空撮ハイライト', category: '動画', tags: ['空撮', '風景'], accent: 'blue' },
]

export const workCategories: WorkCategory[] = ['すべて', '写真', '動画']
