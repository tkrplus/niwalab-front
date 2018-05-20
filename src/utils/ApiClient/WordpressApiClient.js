import AbstractApiClient from '~/src/utils/AbstractApiClient'

const WORDPRESS_DOMAIN = 'https://localhost:8080/wp-json/wp/v2'

const PATH = {
  POSTS: '/posts',
  TAGS: '/tags'
}

export default class WordpressApiClient extends AbstractApiClient {
  constructor() {
    super(WORDPRESS_DOMAIN)
  }

  getPosts(page = 1, per_page = 20) {
    const json = {
      context: 'view',
      page: page,
      per_page: per_page
    }
    return super.doGet(PATH.POSTS, json)
  }

  getTags(page = 1, per_page = 30) {
    const json = {
      context: 'view',
      page: page,
      per_page: per_page
    }
    return super.doGet(PATH.TAGS, json)
  }
}
