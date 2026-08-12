import { loadDefaultJapaneseParser } from 'budoux';

const parser = loadDefaultJapaneseParser();
const ZWSP = '​';

// BudouXの汎用モデルでは固有名詞が途中で分割されることがあるため、
// 分割してほしくない語は結合し直す。
const KEEP_TOGETHER = ['あいたひめ', '歌楽ひろば'];

const KEEP_TOGETHER_PATTERNS = KEEP_TOGETHER.map(
  (term) => [new RegExp(term.split('').join(`${ZWSP}?`), 'g'), term] as const,
);

function collapseKeepTogether(text: string): string {
  return KEEP_TOGETHER_PATTERNS.reduce((acc, [pattern, term]) => acc.replace(pattern, term), text);
}

// 文節の区切りにゼロ幅スペースを挿入し、word-break:keep-allと組み合わせることで
// 単語や文節の途中で改行されないようにする。
export function wrapJa(text: string): string {
  return collapseKeepTogether(parser.parse(text).join(ZWSP));
}
