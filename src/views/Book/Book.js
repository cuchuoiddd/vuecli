import { getRequest } from "../../models/test"
import EventBus from '../../store/EventBus'

export default {
    name: 'book',
    components: {},
    data() {
        return {
            data: [],
            is_add: true,
            name: '',
            description: '',
            countries: [{
                    countryCode: "CA",
                    countryName: "Canada"
                },
                {
                    countryCode: "1",
                    countryName: "Canada1"
                }
            ]
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
            EventBus.$emit('msg', 'Book')
        },
        listCategory() {
            getRequest('categories').then(result => {
                this.data = result;
            });
        },
        add() {},
        edit() {},
        save() {},
        remove() {},
        cancel() { this.resetValue() },
        changeStatus(event) {
            console.log(2324234, event.target.checked);

        },
        resetValue() {
            this.$refs['my-modal'].hide()
            this.is_add = true;
            this.name = '';
            this.description = '';
        }
    }
}