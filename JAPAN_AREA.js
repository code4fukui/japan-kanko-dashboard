import { JAPAN_PREF } from "https://js.sabae.cc/JAPAN_PREF.js";

// 統計局ホームページ/地域区分 https://www.stat.go.jp/data/shugyou/1997/3-1.html
export const JAPAN_AREA = {
  "北海道": ["北海道"],
  "東北": ["青森", "岩手", "宮城", "秋田", "山形", "福島"],
  "南関東": ["埼玉", "千葉", "東京", "神奈川"],
  "北関東・甲信": ["茨城", "栃木", "群馬", "山梨", "長野"],
  "北陸": ["新潟", "富山", "石川", "福井"],
  "東海": ["岐阜", "静岡", "愛知", "三重"],
  "近畿": ["滋賀", "京都", "大阪", "兵庫", "奈良", "和歌山"],
  "中国": ["鳥取", "島根", "岡山", "広島", "山口"],
  "四国": ["徳島", "香川", "愛媛", "高知"],
  "九州": ["福岡", "佐賀", "長崎", "熊本", "大分", "宮崎", "鹿児島", "沖縄"],
};
export const JAPAN_AREA_CODE = {};
for (const name in JAPAN_AREA) {
  JAPAN_AREA_CODE[name] = JAPAN_AREA[name].map(i => JAPAN_PREF.findIndex(j => j.startsWith(i)) + 1);
};
