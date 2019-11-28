// import data_json from './../../assets/data'
import { store } from "../../store/index.js";

export default {
    name: "KhachHang",
    props: ["data", "nhom_kh",'item'],
    data() {
        return {
            
            // data: data_json.man_hinh_kham
        };
    },
    mounted() {
        console.log(2342344, this.data);

    },
    methods: {
        selectBenhNhan(item){
            // this.$emit('ageWasUpdated', item)
            console.log('message emit from child component',item)
            store.setValue(item);
        }
    },
    created() {

    },
    watch: {
    },
    computed: {
        data_new() {
            this.data_new = this.data;
        }
    },
    filters: {
        status_name: function (id) {
            return id == '1' ? 'Đang khám' : id == '2' ? 'Ưu tiên' : id == '3' ? 'Hẹn khám' : 'Chờ đọc KQ'
        }
    }
};