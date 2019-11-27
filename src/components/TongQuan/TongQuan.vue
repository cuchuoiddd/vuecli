<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./TongQuan.css" module lang="css" scope></style>
<template>
  <div class="col-9 card min-height-85-vh card-custom">
    <div class="card-body">
      <div class="row mt-2">
        <div class="col-2 margin-right-30">
          <label class="text-label">Ngày khám:</label>
        </div>
        <div class="col-3">
          <input
            id="datetimepicker"
            type="text"
            class="form-control form-control-custom"
            :value="item_select ? item_select.ngay_kham :''"
          />
        </div>
        <div class="col-2">
          <label class="text-label">Bác sĩ khám:</label>
        </div>
        <div class="col-4">
          <select name id class="form-control form-control-custom">
            <option :selected="item_select && item_select.doctor ==='1'" value>Bác sĩ 1</option>
            <option :selected="item_select && item_select.doctor ==='2'" value>Bác sĩ 2</option>
            <option :selected="item_select && item_select.doctor ==='3'" value>Bác sĩ 3</option>
          </select>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-2 margin-right-30">
          <label class="text-label">Lý do khám:</label>
        </div>
        <div class="col-9">
          <div
            class="form-control form-control-custom"
          >{{item_select ? item_select.ly_do_kham : ''}}</div>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-2 margin-right-30">
          <label class="text-label">Bệnh sử:</label>
        </div>
        <div class="col-9">
          <textarea class="form-control" :value="item_select ? item_select.benh_su :''"></textarea>
        </div>
        <div class="col-1 padding-left-0 line-height-3">
          <button
            class="btn btn-book"
            data-toggle="tooltip"
            data-placement="right"
            title="Mẫu bệnh sử"
          >
            <i class="fa fa-address-book" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-2 margin-right-30">
          <label class="text-label">
            Tiền sử
            bệnh:
          </label>
        </div>
        <div class="col-9">
          <textarea class="form-control">Viêm dạ dày trào ngược thực quản/Trĩ nội độ I-II</textarea>
        </div>
        <div class="col-1 padding-left-0 line-height-3">
          <button
            class="btn btn-book"
            data-toggle="tooltip"
            data-placement="right"
            title="Mẫu tiền sử bệnh"
          >
            <i class="fa fa-address-book" aria-hidden="true"></i>
          </button>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-2 margin-right-30">
          <label class="text-label">Toàn thân:</label>
        </div>
        <div class="col-9">
          <textarea class="form-control" rows="2">Thể trạng trung bình, da niêm mạc bình thường không phù, không xuất huyết dưới da</textarea>
        </div>
        <div class="col-1 padding-left-0 line-height-3">
          <button class="btn btn-book" data-toggle="modal" data-target=".modal-mau-toan-than">
            <i
              class="fa fa-address-book"
              aria-hidden="true"
              data-toggle="tooltip"
              data-placement="right"
              title="Mẫu toàn thân"
            ></i>
          </button>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-2 margin-right-30">
          <label class="text-label">Bộ phận:</label>
        </div>
        <div class="col-9">
          <textarea class="form-control" rows="3">- Tim nhịp đều - Phổi không có ral - Bụng không chướng, gan lá lách không sờ thấy, không có điểm đau khu trú - Các bộ phận khác hiện tại không có gì đặc biệt
                                                        </textarea>
        </div>
        <div class="col-1 padding-left-0 line-height-4">
          <button class="btn btn-book">
            <i class="fa fa-address-book" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-2 margin-right-30">
          <label class="text-label">
            Chẩn đoán
            BĐ:
          </label>
        </div>
        <div class="col-9">
          <textarea rows="1" class="form-control">Hc dạ dày</textarea>
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-2 margin-right-30">
          <label class="text-label">
            Kết quả
            CLS:
          </label>
        </div>
        <div class="col-9">
          <textarea rows="2" class="form-control" v-model="kq_cls"></textarea>
        </div>
        <div class="col-1 padding-left-0 line-height-3">
          <button class="btn btn-book" data-toggle="modal" data-target=".modal-ket-qua-cls">
            <i class="fa fa-link" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-2 margin-right-30">
          <label class="text-label">Kết luận:</label>
        </div>
        <div class="col-9">
          <textarea rows="2" class="form-control indexKetLuan"></textarea>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="row float-right mt-2 custom-fixed-bottom">
        <button class="btn btn-success mr-2 btn-custom btn-sm" style="height: 35px; width: 90px">Lưu</button>
        <button class="btn btn-success mr-2 btn-custom btn-sm" style="height: 35px; width: 90px">Sửa</button>

        <div class="input-group mb-3 div-in">
          <button class="btn btn-success mr-2 btn-in btn-sm" style="height: 35px; width: 90px">In</button>
          <div class="input-group-append input-group-append-custom">
            <select class="select-custom1" name id>
              <option class="option-custom" value>In phiếu khám</option>
              <option class="option-custom" value>In đơn thuốc</option>
              <option class="option-custom" value>In phiếu TCT</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script crossorigin="use-credentials">
export default {
  name: "TongQuan",
  props: {},
  data() {
    return {
      data: []
    };
  },
  mounted() {},
  methods: {},
  created() {}
};
</script>

