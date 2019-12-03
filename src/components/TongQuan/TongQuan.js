import KetLuan from "../KetLuan/KetLuan.vue"
import { store } from "../../store/index.js";
import EventBus from "../../EventBus";
export default {
    name: "TongQuan",
    components: { KetLuan },
    // props: ["item_select","isHistory"],
    props: {
        item_select: Object,
        isHistory: Boolean
    },
    data() {
        return {
            test: store.state.msg,
            abc: store.getValue(),
            data: [],
            item_selected: null
        }
    },
    created() {
        EventBus.$on('selectKH', this.handler);
    },
    destroyed() {
        // Stop listening the event selectKH with handler
        EventBus.$off("hello", this.handler);

    },
    mounted() {
        // console.log(111111111111111111,this.isHistory);
        EventBus.$off('selectKH');
    },
    methods: {
        handler(e) {
            console.log("recieved: ", e);
        }
    },
    watch: {
        item_select: function(newVal) {
            this.item_selected = newVal;
        },
        abc: function(newVal, oldVal) {
            console.log(333333333333, newVal, oldVal)
        }
    }
};