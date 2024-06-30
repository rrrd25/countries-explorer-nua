import './header.css'
export default {
  name: 'Header',
  props: {
    viewButtonLabel: String,
    region: String,
    toggleView: Function,
    searchByRegion: Function,
    updateRegion: Function,
    exitSearch: Function,
    isExitIcon: Boolean,
    loading: Boolean
  }
}
