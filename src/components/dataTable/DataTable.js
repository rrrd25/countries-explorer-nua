
export default {
    props: {
        columns: {
            type: Array,
            required: true,
        },
        rows: {
            type: Array,
            required: true,
        },
        isRowClick: {
            type: Boolean,
            default: false,
        },
        onClickHandler: {
            type: Function,
            default: () => {},
        },
    },
}