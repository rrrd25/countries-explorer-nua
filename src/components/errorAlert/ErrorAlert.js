import './ErrorAlert.css'
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  computed: {
    errorMessage() {
      return this.message || 'An error occurred.'
    }
  }
}
