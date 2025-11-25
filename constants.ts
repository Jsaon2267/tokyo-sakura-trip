
import { ItineraryDay } from './types';

export const APP_NAME = "東京櫻花漫遊";

export const ITINERARY_DATA: ItineraryDay[] = [
  {
    id: 'D1',
    date: '4/15',
    title: '抵達與新宿夜景',
    theme: '都會序曲',
    highlights: ['東京都廳', '新宿御苑', '思出橫丁'],
    schedule: {
      morning: [
        {
          name: '抵達東京',
          description: '抵達成田(NRT)或羽田(HND)機場，搭乘 N\'EX 快捷舒適前往新宿。',
        }
      ],
      afternoon: [
        {
          name: '新宿御苑',
          description: '漫步於寬廣的日式庭園，尋找晚開的八重櫻，享受城市綠洲。',
        },
        {
          name: '東京都廳 觀景台',
          description: '登上 45 樓免費展望室，360 度俯瞰東京水泥叢林，尋找富士山影。',
        }
      ],
      evening: [
        {
          name: '思出橫丁 (回憶橫丁)',
          description: '在充滿紅燈籠的狹窄巷弄中，體驗昭和時代的居酒屋文化。',
        },
        {
          name: '歌舞伎町一番街',
          description: '感受不夜城的霓虹閃爍，著名的繁華街區入口。',
        }
      ]
    },
    dining: [
      { 
        type: '早餐', 
        name: 'Lawson 便利商店', 
        description: '必吃「炸雞君」與期間限定甜點。', 
      },
      { 
        type: '午餐', 
        name: '新宿 烏龍麵 慎', 
        description: '極致 Q 彈的手打麵條，搭配酥脆天婦羅。', 
      },
      { 
        type: '晚餐', 
        name: '鳥貴族 串燒', 
        description: 'CP 值超高的均一價串燒，在地年輕人聚點。', 
      }
    ],
    specialDrink: {
      name: 'Strong Zero',
      description: '便利商店必買，高酒精氣泡酒 (請適量飲用)。',
    }
  },
  {
    id: 'D2',
    date: '4/16',
    title: '淺草傳統與晴空塔',
    theme: '古今交錯',
    highlights: ['淺草雷門', '東京晴空塔', '隅田川'],
    schedule: {
      morning: [
        {
          name: '淺草寺 & 雷門',
          description: '在巨大的紅燈籠下留影，參拜東京最古老的觀音寺。',
        },
        {
          name: '仲見世通',
          description: '熱鬧的商店街，品嚐現烤人形燒與炸饅頭。',
        }
      ],
      afternoon: [
        {
          name: '東京晴空塔 (Skytree)',
          description: '漫步至押上，登上世界最高電波塔，在 Solamachi 購物。',
        },
        {
          name: '隅田川公園',
          description: '沿著河岸散步，欣賞朝日啤酒金色泡沫大樓。',
        }
      ],
      evening: [
        {
          name: '秋葉原 (Akihabara)',
          description: '體驗電氣街的霓虹閃爍，造訪扭蛋會館與動漫店。',
        }
      ]
    },
    dining: [
      { 
        type: '早餐', 
        name: 'Pelican Café', 
        description: '淺草百年麵包老店，炭烤厚片吐司極品。', 
      },
      { 
        type: '午餐', 
        name: '淺草 今半', 
        description: '百年壽喜燒老店，午間定食較為划算。', 
      },
      { 
        type: '晚餐', 
        name: '一蘭拉麵 / 豚骨拉麵', 
        description: '在淺草或上野享用經典的豚骨拉麵。', 
      }
    ],
    specialDrink: {
      name: '淺草濃抹茶',
      description: '仲見世通必喝的道地日式抹茶。',
    }
  },
  {
    id: 'D3',
    date: '4/17',
    title: '皇居歷史與銀座奢華',
    theme: '優雅東京',
    highlights: ['皇居二重橋', '銀座 GINZA SIX', '歌舞伎座'],
    schedule: {
      morning: [
        {
          name: '皇居外苑',
          description: '參觀莊嚴的二重橋，在寬闊的碎石路上感受歷史氛圍。',
        },
        {
          name: '東京車站 丸之內',
          description: '欣賞復古紅磚車站建築，周邊高樓林立。',
        }
      ],
      afternoon: [
        {
          name: '銀座中央通',
          description: '漫步於高級精品街，參觀 GINZA SIX 的藝術裝置。',
        },
        {
          name: '歌舞伎座',
          description: '欣賞傳統建築外觀，時間允許亦可體驗「一幕見席」。',
        }
      ],
      evening: [
        {
          name: '有樂町高架橋下',
          description: '感受上班族下班後的熱鬧氛圍，充滿煙火氣的居酒屋街。',
        }
      ]
    },
    dining: [
      { 
        type: '早餐', 
        name: 'Komeda\'s Coffee', 
        description: '名古屋早餐文化，點咖啡送厚片吐司與紅豆泥。', 
      },
      { 
        type: '午餐', 
        name: '銀座 篝 (Kagari)', 
        description: '米其林推薦，濃郁如奶油濃湯般的雞白湯拉麵。', 
      },
      { 
        type: '晚餐', 
        name: '根室花丸 迴轉壽司', 
        description: 'KITTE 大樓內人氣店，來自北海道的新鮮干貝與牡丹蝦。', 
      }
    ],
    specialDrink: {
      name: '資生堂 Parlour 蘇打',
      description: '銀座百年老店的經典冰淇淋蘇打汽水，優雅復古。',
    }
  },
  {
    id: 'D4',
    date: '4/18',
    title: '潮流澀谷與原宿',
    theme: '青春脈動',
    highlights: ['澀谷 SKY', '明治神宮', '竹下通'],
    schedule: {
      morning: [
        {
          name: '明治神宮',
          description: '穿越巨大木造鳥居，參觀壯觀的清酒桶牆。',
        },
        {
          name: '竹下通',
          description: '原宿流行文化發源地，體驗擁擠人潮與可愛商品。',
        }
      ],
      afternoon: [
        {
          name: '表參道 Hills',
          description: '安藤忠雄設計的時尚建築，街道兩旁櫸木林立。',
        },
        {
          name: '貓街 (Cat Street)',
          description: '連接原宿與澀谷的蜿蜒小徑，許多古著與潮流選物店。',
        }
      ],
      evening: [
        {
          name: '澀谷 Sky',
          description: '必去！登上 229 公尺露天展望台，俯瞰著名的十字路口。',
        },
        {
          name: '澀谷十字路口',
          description: '體驗世界最繁忙的十字路口，與忠犬八公像合影。',
        }
      ],
    },
    dining: [
      { 
        type: '早餐', 
        name: 'Bills 表參道', 
        description: '來自澳洲，被譽為「世界第一好吃的 Ricotta 鬆餅」。', 
      },
      { 
        type: '午餐', 
        name: 'AFURI 柚子鹽拉麵', 
        description: '湯頭帶有金黃柚子香氣，清爽不油膩，麵條細緻。', 
      },
      { 
        type: '晚餐', 
        name: '挽肉與米', 
        description: '現烤炭火漢堡排配上釜燒白飯 (建議排隊或預約)。', 
      }
    ],
    specialDrink: {
      name: 'Blue Bottle Coffee',
      description: '位於青山的時尚店舖，手沖單品咖啡。',
    }
  },
  {
    id: 'D5',
    date: '4/19',
    title: '夢幻迪士尼樂園',
    theme: '童話魔法',
    highlights: ['灰姑娘城堡', '美女與野獸', '夜間煙火'],
    schedule: {
      morning: [
        {
          name: '入園 & 美女與野獸',
          description: '直衝最新人氣設施「美女與野獸城堡」，體驗旋轉茶杯。',
        }
      ],
      afternoon: [
        {
          name: '日間遊行',
          description: '卡位欣賞迪士尼角色的大遊行，感受歡樂氣氛。',
        },
        {
          name: '明日世界 / 西部樂園',
          description: '體驗太空山 (Space Mountain) 或巨雷山雲霄飛車。',
        }
      ],
      evening: [
        {
          name: '電子大遊行 & 煙火',
          description: '在燈光璀璨的城堡前欣賞夜間遊行與煙火秀。',
        }
      ]
    },
    dining: [
      { 
        type: '早餐', 
        name: '便利商店御飯糰', 
        description: '為了儘早排隊入園，建議在飯店或排隊時簡單解決。', 
      },
      { 
        type: '午餐', 
        name: '紅心女王宴會大廳', 
        description: '愛麗絲夢遊仙境主題，漢堡排與心型起司蛋糕。', 
      },
      { 
        type: '晚餐', 
        name: '園區造型小吃', 
        description: '煙燻火雞腿、三眼怪麻糬、米奇手套漢堡。', 
      }
    ],
    specialDrink: {
      name: '迪士尼 40週年特調',
      description: '園區內隨季節更換的特色氣泡飲，拍照超美。',
    }
  },
  {
    id: 'D6',
    date: '4/20',
    title: '迪士尼海洋與台場',
    theme: '海灣絕景',
    highlights: ['地中海港灣', '台場鋼彈', '彩虹大橋'],
    schedule: {
      morning: [
        {
          name: '迪士尼海洋',
          description: '欣賞普羅米修斯火山，體驗「索林：翱翔夢幻奇航」。',
        },
        {
          name: '達菲熊商品店',
          description: '在美國海濱購買限定的 Duffy & Friends 周邊。',
        }
      ],
      afternoon: [
        {
          name: '前往台場 / 鋼彈立像',
          description: '搭乘海鷗號前往台場，朝聖獨角獸鋼彈變身秀。',
        },
        {
          name: 'DiverCity / Aqua City',
          description: '在台場購物廣場逛街，購買鋼彈模型與潮牌。',
        }
      ],
      evening: [
        {
          name: '台場海濱公園',
          description: '欣賞自由女神像與彩虹大橋的無敵浪漫夜景。',
        }
      ]
    },
    dining: [
      { 
        type: '早餐', 
        name: 'Mamma Biscotti\'s', 
        description: '海洋園區門口的烘焙坊，享用米奇造型丹麥麵包。', 
      },
      { 
        type: '午餐', 
        name: 'Kua Aina 漢堡', 
        description: '來自夏威夷的酪梨漢堡，在台場看著海景享用。', 
      },
      { 
        type: '晚餐', 
        name: '築地玉壽司 (台場店)', 
        description: '壽司吃到飽或精緻單點，海鮮新鮮直送。', 
      }
    ],
    specialDrink: {
      name: '海鹽荔枝氣泡飲',
      description: 'Salty Lychee，清爽解膩，適合海邊氛圍。',
    }
  },
  {
    id: 'D7',
    date: '4/21',
    title: '最後採買與離境',
    theme: '滿載而歸',
    highlights: ['阿美橫丁', '上野恩賜公園', '平安返家'],
    schedule: {
      morning: [
        {
          name: '上野阿美橫丁',
          description: '最後衝刺！在二木之菓子買零食，OS Drug 買藥妝。',
        },
        {
          name: '上野公園',
          description: '離開前最後一眼東京，或許還能看到上野熊貓。',
        }
      ],
      afternoon: [
        {
          name: '京成上野站',
          description: '搭乘 Skyliner 特急列車直達機場 (約 40 分鐘)。',
        },
        {
          name: '機場免稅店',
          description: '購買 Tokyo Banana、白色戀人、薯條三兄弟。',
        }
      ],
      evening: [
        {
          name: '登機返家',
          description: '帶著滿滿的回憶與戰利品，平安飛回溫暖的家。',
        }
      ]
    },
    dining: [
      { 
        type: '早餐', 
        name: '飯店自助餐', 
        description: '悠閒享用最後一頓豐盛的日式/西式早餐。', 
      },
      { 
        type: '午餐', 
        name: '名代 富士蕎麥麵', 
        description: '車站附近的立食蕎麥麵，快速、便宜又美味。', 
      },
      { 
        type: '晚餐', 
        name: '飛機餐', 
        description: '在萬米高空享用回程餐點，回味旅程點滴。', 
      }
    ],
    specialDrink: {
      name: '綾鷹綠茶',
      description: '販賣機必投，回味日本道地綠茶的甘甜。',
    }
  }
];
