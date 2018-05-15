import AbstractApiClient from '~/src/utils/AbstractApiClient'

const TRELLO_DOMAIN = 'https://trello.com/1'
const TRELLO_KEY = ''
const TRELLO_TOKEN = ''

const PATH = {
  CARDS: '/cards'
}

export default class TrelloApiClient extends AbstractApiClient {
  constructor() {
    super(TRELLO_DOMAIN)
  }

  doPost(path, body) {
    const postBody = {
      ...body,
      key: TRELLO_KEY,
      token: TRELLO_TOKEN
    }
    super.doPost(path, postBody)
  }

  createCard() {
    const params = {
      name: 'test',
      idList: 'test'
    }
    this.doPost(PATH.CARDS, params)
  }
}
