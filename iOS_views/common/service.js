/*!
 *
 * 服务URL
 * 基于豆瓣Open API的图书、音乐、电影服务
 * 如果https://api.douban.com/v2/都保持不变，则可以将其设置为BaseURL
 */
module.exports = {
  //图书搜索
  book_search: 'https://api.douban.com/v2/book/search',
  //图书详情
  book_search_id: 'https://api.douban.com/v2/book/',
  //音乐搜索
  music_search: 'https://api.douban.com/v2/music/search',
  //音乐详情
  music_search_id: 'https://api.douban.com/v2/music/',
  //电影搜索
  movie_search: 'https://api.douban.com/v2/movie/search',
  //电影详情
  movie_search_id: 'https://api.douban.com/v2/movie/subject/',
  //标签列表
  get_category: 'http://gxx.leanapp.cn/category',
  //所有文章
  get_all_article: 'http://gxx.leanapp.cn/article',
  //单个文章
  get_article: 'http://gxx.leanapp.cn/article/query',
  //搜索文章
  search_articler: 'http://localhost:3000/article/search',
};

