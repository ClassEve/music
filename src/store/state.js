import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [], // 播放顺序
  mode: playMode.sequence,
  currentIndex: -1, // 当前播放哪首歌
  disc: {}
}

export default state
