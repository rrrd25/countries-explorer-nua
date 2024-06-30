import './CityCard.css'
import Pagination from '../pagination/Pagination.vue'

export default {
  name: 'CityCard',
  components: { Pagination },
  props: {
    cities: {
      type: Array,
      required: true
    },
    page: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    }
  },
  methods: {
    selectCity(city) {
      this.$emit('citySelected', city)
    },
    nextPage() {
      this.$emit('nextPage')
    },
    prevPage() {
      this.$emit('prevPage')
    }
  }
}
