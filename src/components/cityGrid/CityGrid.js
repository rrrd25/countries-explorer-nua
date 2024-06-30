import Pagination from '../pagination/Pagination.vue'
import NoCityFound from '../noCityFound/NoCityFound.vue'
import DataTable from '../dataTable/DataTable.vue'
export default {
  name: 'CityGrid',
  components: { Pagination, NoCityFound, DataTable},
  props: {
    cities: {
      type: Array,
      default: () => []
    },
    page: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    },
    citySelected: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      columns: [
        { name: 'City Name', key: 'city' },
        { name: 'Country', key: 'country' },
        { name: 'Region', key: 'region' },
        { name: 'Latitude', key: 'latitude' },
        { name: 'Longitude', key: 'longitude' },
        { name: 'Population', key: 'population' }
      ]
    }
  },
  methods: {
    nextPage() {
      this.$emit('nextPage')
    },
    prevPage() {
      this.$emit('prevPage')
    }
  }
}
