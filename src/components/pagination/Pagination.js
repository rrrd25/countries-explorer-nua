import './Pagination.css'
export default {
  name: 'Pagination',
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  methods: {
    prevPage() {
      this.$emit('prevPage')
    },
    nextPage() {
      this.$emit('nextPage')
    }
  }
}
