import rss from "@astrojs/rss";

const posts = [
  {slug:"quanzhou-travel-guide",title:"福建泉州——2026年最火年味之城，非遗簪花与海上丝绸之路",description:"2026春节爆款！1618万游客、小红书年味TOP1、蟳埔簪花围、22处世遗。",date:new Date("2026-06-05")},
  {slug:"lijiang-travel-guide",title:"云南丽江五天四晚深度游攻略",description:"古城漫步、玉龙雪山、泸沽湖——五天四晚深度游，人均¥3000玩转丽江。",date:new Date("2026-06-03")},
  {slug:"jiuzhaigou-travel-guide",title:"四川九寨沟秋季全攻略——最佳观景期与路线规划",description:"九寨归来不看水！秋季最佳观赏期10月中下旬，五彩池、珍珠滩瀑布一网打尽。",date:new Date("2026-05-28")},
  {slug:"zhangjiajie-travel-guide",title:"湖南张家界——阿凡达取景地三日深度游",description:"张家界国家森林公园、天门山、玻璃栈道——《阿凡达》悬浮山原型地全攻略。",date:new Date("2026-05-22")},
  {slug:"sanya-travel-guide",title:"海南三亚——国内最佳海岛度假天堂全攻略",description:"亚龙湾、蜈支洲岛、天涯海角——四天三晚海岛度假攻略，阳光沙滩比基尼。",date:new Date("2026-05-18")},
  {slug:"lasa-travel-guide",title:"西藏拉萨——朝圣之旅，离天堂最近的地方",description:"布达拉宫、大昭寺、八廓街、纳木错——四日深度文化之旅。",date:new Date("2026-05-12")},
  {slug:"xian-travel-guide",title:"陕西西安——十三朝古都，穿越千年历史之旅",description:"兵马俑、大雁塔、钟鼓楼、回民街——四天三晚历史文化美食全攻略。",date:new Date("2026-05-06")},
  {slug:"guilin-travel-guide",title:"广西桂林——桂林山水甲天下，阳朔山水甲桂林",description:"漓江竹筏、阳朔西街、十里画廊、龙脊梯田——桂林阳朔四日游。",date:new Date("2026-04-30")},
  {slug:"beijing-travel-guide",title:"北京——帝都五日深度游，从故宫到长城",description:"故宫、长城、天安门、颐和园——北京五日经典路线，感受千年帝都的魅力。",date:new Date("2026-04-24")},
  {slug:"hangzhou-travel-guide",title:"浙江杭州——上有天堂，下有苏杭，西湖漫游记",description:"西湖十景、灵隐寺、龙井茶园——杭州三日慢生活旅行攻略。",date:new Date("2026-04-18")},
  {slug:"suzhou-travel-guide",title:"江苏苏州——园林之城，小桥流水人家的江南梦",description:"拙政园、留园、虎丘、平江路——苏州三日园林文化之旅。",date:new Date("2026-04-12")},
  {slug:"huangshan-travel-guide",title:"安徽黄山——五岳归来不看山，黄山归来不看岳",description:"迎客松、光明顶、西海大峡谷、宏村——三日登山攻略，看云海日出奇松怪石。",date:new Date("2026-04-05")},
  {slug:"xiamen-travel-guide",title:"福建厦门——鼓浪屿的文艺慢时光",description:"鼓浪屿、厦门大学、曾厝垵——三日文艺海岛之旅，喝咖啡看海发呆。",date:new Date("2026-03-28")},
  {slug:"qinghaihu-travel-guide",title:"青海青海湖——中国最美湖泊自驾环湖攻略",description:"青海湖环湖公路、茶卡盐湖天空之镜——夏季自驾三日攻略，油菜花海骑马观鸟。",date:new Date("2026-03-20")},
  {slug:"dunhuang-travel-guide",title:"甘肃敦煌——丝绸之路上的明珠，莫高窟千年之约",description:"莫高窟、鸣沙山月牙泉、玉门关、雅丹魔鬼城——四日丝路文化之旅。",date:new Date("2026-03-12")},
  {slug:"hulunbeier-travel-guide",title:"内蒙古呼伦贝尔——中国最美大草原自驾攻略",description:"呼伦贝尔大草原、额尔古纳湿地、满洲里——夏季草原五日自驾，骑马烤全羊住蒙古包。",date:new Date("2026-03-05")},
  {slug:"huangguoshu-travel-guide",title:"贵州黄果树瀑布——亚洲第一大瀑布震撼之旅",description:"黄果树大瀑布、天星桥、荔波小七孔——三日山水瀑布之旅。",date:new Date("2026-02-25")},
  {slug:"changbaishan-travel-guide",title:"吉林长白山——天池之巅，冬季滑雪温泉之旅",description:"长白山天池、长白瀑布、万达滑雪场——四日冰雪奇缘之旅。",date:new Date("2026-02-18")},
  {slug:"chongqing-travel-guide",title:"重庆——8D魔幻山城，火锅之都三日逛吃攻略",description:"洪崖洞、解放碑、磁器口、长江索道——三日魔幻之旅，吃遍重庆火锅。",date:new Date("2026-02-10")},
  {slug:"taishan-travel-guide",title:"山东泰山——五岳之首，日出东方朝圣之旅",description:"泰山日出、十八盘、南天门——夜爬泰山看日出全攻略，感受一览众山小。",date:new Date("2026-02-02")},
  {slug:"kanas-travel-guide",title:"新疆喀纳斯·北疆自驾环线终极攻略",description:"从乌鲁木齐出发，12天北疆大环线自驾攻略，喀纳斯、禾木、白哈巴一网打尽。",date:new Date("2026-01-25")},
].sort((a,b)=>b.date-a.date);

export async function GET(context) {
  return rss({
    title:"候鸟旅途 · Migratory Diaries",
    description:"像候鸟一样随季节迁徙，走遍中国。20篇深度旅游攻略，覆盖全国最热门目的地。",
    site:context.site||"https://houniao-journey.life",
    items:posts.map(p=>({title:p.title,description:p.description,pubDate:p.date,link:`/blog/${p.slug}`})),
    customData:`<language>zh-CN</language>`,
  });
}
