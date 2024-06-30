import './NearbyCity.css'
import DataTable from '../dataTable/DataTable.vue'
import NoCityFound from '../noCityFound/NoCityFound.vue'
import Loader from '../loader/loader.vue';
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    nearbyCities: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },
  components: { NoCityFound, DataTable, Loader },
  data () {
    return {
      columns: [
        { name: 'City Name', key: 'city' },
        { name: 'Region', key: 'region' },
        { name: 'Distance', key: 'distance' }
      ]
    }
  },
}
