// import data_json from './../../assets/data'
// import { store } from "../../store";
import EventBus from "../../store/EventBus"
export default {
    name: "KhachHang",
    props: ["data", "nhom_kh", 'item'],
    data() {
        return {

            // data: data_json.man_hinh_kham
        };
    },
    mounted() {
        console.log(2342344, this.data);

    },
    methods: {
        selectBenhNhan(item) {
            EventBus.$emit("selectKH", item);
        }
    },



    created() {

    },
    watch: {},
    computed: {
        data_new() {
            this.data_new = this.data;
        }
    },
    filters: {
        status_name: function(id) {
            return id == '1' ? 'Đang khám' : id == '2' ? 'Ưu tiên' : id == '3' ? 'Hẹn khám' : 'Chờ đọc KQ'
        }
    }
};