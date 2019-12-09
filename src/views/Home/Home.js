import { getRequest } from "../../models/test"
import EventBus from '../../store/EventBus'
export default {
    name: 'home',
    components: {},
    data() {
        return {
            data: []
        };
    },
    created() {
        this.msg();
        this.listCategory();
    },
    mounted() {

    },
    methods: {
        msg() {
            EventBus.$emit('msg', 'Trang chủ')
        },
        listCategory() {
            getRequest('categories').then(result => {
                this.data = result;
            });
        },
    }
}