import data_json from './../../assets/data'
export default {
    name: "Test",
    props: {},
    data() {
        return {
            data: data_json.man_hinh_kham,
            data_xn:data_json.ds_xet_nghiem,
            item_select:null,
            ds_kh:'cho_kham',

            inputXetNghiem:null, //check lay xet nghiem,
            item_checked:null,
            kq_cls:'',
            is_show_dv:false

        };
    },
    created() { 
    },
    methods:{
        handleChange(e){
            this.ds_kh = e.target.value;
            switch (e.target.value) {
                case 'hen_kham':
                    this.data = data_json.man_hinh_kham
                    break;
                case 'cho_doc_kq':
                    this.data = data_json.man_hinh_cho_doc_kq
                    break;
                case 'ket_thuc_kham':
                    this.data = data_json.man_hinh_ket_thuc_kham
                    break;
            
                default:'cho_kham'
                    this.data = data_json.man_hinh_kham;
                    break;
            }
        },
        selectBenhNhan(item){
            this.item_select = item;
            console.log(34234234,this.item_select)
        },
        checkXetNghiem(item){
            this.item_checked = item;
        },
        chonXN(){
            if(this.inputXetNghiem){
                this.kq_cls = this.item_checked.name + ' ' + this.item_checked.kq_xn + ' ' + this.item_checked.dvt;
            }

        },
        
    },
    filters: {
        status_name: function(id) {
          return id == '1' ? 'Đang khám' : id == '2' ? 'Ưu tiên': id == '3' ? 'Hẹn khám' : 'Chờ đọc KQ'
        }
      }
};
