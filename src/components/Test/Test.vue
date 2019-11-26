<style src="./Test.css" scope></style>
<template slot="header" slot-scope="scope">
  <div class="test">
    <div class="wrapper">
      <!-- Sidebar  -->
      <nav id="sidebar">
        <div class="fixed-bottom-sidebar">
          <button class="btn btn-success btn-sm mr-2 btn-custom">Gọi tiếp</button>
          <button class="btn btn-success btn-sm mr-2 btn-custom">Bỏ khám</button>
          <button class="btn btn-success btn-sm mr-2 btn-custom">Chuyển khám</button>
        </div>
        <div id="dismiss">
          <i class="fas fa-arrow-left"></i>
        </div>

        <div class="sidebar-header">
          <div class="row color-white">
            <div class="col-6">
              <div class>
                <h3>
                  Danh sách khách hàng &nbsp;
                  <span class="font-15">Tổng số KH: 100</span>
                </h3>
              </div>
              <select class="form-control form-control-custom" @change="handleChange($event)">
                <option value="cho_kham">Màn hình khám</option>
                <option value="hen_kham">Hẹn khám</option>
                <option value="cho_doc_kq">Chờ đọc kết quả</option>
                <option value="ket_thuc_kham">Kết thúc khám</option>
                <option value="kham_hoi_chan">Khám hội chẩn</option>
                <option value>Chờ làm PT/TT</option>
                <option value>Đã làm PT/TT</option>
              </select>
            </div>
            <div class="col-5">
              <div class="row">
                <div class="col-6">
                  <h6>
                    Hội chẩn: 20
                    <br />Chuyển khám: 30
                  </h6>
                </div>
                <div class="col-6">
                  <h6>
                    Hẹn khám: 30
                    <br />Chờ đọc KQ: 20
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <!-- màn hình khám -->
        <table class="table table-hover table-borderless font-14" v-if="ds_kh === 'cho_kham'">
          <thead>
            <tr>
              <th class="text-center">STT</th>
              <th>Tên khách hàng</th>
              <th class="text-center">Năm sinh</th>
              <th class="text-center">Giới tính</th>
              <th class="text-center">Chờ</th>
              <th class="text-center">Trạng thái</th>
              <th class="text-center">Giờ hẹn</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-table" v-for="(item, index) in data" :key="index">
              <td class="text-center" @click="selectBenhNhan(item)">{{index +11}}</td>
              <td @click="selectBenhNhan(item)">{{item.name}}</td>
              <td class="text-center" @click="selectBenhNhan(item)">{{item.year_of_birth}}</td>
              <td class="text-center" @click="selectBenhNhan(item)">{{item.sex}}</td>
              <td class="text-center" @click="selectBenhNhan(item)">{{item.waiting_time}}</td>
              <td class="text-center" @click="selectBenhNhan(item)">{{item.status | status_name}}</td>
              <td class="text-center" @click="selectBenhNhan(item)">{{item.timer}}</td>
            </tr>
          </tbody>
        </table>
        <!-- màn hình hẹn khám -->
        <table class="table table-hover table-borderless font-14" v-else-if="ds_kh === 'hen_kham'">
          <thead>
            <tr>
              <th class="text-center">STT</th>
              <th>Tên khách hàng</th>
              <th class="text-center">Năm sinh</th>
              <th class="text-center">Giới tính</th>
              <th class="text-center">Chờ (phút)</th>
              <th class="text-center">Giờ hẹn</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-table" v-for="(item, index) in data" :key="index">
              <td class="text-center">{{index +1}}</td>
              <td>{{item.name}}</td>
              <td class="text-center">{{item.year_of_birth}}</td>
              <td class="text-center">{{item.sex}}</td>
              <td class="text-center">{{item.waiting_time}}</td>
              <td class="text-center">{{item.timer}}</td>
            </tr>
          </tbody>
        </table>
        <!-- màn hình chờ đọc kết quả -->
        <table class="table table-hover table-borderless font-14" v-else-if="ds_kh === 'cho_doc_kq'">
          <thead>
            <tr>
              <th class="text-center">STT</th>
              <th>Tên khách hàng</th>
              <th class="text-center">Năm sinh</th>
              <th class="text-center">Giới tính</th>
              <th class="text-center">Chờ</th>
              <th class="text-center">Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-table tr-active">
              <td class="text-center">1</td>
              <td>Khách chờ đọc kq 1</td>
              <td class="text-center">1992</td>
              <td class="text-center">Nam</td>
              <td class="text-center">1:00</td>
              <td class="text-center">Chờ đọc KQ</td>
            </tr>
            <tr class="row-table">
              <td class="text-center">2</td>
              <td>Khách chờ đọc kq 2</td>
              <td class="text-center">1992</td>
              <td class="text-center">Nam</td>
              <td class="text-center">1:00</td>
              <td class="text-center">Chờ đọc KQ</td>
            </tr>
            <tr class="row-table">
              <td class="text-center">3</td>
              <td>Khách chờ đọc kq 3</td>
              <td class="text-center">1992</td>
              <td class="text-center">Nam</td>
              <td class="text-center">1:00</td>
              <td class="text-center">Chờ đọc KQ</td>
            </tr>
            <tr class="row-table">
              <td class="text-center">4</td>
              <td>Khách chờ đọc kq 4</td>
              <td class="text-center">1992</td>
              <td class="text-center">Nam</td>
              <td class="text-center">1:00</td>
              <td class="text-center">Chờ đọc KQ</td>
            </tr>
          </tbody>
        </table>
        <!-- màn hình kết thúc khám -->
        <table class="table table-hover table-borderless font-14" v-else-if="ds_kh === 'ket_thuc_kham'">
          <thead>
            <tr>
              <th class="text-center">STT</th>
              <th>Tên khách hàng</th>
              <th class="text-center">Năm sinh</th>
              <th class="text-center">Giới tính</th>
              <th class="text-center">Xử trí</th>
              <th class="text-center">Tên bác sĩ</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-table tr-active">
              <td class="text-center">1</td>
              <td>Khách hàng 1</td>
              <td class="text-center">1992</td>
              <td class="text-center">Nam</td>
              <td class="text-center">Kê toa cho về</td>
              <td class="text-center">Bác sĩ A</td>
              <!-- <td><img src="images/capcuu.png" class="icon-image"></td> -->
            </tr>
            <tr class="row-table">
              <td class="text-center">2</td>
              <td>Khách hàng 2</td>
              <td class="text-center">1992</td>
              <td class="text-center">Nam</td>
              <td class="text-center">Kê toa cho về</td>
              <td class="text-center">Bác sĩ A</td>
            </tr>
            <tr class="row-table">
              <td class="text-center">3</td>
              <td>Khách hàng 3</td>
              <td class="text-center">1992</td>
              <td class="text-center">Nam</td>
              <td class="text-center">Kê toa cho về</td>
              <td class="text-center">Bác sĩ A</td>
            </tr>
            <tr class="row-table">
              <td class="text-center">4</td>
              <td>Khách hàng 4</td>
              <td class="text-center">1992</td>
              <td class="text-center">Nam</td>
              <td class="text-center">Kê toa cho về</td>
              <td class="text-center">Bác sĩ A</td>
            </tr>
          </tbody>
        </table>
      </div>
      </nav>

      <nav id="sidebarProcess">
        <div id="dismissProcess">
          <i class="fas fa-arrow-left"></i>
        </div>

        <div class="sidebar-header">
          <h3 style="color: white;">Quá trình khám</h3>
        </div>
        <table class="table tree-basic">
          <tr>
            <th>Quá trình</th>
            <th>Ngày</th>
            <th>Bác sĩ</th>
          </tr>
          <tr class="treegrid-1 expanded">
            <td>Tiếp đón</td>
            <td>10/10/2019 08:55:55</td>
            <td>Bác sĩ A</td>
          </tr>
          <tr class="treegrid-2 expanded font-700">
            <td>Khám nội 2</td>
            <td>10/10/2019 08:55:55</td>
            <td>Bác sĩ A</td>
          </tr>
          <tr class="treegrid-3 treegrid-parent-2">
            <td data-toggle="modal" data-target="#donthuoc" class="pointer hover-blue">
              Đơn thuốc
              BV/DT/038097
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr class="treegrid-4 treegrid-parent-2">
            <td data-toggle="modal" data-target="#kq" class="pointer hover-blue">Phiếu XN/1910/156701</td>
            <td></td>
            <td></td>
          </tr>
          <tr class="treegrid-5 treegrid-parent-2">
            <td class="hover-blue">Kết luận: J20 Viêm phế quản cấp, kê toa cho về</td>
            <td></td>
            <td></td>
          </tr>
          <tr class="treegrid-6 font-700">
            <td>Phòng khám sản</td>
            <td>10/10/2019 08:55:55</td>
            <td>Bác sĩ A</td>
          </tr>
          <tr class="treegrid-7 treegrid-parent-6">
            <td data-toggle="modal" data-target="#donthuoc" class="pointer hover-blue">
              Đơn thuốc
              BV/DT/038097
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr class="treegrid-8 treegrid-parent-6">
            <td data-toggle="modal" data-target="#kq" class="pointer hover-blue">Phiếu XN/1910/156701</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </nav>

      <!-- Page Content  -->
      <div id="content">
        <button type="button" id="sidebarCollapseProcess" class="btn btn-success fixed-top fixed-top-custom"
          data-toggle="tooltip" data-placement="right" title="Quá trình khám" style="z-index: auto;">
          <i class="fa fa-stethoscope" aria-hidden="true"></i>
        </button>

        <button type="button" id="sidebarCollapse" class="btn btn-success fixed-top" style="z-index: auto;"
          data-toggle="tooltip" data-placement="right" title="Danh sách khách hàng">
          <i class="fas fa-align-left"></i>
        </button>

        <button type="button" id="sidebarCollapse" class="btn btn-success fixed-top thong-bao"
          style="z-index: auto; top: 40% !important;" data-toggle="tooltip" data-placement="right" title="Thông báo">
          <i class="fa fa-bell pointer" aria-hidden="true" data-toggle="modal" data-target="#thongBao"></i>
          <span class="badge badge-light">4</span>
        </button>

        <div class="header">
          <div class="row">
            <div class="col-8 mt-2">
              <marquee class="color-warning">
                * Thông báo từ phòng IT* Sẽ tạm ngưng sever để nâng cấp PM
                thời
                gian từ 12h00-12h15 ngày
                20/11/2019
              </marquee>
            </div>
            <div class="col-2 mt-2 text-label color-white text-right" data-toggle="modal" data-target="#exampleModal">
              <i class="fas fa-home"></i>
              <label for class="pointer font-14">Phòng khám TMH</label>
            </div>
            <div class="col-2 mt-2 text-label color-white">
              <nav class="navbar navbar-expand-lg">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item dropdown font-11">
                      <i class="fas fa-user"></i>
                      <a class="nav-link dropdown-custom dropdown-toggle font-14" href="#" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">BS.Nguyễn Văn
                        Hoàng</a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Đổi mật khẩu</a>
                        <a class="dropdown-item" href="#">Đăng xuất</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div class="container max-width-85">
            <div class="row mt-2">
              <div class="col-1"></div>
              <div class="col-9 font-18">
                TC 12345678/ NGUYỄN VĂN QUYẾT/ 29 tuổi/ Nam/ Địa chỉ Quận Hoàng Mai, Hà Nội
                <label class="pointer color-white" style="text-decoration: underline;" data-toggle="modal"
                  data-target="#exampleModal1">&nbsp; >>chi tiết</label>
              </div>
            </div>
            <div class="row">
              <div class="col-12 tab-menu">
                <ul class="nav nav-tabs nav-pills nav-tabs-custom" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active text-label" data-toggle="tab" href="#home">
                      <i class="fa fa-user-md font-15" aria-hidden="true"></i>
                      <span class="font-14">Khám bệnh</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#chi_dinh_dv">
                      <i class="fa fa-universal-access font-15" aria-hidden="true"></i>
                      <span class="font-14">
                        Chỉ
                        định
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#ket_luan">
                      <i class="fa fa-heartbeat font-15" aria-hidden="true"></i>
                      <span class="font-14">Kết luận</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#ket_qua">
                      <i class="fa fa-eye font-15" aria-hidden="true"></i>
                      <span class="font-14">
                        Xem
                        kết quả
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#phong_thu_thuat">
                      <i class="fa fa-bed font-15" aria-hidden="true"></i>
                      <span class="font-14">Phòng thủ thuật</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#benh_an_ngoai_tru">
                      <i class="fa fa-medkit font-15" aria-hidden="true"></i>
                      <span class="font-14">Bệnh án ngoại trú</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#history">
                      <i class="fa fa-th font-15" aria-hidden="true"></i>
                      <span class="font-14">
                        Lịch
                        sử khám
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-label" data-toggle="tab" href="#bao-cao">
                      <i class="fa fa-map font-15" aria-hidden="true"></i>
                      <span class="font-14">
                        Báo
                        cáo
                      </span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <div class="dropdown">
                      <button class="btn dropdown-toggle btn-tien-ich font-13 color-white" type="button"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-podcast font-15" aria-hidden="true"></i>
                        <span class="font-14">Tiện ích</span>
                      </button>
                      <div class="dropdown-menu font-13" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Sửa thông tin HC</a>
                        <a class="dropdown-item" href="#">Tạo nhóm chỉ định nhanh</a>
                        <a class="dropdown-item" href="#">Tạo mẫu cách dùng thuốc</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container container-custom max-width-85">
          <div class="row min-height-50-vh">
            <!-- Tabs menu --------------------->

            <!-- end Tabs menu --------------------->

            <!-- Tabs content ------------------------->
            <div class="tab-content col-12">
              <!-- Chỉ định dịch vụ ------------------------>
              <div id="chi_dinh_dv" class="tab-pane fade">
                <div class="card card-custom min-height-85-vh">
                  <div class="card-body">
                    <div class="row mt-3">
                      <div class="col-2 color-red">Tạm ứng: 1.000.000</div>
                      <div class="col-2 color-red">Chi phí: 180.000</div>
                      <div class="col-2 color-red">BHYT trả: 0</div>
                      <div class="col-4 color-red">BN thanh toán: 180.000</div>
                    </div>
                    <div class="row">
                      <div class="col-12" style="overflow-x: scroll;">
                        <table class="table table-hover table-bordered font-14 tree-basic">
                          <thead>
                            <tr>
                              <th class="align-middle text-center">STT</th>
                              <th class="align-middle">
                                <input type="checkbox" />
                              </th>
                              <th class="align-middle min-width-150">Tên dịch vụ</th>
                              <th class="align-middle">Nhóm DV</th>
                              <th class="align-middle min-width-150">Khoa/phòng</th>
                              <th class="align-middle min-width-150">Bs chỉ định</th>
                              <th class="align-middle">Giá DV</th>
                              <th class="align-middle">Giá BH</th>
                              <th class="text-center">Tự chi trả</th>
                              <th class="text-center">Mã phiếu</th>
                              <th class="align-middle min-width-150">Nơi thực hiện</th>
                              <th class="align-middle">Cơ sở thực hiện</th>
                              <th class="align-middle">Ngày chỉ định</th>
                              <th class="align-middle">Ngày thực hiện</th>
                            </tr>
                          </thead>
                          <tbody id="sortable">
                            <tr class="treegrid-1 expanded">
                              <td colspan="14" class="font-600">Phòng khám nội 1</td>
                            </tr>
                            <tr class="treegrid-2 treegrid-parent-1">
                              <td colspan="14" class="font-600">Xét nghiệm</td>
                            </tr>
                            <tr class="" v-for="(item, index) in data_chi_dinh" :key="index">
                              <td class="align-middle text-center">{{index +1}}</td>
                              <td class="align-middle text-center">
                                <input type="checkbox" class="daThucHien"  />
                              </td>
                              <td class="align-middle">{{item.name}}</td>
                              <td class="align-middle">{{item.nhom_dv}}</td>
                              <td class="align-middle">{{item.khoa_phong}}</td>
                              <td class="align-middle">{{item.doctor}}</td>
                              <td class="align-middle">{{item.gia_dv}}</td>
                              <td class="align-middle">{{item.gia_bh}}</td>
                              <td class="align-middle text-center">
                                <input type="checkbox" :value="item.tu_chi_tra"/>
                              </td>
                              <td>Mã phiếu</td>
                              <td class="align-middle">
                                <select name id class="custom1-select">
                                  <option value>Tầng 1 nhà A</option>
                                  <option value>Tầng 2 nhà A</option>
                                </select>
                              </td>
                              <td class="align-middle">
                                <select name id class="custom1-select">
                                  <option value>Cơ sở 1</option>
                                  <option value>Cơ sở 2</option>
                                </select>
                              </td>
                              <td class="align-middle">{{item.ngay_chi_dinh}}</td>
                              <td class="align-middle">{{item.ngay_thuc_hien}}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="row mt-3">
                      <div class="col-12">
                        <div class="row">
                          <div class="col-6">
                            <input type="text" id="timKiemDichVu" placeholder="Chọn dịch vụ" class="form-control"
                              style="margin-bottom: 10px;" v-model="search" @focus="ontogglePicker()"/>
                              <div class="aaa" v-if="is_show_dv" >
                                <table>
                                  <tr v-for="(item, index) in filteredList" :key="index" @click="choseService(item)">
                                    <td>{{item.name}}</td>
                                    <td>{{item.nhom_dv}}</td>
                                    <td>{{item.gia_dv}}</td>
                                    <td>{{item.gia_bh}}</td>
                                  </tr>
                                </table>
                              </div>
                          </div>
                          <div class="col-2 text-right">
                            <label for>Bác sĩ chỉ định:</label>
                          </div>
                          <div class="col-4">
                            <select name id class="form-control form-control-custom">
                              <option value>Bác sĩ 1</option>
                              <option value>Bác sĩ 2</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-5">
                        <div class>
                          <i class="fas fa-star color-red"></i> Dịch vụ đã thực hiện
                        </div>
                        <div class>
                          <i class="fas fa-star color-yellow"></i> Dịch vụ đã thanh
                          toán
                        </div>
                      </div>
                      <div class="col-7 text-right">
                        <a data-toggle="tooltip" data-placement="top" title="Chỉ định nhanh">
                          <button class="btn btn-book mr-1 btn-custom btn-sm" style="width:40px" data-toggle="modal"
                            data-target=".modal-chi-dinh-nhanh">
                            <i class="fa fa-info" aria-hidden="true"></i>
                          </button>
                        </a>
                        <!-- <i class="fa fa-address-book" style="display: inline-block;" aria-hidden="true"
                        data-toggle="modal" data-target=".modal-chi-dinh-nhanh"></i>-->
                        <button class="btn btn-success mr-1 btn-custom btn-sm" style="width:85px">
                          Gói
                          DV
                        </button>
                        <button class="btn btn-success mr-1 btn-custom btn-sm" style="width:85px">Lưu</button>
                        <button class="btn btn-success mr-1 btn-custom btn-sm" style="width:85px"
                          onclick="deleteChinhDinh()">Xóa</button>
                        <button class="btn btn-success mr-1 btn-custom btn-sm" style="width:85px">Sửa</button>
                        <button class="btn btn-success mr-1 btn-custom btn-sm" style="width:85px">
                          In
                          phiếu
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end Chỉ định dịch vụ ------------------------>

              <!-- Kết luận -------------------------->
              <div id="ket_luan" class="tab-pane fade ket-luan">
                <div class="card card-custom min-height-85-vh">
                  <div class="card-body" style="padding-bottom: 0;">
                    <div class="row mt-3">
                      <div class="col-2 font-700 max-width-11">
                        <span class="color-red">Bệnh chính (*)</span>
                      </div>
                      <div class="col-2">
                        <input type="text" style="text-transform: uppercase;" placeholder="Mã ICD" id="benh_chinh_icd10"
                          class="form-control form-control-custom" />
                      </div>
                      <div class="col-8">
                        <input type="text" id="benh_chinh_text" class="form-control form-control-custom" />

                        <!-- <select id="select-bs">
                                                        <option>Viêm phế quản cấp</option>
                                                        <option>Viêm phế quản cấp 1</option>
                                                        <option>Viêm phế quản cấp 2</option>
                                                        <option>Viêm phế quản cấp 3</option>
                        </select>-->
                      </div>
                    </div>
                    <div class="row mt-1">
                      <div class="col-2 font-700 max-width-11">Bệnh kèm theo:</div>
                      <div class="col-2">
                        <input type="text" id="benh_kem_theo_icd10" class="form-control form-control-custom" />
                      </div>
                      <div class="col-8">
                        <input type="text" id="benh_kem_theo_text" class="form-control form-control-custom" />
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-2 font-700 max-width-11">Hướng điều trị:</div>
                      <div class="col-2">
                        <select name id="huongDieuTri" class="mySelect form-control form-control-custom">
                          <option value></option>
                          <option value="ke_toa_cho_ve">Kê toa cho về</option>
                          <option value="cho_ve_khong_toa">Cho về không toa</option>
                          <option value="nhap_vien">Nhập viện</option>
                          <option value="chuyen_vien">Chuyển viện</option>
                          <option value="chuyen_phong_kham">Chuyển phòng khám</option>
                          <option value="chuyen_kham_chinh">Chuyển khám chính</option>
                          <option value="dieu_tri_ngoai_tru">Điều trị ngoại trú</option>
                          <option value="bo_ve">Bỏ về</option>
                          <option value="tu_vong">Tử vong</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-2 font-700 max-width-11">Hẹn khám lại:</div>
                      <div class="col-2 max-width-11">
                        Sau
                        <input type="text" style="width:33px;" />
                        ngày
                      </div>
                      <div class="col-2 max-width-11 padding-right-0 align-center">
                        <span>
                          Ngày khám
                          lại:
                        </span>
                      </div>
                      <div class="col-2 max-width-12 padding-left-0">
                        <input type="date" class="form-control form-control-custom" />
                      </div>
                      <div class="col-2 max-width-14">
                        Giờ hẹn &nbsp;
                        <input class="form-control-custom" type="text" id="time" placeholder="Time"
                          style="width:81px;" />
                      </div>
                      <div class="col-1 max-width-11 text-right align-center">
                        <span>
                          Ghi
                          chú:
                        </span>
                      </div>
                      <div class="col-3 padding-right-0">
                        <input type="text" class="form-control form-control-custom" />
                      </div>
                    </div>
                    <div id="keToaChoVe" class="row" style="display: none;">
                      <div class="mt-3 card card-custom min-height-65-vh">
                        <div class="card-body" style="padding-top: 0;">
                          <table class="table table-hover font-14 tree-basic">
                            <thead>
                              <tr>
                                <th class="text-center">STT</th>
                                <th class="text-center align-middle">
                                  <input type="checkbox" />
                                </th>
                                <th class="text-center">Kho thuốc</th>
                                <th class>Tên thuốc</th>
                                <th class="text-center">Hàm lượng</th>
                                <th class="text-center">Hoạt chất</th>
                                <th class="text-center">Số lượng</th>
                                <th class="text-center">Đơn giá</th>
                                <th class="text-center">Đơn vị</th>
                                <th class>Cách dùng</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="treegrid-2 expanded">
                                <td colspan="8" class="font-700">Phòng khám TMH</td>
                              </tr>
                              <tr class="treegrid-3 treegrid-parent-2">
                                <td class="text-center">1</td>
                                <td class="text-center align-middle">
                                  <input type="checkbox" />
                                </td>
                                <td class="text-center">tủ trực TMH</td>
                                <td>amocilin</td>
                                <td class="text-center">500mg</td>
                                <td class="text-center">amoxilin</td>
                                <td class="text-center">5</td>
                                <td class="text-center">25.000</td>
                                <td class="text-center">viên</td>
                                <td>uống sau ăn</td>
                                <td>
                                  <i class="fa fa-trash pointer" aria-hidden="true"></i>
                                </td>
                              </tr>
                              <tr class="treegrid-4 treegrid-parent-2">
                                <td class="text-center">2</td>
                                <td class="text-center align-middle">
                                  <input type="checkbox" />
                                </td>
                                <td class="text-center">nhà thuốc</td>
                                <td>panadol</td>
                                <td class="text-center">500mg</td>
                                <td class="text-center">paracetamol</td>
                                <td class="text-center">5</td>
                                <td class="text-center">25.000</td>
                                <td class="text-center">viên</td>
                                <td>uống sau ăn</td>
                                <td>
                                  <i class="fa fa-trash pointer" aria-hidden="true"></i>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="card-footer">
                          <div class="ke-thuoc">
                            <div class="row">
                              <div class="col-2 color-red">Tạm ứng: 1.000.000</div>
                              <div class="col-2 color-red">Tổng tiền: 50.000</div>
                              <div class="col-2 color-red">BHYT trả: 10.000</div>
                              <div class="col-2 color-red">BN thanh toán: 40.000</div>
                              <div class="col-2"></div>
                              <div class="col-2">
                                <div class="dropdown">
                                  <button class="btn dropdown-toggle font-13 btn-sm btn-don-thuoc" type="button"
                                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    <i class="fa fa-address-book" aria-hidden="true"></i> Đơn thuốc
                                  </button>
                                  <div class="dropdown-menu font-13" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#" aria-hidden="true" data-toggle="modal"
                                      data-target=".modal-ke-toa-nhanh">
                                      Đơn thuốc
                                      mẫu
                                    </a>
                                    <a class="dropdown-item" href="#">
                                      Đơn thuốc
                                      cũ
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row mt-2 font-13">
                              <div class="col-2">
                                <div class="form-group margin-bottom-0">
                                  <label for>Kho thuốc:</label>
                                  <select name id class="form-control form-control-custom">
                                    <option value>Kho A</option>
                                    <option value>Kho B</option>
                                  </select>
                                </div>
                              </div>
                              <div class="col-3">
                                <div class="form-group margin-bottom-0">
                                  <label for>Tên thuốc</label>
                                  <input type="text" class="form-control form-control-custom" />
                                </div>
                              </div>
                              <div class="col-1">
                                <div class="form-group margin-bottom-0">
                                  <label for>Đơn vị</label>
                                  <input id="ke_thuocDonVi" type="text" class="form-control form-control-custom"
                                    readonly value="Viên" />
                                </div>
                              </div>
                              <div class="col-2 max-width-11">
                                <div class="form-group margin-bottom-0">
                                  <label for>Số Lượng</label>
                                  <input id="ke_thuocSoLuong" type="number" class="form-control form-control-custom" />
                                </div>
                              </div>
                              <div class="col-2 max-width-11">
                                <div class="form-group margin-bottom-0">
                                  <label for>Lượng dùng</label>
                                  <input id="ke_thuocLuongDung" type="number"
                                    class="form-control form-control-custom" />
                                </div>
                              </div>
                              <div class="col-2 max-width-11">
                                <div class="form-group margin-bottom-0">
                                  <label for>Số lần</label>
                                  <input id="ke_thuocSoLan" type="number" class="form-control form-control-custom" />
                                </div>
                              </div>
                              <div class="col-2">
                                <div class="form-group margin-bottom-0">
                                  <label for>sử dụng</label>
                                  <input id="ke_thuocSuDung" type="text" class="form-control form-control-custom" />
                                </div>
                              </div>
                            </div>
                            <div class="row height-35 mt-1">
                              <div class="col-2 text-right font-13">
                                <label for>
                                  Cách
                                  dùng:
                                </label>
                              </div>
                              <div class="col-10">
                                <div class="form-group margin-bottom-0">
                                  <input id="ke_thuocCachDung" type="text" class="form-control form-control-custom" />
                                </div>
                              </div>
                            </div>
                            <div class="row height-35">
                              <div class="col-2 text-right font-13">
                                <label for>
                                  Lời dặn
                                  bác
                                  sĩ:
                                </label>
                              </div>
                              <div class="col-10">
                                <div class="form-group margin-bottom-0">
                                  <input type="text" class="form-control form-control-custom" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="nhapVien" style="display: none;">
                      <div class="card card-custom">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-2 max-width-11 font-700">Khoa nhập</div>
                            <div class="col-3">
                              <select class="form-control form-control-custom">
                                <option value>Khoa Nội</option>
                                <option value>Khoa Thận</option>
                                <option value>Khoa Ung Bướu</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer"></div>
                      </div>
                    </div>
                    <div id="chuyenPhongKham" style="display: none;">
                      <div class="card card-custom">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-2 max-width-11 font-700">Chuyển đến</div>
                            <div class="col-3">
                              <select class="form-control form-control-custom">
                                <option value>Phòng khám Nội</option>
                                <option value>Phòng khám Thận</option>
                                <option value>Phòng khám Ung Bướu</option>
                              </select>
                            </div>
                            <div class="col-2 max-width-11 font-700">Hình thức</div>
                            <div class="col-3">
                              <select class="form-control form-control-custom">
                                <option value></option>
                                <option value>Khám giáo sư</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer"></div>
                      </div>
                    </div>
                    <div id="chuyenKhamChinh" style="display: none;">
                      <div class="card card-custom">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-2 max-width-11 font-700">Chuyển đến</div>
                            <div class="col-3">
                              <select class="form-control form-control-custom">
                                <option value>Phòng khám Nội</option>
                                <option value>Phòng khám Thận</option>
                                <option value>Phòng khám Ung Bướu</option>
                              </select>
                            </div>
                            <div class="col-2 max-width-11 font-700">Hình thức</div>
                            <div class="col-3">
                              <select class="form-control form-control-custom">
                                <option value></option>
                                <option value>Khám Nội 0đ</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer"></div>
                      </div>
                    </div>
                    <div id="tuVong" style="display: none;">
                      <div class="card card-custom">
                        <div class="card-body">
                          <div class="row">
                            <h6 style="color: #007944;">THÔNG TIN TỬ VONG</h6>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">Ngày tử vong</div>
                            <div class="col-3">
                              <input type="date" class="form-control form-control-custom" />
                            </div>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">Nguyên nhân tử vong</div>
                            <div class="col-3">
                              <select class="form-control form-control-custom">
                                <option value>Tai nạn</option>
                                <option value>Sốc thuốc</option>
                              </select>
                            </div>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">Tình trạng tử vong</div>
                            <div class="col-3">
                              <select class="form-control form-control-custom">
                                <option value>Tại chỗ</option>
                                <option value>Trước lúc đến</option>
                                <option value>Trong 24h</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer"></div>
                      </div>
                    </div>
                    <div id="chuyenVien" style="display: none;">
                      <div class="card card-custom">
                        <div class="card-body">
                          <div class="row">
                            <h6 style="color: #007944;">THÔNG TIN CHUYỂN VIỆN</h6>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">Tuyến chuyển</div>
                            <div class="col-3">
                              <select class="form-control form-control-custom">
                                <option value>Tuyến trên</option>
                                <option value>Tuyến dưới</option>
                              </select>
                            </div>
                            <div class="col-1">Lý do</div>
                            <div class="col-6">
                              <input type="text" class="form-control form-control-custom" />
                            </div>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">
                              <label for>Dấu hiệu lâm sàng</label>
                            </div>
                            <div class="col-10">
                              <input type="text" class="form-control form-control-custom" />
                            </div>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">
                              <label for>Các xét nghiệm</label>
                            </div>
                            <div class="col-10">
                              <input type="text" class="form-control form-control-custom" />
                            </div>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">
                              <label for>Thuốc đã dùng</label>
                            </div>
                            <div class="col-10">
                              <input type="text" class="form-control form-control-custom" />
                            </div>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">
                              <label for>Tình trạng người bệnh</label>
                            </div>
                            <div class="col-10">
                              <input type="text" class="form-control form-control-custom" />
                            </div>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">
                              <label for>Hướng điều trị</label>
                            </div>
                            <div class="col-10">
                              <input type="text" class="form-control form-control-custom" />
                            </div>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">
                              <label for>Phương tiện vận chuyển</label>
                            </div>
                            <div class="col-10">
                              <input type="text" class="form-control form-control-custom" />
                            </div>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">
                              <label for>Người đưa đi</label>
                            </div>
                            <div class="col-10">
                              <input type="text" class="form-control form-control-custom" />
                            </div>
                          </div>
                          <div class="row mt-1">
                            <div class="col-2">
                              <label for>Chuyển tuyến lúc</label>
                            </div>
                            <div class="col-10">
                              <input type="text" class="form-control form-control-custom" />
                            </div>
                          </div>
                        </div>
                        <div class="card-footer"></div>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="row float-right mt-2">
                      <button class="btn btn-success mr-2 btn-custom btn-sm" style="width:82px; height:32px"
                        onclick="luuKetLuan()">Lưu</button>

                      <button class="btn btn-success mr-2 btn-custom btn-sm"
                        style="width:82px; height:32px">Sửa</button>
                      <div class="input-group mb-3 div-in">
                        <button class="btn btn-success mr-2 btn-in btn-sm" style="width:82px; height:32px">In</button>
                        <div class="input-group-append input-group-append-custom">
                          <select class="select-custom" name id>
                            <option class="option-custom" value>In đơn thuốc</option>
                            <option class="option-custom" value>In phiếu vào viện</option>
                            <option class="option-custom" value>In phiếu chuyển viện</option>
                            <option class="option-custom" value>In bảng kê chi phí</option>
                          </select>
                        </div>
                      </div>
                      <button class="btn btn-success mr-2 btn-custom btn-sm" data-toggle="modal"
                        data-target="#exampleModal2" style="height: 32px;">
                        Kết thúc
                        khám
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End kết luận -------------------------->

              <!-- Lịch sử khám ---------------->
              <div id="history" class="tab-pane fade">
                <div class="card card-custom min-height-85-vh" style="margin-top: 20px;">
                  <div class="card-body row">
                    <!-- Lịch sử khám col left ----------------->
                    <div class="col-4" style="overflow-x:scroll">
                      <table class="table font-13">
                        <thead>
                          <tr>
                            <th scope="col" class="font-13 min-width-100">Mã phiếu khám</th>
                            <th scope="col" class="font-13 min-width-100">Phòng khám</th>
                            <th scope="col" class="font-13 min-width-100">Ngày khám</th>
                            <th scope="col" class="font-13 min-width-100">Ngày kết thúc</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colspan="4">
                              <input class="form-control" type="text" placeholder="Tìm kiếm theo Mã phiếu khám" />
                            </td>
                          </tr>
                          <tr class="pointer">
                            <td class>TC12345</td>
                            <td class>Nội 2</td>
                            <td class>10/10/2019</td>
                            <td class>10/10/2019</td>
                          </tr>
                          <tr class="pointer">
                            <td class>TC12345</td>
                            <td class>Nội 2</td>
                            <td class>10/10/2019</td>
                            <td class>10/10/2019</td>
                          </tr>
                          <tr class="pointer">
                            <td class>TC12345</td>
                            <td class>Nội 2</td>
                            <td class>10/10/2019</td>
                            <td class>10/10/2019</td>
                          </tr>
                          <tr class="pointer">
                            <td class>TC12345</td>
                            <td class>Nội 2</td>
                            <td class>10/10/2019</td>
                            <td class>10/10/2019</td>
                          </tr>
                          <tr class="pointer">
                            <td class>TC12345</td>
                            <td class>Nội 2</td>
                            <td class>10/10/2019</td>
                            <td class>10/10/2019</td>
                          </tr>
                          <tr class="pointer">
                            <td class>TC12345</td>
                            <td class>Nội 2</td>
                            <td class>10/10/2019</td>
                            <td class>10/10/2019</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <!-- End Lịch sử khám col left ----------------->
                    <!-- Lịch sử khám col right ----------------->
                    <div class="col-8 lich-su-kham">
                      <ul class="nav nav-tabs nav-pills" role="tablist">
                        <li class="nav-item">
                          <a class="nav-link text-label" aria-selected="true" data-toggle="tab" href="#tong_quan">
                            <span>Tổng quan</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-label" data-toggle="tab" href="#thuoc">
                            <span>Thuốc</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-label" data-toggle="tab" href="#xet_nghiem">
                            <span>Xét nghiệm</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-label" data-toggle="tab" href="#cdha_tdcn">
                            <span>CDHA & TDCN</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-label" data-toggle="tab" href="#phau_thuat_thu_thuat">
                            <span>PTTT</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-label" data-toggle="tab" href="#giai_phau_benh">
                            <span>Giải phẫu bệnh</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-label" data-toggle="tab" href="#khang_sinh_do">
                            <span>Kháng sinh đồ</span>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link text-label" data-toggle="tab" href="#qua_trinh_dieu_tri">
                            <span>Quá trình điều trị</span>
                          </a>
                        </li>
                      </ul>
                      <div class="tab-content col-12">
                        <div id="tong_quan" class="tab-pane fade show active">
                          <div class="row mt-2">
                            <div class="col-2 margin-right-30">
                              <label class="text-label">
                                Ngày
                                khám:
                              </label>
                            </div>
                            <div class="col-3">
                              <input id="datetimepicker" type="text" class="form-control form-control-custom"/>
                            </div>
                            <div class="col-2">
                              <label class="text-label">Bác sĩ khám:</label>
                            </div>
                            <div class="col-4">
                              <select name id class="form-control form-control-custom">
                                <option value='1'>Bác sĩ 1</option>
                                <option value='2'>Bác sĩ 2</option>
                                <option value='3'>Bác sĩ 3</option>
                              </select>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-2 margin-right-30">
                              <label class="text-label">
                                Lý
                                do
                                khám:
                              </label>
                            </div>
                            <div class="col-9">
                              <div class="form-control form-control-custom">Đau bụng</div>
                            </div>
                          </div>

                          <div class="row mt-2">
                            <div class="col-2 margin-right-30">
                              <label class="text-label">
                                Bệnh
                                sử:
                              </label>
                            </div>
                            <div class="col-9">
                              <span class="form-control">
                                Bệnh nhân đi ngoài phân đen,đầy
                                bụng-->khám
                              </span>
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
                              <span class="form-control">
                                Viêm dạ dày trào ngược thực
                                quản/Trĩ
                                nội
                                độ I-II
                              </span>
                            </div>
                          </div>

                          <div class="row mt-2">
                            <div class="col-2 margin-right-30">
                              <label class="text-label">
                                Toàn
                                thân:
                              </label>
                            </div>
                            <div class="col-9">
                              <span class="form-control">
                                Thể trạng trung bình, da niêm mạc
                                bình
                                thường không phù, không xuất huyết dưới da
                              </span>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-2 margin-right-30">
                              <label class="text-label">
                                Bộ
                                phận:
                              </label>
                            </div>
                            <div class="col-9">
                              <span class="form-control">
                                - Tim nhịp đều - Phổi không có
                                ral -
                                Bụng
                                không chướng, gan lá lách không sờ thấy, không có điểm
                                đau
                                khu
                                trú - Các bộ phận khác hiện tại không có gì đặc
                                biệt
                              </span>
                            </div>
                          </div>

                          <div class="row mt-2">
                            <div class="col-2 margin-right-30">
                              <label class="text-label">
                                Kết
                                quả
                                CLS:
                              </label>
                            </div>
                            <div class="col-9">
                              <span class="form-control">a</span>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-2 margin-right-30">
                              <label class="text-label">
                                Chẩn
                                đoán:
                              </label>
                            </div>
                            <div class="col-9">
                              <span class="form-control">J20 Viêm phế quản cấp</span>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-2 margin-right-30">
                              <label class="text-label">
                                Hướng
                                điều
                                trị:
                              </label>
                            </div>
                            <div class="col-9">
                              <span class="form-control">Cấp toa cho về</span>
                            </div>
                          </div>
                          <div class="row mt-2">
                            <div class="col-2 margin-right-30">
                              <label class="text-label">
                                Kết
                                luận:
                              </label>
                            </div>
                            <div class="col-9">
                              <span class="form-control">
                                J20 Viêm phế quản cấp; cấp toa
                                cho
                                về
                              </span>
                            </div>
                          </div>
                        </div>
                        <div id="thuoc" class="tab-pane fade">
                          <div class="col-12">
                            <div class="panel panel-default">
                              <div class="panel-heading accordion-toggle question-toggle collapsed"
                                style="margin-bottom: -20px;">
                                <table class="table table-hover font-13">
                                  <thead>
                                    <tr>
                                      <th class="text-center">STT</th>
                                      <th class>Đơn thuốc</th>
                                      <th class>Tên thuốc</th>
                                      <th class="text-center">Hàm lượng</th>
                                      <th class="text-center">Hoạt chất</th>
                                      <th class="text-center">Số lượng</th>
                                      <th class="text-center">Đơn vị</th>
                                      <th class>Cách dùng</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td class="text-center"></td>
                                      <td colspan="7" class="font-600">
                                        <input type="checkbox" /> Phòng khám TMH
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="text-center"></td>
                                      <td colspan="7" class="font-600">
                                        &emsp;
                                        <input type="checkbox" /> Đơn thuốc
                                        ngày:
                                        20/11/2019
                                      </td>
                                    </tr>
                                    <tr>
                                      <td class="text-center">1</td>
                                      <td></td>
                                      <td>&emsp;amocilin</td>
                                      <td class="text-center">500mg</td>
                                      <td class="text-center">amoxilin</td>
                                      <td class="text-center">5</td>
                                      <td class="text-center">viên</td>
                                      <td>uống sau ăn</td>
                                    </tr>
                                    <tr>
                                      <td class="text-center">2</td>
                                      <td class="text-center"></td>
                                      <td>&emsp;panadol</td>
                                      <td class="text-center">500mg</td>
                                      <td class="text-center">paracetamol</td>
                                      <td class="text-center">5</td>
                                      <td class="text-center">viên</td>
                                      <td>uống sau ăn</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="xet_nghiem" class="tab-pane fade">
                          <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                              aria-labelledby="pills-home-tab">
                              <table class="table table-bordered tree-basic font-14">
                                <thead>
                                  <tr>
                                    <th>Ngày có kết quả</th>
                                    <th>Chỉ số</th>
                                    <th>Kết quả xét nghiệm</th>
                                    <th>Chỉ số bình thường</th>
                                    <th>Đơn vị tính</th>
                                    <th>Ngày chỉ định</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr class="treegrid-1 expanded">
                                    <td class="font-700" colspan="6">
                                      Phòng khám ung
                                      bướu
                                    </td>
                                  </tr>
                                  <tr class="treegrid-2 treegrid-parent-1">
                                    <td class="font-700" colspan="6">
                                      <input type="checkbox" /> 28/10/2019
                                    </td>
                                  </tr>
                                  <tr class="treegrid-3 treegrid-parent-2">
                                    <td class="font-700" colspan="6">
                                      <input type="checkbox" /> Sinh hóa máu
                                    </td>
                                  </tr>
                                  <tr class="treegrid-4 treegrid-parent-3">
                                    <td>
                                      <input type="checkbox" /> Định lượng Glucose
                                      (Máu)
                                    </td>
                                    <td></td>
                                    <td class="color-red">4.0</td>
                                    <td>(4.10 - 5.90)</td>
                                    <td>mmol/l</td>
                                    <td>20/10/2019</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                              aria-labelledby="pills-profile-tab">...</div>
                            <div class="tab-pane fade" id="pills-contact" role="tabpanel"
                              aria-labelledby="pills-contact-tab">...</div>
                          </div>
                        </div>
                        <div id="cdha_tdcn" class="tab-pane fade">Tổng quan3</div>
                        <div id="phau_thuat_thu_thuat" class="tab-pane fade">Tổng quan4</div>
                        <div id="giai_phau_benh" class="tab-pane fade">Tổng quan5</div>
                        <div id="khang_sinh_do" class="tab-pane fade">Tổng quan6</div>
                        <div id="qua_trinh_dieu_tri" class="tab-pane fade">Tổng quan7</div>
                      </div>
                    </div>
                    <!-- End Lịch sử khám col right ----------------->
                  </div>
                </div>
              </div>
              <!-- End Lịch sử khám ---------------->

              <!-- Khám bệnh ---------------------->
              <div id="home" class="tab-pane active">
                <div class="row mt-3">
                  <div class="col-9 card min-height-85-vh card-custom">
                    <div class="card-body">
                      <div class="row mt-2">
                        <div class="col-2 margin-right-30">
                          <label class="text-label">Ngày khám:</label>
                        </div>
                        <div class="col-3">
                          <input id="datetimepicker" type="text" class="form-control form-control-custom" :value="item_select ? item_select.ngay_kham :''"/>
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
                          <div class="form-control form-control-custom">{{item_select ? item_select.ly_do_kham : ''}}</div>
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
                          <button class="btn btn-book" data-toggle="tooltip" data-placement="right" title="Mẫu bệnh sử">
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
                          <button class="btn btn-book" data-toggle="tooltip" data-placement="right"
                            title="Mẫu tiền sử bệnh">
                            <i class="fa fa-address-book" aria-hidden="true"></i>
                          </button>
                        </div>
                      </div>

                      <div class="row mt-2">
                        <div class="col-2 margin-right-30">
                          <label class="text-label">Toàn thân:</label>
                        </div>
                        <div class="col-9">
                          <textarea class="form-control"
                            rows="2">Thể trạng trung bình, da niêm mạc bình thường không phù, không xuất huyết dưới da</textarea>
                        </div>
                        <div class="col-1 padding-left-0 line-height-3">
                          <button class="btn btn-book" data-toggle="modal" data-target=".modal-mau-toan-than">
                            <i class="fa fa-address-book" aria-hidden="true" data-toggle="tooltip"
                              data-placement="right" title="Mẫu toàn thân"></i>
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
                        <button class="btn btn-success mr-2 btn-custom btn-sm"
                          style="height: 35px; width: 90px">Lưu</button>
                        <button class="btn btn-success mr-2 btn-custom btn-sm"
                          style="height: 35px; width: 90px">Sửa</button>

                        <div class="input-group mb-3 div-in">
                          <button class="btn btn-success mr-2 btn-in btn-sm"
                            style="height: 35px; width: 90px">In</button>
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

                  <!-- khám bệnh col right ------------------>
                  <div class="col-3 div-left mt-4">
                    <div class="row">
                      <div class="col-4 margin-20">
                        <label class="text-label">Mạch:</label>
                      </div>
                      <div class="col-4 margin-20">
                        <input type="text" class="form-control" value="170" />
                      </div>
                      <div class="col-3 form-control-custom">lần/phút</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-4 margin-20">
                        <label class="text-label">Nhiệt độ:</label>
                      </div>
                      <div class="col-4 margin-20">
                        <input type="text" class="form-control" />
                      </div>
                      <div class="col-3 form-control-custom">Độ C</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-4 margin-20">
                        <label class="text-label">Huyết áp:</label>
                      </div>
                      <div class="col-4 margin-20">
                        <input type="text" class="form-control" value="140/80" />
                      </div>
                      <div class="col-3 form-control-custom">mmHg</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-4 margin-20">
                        <label class="text-label">Nhịp thở:</label>
                      </div>
                      <div class="col-4 margin-20">
                        <input type="text" class="form-control" value="170" />
                      </div>
                      <div class="col-3 form-control-custom">lần/phút</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-4 margin-20">
                        <label class="text-label">Cân nặng:</label>
                      </div>
                      <div class="col-4 margin-20">
                        <input type="text" class="form-control" value="59.0" />
                      </div>
                      <div class="col-3 form-control-custom">Kg</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-4 margin-20">
                        <label class="text-label">Chiều cao:</label>
                      </div>
                      <div class="col-4 margin-20">
                        <input type="text" class="form-control" value="157" />
                      </div>
                      <div class="col-3 form-control-custom">cm</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-4 margin-20">
                        <label class="text-label">SPO2:</label>
                      </div>
                      <div class="col-4 margin-20">
                        <input type="text" class="form-control" value="157" />
                      </div>
                      <div class="col-3 form-control-custom">%</div>
                    </div>
                    <div class="row mt-2">
                      <div class="col-4 margin-20">
                        <label class="text-label">BMI:</label>
                      </div>
                      <div class="col-4 margin-20">
                        <input type="text" class="form-control" value="20,28" />
                      </div>
                    </div>
                  </div>
                  <!-- end khám bệnh col right ---------------->
                </div>
              </div>
              <!-- End Khám bệnh ---------------------->

              <!-- Xem kết quả ------------------------>
              <div id="ket_qua" class="tab-pane fade">
                <div class="col-12 mt-2 font-14 card card-custom min-height-85-vh">
                  <div class="card-body">
                    <ul class="nav nav-tabs nav-tabs-custom1 mb-3" id="pills-tab" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                          aria-controls="pills-home" aria-selected="true">Xét nghiệm</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                          aria-controls="pills-profile" aria-selected="false">CDHA</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                          aria-controls="pills-contact" aria-selected="false">PTTT</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                          aria-controls="pills-contact" aria-selected="false">Kháng sinh đồ</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                          aria-controls="pills-contact" aria-selected="false">Giải phẫu bệnh</a>
                      </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab">
                        <table class="table table-bordered tree-basic">
                          <thead>
                            <tr>
                              <th>Ngày có kết quả</th>
                              <th>Chỉ số</th>
                              <th>Kết quả xét nghiệm</th>
                              <th>Chỉ số bình thường</th>
                              <th>Đơn vị tính</th>
                              <th>Ngày chỉ định</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="treegrid-1 expanded">
                              <td class="font-700" colspan="6">Phòng khám ung bướu</td>
                            </tr>
                            <tr class="treegrid-2 treegrid-parent-1">
                              <td class="font-700" colspan="6">
                                <input type="checkbox" />
                                28/10/2019
                              </td>
                            </tr>
                            <tr class="treegrid-3 treegrid-parent-2">
                              <td class="font-700" colspan="6">
                                <input type="checkbox" />
                                Sinh
                                hóa máu
                              </td>
                            </tr>
                            <tr class="treegrid-4 treegrid-parent-3">
                              <td>
                                <input type="checkbox" /> Định lượng Glucose (Máu)
                              </td>
                              <td></td>
                              <td class="color-red">4.0</td>
                              <td>(4.10 - 5.90)</td>
                              <td>mmol/l</td>
                              <td>20/10/2019</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        ...</div>
                      <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        ...</div>
                    </div>
                  </div>
                  <div class="card-footer text-right">
                    <button class="btn btn-success btn-custom btn-in-lai-ket-qua" data-toggle="modal" data-target="#kq">
                      In lại kết
                      quả
                    </button>
                  </div>
                </div>
              </div>
              <!-- End Xem kết quả ------------------------>
              <!-- Phòng thủ thuật ----------------------->
              <div id="phong_thu_thuat" class="tab-pane fade">
                <div class="col-12 mt-2 font-13 card card-custom min-height-85-vh">
                  <div class="card-body">
                    <ul class="nav nav-tabs mb-3 nav-tabs-custom1 font-14" id="pills-tab" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-thong-tin-pttt"
                          role="tab" aria-controls="pills-home" aria-selected="true">Thông tin PT/TT</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#e-kip-thuc-hien" role="tab"
                          aria-controls="pills-profile" aria-selected="false">Ê kíp thực hiện</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-tuong-trinh"
                          role="tab" aria-controls="pills-contact" aria-selected="false">Tường trình PT/TT</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-thuoc-vtyt"
                          role="tab" aria-controls="pills-contact" aria-selected="false">Thuốc & VTYT</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-luoc-do" role="tab"
                          aria-controls="pills-contact" aria-selected="false">Lược đồ PT/TT</a>
                      </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                      <!-- Thông tin PT/TT -->
                      <div class="tab-pane fade show active font-14" id="pills-thong-tin-pttt" role="tabpanel"
                        aria-labelledby="pills-home-tab">
                        <div class="row">
                          <div class="col-2 max-width-12">
                            <label for>Tên dịch vụ</label>
                          </div>
                          <div class="col-4">
                            <label for class="form-control form-control-custom">Tên dịch vụ</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-2 max-width-12">
                            <label for>Nơi thực hiện</label>
                          </div>
                          <div class="col-4">
                            <input type="text" class="form-control form-control-custom" />
                          </div>
                        </div>
                        <div class="row mt-1 mb-1">
                          <div class="col-2 max-width-12">
                            <label for>
                              Thời gian
                              PT/TT
                            </label>
                          </div>
                          <div class="col-2">
                            <input type="datetime-local" class="form-control form-control-custom" />
                          </div>
                          <div class="col-1 text-right">
                            <label for>đến</label>
                          </div>
                          <div class="col-2">
                            <input type="datetime-local" class="form-control form-control-custom" />
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-2 max-width-12">
                            <label for>
                              Chẩn đoán trước
                              PT/TT
                            </label>
                          </div>
                          <div class="col-3">
                            <input type="text" class="form-control form-control-custom" />
                          </div>
                          <div class="col-7">
                            <input type="text" class="form-control form-control-custom" />
                          </div>
                        </div>
                        <div class="row mt-1">
                          <div class="col-2 max-width-12">
                            <label for>
                              Chẩn đoán sau
                              PT/TT
                            </label>
                          </div>
                          <div class="col-3">
                            <input type="text" class="form-control form-control-custom" />
                          </div>
                          <div class="col-7">
                            <input type="text" class="form-control form-control-custom" />
                          </div>
                        </div>
                        <div class="row mt-1">
                          <div class="col-2 max-width-12">
                            <label for>
                              Phương pháp
                              PT/TT
                            </label>
                          </div>
                          <div class="col-10">
                            <input type="text" class="form-control form-control-custom" />
                          </div>
                        </div>
                        <div class="row mt-1">
                          <div class="col-2 max-width-12">
                            <label for>
                              Phương pháp vô
                              cảm
                            </label>
                          </div>
                          <div class="col-4">
                            <input type="text" class="form-control form-control-custom" />
                          </div>
                          <div class="col-1 text-right">
                            <label for>Phân loại</label>
                          </div>
                          <div class="col-5">
                            <input type="text" class="form-control form-control-custom" />
                          </div>
                        </div>
                        <div class="row mt-1">
                          <div class="col-2 max-width-12">
                            <label for>Ngày rút chỉ</label>
                          </div>
                          <div class="col-2">
                            <input type="datetime-local" class="form-control form-control-custom" />
                          </div>
                          <div class="col-1 text-right">
                            <label for>Ngày cắt chỉ</label>
                          </div>
                          <div class="col-2">
                            <input type="datetime-local" class="form-control form-control-custom" />
                          </div>
                        </div>
                        <div class="row mt-1">
                          <div class="col-2 max-width-12">
                            <label for>Chế độ PT/TT</label>
                          </div>
                          <div class="col-2">
                            <select name id class="form-control form-control-custom">
                              <option value></option>
                            </select>
                          </div>
                          <div class="col-1 text-right">
                            <label for>Tai biến</label>
                          </div>
                          <div class="col-2">
                            <select name id class="form-control form-control-custom">
                              <option value></option>
                            </select>
                          </div>
                          <div class="col-1 text-right">
                            <label for>Tử vong</label>
                          </div>
                          <div class="col-2">
                            <select class="form-control form-control-custom">
                              <option value></option>
                            </select>
                          </div>
                        </div>
                        <div class="row mt-1">
                          <div class="col-2 max-width-12">
                            <label for>Ca PT/TT chính</label>
                          </div>
                          <div class="col-5">
                            <input type="text" class="form-control form-control-custom" />
                          </div>
                        </div>
                      </div>
                      <!-- Ê kíp thực hiện -->
                      <div class="tab-pane fade" id="e-kip-thuc-hien" role="tabpanel"
                        aria-labelledby="pills-profile-tab">
                        <div class="row">
                          <div class="col-2 max-width-11">Nhân viên</div>
                          <div class="col-3">
                            <select class="form-control form-control-custom">
                              <option value></option>
                              <option value>Nhân viên 1</option>
                              <option value>Nhân viên 2</option>
                            </select>
                          </div>
                          <div class="col-1">Vai trò</div>
                          <div class="col-3">
                            <select class="form-control form-control-custom">
                              <option value></option>
                              <option value>Vai trò 1</option>
                              <option value>Vai trò 2</option>
                            </select>
                          </div>
                        </div>
                        <div class="row mt-1">
                          <div class="col-2 max-width-11"></div>
                          <div class="col-3">
                            <select class="form-control form-control-custom">
                              <option value></option>
                              <option value>Nhân viên 1</option>
                              <option value>Nhân viên 2</option>
                            </select>
                          </div>
                          <div class="col-1"></div>
                          <div class="col-3">
                            <select class="form-control form-control-custom">
                              <option value></option>
                              <option value>Vai trò 1</option>
                              <option value>Vai trò 2</option>
                            </select>
                          </div>
                        </div>
                        <div class="row mt-1">
                          <div class="col-2 max-width-11"></div>
                          <div class="col-3">
                            <select class="form-control form-control-custom">
                              <option value></option>
                              <option value>Nhân viên 1</option>
                              <option value>Nhân viên 2</option>
                            </select>
                          </div>
                          <div class="col-1"></div>
                          <div class="col-3">
                            <select class="form-control form-control-custom">
                              <option value></option>
                              <option value>Vai trò 1</option>
                              <option value>Vai trò 2</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <!-- Tường trình PT/TT -->
                      <div class="tab-pane fade" id="pills-tuong-trinh" role="tabpanel"
                        aria-labelledby="pills-contact-tab">
                        <div class="card">
                          <div class="card-header">
                            <div class="row">
                              <div class="col-2 max-width-12">Mẫu tường trình</div>
                              <div class="col-3">
                                <select class="form-control form-control-custom">
                                  <option value></option>
                                  <option value>Mẫu tường trình 1</option>
                                  <option value>Mẫu tường trình 2</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Thuốc & VTYT -->
                      <div class="tab-pane fade" id="pills-thuoc-vtyt" role="tabpanel"
                        aria-labelledby="pills-contact-tab">
                        <div class="mt-3 card card-custom min-height-65-vh">
                          <div class="card-body">
                            <table class="table table-hover font-14">
                              <thead>
                                <tr>
                                  <th class="text-center">STT</th>
                                  <th></th>
                                  <th class="text-center">Kho thuốc</th>
                                  <th class>Tên thuốc</th>
                                  <th class="text-center">Hàm lượng</th>
                                  <th class="text-center">Hoạt chất</th>
                                  <th class="text-center">Số lượng</th>
                                  <th class="text-center">Đơn giá</th>
                                  <th class="text-center">Đơn vị</th>
                                  <th class>Cách dùng</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td class="text-center">1</td>
                                  <td class="text-center align-middle">
                                    <input type="checkbox" />
                                  </td>
                                  <td class="text-center">tủ trực TMH</td>
                                  <td>amocilin</td>
                                  <td class="text-center">500mg</td>
                                  <td class="text-center">amoxilin</td>
                                  <td class="text-center">5</td>
                                  <td class="text-center">25.000</td>
                                  <td class="text-center">viên</td>
                                  <td>uống sau ăn</td>
                                </tr>
                                <tr>
                                  <td class="text-center">2</td>
                                  <td class="text-center align-middle">
                                    <input type="checkbox" />
                                  </td>
                                  <td class="text-center">nhà thuốc</td>
                                  <td>panadol</td>
                                  <td class="text-center">500mg</td>
                                  <td class="text-center">paracetamol</td>
                                  <td class="text-center">5</td>
                                  <td class="text-center">25.000</td>
                                  <td class="text-center">viên</td>
                                  <td>uống sau ăn</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div class="card-footer">
                            <div class="ke-thuoc">
                              <div class="row mt-2 font-13">
                                <div class="col-2">
                                  <div class="form-group">
                                    <label for>Kho thuốc:</label>
                                    <select name id class="form-control form-control-custom">
                                      <option value>Kho A</option>
                                      <option value>Kho B</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="col-3">
                                  <div class="form-group">
                                    <label for>Tên thuốc</label>
                                    <input type="text" class="form-control form-control-custom" />
                                  </div>
                                </div>
                                <div class="col-1">
                                  <div class="form-group">
                                    <label for>Đơn vị</label>
                                    <input id="ke_thuocDonVi" type="text" class="form-control form-control-custom"
                                      readonly value="Viên" />
                                  </div>
                                </div>
                                <div class="col-2 max-width-11">
                                  <div class="form-group">
                                    <label for>Số Lượng</label>
                                    <input id="ke_thuocSoLuong" type="number"
                                      class="form-control form-control-custom" />
                                  </div>
                                </div>
                                <div class="col-2 max-width-11">
                                  <div class="form-group">
                                    <label for>Lượng dùng</label>
                                    <input id="ke_thuocLuongDung" type="number"
                                      class="form-control form-control-custom" />
                                  </div>
                                </div>
                                <div class="col-2 max-width-11">
                                  <div class="form-group">
                                    <label for>Số lần</label>
                                    <input id="ke_thuocSoLan" type="number" class="form-control form-control-custom" />
                                  </div>
                                </div>
                                <div class="col-2">
                                  <div class="form-group">
                                    <label for>sử dụng</label>
                                    <input id="ke_thuocSuDung" type="text" class="form-control form-control-custom" />
                                  </div>
                                </div>
                              </div>
                              <div class="row height-35">
                                <div class="col-2 text-right font-13">
                                  <label for>
                                    Cách
                                    dùng:
                                  </label>
                                </div>
                                <div class="col-10">
                                  <div class="form-group">
                                    <input id="ke_thuocCachDung" type="text" class="form-control form-control-custom" />
                                  </div>
                                </div>
                              </div>
                              <div class="row height-35">
                                <div class="col-2 text-right font-13">
                                  <label for>
                                    Lời
                                    dặn
                                    bác sĩ:
                                  </label>
                                </div>
                                <div class="col-10">
                                  <div class="form-group">
                                    <input type="text" class="form-control form-control-custom" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Lược đồ PT/TT -->
                      <div class="tab-pane fade" id="pills-luoc-do" role="tabpanel" aria-labelledby="pills-contact-tab">
                        Lược đồ PT/TT</div>
                    </div>
                  </div>
                  <div class="card-footer text-right">
                    <button class="btn btn-success btn-custom mr-1" style="width:93px;">Lưu</button>
                    <button class="btn btn-success btn-custom mr-1" style="width:93px;">Duyệt</button>
                    <button class="btn btn-success btn-custom mr-1" style="width:93px;">Sửa</button>
                    <button class="btn btn-success btn-custom mr-1" style="width:93px;">Xóa</button>
                    <button class="btn btn-success btn-custom" style="width:93px;">In</button>
                  </div>
                </div>
              </div>
              <!-- End Phòng thủ thuật ----------------------->
              <!-- Bệnh án ngoại trú ---------------------->
              <div id="benh_an_ngoai_tru" class="tab-pane fade">
                <div class="card card-custom min-height-85-vh">
                  <div class="card-body font-14">
                    <div class="row">
                      <h6 class style="color:#007944;">THÔNG TIN BỆNH ÁN</h6>
                    </div>
                    <div class="row">
                      <div class="col-2">
                        <label for>Bệnh án</label>
                      </div>
                      <div class="col-3">
                        <select class="form-control form-control-custom">
                          <option value></option>
                          <option value>Bệnh án viêm gan</option>
                          <option value>Bệnh án tai mũi họng</option>
                          <option value>Bệnh án ung bướu</option>
                        </select>
                      </div>
                      <div class="col-2 text-right">
                        <label for>Số lưu trữ</label>
                      </div>
                      <div class="col-2">
                        <input type="number" class="form-control form-control-custom" />
                      </div>
                    </div>
                    <div class="row mt-1">
                      <div class="col-2">
                        <label for>Bệnh chính</label>
                      </div>
                      <div class="col-3">
                        <textarea class="form-control" rows="2"></textarea>
                      </div>
                      <div class="col-5">
                        <textarea class="form-control" rows="2"></textarea>
                      </div>
                    </div>
                    <div class="row mt-1">
                      <div class="col-2">
                        <label for>Bệnh kèm theo</label>
                      </div>
                      <div class="col-3">
                        <textarea class="form-control" rows="2"></textarea>
                      </div>
                      <div class="col-5">
                        <textarea class="form-control" rows="2"></textarea>
                      </div>
                    </div>
                    <div class="row mt-1">
                      <div class="col-2">
                        <label for>Ngày mở BA</label>
                      </div>
                      <div class="col-3">
                        <input type="date" class="form-control form-control-custom" />
                      </div>
                      <div class="col-2 text-right">
                        <label for>Ngày đóng BA</label>
                      </div>
                      <div class="col-3">
                        <input type="date" class="form-control form-control-custom" />
                      </div>
                    </div>
                    <div class="row mt-1">
                      <div class="col-2">
                        <label for>Bệnh kèm theo</label>
                      </div>
                      <div class="col-8">
                        <textarea class="form-control" rows="2"></textarea>
                      </div>
                    </div>
                    <div class="row mt-1">
                      <div class="col-2">
                        <label for>Bác sĩ</label>
                      </div>
                      <div class="col-3">
                        <select class="form-control form-control-custom">
                          <option value></option>
                          <option value>BS.Nguyễn Văn An</option>
                        </select>
                      </div>
                    </div>

                    <div class="row mt-2">
                      <h6 class style="color:#007944;">THÔNG TIN BỆNH MÃN TÍNH</h6>
                    </div>
                    <div class="row mt-1">
                      <div class="col-2">
                        <label for>Tên bệnh</label>
                      </div>
                      <div class="col-3">
                        <textarea class="form-control" rows="2"></textarea>
                      </div>
                      <div class="col-5">
                        <textarea class="form-control" rows="2"></textarea>
                      </div>
                    </div>
                    <div class="row mt-1">
                      <div class="col-2">
                        <label for>Ghi chú</label>
                      </div>
                      <div class="col-8">
                        <textarea class="form-control" rows="2"></textarea>
                      </div>
                    </div>
                    <div class="row mt-1">
                      <div class="col-2">
                        <label for>Khoa phòng</label>
                      </div>
                      <div class="col-3">
                        <select class="form-control form-control-custom">
                          <option value></option>
                          <option value>Phòng khám viêm gan</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="card-footer text-right">
                    <button class="btn btn-success btn-custom mr-1 btn-sm" style="width:90px;" data-toggle="modal"
                      data-target=".danhSachBANT">Danh sách</button>
                    <button class="btn btn-success btn-custom mr-1 btn-sm" style="width:90px;">Lưu</button>
                    <button class="btn btn-success btn-custom mr-1 btn-sm" style="width:90px;">In</button>
                    <button class="btn btn-success btn-custom mr-1 btn-sm" style="width:90px;">
                      Đóng
                      BA
                    </button>
                    <button class="btn btn-success btn-custom mr-1 btn-sm" style="width:90px;">Hủy</button>
                  </div>
                </div>
              </div>
              <!-- End Bệnh án ngoại trú ---------------------->

              <!-- Báo cáo ---------------------------->
              <div id="bao-cao" class="tab-pane fade">
                <div class="card card-custom min-height-85-vh">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-3 font-700" style="color: #007944;">TÊN MẪU BÁO CÁO</div>
                      <div class="col-1">Từ ngày</div>
                      <div class="col-3">
                        <input type="date" class="form-control form-control-custom" />
                      </div>
                      <div class="col-1">Đến ngày</div>
                      <div class="col-3">
                        <input type="date" class="form-control form-control-custom" />
                      </div>
                    </div>
                    <div class="row pointer color-blue">Báo cáo PTTT</div>
                    <div class="row pointer color-blue">Báo cáo bệnh khám bệnh</div>
                    <div class="row pointer color-blue">Báo cáo bệnh theo ICD10</div>
                    <div class="row pointer color-blue">Báo cáo CLS theo bác sĩ chỉ định</div>
                  </div>
                  <div class="card-footer text-right">
                    <button class="btn btn-success btn-custom mr-1">In</button>
                    <button class="btn btn-success btn-custom mr-1">Xuất Excel</button>
                  </div>
                </div>
              </div>
              <!-- End Báo cáo ---------------------------->
            </div>
            <!-- end Tabs content ------------------------->
          </div>
        </div>
      </div>
    </div>
    <!-- modal THUOC -->
    <div class="modal fade" id="chidinhthuoc" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog mw-100 w-75" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="form-group col-1">
                <label class="lable-text">Tự túc:</label>
                <input type="radio" checked class="form-control" />
              </div>
              <div class="form-group col-3">
                <label class="lable-text">Tên thuốc:</label>
                <select class="demo-default select-country">
                  <option value="Băng dính Urgo 5 x 5m">Băng dính Urgo 5 x 5m</option>
                  <option value="Fluorouracil 500mg/10ml(Biluracil) (Fluorouracil (5-FU))">
                    Fluorouracil
                    500mg/10ml(Biluracil) (Fluorouracil (5-FU))
                  </option>
                  <option value="Sancoba eye drops 5ml (Cyanocobalamin 0.02%)">
                    Sancoba eye drops 5ml
                    (Cyanocobalamin 0.02%)
                  </option>
                </select>
              </div>
              <div class="form-group col-1">
                <label class="lable-text">Đơn vị:</label>
                <input type="text" value="Viên" readonly="1" class="form-control" />
              </div>
              <div class="form-group col-2">
                <label class="lable-text">Cách dùng:</label>
                <select class="demo-default select-country">
                  <option value="1">Ngày 2 viện chia 2 lần sáng tối</option>
                  <option value="2">Ngày 1 viên sau ăn tối</option>
                  <option value="3">Ngày 1 viên vào buổi sáng</option>
                </select>
              </div>
              <div class="form-group col-2">
                <label class="lable-text">Số lượng:</label>
                <input type="text" value="1" class="form-control" />
              </div>
              <div class="form-group col-2">
                <label class="lable-text">Thành tiền:</label>
                <input type="text" value="8,468" readonly="1" class="form-control" />
              </div>
              <div class="form-group col-1">
                <label class="lable-text"></label>
                <button class="btn btn-success" onclick="addThuoc();">Thêm</button>
              </div>

              <table class="table table-fixed-chidinh" id="chi-dinh-thuoc">
                <thead>
                  <tr>
                    <th scope="col" class="col-1">Tự túc</th>
                    <th scope="col" class="col-3">Tên thuốc</th>
                    <th scope="col" class="col-1">Đơn vị</th>
                    <th scope="col" class="col-2">Cách dùng</th>
                    <th scope="col" class="col-2">Số lượng kê</th>

                    <th scope="col" class="col-2">Thành tiền</th>
                    <th scope="col" class="col-1"></th>
                  </tr>
                </thead>
                <tbody id="body-chi-dinh-thuoc">
                  <tr id="ke-thuoc-1">
                    <td class="col-1">
                      <input type="radio" checked class="form-control" />
                    </td>
                    <td class="col-3">Abrocto 10ml (Ambroxol)</td>
                    <td class="col-1">Ống</td>

                    <td class="col-2">Ngày 2 viên chia 2 lần sáng tối</td>
                    <td class="col-2">
                      <input type="text" value="1" class="form-control" />
                    </td>
                    <td class="col-2">8.346</td>
                    <td class="col-1">
                      <span class="fa fa-trash" onclick="removeThuoc(1);"></span>
                    </td>
                  </tr>
                  <tr id="ke-thuoc-2">
                    <td class="col-1">
                      <input type="radio" class="form-control" />
                    </td>
                    <td class="col-3">Băng dính Urgo 5 x 5m</td>
                    <td class="col-1">Cái</td>

                    <td class="col-2"></td>
                    <td class="col-2">
                      <input type="text" value="1" class="form-control" />
                    </td>
                    <td class="col-2">8.346</td>
                    <td class="col-1">
                      <span class="fa fa-trash" onclick="removeThuoc(2);"></span>
                    </td>
                  </tr>
                  <tr id="ke-thuoc-3">
                    <td class="col-1">
                      <input type="radio" class="form-control" />
                    </td>
                    <td class="col-3">Abrocto 10ml (Ambroxol)</td>
                    <td class="col-1">Ống</td>

                    <td class="col-2">Ngày 2 viên chia 2 lần sáng tối</td>
                    <td class="col-2">
                      <input type="text" value="1" class="form-control" />
                    </td>
                    <td class="col-2">8.346</td>
                    <td class="col-1">
                      <span class="fa fa-trash" onclick="removeThuoc(3);"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal PTTT -->
    <div class="modal fade" id="chidinhpttt" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog mw-100 w-75" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="form-group col-8">
                <label class="lable-text">Tên phiếu:</label>
                <select id="select-country" class="demo-default" placeholder="Tên phiếu...">
                  <option value>Select a country...</option>
                  <option value="AF">
                    [PT] Phẫu thuật điều trị vết thương bàn tay bằng các vạt da tại
                    chỗ
                    (16.000.000)
                  </option>
                  <option value="AX">[TT] Đặt catheter tĩnh mạch trung tâm 01 nòng (7.000.000)</option>
                </select>
              </div>
              <div class="form-group col-4">
                <label class="lable-text">Địa điểm TT:</label>
                <div class="row">
                  <div class="col-6">
                    <input type="radio" name="optradio" checked class="form-group" /> Tại phòng
                  </div>
                  <div class="col-6">
                    <input type="radio" name="optradio" class="form-group" /> Chuyển đi
                  </div>
                </div>
              </div>

              <div class="form-group col-3">
                <label class="lable-text">Bp yêu cầu:</label>
                <select class="demo-default select-country">
                  <option value="Nội 2">Nội 2</option>
                </select>
              </div>

              <div class="form-group col-3">
                <label class="lable-text">Bs yêu cầu:</label>
                <select class="demo-default select-country">
                  <option value="Nguyễn Văn A">Nguyễn Văn A</option>
                  <option value="Nguyễn Văn B">Nguyễn Văn B</option>
                  <option value="Nguyễn Văn C">Nguyễn Văn C</option>
                </select>
              </div>

              <div class="form-group col-3">
                <label class="lable-text">Bp thực hiện:</label>
                <select class="demo-default select-country">
                  <option value="Phòng mổ 1">Phòng mổ 1</option>
                  <option value="Phòng mổ 2">Phòng mổ 2</option>
                  <option value="Phòng mổ 3">Phòng mổ 3</option>
                </select>
              </div>

              <div class="form-group col-3">
                <label class="lable-text">Ngày yêu cầu:</label>
                <input type="text" class="form-control datetimepicker" />
              </div>

              <div class="form-group col-4">
                <label class="lable-text">Giá thoả thuận:</label>
                <input type="text" class="form-control" value="15.000.000" />
              </div>

              <div class="form-group col-4">
                <label class="lable-text">PP gây mê:</label>
                <select class="demo-default select-country">
                  <option value="1">Phương pháp vô cảm toàn thân</option>
                  <option value="2">Phương pháp vô cảm bộ phận</option>
                  <option value="3">Tê ngoài màng cứng</option>
                </select>
              </div>

              <div class="form-group col-4">
                <label class="lable-text">Số lần:</label>
                <input type="text" class="form-control" value="1" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
            <button type="button" class="btn btn-warning">In cam kết</button>
            <button type="button" class="btn btn-success">Lưu</button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal XN -->
    <div class="modal fade" id="chidinhxn" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog mw-100 w-75" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="col-12">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-toggle="tab" href="#all-xn">Tất cả</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#hh-xn">Huyết học</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#hh-xn">Sinh hoá</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#hh-xn">SH nước tiểu</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#hh-xn">Miễn dịch</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#hh-xn">Vi sinh</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#hh-xn">Tế bào học</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#hh-xn">Mô bệnh học</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" href="#hh-xn">Sinh thiết</a>
                </li>
              </ul>
            </div>
            <div class="tab-content col-12">
              <div id="all-xn" class="tab-pane active">
                <div class="row" style="margin-top: 20px;">
                  <input type="text" id="search" placeholder="Tìm kiếm" class="form-control"
                    style="margin-bottom: 10px;" />
                  <table class="table table-fixed-chidinh" id="monTableau">
                    <thead>
                      <tr>
                        <th scope="col" class="col-7">Tên XN</th>
                        <th scope="col" class="col-4">Thành tiền</th>
                        <th scope="col" class="col-1">
                          <input type="checkbox" id="check_all_xn" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="col-7">
                          Tổng phân tích tế bào máu ngoại vi (bằng máy đếm
                          laser)
                          [24TS]
                        </td>
                        <td class="col-4">150.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">
                          Tổng phân tích tế bào máu ngoại vi (bằng máy đếm tổng
                          trở)
                          [18TS- bằng máy đếm tự động]
                        </td>
                        <td class="col-4">130.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">Định nhóm máu hệ ABO (Kỹ thuật trên giấy)</td>
                        <td class="col-4">85.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">Định nhóm máu hệ Rh(D) (Kỹ thuật phiến đá)</td>
                        <td class="col-4">90.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">Đo hoạt độ ALT (GPT) [Máu]</td>
                        <td class="col-4">65.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">Đo hoạt độ AST (GOT) [Máu]</td>
                        <td class="col-4">65.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">Định lượng Creatinin (máu)</td>
                        <td class="col-4">65.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">Định lượng Urê [Máu]</td>
                        <td class="col-4">65.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">Định lượng Glucose [Máu]</td>
                        <td class="col-4">65.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">
                          Đo hoạt độ GGT (Gama Glutamyl Transferase) [Máu] [Gama
                          GT]
                        </td>
                        <td class="col-4">105.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">
                          Điện giải đồ (Na, K, Cl) [Máu] [Điện giải (Na+, K+,
                          Cl-,
                          Ca TP, Ca++)]
                        </td>
                        <td class="col-4">270.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">Định lượng TSH (Thyroid Stimulating hormone) [Máu]</td>
                        <td class="col-4">210.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-7">Định lượng FT4 (Free Thyroxine) [Máu]</td>
                        <td class="col-4">210.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_xn" value name="xn_id[]" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
            <button type="button" class="btn btn-success">Lưu</button>
          </div>
        </div>
      </div>
    </div>

    <!-- modal Phiếu kết quả -->
    <div class="modal fade" id="kq" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog mw-100 w-75" role="document">
        <div class="modal-content">
          <img src="images/kq.png" class="img-thumbnail" />
        </div>
      </div>
    </div>
    <!-- modal Đơn thuốc -->
    <div class="modal fade" id="donthuoc" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog mw-100 w-75" role="document">
        <div class="modal-content">
          <img src="images/don_thuoc.jpg" class="img-thumbnail" />
        </div>
      </div>
    </div>

    <!-- modal CDHA -->
    <div class="modal fade" id="chidinhcdha" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog mw-100 w-75" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="tab-content col-12">
              <div id="all-xn" class="tab-pane active">
                <div class="row" style="margin-top: 20px;">
                  <input type="text" id="search_cdha" placeholder="Tìm kiếm" class="form-control"
                    style="margin-bottom: 10px;" />
                  <table class="table table-fixed-chidinh" id="monTableauCdha">
                    <thead>
                      <tr>
                        <th scope="col" class="col-4">Tên CĐHA</th>
                        <th scope="col" class="col-3">Bộ phận thực hiện</th>
                        <th scope="col" class="col-3">Ghi chú</th>
                        <th scope="col" class="col-1">Thành tiền</th>
                        <th scope="col" class="col-1">
                          <input type="checkbox" id="check_all_cdha" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="col-4">
                          Nội soi thực quản - Dạ dày - Tá tràng qua đường mũi
                          [ống
                          mềm sinh thiết - không test HP]
                        </td>
                        <td class="col-3">
                          <select class="form-control">
                            <option>Phòng nội soi</option>
                            <option>Phòng siêu âm</option>
                          </select>
                        </td>

                        <td class="col-3">
                          <input type="text" class="form-control" name value />
                        </td>
                        <td class="col-1">1.000.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_cdha" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-4">Nội soi tai mũi họng</td>
                        <td class="col-3">
                          <select class="form-control">
                            <option>Phòng nội soi</option>
                            <option>Phòng siêu âm</option>
                          </select>
                        </td>
                        <td class="col-3">
                          <input type="text" class="form-control" name value />
                        </td>
                        <td class="col-1">3000.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_cdha" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-4">
                          Nội soi thực quản - Dạ dày - Tá tràng qua đường mũi
                          [ống
                          mềm sinh thiết - không test HP]
                        </td>
                        <td class="col-3">
                          <select class="form-control">
                            <option>Phòng nội soi</option>
                            <option>Phòng siêu âm</option>
                          </select>
                        </td>

                        <td class="col-3">
                          <input type="text" class="form-control" name value />
                        </td>
                        <td class="col-1">1.000.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_cdha" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-4">
                          Nội soi thực quản - Dạ dày - Tá tràng qua đường mũi
                          [ống
                          mềm sinh thiết - không test HP]
                        </td>
                        <td class="col-3">
                          <select class="form-control">
                            <option>Phòng nội soi</option>
                            <option>Phòng siêu âm</option>
                          </select>
                        </td>

                        <td class="col-3">
                          <input type="text" class="form-control" name value />
                        </td>
                        <td class="col-1">1.000.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_cdha" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-4">
                          Nội soi thực quản - Dạ dày - Tá tràng qua đường mũi
                          [ống
                          mềm sinh thiết - không test HP]
                        </td>
                        <td class="col-3">
                          <select class="form-control">
                            <option>Phòng nội soi</option>
                            <option>Phòng siêu âm</option>
                          </select>
                        </td>

                        <td class="col-3">
                          <input type="text" class="form-control" name value />
                        </td>
                        <td class="col-1">1.000.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_cdha" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-4">
                          Nội soi thực quản - Dạ dày - Tá tràng qua đường mũi
                          [ống
                          mềm sinh thiết - không test HP]
                        </td>
                        <td class="col-3">
                          <select class="form-control">
                            <option>Phòng nội soi</option>
                            <option>Phòng siêu âm</option>
                          </select>
                        </td>

                        <td class="col-3">
                          <input type="text" class="form-control" name value />
                        </td>
                        <td class="col-1">1.000.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_cdha" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-4">
                          Nội soi thực quản - Dạ dày - Tá tràng qua đường mũi
                          [ống
                          mềm sinh thiết - không test HP]
                        </td>
                        <td class="col-3">
                          <select class="form-control">
                            <option>Phòng nội soi</option>
                            <option>Phòng siêu âm</option>
                          </select>
                        </td>

                        <td class="col-3">
                          <input type="text" class="form-control" name value />
                        </td>
                        <td class="col-1">1.000.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_cdha" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-4">
                          Nội soi thực quản - Dạ dày - Tá tràng qua đường mũi
                          [ống
                          mềm sinh thiết - không test HP]
                        </td>
                        <td class="col-3">
                          <select class="form-control">
                            <option>Phòng nội soi</option>
                            <option>Phòng siêu âm</option>
                          </select>
                        </td>

                        <td class="col-3">
                          <input type="text" class="form-control" name value />
                        </td>
                        <td class="col-1">1.000.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_cdha" value name="xn_id[]" />
                        </td>
                      </tr>
                      <tr>
                        <td class="col-4">
                          Nội soi thực quản - Dạ dày - Tá tràng qua đường mũi
                          [ống
                          mềm sinh thiết - không test HP]
                        </td>
                        <td class="col-3">
                          <select class="form-control">
                            <option>Phòng nội soi</option>
                            <option>Phòng siêu âm</option>
                          </select>
                        </td>

                        <td class="col-3">
                          <input type="text" class="form-control" name value />
                        </td>
                        <td class="col-1">1.000.000</td>
                        <td class="col-1">
                          <input type="checkbox" class="selected_cdha" value name="xn_id[]" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
            <button type="button" class="btn btn-success">Lưu</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Phòng khám -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Chọn ban làm việc</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-4">Phòng làm việc</div>
              <div class="col-8">
                <select name id class="form-control">
                  <option value>Phòng khám 1</option>
                  <option value>Phòng khám 2</option>
                  <option value>Phòng khám 3</option>
                </select>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-4">Bác sĩ</div>
              <div class="col-8">
                <select name id class="form-control">
                  <option value>Bác sĩ 1</option>
                  <option value>Bác sĩ 2</option>
                  <option value>Bác sĩ 3</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Đồng ý</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal chi tiết bệnh nhân-->
    <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document" style="max-width:65%;">
        <div class="modal-content modal-content-custom">
          <div class="modal-body">
            <div class="row" style="padding: 0 15px;">
              <div class="col-4">
                <button class="btn btn-success btn-sm">Lưu</button>
                <button class="btn btn-success btn-sm">Sửa</button>
                <button class="btn btn-success btn-sm">Hủy</button>
              </div>
              <div class="col-8">
                <h4 class="col-12">THÔNG TIN HÀNH CHÍNH</h4>
              </div>
              <div class="col-12 mt-1">
                <table class="table">
                  <tr>
                    <td class="width-12">Phiếu khám:</td>
                    <td>TC23445434</td>
                    <td class="width-10"></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Họ và tên:</td>
                    <td>
                      <input type="text" class="form-control form-control-custom1" disabled value="Nguyễn văn quyết" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Năm sinh:</td>
                    <td>
                      <input type="date" class="form-control form-control-custom1" disabled value="1992-01-01" />
                    </td>
                    <td>Giới tính:</td>
                    <td>
                      <select class="form-control form-control-custom1" disabled>
                        <option value selected>Nam</option>
                        <option value>Nữ</option>
                        <option value>KXĐ</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td>Địa chỉ:</td>
                    <td>
                      <input type="text" class="form-control form-control-custom1" disabled
                        value="27, Cát Linh, Đống đa, Hà Nội" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Điện thoại:</td>
                    <td>
                      <input type="text" class="form-control form-control-custom1" disabled value="0989189999" />
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Người thân:</td>
                    <td>
                      <input type="text" class="form-control form-control-custom1" disabled value="Nguyễn Thị Hiền" />
                    </td>
                    <td>SĐT:</td>
                    <td>
                      <input type="text" class="form-control form-control-custom1" disabled value="0974335233" />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="row mt-1" style="padding: 0 15px;">
              <h4 class="text-center col-12">THÔNG TIN THẺ BHYT</h4>
              <div class="col-12">
                <table class="table">
                  <tr>
                    <td class="width-10">Số thẻ</td>
                    <td>
                      <input type="text" class="form-control form-control-custom1" disabled value="GD40123628746387" />
                    </td>
                    <td class="width-14">Nơi ĐK KCBBĐ:</td>
                    <td class="width-12">
                      <input type="text" class="form-control form-control-custom1" disabled value="40027" />
                    </td>
                    <td colspan="3">Bệnh viện Giao Thông Vận Tải</td>
                  </tr>
                  <tr>
                    <td>Từ ngày:</td>
                    <td>
                      <input type="date" class="form-control form-control-custom1" disabled value="2019-01-01" />
                    </td>
                    <td>Đến ngày:</td>
                    <td>
                      <input type="date" class="form-control form-control-custom1" disabled value="2019-01-31" />
                    </td>
                    <td class="width-12">Mức hưởng :</td>
                    <td>
                      <input type="text" class="max-width-85 form-control form-control-custom1" disabled value="100%" />
                    </td>
                  </tr>

                  <tr>
                    <td>BH tư nhân:</td>
                    <td>
                      <input type="text" class="form-control form-control-custom1" disabled value="Bảo Việt" />
                    </td>
                    <td>Đối tượng :</td>
                    <td>
                      <select name id class="form-control form-control-custom1" disabled>
                        <option value>BHYT</option>
                        <option value>Tự chi trả</option>
                        <option value>Cấp cứu</option>
                        <option value>BHTM</option>
                      </select>
                    </td>
                    <td colspan="2">
                      Đúng tuyến:
                      <input type="checkbox" disabled />
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div class="row" style="padding: 0 15px;">
              <h4 class="text-center col-12">JCI Medical</h4>
              <div class="col-12">
                <table class="table">
                  <tr>
                    <td>
                      <span>Tai nạn</span>
                    </td>
                    <td>
                      <span class="btn btn-warning" data-toggle="tooltip" data-placement="top"
                        title="Thai sản tuần 8">Thai sản</span>
                    </td>
                    <td>
                      <span>Dễ ngã</span>
                    </td>
                    <td>
                      <span class="btn btn-warning" data-toggle="tooltip" data-placement="top"
                        title="Di ứng thuốc hoạt chất paracetamol">Dị ứng</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Thông báo -->
    <div class="modal fade" id="thongBao" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-3">
                <button class="btn btn-sm btn-info ml-3">Soạn tin nhắn</button>
                <ul class="font-13 font-700">
                  <li class="pointer">Hộp thư đến</li>
                  <li class="pointer">Đã gửi</li>
                  <li class="pointer">Trò chuyện</li>
                </ul>
              </div>
              <div class="col-9">
                <table class="table font-13">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" />
                      </th>
                      <th>Người gửi</th>
                      <th>Tiêu đề</th>
                      <th>Ngày gửi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr onclick="test('abcabc')">
                      <td>
                        <input type="checkbox" /> &nbsp;
                        <i class="fa fa-star font-15" style="color: #ffdc34;" aria-hidden="true"></i>
                      </td>
                      <td data-toggle="modal" data-target=".chi-tiet-tin-nhan" class="pointer">
                        Nguyễn
                        văn a
                      </td>
                      <td data-toggle="modal" data-target=".chi-tiet-tin-nhan" class="pointer">
                        Nội
                        dung sdfsdf
                      </td>
                      <td data-toggle="modal" data-target=".chi-tiet-tin-nhan" class="pointer">20/10/2019</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" /> &nbsp;
                        <i class="fa fa-star font-15" style="color: #ffdc34;" aria-hidden="true"></i>
                      </td>
                      <td data-toggle="modal" data-target=".chi-tiet-tin-nhan" class="pointer">
                        Nguyễn
                        văn a
                      </td>
                      <td data-toggle="modal" data-target=".chi-tiet-tin-nhan" class="pointer">
                        Nội
                        dung sdfsdf
                      </td>
                      <td data-toggle="modal" data-target=".chi-tiet-tin-nhan" class="pointer">20/10/2019</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade chi-tiet-tin-nhan" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="row mt-3">
            <div class="col-1"></div>
            <div class="col-10">
              <h5>Tiêu đề:</h5>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-1"></div>
            <div class="col-10">Người gửi: Họ tên người gửi</div>
          </div>
          <div class="row mt-2">
            <div class="col-1"></div>
            <div class="col-10">Đây là nội dung</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal kết quả cls -->
    <div class="modal fade modal-ket-qua-cls" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg modal-90">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="col-12 mt-2 ml-1">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab"
                      aria-controls="pills-home" aria-selected="true">Xét nghiệm</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                      aria-controls="pills-profile" aria-selected="false">CDHA</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                      aria-controls="pills-contact" aria-selected="false">PTTT</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                      aria-controls="pills-contact" aria-selected="false">Kháng sinh đồ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab"
                      aria-controls="pills-contact" aria-selected="false">
                      Giải phẫu
                      bệnh
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                    aria-labelledby="pills-home-tab">
                    <table class="table font-13 tableXetNghiem">
                      <thead>
                        <tr>
                          <th>Ngày có kết quả</th>
                          <th>Chỉ số</th>
                          <th>Kết quả xét nghiệm</th>
                          <th>Chỉ số bình thường</th>
                          <th>Đơn vị tính</th>
                          <th>Ngày chỉ định</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td colspan="6" class="font-700">Phòng khám ung bướu</td>
                        </tr>
                        <tr>
                          <td colspan="6" class="font-700">
                            &emsp;
                            <input type="checkbox" />
                            28/10/2019
                          </td>
                        </tr>
                        <tr>
                          <td colspan="6" class="font-700">
                            &emsp; &emsp;
                            <input type="checkbox" />
                            Sinh
                            hóa máu
                          </td>
                        </tr>
                        <tr v-for="(item, index) in data_xn" :key="index">
                          <td>
                            &emsp; &emsp;&emsp;
                            <input type="checkbox" @click="checkXetNghiem(item)" v-model="inputXetNghiem"/> {{item.name}}
                          </td>
                          <td></td>
                          <td class="color-red">{{item.kq_xn}}</td>
                          <td>{{item.chi_so_bt}}</td>
                          <td>{{item.dvt}}</td>
                          <td>{{item.ngay_cd}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...
                  </div>
                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="chonXN">Chọn</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal mẫu toàn thân -->
    <div class="modal fade modal-mau-toan-than" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row mt-2">
              <div class="col-12">
                <table class="table font-13">
                  <thead>
                    <tr>
                      <th class="text-center">STT</th>
                      <th></th>
                      <th>Tên</th>
                      <th>Nội dung</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">1</td>
                      <td class="text-center align-middle">
                        <input type="checkbox" />
                      </td>
                      <td class="font-600">Bình thường</td>
                      <td>Toàn thân bình thường</td>
                    </tr>
                    <tr>
                      <td class="text-center">2</td>
                      <td class="text-center align-middle">
                        <input type="checkbox" />
                      </td>
                      <td class="font-600">Bình thường</td>
                      <td>Toàn thân bình thường</td>
                    </tr>
                    <tr>
                      <td class="text-center">3</td>
                      <td class="text-center align-middle">
                        <input type="checkbox" />
                      </td>
                      <td class="font-600">Bình thường</td>
                      <td>Toàn thân bình thường</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Chọn</button>
            <button type="button" class="btn btn-primary">Thêm</button>
            <button type="button" class="btn btn-primary">Xóa</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal chỉ định nhanh -->
    <div class="modal fade modal-chi-dinh-nhanh" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header text-center">
                  <h2>Chỉ định nhanh</h2>
                </div>
                <div class="card-body">
                  <div class="col-8 input-group padding-left-0">
                    <input type="text" class="form-control" id="searchChiDinhNhanh"
                      aria-label="Amount (to the nearest dollar)" />
                    <div class="input-group-append">
                      <span class="input-group-text">
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </span>
                    </div>
                  </div>
                  <ul class="list-group mt-2 ulChiDinhNhanh">
                    <li class="list-group-item">
                      <table class="table table-bordered tree-basic">
                        <tbody class="checkAll">
                          <tr class="treegrid-1 expanded">
                            <td class="font-700">
                              <input type="checkbox" id="checkAll" />
                              <label for="checkAll">Sinh hóa máu</label>
                            </td>
                          </tr>
                          <tr class="treegrid-2 treegrid-parent-1">
                            <td>
                              &emsp;
                              <input type="checkbox" class="checkItem" /> Tổng phân
                              tích
                              tế bào máu
                            </td>
                          </tr>
                          <tr class="treegrid-3 treegrid-parent-1">
                            <td>
                              &emsp;
                              <input type="checkbox" class="checkItem" /> Định lượng
                              Urê
                              máu
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li class="list-group-item">
                      <table class="table table-bordered tree-basic">
                        <tbody class="checkAll1">
                          <tr class="treegrid-1">
                            <td class="font-700">
                              <input type="checkbox" id="checkAll1" />
                              <label for="checkAll1">
                                Sinh hóa nước
                                tiểu
                              </label>
                            </td>
                          </tr>
                          <tr class="treegrid-2 treegrid-parent-1">
                            <td>
                              &emsp;
                              <input type="checkbox" class="checkItem" /> Tổng phân
                              tích
                              tế bào máu
                            </td>
                          </tr>
                          <tr class="treegrid-3 treegrid-parent-1">
                            <td>
                              &emsp;
                              <input type="checkbox" class="checkItem" /> Định lượng
                              Urê
                              máu
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </li>
                    <li class="list-group-item">Gói xét nghiệm gan</li>
                    <li class="list-group-item">Gói xét nghiệm dạ dày</li>
                  </ul>
                </div>
                <div class="card-footer text-muted text-right">
                  <button class="btn btn-success">Chọn</button>
                  <button class="btn btn-success" data-dismiss="modal">Hủy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal mẫu kê thuốc -->
    <div class="modal fade modal-ke-toa-nhanh" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg modal-90">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <div class="card">
                  <div class="card-header text-center">
                    <h3>Đơn thuốc mẫu</h3>
                  </div>
                  <div class="card-body">
                    <table class="table font-13">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Tên đơn</th>
                          <th>Bác sĩ kê</th>
                          <th>Bệnh chính</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>Đơn thuốc ho</td>
                          <td>Bs Nguyễn Văn Nam</td>
                          <td>Viêm phế quản</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="card">
                  <div class="card-header text-center">
                    <h4>Chi tiết</h4>
                  </div>
                  <div class="card-body">
                    <table class="table font-13">
                      <thead>
                        <tr>
                          <th>Kho</th>
                          <th>Tên thuốc</th>
                          <th>Hàm lượng</th>
                          <th>Đơn vị</th>
                          <th>Số lượng</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Kho ngoại trú</td>
                          <td>Vitamin C</td>
                          <td>100 mg</td>
                          <td>Viên</td>
                          <td>100</td>
                        </tr>
                        <tr>
                          <td>Kho ngoại trú</td>
                          <td>Amocilin</td>
                          <td>500 mg</td>
                          <td>Viên</td>
                          <td>10</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Đồng ý</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Danh sách bệnh án ngoại trú -->
    <div class="modal fade danhSachBANT" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg modal-90">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <div class="col-3">
                <h5 style="color: #007944;">DANH SÁCH BỆNH NHÂN</h5>
              </div>
              <div class="col-5"></div>
              <div class="col-4">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Tìm kiếm bệnh nhân"
                    aria-label="Amount (to the nearest dollar)" />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <ul class="nav nav-tabs nav-tabs-custom1 mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-dang-dieu-tri"
                      role="tab" aria-controls="pills-home" aria-selected="true">Đang điều trị</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-ket-thuc-dieu-tri"
                      role="tab" aria-controls="pills-profile" aria-selected="false">Đã kết thúc điều trị</a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div class="tab-pane fade show active" id="pills-dang-dieu-tri" role="tabpanel"
                    aria-labelledby="pills-home-tab" style="overflow-x:auto;">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th class="min-width-150">Phiếu khám</th>
                          <th>Số BA</th>
                          <th class="min-width-170">Tên</th>
                          <th class="min-width-150">Chẩn đoán</th>
                          <th class="min-width-150">Ngày mở BA</th>
                          <th class="min-width-170">Người mở</th>
                          <th>NS</th>
                          <th>GT</th>
                          <th class="min-width-150">Địa chỉ</th>
                          <th>SĐT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="pointer" data-toggle="modal" data-target=".chiTietBenhAn">
                          <td>TC12356567</td>
                          <td>BA02232</td>
                          <td>Nguyễn Văn Quyết</td>
                          <td>Viêm phế quản</td>
                          <td>10/10/2019</td>
                          <td>BS.Nguyễn Văn An</td>
                          <td>10/10/1999</td>
                          <td>Nam</td>
                          <td>Hà Nội</td>
                          <td>0123666444</td>
                        </tr>
                        <tr class="pointer" data-toggle="modal" data-target=".chiTietBenhAn">
                          <td>TC345555454</td>
                          <td>BA02232</td>
                          <td>Nguyễn Văn Tú</td>
                          <td>Viêm phế quản</td>
                          <td>11/10/2019</td>
                          <td>BS.Nguyễn Văn An</td>
                          <td>10/10/1988</td>
                          <td>Nam</td>
                          <td>Hà Nội</td>
                          <td>0123666342</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...
                  </div>
                  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success">Sửa</button>
            <button type="button" class="btn btn-success">Đóng BA</button>
            <button type="button" class="btn btn-success">In</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Chi tiết bệnh án ngoại trú -->
    <div class="modal fade chiTietBenhAn" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg modal-90">
        <div class="modal-content">
          <div class="modal-body">
            <div class="row">
              <h6 class style="color:#007944;">THÔNG TIN BỆNH ÁN</h6>
            </div>
            <div class="row">
              <div class="col-2">
                <label for>Bệnh án</label>
              </div>
              <div class="col-3">
                <select class="form-control form-control-custom">
                  <option value></option>
                  <option value>Bệnh án viêm gan</option>
                  <option value selected>Bệnh án tai mũi họng</option>
                  <option value>Bệnh án ung bướu</option>
                </select>
              </div>
              <div class="col-2 max-width-11">
                <label for>Số lưu trữ</label>
              </div>
              <div class="col-3">
                <input type="text" class="form-control form-control-custom" value="BA1020" />
              </div>
            </div>

            <div class="row mt-1">
              <div class="col-2">
                <label for>Bệnh chính</label>
              </div>
              <div class="col-3">
                <textarea class="form-control" rows="2">J32</textarea>
              </div>
              <div class="col-5">
                <textarea class="form-control" rows="2">Viêm phế quản mãn tính</textarea>
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-2">
                <label for>Bệnh kèm theo</label>
              </div>
              <div class="col-3">
                <textarea class="form-control" rows="2">J21</textarea>
              </div>
              <div class="col-5">
                <textarea class="form-control" rows="2">Viêm amidan cấp</textarea>
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-2">
                <label for>Ngày mở BA</label>
              </div>
              <div class="col-3">
                <input type="date" class="form-control form-control-custom" value="2019-10-10" />
              </div>
              <div class="col-2 max-width-11">
                <label for>Ngày đóng BA</label>
              </div>
              <div class="col-3">
                <input type="date" class="form-control form-control-custom" />
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-2">
                <label for>Bác sĩ</label>
              </div>
              <div class="col-3">
                <select class="form-control form-control-custom">
                  <option value></option>
                  <option value selected>BS.Nguyễn Văn An</option>
                </select>
              </div>
            </div>

            <div class="row mt-2">
              <h6 class style="color:#007944;">THÔNG TIN BỆNH MÃN TÍNH</h6>
            </div>
            <div class="row mt-1">
              <div class="col-2">
                <label for>Tên bệnh</label>
              </div>
              <div class="col-3">
                <textarea class="form-control" rows="2">J32</textarea>
              </div>
              <div class="col-5">
                <textarea class="form-control" rows="2">Viêm phế quản mãn tính</textarea>
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-2">
                <label for>Ghi chú</label>
              </div>
              <div class="col-8">
                <textarea class="form-control" rows="2">Hẹn tái khám trong tháng</textarea>
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-2">
                <label for>Khoa phòng</label>
              </div>
              <div class="col-3">
                <select class="form-control form-control-custom">
                  <option value></option>
                  <option value>Phòng khám viêm gan</option>
                  <option value selected>Phòng khám TMH</option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success">Sửa</button>
            <button type="button" class="btn btn-success">Đóng BA</button>
            <button type="button" class="btn btn-success">In</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Thoát</button>
          </div>
        </div>
      </div>
    </div>

    <div class="overlay"></div>
  </div>
</template>

<script src="./Test.js">
</script>