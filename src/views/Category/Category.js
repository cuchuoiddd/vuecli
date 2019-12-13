import { getRequest, postRequest, putRequest, deleteRequest } from "../../models/test"
import EventBus from '../../store/EventBus'
import {
    required,
    minLength,
    maxLength
} from "vuelidate/lib/validators";
const url = 'categories';
export default {
    name: 'category',
    components: {},
    data() {
        return {
            perPage: 2,
            currentPage: 1,
            data: [],
            rows: 0,
            is_add: true,
            id: '',
            index: '',
            name: '',
            description: '',
        };
    },
    created() {
        this.msg();
        this.getTotal();
        this.listCategory();
    },
    mounted() {

    },
    validations: {
        name: { required, minLength: minLength(3), maxLength: maxLength(10) }
    },
    methods: {
        getTotal() {
            getRequest( url +'/'+'gettotal').then(result => {
                this.rows = result;
            })
        },
        pagi(e) {
            // console.log(123, e)
            getRequest(url+'?page='+e).then(result=>{
                this.data = result.data;
            })
        },
        msg() {
            EventBus.$emit('msg', 'Category')
        },
        listCategory() {
            getRequest(url).then(result => {
                console.log(22222222, result)
                this.data = result.data;
            });
        },
        add() {
            this.resetValue();
            this.$refs['my-modal'].show();

        },
        edit(item, index) {
            this.$v.$reset();

            this.is_add = false;
            this.id = item.id;
            this.name = item.name;
            this.index = index;
            this.description = item.description;
            this.$refs['my-modal'].show();

        },
        save() {
            const data = {
                name: this.name,
                description: this.description
            };
            if (
                this.$v.name.$pending ||
                this.$v.name.$error
            ) {
                this.warning();
                return;
            } else {
                if (this.is_add) {
                    postRequest(url, data).then(result => {
                        if (result) {
                            this.data.push(result);
                            this.resetValue();
                        } else {
                            this.warning();
                        }
                    });
                } else {
                    putRequest(url + '/' + this.id, data).then(result => {
                        if (result) {
                            this.data[this.index] = result;
                            this.resetValue();
                        } else {
                            this.warning();
                        }
                    });
                }
            }
        },
        remove(item) {
            if (confirm('Bạn có chắc chắn xóa: ' + item.name)) {
                deleteRequest(url + '/' + item.id).then(result => {
                    if (result) {
                        this.data = this.data.filter(f => f.id != item.id);
                    } else { this.warning() }
                })
            }
        },
        cancel() {
            this.resetValue();
        },
        changeStatus(event, item) {
            putRequest('updateStatusCategory/' + item.id, { status: event.target.checked }).then(result => {
                if (result) { }
            })
        },
        resetValue() {
            this.$refs['my-modal'].hide();
            this.id = '';
            this.index = '';
            this.is_add = true;
            this.name = '';
            this.description = '';
            this.$v.$reset();

        },
        warning() {
            window.alert("Đã có lỗi xảy ra");
        }
    },
    computed: {
        // rows() {
        //     return this.data.length
        //   }
    }
}