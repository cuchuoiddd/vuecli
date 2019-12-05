import EventBus from "../../store/EventBus";
export default {
    name: "TongQuan",
    components: {},
    // props: ["item_select","isHistory"],
    props: {
        isHistory: Boolean
    },
    data() {
        return {
            item_selected: Object
        }
    },
    created() {
        EventBus.$on('selectKH', this.handler);
    },
    destroyed() {
        // Stop listening the event selectKH with handler
        EventBus.$off("selectKH", this.handler);

    },
    mounted() {},
    methods: {
        handler(e) {
            this.item_selected = e;
        }
    }
};