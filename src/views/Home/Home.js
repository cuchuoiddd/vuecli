import HelloWorld from '@/components/HelloWorld.vue'
import Test from '@/components/Test.vue'
import KhachHang from '@/components/KhachHang/KhachHang.vue'
import TongQuan from '@/components/TongQuan/TongQuan.vue'
import data_json from './../../assets/data'
export default {
    name: 'home',
    components: {
        HelloWorld,
        Test,
        KhachHang,
        TongQuan
    },
    data() {
        return {
            data: data_json.man_hinh_kham,
            nhom_kh: 'hen_kham',

        };
    },
}