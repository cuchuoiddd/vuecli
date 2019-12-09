import { getRequest, postRequest, putRequest, deleteRequest } from "../../models/test"
import EventBus from '../../store/EventBus'
import {
    required,
    minLength,
    maxLength
} from "vuelidate/lib/validators";

export default {
    name: 'category',
    components: {},
    data() {
        return {
            data: [],
            is_add: true,
            id: '',
            index: '',
            name: '',
            description: '',
        };
    },
    created() {
        this.msg();
        this.listCategory();
    },
    mounted() {

    },
    validations: {
        name: { required, minLength: minLength(3), maxLength: maxLength(10) }
    },
    methods: {
        msg() {
            EventBus.$emit('msg', 'Category')
        },
        listCategory() {
            getRequest('categories').then(result => {
                this.data = result;
            });
        },
        add() {},
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
                    postRequest('categories', data).then(result => {
                        if (result) {
                            this.data.push(result);
                            this.resetValue();
                        } else {
                            this.warning();
                        }
                    });
                } else {
                    putRequest('categories/' + this.id, data).then(result => {
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
        remove(id) {},
        cancel() { this.resetValue() },
        changeStatus(event, item) {
            putRequest('updateSatusCategory/' + item.id, { status: event.target.checked }).then(result => {
                if (result) {}
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
    }
}