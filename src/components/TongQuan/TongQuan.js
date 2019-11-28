import KetLuan from "../KetLuan/KetLuan.vue"
import { store } from "../../store/index.js";
export default {
    name: "TongQuan",
    components:{KetLuan},
    props: ["item_select","isHistory"],
    data() {
        return {
            abc:store.state.item,
            data :[],
            item_selected:null
        }
    },
    created() {
        // console.log(22222222222222222,this.abc)
        // console.log(22222222222222222222)
    },
    mounted() {
        // console.log(111111111111111111,this.isHistory);
    },
    methods: {
    },
    watch:{
        item_select: function (newVal) { 
            this.item_selected = newVal;
        },
        abc:function(newVal){
            console.log(333333333333,newVal)
        }
    }
};