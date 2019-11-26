import data_json from './../../assets/data'
export default {
    name: "Test",
    props: {},
    data() {
        return {
            data: data_json.man_hinh_kham,
            data_xn: data_json.ds_xet_nghiem,
            data_chi_dinh: data_json.ds_chi_dinh,
            data_dich_vu: data_json.ds_dich_vu,
            item_select: null,
            ds_kh: 'cho_kham',

            inputXetNghiem: null, //check lay xet nghiem,
            item_checked: null,
            kq_cls: '',
            is_show_dv: false,

            search: ''

        };
    },
    created() {
        console.log(this.data_xn);
        console.log(this.data1);
        console.log(this.data_dich_vu);

    },
    methods: {
        handleChange(e) {
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

                default: 'cho_kham'
                    this.data = data_json.man_hinh_kham;
                    break;
            }
        },
        selectBenhNhan(item) {
            this.item_select = item;
            console.log(34234234, this.item_select)
        },
        checkXetNghiem(item) {
            this.item_checked = item;
        },
        chonXN() {
            if (this.inputXetNghiem) {
                this.kq_cls = this.item_checked.name + ' ' + this.item_checked.kq_xn + ' ' + this.item_checked.dvt;
            } else {
                this.kq_cls = ''
            }

        },
        ontogglePicker() { this.is_show_dv = true; },
        offtogglePicker() { this.is_show_dv = false; },
        choseService(item) {
            this.is_show_dv = false;
            const data_push = {
                name: item.name,
                nhom_dv: item.nhom_dv,
                khoa_phong: 'Nội 6',
                doctor: "Nguyễn Văn Lâm",
                gia_dv: item.gia_dv,
                gia_bh: item.gia_bh,
                tu_chi_tra: true, ngay_chi_dinh: "05/01/2019", ngay_thuc_hien: "05/01/2019"
            }
            var check = false;
            for (const item1 of this.data_chi_dinh) {
                if (item1.name.includes(item.name)) {
                    check = true;
                }
            }
            if (check) {
                return;
            } else { this.data_chi_dinh.push(data_push); }
        }

    },
    filters: {
        status_name: function (id) {
            return id == '1' ? 'Đang khám' : id == '2' ? 'Ưu tiên' : id == '3' ? 'Hẹn khám' : 'Chờ đọc KQ'
        }
    },
    computed: {
        filteredList() {
            return this.data_dich_vu.filter(post => {
                return post.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
};
