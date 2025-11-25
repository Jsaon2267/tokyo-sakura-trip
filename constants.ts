
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
          tips: [
            'N\'EX 外國人來回套票比較划算，記得在機場 JR 服務中心購買。',
            '若從羽田入境，搭乘單軌電車轉山手線會比巴士更準時。'
          ]
        }
      ],
      afternoon: [
        {
          name: '新宿御苑',
          description: '漫步於寬廣的日式庭園，尋找晚開的八重櫻，享受城市綠洲。',
          tips: [
            '這裡有三個入口，建議從「新宿門」進入，「千駄谷門」離開可順路去國立競技場。',
            '4月中旬是「八重櫻」與「關山櫻」的盛開期，顏色比染井吉野櫻更粉紅艷麗。',
            '園內禁止攜帶酒精飲料，入園需檢查包包。'
          ]
        },
        {
          name: '東京都廳 觀景台',
          description: '登上 45 樓免費展望室，360 度俯瞰東京水泥叢林，尋找富士山影。',
          tips: [
            '有南、北兩個展望室，南展望室通常開放時間較晚，且有鋼琴演奏。',
            '若天氣晴朗，建議日落前 30 分鐘抵達，可一次拍到夕陽與夜景。',
            '完全免費，但需排隊搭乘專用電梯，建議預留 30-40 分鐘排隊時間。'
          ]
        }
      ],
      evening: [
        {
          name: '思出橫丁 (回憶橫丁)',
          description: '在充滿紅燈籠的狹窄巷弄中，體驗昭和時代的居酒屋文化。',
          tips: [
            '大多數店家座位非常狹窄且僅收現金，請準備足夠日幣。',
            '推薦必點「Motsuyaki (烤內臟)」串燒，搭配啤酒絕配。'
          ]
        },
        {
          name: '歌舞伎町一番街',
          description: '感受不夜城的霓虹閃爍，著名的繁華街區入口。',
          tips: [
            '拍照打卡地標在入口拱門處。',
            '街區內客串拉客多，建議「只看不理」，不要跟隨路邊拉客的人進入店家。'
          ]
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
          tips: [
            '雷門燈籠底部有龍的木雕，記得抬頭看看。',
            '建議早上 9 點前抵達，才能拍到沒有人山人海的雷門。',
            '求籤若是「凶」，請將籤詩綁在旁邊的架子上，代表把厄運留在寺廟。'
          ]
        },
        {
          name: '仲見世通',
          description: '熱鬧的商店街，品嚐現烤人形燒與炸饅頭。',
          tips: [
            '日本文化習慣「不可邊走邊吃」，請在店家門口吃完再離開。',
            '推薦店家：吉備糰子、九重炸饅頭、花月堂菠蘿麵包。'
          ]
        }
      ],
      afternoon: [
        {
          name: '東京晴空塔 (Skytree)',
          description: '漫步至押上，登上世界最高電波塔，在 Solamachi 購物。',
          tips: [
            '外國遊客可憑護照購買 Fast Skytree Ticket，可大幅縮短排隊時間。',
            '推薦在 Solamachi 30/31 樓免費觀景區用餐，視野也很好。',
            '最佳拍攝點在「十間橋」，可以拍到晴空塔在水面的倒影。'
          ]
        },
        {
          name: '隅田川公園',
          description: '沿著河岸散步，欣賞朝日啤酒金色泡沫大樓。',
          tips: [
            '朝日啤酒大樓頂端的金色物體象徵「燃燒的火焰」，也是著名地標。',
            '若體力允許，可體驗「TOKYO CRUISE」水上巴士搭到台場。'
          ]
        }
      ],
      evening: [
        {
          name: '秋葉原 (Akihabara)',
          description: '體驗電氣街的霓虹閃爍，造訪扭蛋會館與動漫店。',
          tips: [
            '週日午後中央通會封街變成步行者天國 (視情況而定)。',
            '想找復古遊戲卡帶請去「Super Potato」，想轉扭蛋去「秋葉原扭蛋會館」。'
          ]
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
          tips: [
            '碎石路是為了防忍者的設計 (走路會有聲音)，穿好走的鞋子很重要。',
            '每週五、六若有事先預約，可參觀皇居內部導覽。',
            '必拍景點：正門石橋與後方的伏見櫓。'
          ]
        },
        {
          name: '東京車站 丸之內',
          description: '欣賞復古紅磚車站建築，周邊高樓林立。',
          tips: [
            '最佳拍攝點：車站正對面的 KITTE 大樓 6 樓屋頂花園 (免費)。',
            '車站內的「東京一番街」有許多拉麵名店與動漫周邊店。'
          ]
        }
      ],
      afternoon: [
        {
          name: '銀座中央通',
          description: '漫步於高級精品街，參觀 GINZA SIX 的藝術裝置。',
          tips: [
            '週六、日午後中央通會實施「步行者天國」，可走在馬路中間拍照。',
            'GINZA SIX 頂樓有免費且氣氛極佳的屋頂花園。',
            'Uniqlo 銀座旗艦店共有 12 層樓，有許多限定商品與客製化服務。'
          ]
        },
        {
          name: '歌舞伎座',
          description: '欣賞傳統建築外觀，時間允許亦可體驗「一幕見席」。',
          tips: [
            '「一幕見席」只需買單幕票，票價便宜且時間短，適合外國人體驗。',
            '地下二樓的木挽町廣場有許多歌舞伎相關的特色伴手禮。'
          ]
        }
      ],
      evening: [
        {
          name: '有樂町高架橋下',
          description: '感受上班族下班後的熱鬧氛圍，充滿煙火氣的居酒屋街。',
          tips: [
            '這裡是體驗日本「Salaryman (上班族)」下班文化的最佳地點。',
            '許多店家設有戶外座位，用啤酒箱當桌子，氣氛非常熱鬧隨興。'
          ]
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
          tips: [
            '鳥居使用的是來自台灣阿里山的扁柏，非常壯觀。',
            '「清正井」是知名的能量景點，據說設為手機桌布能提升運勢。',
            '參道鋪設的小石子象徵淨化身心。'
          ]
        },
        {
          name: '竹下通',
          description: '原宿流行文化發源地，體驗擁擠人潮與可愛商品。',
          tips: [
            '這裡的服飾風格多為「Kawaii (可愛)」與歌德蘿莉風。',
            '入口處的電子看板會顯示現在的畫面，很多人會在此自拍留念。'
          ]
        }
      ],
      afternoon: [
        {
          name: '表參道 Hills',
          description: '安藤忠雄設計的時尚建築，街道兩旁櫸木林立。',
          tips: [
            '建築設計配合地形坡度，內部螺旋狀坡道非常適合散步逛街。',
            '適合尋找高質感的設計師品牌或選物店。'
          ]
        },
        {
          name: '貓街 (Cat Street)',
          description: '連接原宿與澀谷的蜿蜒小徑，許多古著與潮流選物店。',
          tips: [
            '沒有真的很多貓，但有很多潮流人士。',
            '除了購物，這裡也有許多好吃的街頭小食，如龍蝦堡 Luke\'s Lobster。'
          ]
        }
      ],
      evening: [
        {
          name: '澀谷 Sky',
          description: '必去！登上 229 公尺露天展望台，俯瞰著名的十字路口。',
          tips: [
            '**強烈建議提前 2 週上網預約**，日落時段通常瞬間秒殺。',
            '頂樓風大且禁止攜帶腳架、帽子、圍巾等易飛物品（需寄放）。',
            '角落的玻璃扶手區是熱門拍照點，可能需要排隊。'
          ]
        },
        {
          name: '澀谷十字路口',
          description: '體驗世界最繁忙的十字路口，與忠犬八公像合影。',
          tips: [
            '最佳拍攝點：星巴克澀谷 Tsutaya 店 (需消費)、Magnet by Shibuya 109 頂樓。',
            '綠燈亮起時，四面八方人潮同時移動的景象非常震撼。'
          ]
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
          tips: [
            '建議下載官方 App，入園後立刻抽取「DPA (付費快速通關)」或「40週年優先入場卡」。',
            '美女與野獸通常排隊最久 (120分鐘起跳)，預算足夠建議買 DPA。',
            '開園前 1 小時抵達排隊安檢，能爭取到很多玩樂時間。'
          ]
        }
      ],
      afternoon: [
        {
          name: '日間遊行',
          description: '卡位欣賞迪士尼角色的大遊行，感受歡樂氣氛。',
          tips: [
            '遊行開始前 1 小時可以開始鋪野餐墊佔位。',
            '若不想看遊行，此時是排熱門設施的好時機，人潮會稍微減少。'
          ]
        },
        {
          name: '明日世界 / 西部樂園',
          description: '體驗太空山 (Space Mountain) 或巨雷山雲霄飛車。',
          tips: [
            '太空山即將改建，把握最後體驗機會。',
            '米奇魔法交響樂是室內設施，適合下午休息避暑或避雨。'
          ]
        }
      ],
      evening: [
        {
          name: '電子大遊行 & 煙火',
          description: '在燈光璀璨的城堡前欣賞夜間遊行與煙火秀。',
          tips: [
            '煙火施放受風向影響很大，有很高機率會取消 (要有心理準備)。',
            '離園前可以在世界市集購買伴手禮，但人潮最擁擠。'
          ]
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
          tips: [
            'DisneySea 氣氛較浪漫，適合拍照漫步。',
            '「索林」是必玩設施，模擬飛行體驗極佳，建議一入園就去排隊或買 DPA。',
            '別忘了買 Duffy 達菲熊，只有海洋樂園才買得到！'
          ]
        },
        {
          name: '達菲熊商品店',
          description: '在美國海濱購買限定的 Duffy & Friends 周邊。',
          tips: [
            'McDuck\'s Department Store 商品最齊全。',
            '人多時店家可能會實施入店管制，需抽整理券。'
          ]
        }
      ],
      afternoon: [
        {
          name: '前往台場 / 鋼彈立像',
          description: '搭乘海鷗號前往台場，朝聖獨角獸鋼彈變身秀。',
          tips: [
            '海鷗號 (Yurikamome) 是無人駕駛列車，搶第一節車廂最前面的位置可看無敵海景。',
            '鋼彈變身秀通常在白天是每兩小時一次，晚上則有燈光秀。'
          ]
        },
        {
          name: 'DiverCity / Aqua City',
          description: '在台場購物廣場逛街，購買鋼彈模型與潮牌。',
          tips: [
            'DiverCity 7樓有「Gundam Base」，模型迷必去聖地。',
            '台場風大，建議準備防風外套。'
          ]
        }
      ],
      evening: [
        {
          name: '台場海濱公園',
          description: '欣賞自由女神像與彩虹大橋的無敵浪漫夜景。',
          tips: [
            '這裡有一座小型的自由女神像，搭配後方的彩虹大橋，非常有紐約的錯覺。',
            '適合坐在沙灘上休息，欣賞東京灣夜景。'
          ]
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
          tips: [
            '二木之菓子可退稅，建議一次買齊分送親友的餅乾糖果。',
            'OS Drug 藥妝通常是全東京最便宜，但「僅收現金」且「不能退稅」(但含稅價往往比別家退稅還便宜)。',
            '小心路邊賣水果切片的攤販，衛生狀況需自行斟酌。'
          ]
        },
        {
          name: '上野公園',
          description: '離開前最後一眼東京，或許還能看到上野熊貓。',
          tips: [
            '京成上野站有許多大型置物櫃，可先寄放行李再逛。',
            '上野公園內的星巴克建築很美，適合休息。'
          ]
        }
      ],
      afternoon: [
        {
          name: '京成上野站',
          description: '搭乘 Skyliner 特急列車直達機場 (約 40 分鐘)。',
          tips: [
            'Skyliner 全車對號座，建議提前線上買票或在售票機劃位。',
            '車上有充電插座與免費 WiFi。'
          ]
        },
        {
          name: '機場免稅店',
          description: '購買 Tokyo Banana、白色戀人、薯條三兄弟。',
          tips: [
            '過了海關後的免稅店 (Fa-So-La) 才有賣生巧克力 (Royce) 與 Tokyo Banana。',
            '日本機場安檢嚴格，液體類超過 100ml 必須託運，布丁果凍也算液體喔！'
          ]
        }
      ],
      evening: [
        {
          name: '登機返家',
          description: '帶著滿滿的回憶與戰利品，平安飛回溫暖的家。',
          tips: [
            '建議起飛前 2.5 - 3 小時抵達機場，以免排隊人潮過多。',
            '把 Suica 卡餘額花掉的好地方是機場便利商店。'
          ]
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
