import { getRequest, postRequest, putRequest, deleteRequest } from "../../models/test"
import EventBus from '../../store/EventBus'

export default {
    name: 'book',
    components: {},
    data() {
        return {
            data: [],
            data_ctg: [],
            is_add: true,
            name: '',
            description: '',
            code: '',
            selected: '',
            selected_ctg: ''
        };
    },
    created() {
        // console.log((new Date()).getTime().toString(32))

        this.msg();
        this.listCategory();
        this.listBook();
    },
    mounted() {

    },
    methods: {
        msg() {
            EventBus.$emit('msg', 'Book')
        },
        listCategory() {
            getRequest('categories').then(result => {
                this.data_ctg = result.data;
            });
        },
        listBook() {
            getRequest('books').then(result => {
                this.data = result;
                console.log(2222, this.data);

            })
        },
        add() { },
        edit() { },
        setSelected(e){
            getRequest('categories/'+e).then(result=>{
                this.data = result.books;
            })
        },
        save() {
            if (!this.code) return;
            if (this.is_add) {
                const insert = {
                    name: this.name,
                    description: this.description,
                    code: this.code,
                    category_id: this.selected_ctg
                }
                postRequest('books', insert).then(result => {
                    this.data.push(result);
                    this.resetValue();
                    console.log(55, this.data);

                })

            }

        },
        remove() { },
        cancel() { this.resetValue() },
        changeStatus(event) {
            console.log(2324234, event.target.checked);

        },
        resetValue() {
            this.$refs['my-modal'].hide()
            this.is_add = true;
            this.name = '';
            this.description = '';
            this.code = '';
            this.selected = '';
            this.selected_ctg = '';
        }
    },
    computed: {
    },
    watch: {

    }
}