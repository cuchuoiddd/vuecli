<template slot="header" slot-scope="scope">
  <div class="home">
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
                        <div class="">
                            <h3>Danh sách khách hàng &nbsp; <span class="font-15">Tổng số KH: 100</span></h3>
                        </div>
                        <select class="form-control form-control-custom">
                            <option value="cho_kham">Màn hình khám</option>
                            <option value="hen_kham">Hẹn khám</option>
                            <option value="cho_doc_kq">Chờ đọc kết quả</option>
                            <option value="ket_thuc_kham">Kết thúc khám</option>
                            <option value="kham_hoi_chan">Khám hội chẩn</option>
                        </select>
                    </div>
                    <div class="col-5">
                        <div class="row">
                            <div class="col-6">
                                <h6>Hội chẩn: 20 </br> Chuyển khám: 30</h6>
                            </div>
                            <div class="col-6">
                                <h6>Hẹn khám: 30 </br> Chờ đọc KQ: 20</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <KhachHang :data="data" :nhom_kh="nhom_kh"/>
            <!-- <table id="tb-cho-kham" class="table table-hover table-borderless font-14">
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
                    <tr class="row-table tr-active">
                        <td class="text-center">1</td>
                        <td>Khách hàng 1</td>
                        <td class="text-center">1992</td>
                        <td class="text-center">Nam</td>
                        <td class="text-center">1:00</td>
                        <td class="text-center">Đang khám</td>
                        <td class="text-center"></td>
                    </tr>
                    <tr class="row-table">
                        <td class="text-center">2</td>
                        <td>Khách hàng 2</td>
                        <td class="text-center">1992</td>
                        <td class="text-center">Nam</td>
                        <td class="text-center">1:00</td>
                        <td class="text-center">Ưu tiên</td>
                        <td class="text-center"></td>
                    </tr>
                    <tr class="row-table">
                        <td class="text-center">3</td>
                        <td>Khách hàng 3</td>
                        <td class="text-center">1992</td>
                        <td class="text-center">Nam</td>
                        <td class="text-center">1:00</td>
                        <td class="text-center">Hẹn khám</td>
                        <td class="text-center">9:00</td>
                    </tr>
                    <tr class="row-table">
                        <td class="text-center">4</td>
                        <td>Khách hàng 4</td>
                        <td class="text-center">1992</td>
                        <td class="text-center">Nam</td>
                        <td class="text-center">1:00</td>
                        <td class="text-center">Chờ đọc KQ</td>
                        <td class="text-center"></td>
                    </tr>
                </tbody>
            </table>
            <table id="tb-hen-kham" class="table table-hover table-borderless font-14" style="display: none;">
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
                    <tr class="row-table tr-active">
                        <td class="text-center">1</td>
                        <td>Khách hàng hẹn 1</td>
                        <td class="text-center">1992</td>
                        <td class="text-center">Nam</td>
                        <td class="text-center">1:00</td>
                        <td class="text-center">9:00</td>
                    </tr>
                    <tr class="row-table">
                        <td class="text-center">2</td>
                        <td>Khách hàng hẹn 2</td>
                        <td class="text-center">1992</td>
                        <td class="text-center">Nam</td>
                        <td class="text-center">1:00</td>
                        <td class="text-center">9:00</td>
                    </tr>
                    <tr class="row-table">
                        <td class="text-center">3</td>
                        <td>Khách hàng hẹn 3</td>
                        <td class="text-center">1992</td>
                        <td class="text-center">Nam</td>
                        <td class="text-center">1:00</td>
                        <td class="text-center">9:00</td>
                    </tr>
                    <tr class="row-table">
                        <td class="text-center">4</td>
                        <td>Khách hàng hẹn 4</td>
                        <td class="text-center">1992</td>
                        <td class="text-center">Nam</td>
                        <td class="text-center">1:00</td>
                        <td class="text-center">9:00</td>
                    </tr>
                </tbody>
            </table>
            <table id="tb-cho-doc-kq" class="table table-hover table-borderless font-14" style="display: none;">
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
            <table id="tb-ket-thuc-kham" class="table table-hover table-borderless font-14" style="display: none;">
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
            </table> -->
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
                    <td data-toggle="modal" data-target="#donthuoc" class="pointer hover-blue">Đơn thuốc BV/DT/038097
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
                    <td data-toggle="modal" data-target="#donthuoc" class="pointer hover-blue">Đơn thuốc BV/DT/038097
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

            <button type="button" id="sidebarCollapseProcess" class="btn btn-success fixed-top fixed-top-custom" data-toggle="tooltip" data-placement="right" title="Quá trình khám" style="z-index: auto;">
                <i class="fa fa-stethoscope" aria-hidden="true"></i>
            </button>

            <button type="button" id="sidebarCollapse" class="btn btn-success fixed-top" style="z-index: auto;" data-toggle="tooltip" data-placement="right" title="Danh sách khách hàng">
                <i class="fas fa-align-left"></i>
            </button>

            <button type="button" id="sidebarCollapse" class="btn btn-success fixed-top thong-bao" style="z-index: auto; top: 40% !important;" data-toggle="tooltip" data-placement="right" title="Thông báo">
                <i class="fa fa-bell pointer" aria-hidden="true" data-toggle="modal" data-target="#thongBao"></i>
                <span class="badge badge-light">4</span>
            </button>

            <div class="header">
                <div class="row">
                    <div class="col-8 mt-2">
                        <marquee class="color-warning">* Thông báo từ phòng IT* Sẽ tạm ngưng sever để nâng cấp PM thời gian từ 12h00-12h15 ngày 20/11/2019
                        </marquee>
                    </div>
                    <div class="col-2 mt-2 text-label color-white text-right" data-toggle="modal" data-target="#exampleModal">
                        <i class="fas fa-home"></i> <label for="" class="pointer font-14">Phòng khám TMH</label>
                    </div>
                    <div class="col-2 mt-2 text-label color-white">
                        <nav class="navbar navbar-expand-lg ">
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item dropdown font-11">
                                        <i class="fas fa-user"></i>
                                        <a class="nav-link dropdown-custom dropdown-toggle font-14" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            BS.Nguyễn Văn Hoàng
                                        </a>
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
                            TC 12345678/ NGUYỄN VĂN QUYẾT/ 29 tuổi/ Nam/ Địa chỉ Quận Hoàng Mai, Hà Nội<label class="pointer color-white" style="text-decoration: underline;" data-toggle="modal" data-target="#exampleModal1">&nbsp; >>chi tiết</label>
                        </div>
                    </div>
                    <div class="row ">

                        <div class="col-12 tab-menu">
                            <ul class="nav nav-tabs nav-pills nav-tabs-custom" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active text-label" data-toggle="tab" href="#home">
                                        <i class="fa fa-user-md font-15" aria-hidden="true"></i> <span class="font-14">Khám bệnh</span>
                                    </a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link text-label" data-toggle="tab" href="#chi_dinh_dv"><i
                                            class="fa fa-universal-access font-15" aria-hidden="true"></i> <span
                                            class="font-14">Chỉ
                                            định</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-label" data-toggle="tab" href="#ket_luan"><i
                                            class="fa fa-heartbeat font-15" aria-hidden="true"></i>
                                        <span class="font-14"> Kết luận</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-label" data-toggle="tab" href="#ket_qua"><i
                                            class="fa fa-eye font-15" aria-hidden="true"></i> <span class="font-14">Xem
                                            kết quả</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-label" data-toggle="tab" href="#phong_thu_thuat"><i
                                            class="fa fa-bed font-15" aria-hidden="true"></i> <span
                                            class="font-14">Phòng thủ thuật</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-label" data-toggle="tab" href="#benh_an_ngoai_tru"><i
                                            class="fa fa-medkit font-15" aria-hidden="true"></i></i> <span
                                            class="font-14">Bệnh án ngoại trú </span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-label" data-toggle="tab" href="#history"><i
                                            class="fa fa-th font-15" aria-hidden="true"></i> <span class="font-14">Lịch
                                            sử khám</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-label" data-toggle="tab" href="#bao-cao"><i
                                            class="fa fa-map font-15" aria-hidden="true"></i> <span class="font-14">Báo
                                            cáo</span></a>
                                </li>
                                <li class="nav-item">
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle btn-tien-ich font-13 color-white" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i class="fa fa-podcast font-15" aria-hidden="true"></i> <span
                                                class="font-14">Tiện ích</span>
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
                                        <div class="col-2 color-red">
                                            Tạm ứng: 1.000.000
                                        </div>
                                        <div class="col-2 color-red">
                                            Chi phí: 180.000
                                        </div>
                                        <div class="col-2 color-red">
                                            BHYT trả: 0
                                        </div>
                                        <div class="col-4 color-red">
                                            BN thanh toán: 180.000
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-12" style="overflow-x: scroll;">
                                            <table class="table table-hover table-bordered font-14 tree-basic">
                                                <thead>
                                                    <tr>
                                                        <th class="align-middle text-center">STT</th>
                                                        <th class="align-middle"><input type="checkbox"></th>
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
                                                    <tr class="treegrid-3 treegrid-parent-2 color-red">
                                                        <td class="align-middle text-center">1</td>
                                                        <td class="align-middle text-center"><input type="checkbox" class="daThucHien">
                                                        </td>
                                                        <td class="align-middle">nước tiểu</td>
                                                        <td class="align-middle">SH nước tiểu</td>
                                                        <td class="align-middle">Nội 6</td>
                                                        <td class="align-middle">Nguyễn văn Lâm</td>
                                                        <td class="align-middle">50.000</td>
                                                        <td class="align-middle">50.000</td>
                                                        <td class="align-middle text-center"><input type="checkbox">
                                                        </td>
                                                        <td>Mã phiếu</td>
                                                        <td class="align-middle">
                                                            <select name="" id="" class="custom1-select">
                                                                <option value="">Tầng 1 nhà A</option>
                                                                <option value="">Tầng 2 nhà A</option>
                                                            </select>
                                                        </td>
                                                        <td class="align-middle">
                                                            <select name="" id="" class="custom1-select">
                                                                <option value="">Cơ sở 1</option>
                                                                <option value="">Cơ sở 2</option>
                                                            </select>
                                                        </td>
                                                        <td class="align-middle">05/01/2019</td>
                                                        <td class="align-middle">05/01/2019</td>
                                                    </tr>
                                                    <tr class="treegrid-4 treegrid-parent-2 color-warning">
                                                        <td class="align-middle text-center">2</td>
                                                        <td class="align-middle text-center"><input type="checkbox" class="daThanhToan">
                                                        </td>
                                                        <td class="align-middle">định lượng urê</td>
                                                        <td class="align-middle">SH máu</td>
                                                        <td class="align-middle">Nội 6</td>
                                                        <td class="align-middle">Nguyễn văn Lâm</td>
                                                        <td class="align-middle">30.000</td>
                                                        <td class="align-middle">30.000</td>
                                                        <td class="align-middle text-center"><input type="checkbox">
                                                        </td>
                                                        <td>Mã phiếu</td>
                                                        <td class="align-middle">
                                                            <select name="" id="" class="custom1-select">
                                                                <option value="">Tầng 1 nhà A</option>
                                                                <option value="">Tầng 2 nhà A</option>
                                                            </select>
                                                        </td>
                                                        <td class="align-middle">
                                                            <select name="" id="" class="custom1-select">
                                                                <option value="">Cơ sở 1</option>
                                                                <option value="">Cơ sở 2</option>
                                                            </select>
                                                        </td>
                                                        <td class="align-middle">05/01/2019</td>
                                                        <td class="align-middle">05/01/2019</td>
                                                    </tr>
                                                    <tr class="treegrid-5">
                                                        <td colspan="14" class="font-600">Phòng khám sản</td>
                                                    </tr>
                                                    <tr class="treegrid-6 treegrid-parent-5">
                                                        <td colspan="14" class="font-600">Siêu âm</td>
                                                    </tr>
                                                    <tr class="treegrid-7 treegrid-parent-6">
                                                        <td class="align-middle text-center">1</td>
                                                        <td class="align-middle text-center"><input type="checkbox">
                                                        </td>
                                                        <td class="align-middle">Siêu âm bụng</td>
                                                        <td class="align-middle">Siêu âm</td>
                                                        <td class="align-middle">Nội 6</td>
                                                        <td class="align-middle">Nguyễn văn Lâm</td>
                                                        <td class="align-middle">100.000</td>
                                                        <td class="align-middle">100.000</td>
                                                        <td class="align-middle text-center"><input type="checkbox">
                                                        </td>
                                                        <td>Mã phiếu</td>
                                                        <td class="align-middle">
                                                            <select name="" id="" class="custom1-select">
                                                                <option value="">Tầng 1 nhà A</option>
                                                                <option value="">Tầng 2 nhà A</option>
                                                            </select>
                                                        </td>
                                                        <td class="align-middle">
                                                            <select name="" id="" class="custom1-select">
                                                                <option value="">Cơ sở 1</option>
                                                                <option value="">Cơ sở 2</option>
                                                            </select>
                                                        </td>
                                                        <td class="align-middle">05/01/2019</td>
                                                        <td class="align-middle">05/01/2019</td>
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
                                                    <input type="text" id="timKiemDichVu" placeholder="Chọn dịch vụ" class="form-control" style="margin-bottom: 10px;">
                                                </div>
                                                <div class="col-2 text-right">
                                                    <label for="">Bác sĩ chỉ định:</label>
                                                </div>
                                                <div class="col-4">
                                                    <select name="" id="" class="form-control form-control-custom">
                                                        <option value="">Bác sĩ 1</option>
                                                        <option value="">Bác sĩ 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-5">
                                            <div class=""><i class="fas fa-star color-red"></i> Dịch vụ đã thực hiện
                                            </div>
                                            <div class=""><i class="fas fa-star color-yellow"></i> Dịch vụ đã thanh toán
                                            </div>
                                        </div>
                                        <div class="col-7 text-right">
                                            <a data-toggle="tooltip" data-placement="top" title="Chỉ định nhanh">
                                                <button class="btn btn-book mr-1 btn-custom btn-sm" style="width:40px" data-toggle="modal" data-target=".modal-chi-dinh-nhanh">
                                                    <i class="fa fa-info" aria-hidden="true"></i>
                                                </button>
                                            </a>
                                            <!-- <i class="fa fa-address-book" style="display: inline-block;" aria-hidden="true"
                                                    data-toggle="modal" data-target=".modal-chi-dinh-nhanh"></i> -->
                                            <button class="btn btn-success mr-1 btn-custom btn-sm" style="width:85px">Gói
                                                DV</button>
                                            <button class="btn btn-success mr-1 btn-custom btn-sm" style="width:85px">Lưu</button>
                                            <button class="btn btn-success mr-1 btn-custom btn-sm" style="width:85px" onclick="deleteChinhDinh()">Xóa</button>
                                            <button class="btn btn-success mr-1 btn-custom btn-sm" style="width:85px">Sửa</button>
                                            <button class="btn btn-success mr-1 btn-custom btn-sm" style="width:85px">In
                                                phiếu</button>
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
                                            <input type="text" style="text-transform: uppercase;" placeholder="Mã ICD" id="benh_chinh_icd10" class="form-control form-control-custom">
                                        </div>
                                        <div class="col-8">
                                            <input type="text" id="benh_chinh_text" class="form-control form-control-custom">

                                            <!-- <select id="select-bs">
                                                        <option>Viêm phế quản cấp</option>
                                                        <option>Viêm phế quản cấp 1</option>
                                                        <option>Viêm phế quản cấp 2</option>
                                                        <option>Viêm phế quản cấp 3</option>
                                                    </select> -->
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-2 font-700 max-width-11">
                                            Bệnh kèm theo:
                                        </div>
                                        <div class="col-2 ">
                                            <input type="text" id="benh_kem_theo_icd10" class="form-control form-control-custom">
                                        </div>
                                        <div class="col-8">
                                            <input type="text" id="benh_kem_theo_text" class="form-control form-control-custom">
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-2 font-700 max-width-11">
                                            Hướng điều trị:
                                        </div>
                                        <div class="col-2">
                                            <select name="" id="huongDieuTri" class="mySelect form-control form-control-custom">
                                                <option value=""></option>
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
                                        <div class="col-2 max-width-11">Sau <input type="text" style="width:33px;"> ngày
                                        </div>
                                        <div class="col-2 max-width-11 padding-right-0 align-center"><span>Ngày khám
                                                lại:</span>
                                        </div>
                                        <div class="col-2 max-width-12 padding-left-0"><input type="date" class="form-control form-control-custom"></div>
                                        <div class="col-2 max-width-14">Giờ hẹn &nbsp; <input class="form-control-custom" type="text" id="time" placeholder="Time" style="width:81px;"></div>
                                        <div class="col-1 max-width-11 text-right align-center"><span>Ghi chú:</span>
                                        </div>
                                        <div class="col-3 padding-right-0"><input type="text" class="form-control form-control-custom"></div>
                                    </div>
                                    <div id="keToaChoVe" class="row" style="display: none;">
                                        <div class="mt-3 card card-custom min-height-65-vh">
                                            <div class="card-body" style="padding-top: 0;">
                                                <table class="table table-hover font-14 tree-basic">
                                                    <thead>
                                                        <tr>
                                                            <th class="text-center">STT</th>
                                                            <th class="text-center align-middle"><input type="checkbox">
                                                            </th>
                                                            <th class="text-center">Kho thuốc</th>
                                                            <th class="">Tên thuốc</th>
                                                            <th class="text-center">Hàm lượng</th>
                                                            <th class="text-center">Hoạt chất</th>
                                                            <th class="text-center">Số lượng</th>
                                                            <th class="text-center">Đơn giá</th>
                                                            <th class="text-center">Đơn vị</th>
                                                            <th class="">Cách dùng</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="treegrid-2 expanded">
                                                            <td colspan="8" class="font-700">Phòng khám TMH</td>
                                                        </tr>
                                                        <tr class="treegrid-3 treegrid-parent-2">
                                                            <td class="text-center">1</td>
                                                            <td class="text-center align-middle"> <input type="checkbox">
                                                            </td>
                                                            <td class="text-center">tủ trực TMH</td>
                                                            <td>amocilin</td>
                                                            <td class="text-center">500mg</td>
                                                            <td class="text-center">amoxilin</td>
                                                            <td class="text-center">5</td>
                                                            <td class="text-center">25.000</td>
                                                            <td class="text-center">viên</td>
                                                            <td>uống sau ăn</td>
                                                            <td><i class="fa fa-trash pointer" aria-hidden="true"></i>
                                                            </td>
                                                        </tr>
                                                        <tr class="treegrid-4 treegrid-parent-2">
                                                            <td class="text-center">2</td>
                                                            <td class="text-center align-middle"> <input type="checkbox">
                                                            </td>
                                                            <td class="text-center">nhà thuốc</td>
                                                            <td>panadol</td>
                                                            <td class="text-center">500mg</td>
                                                            <td class="text-center">paracetamol</td>
                                                            <td class="text-center">5</td>
                                                            <td class="text-center">25.000</td>
                                                            <td class="text-center">viên</td>
                                                            <td>uống sau ăn</td>
                                                            <td><i class="fa fa-trash pointer" aria-hidden="true"></i>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="card-footer">
                                                <div class="ke-thuoc">
                                                    <div class="row">
                                                        <div class="col-2 color-red">
                                                            Tạm ứng: 1.000.000
                                                        </div>
                                                        <div class="col-2 color-red">
                                                            Tổng tiền: 50.000
                                                        </div>
                                                        <div class="col-2 color-red">
                                                            BHYT trả: 10.000
                                                        </div>
                                                        <div class="col-2 color-red">
                                                            BN thanh toán: 40.000
                                                        </div>
                                                        <div class="col-2"></div>
                                                        <div class="col-2">
                                                            <div class="dropdown">
                                                                <button class="btn dropdown-toggle font-13 btn-sm btn-don-thuoc" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i class="fa fa-address-book"
                                                                        aria-hidden="true"></i> Đơn thuốc
                                                                </button>
                                                                <div class="dropdown-menu font-13" aria-labelledby="dropdownMenuButton">
                                                                    <a class="dropdown-item" href="#" aria-hidden="true" data-toggle="modal" data-target=".modal-ke-toa-nhanh">Đơn thuốc
                                                                        mẫu</a>
                                                                    <a class="dropdown-item" href="#">Đơn thuốc cũ</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row mt-2 font-13">
                                                        <div class="col-2">
                                                            <div class="form-group margin-bottom-0">
                                                                <label for="">Kho thuốc:</label>
                                                                <select name="" id="" class="form-control form-control-custom">
                                                                    <option value="">Kho A</option>
                                                                    <option value="">Kho B</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="col-3">
                                                            <div class="form-group margin-bottom-0">
                                                                <label for="">Tên thuốc</label>
                                                                <input type="text" class="form-control form-control-custom">
                                                            </div>
                                                        </div>
                                                        <div class="col-1">
                                                            <div class="form-group margin-bottom-0">
                                                                <label for="">Đơn vị</label>
                                                                <input id="ke_thuocDonVi" type="text" class="form-control form-control-custom" readonly value="Viên">
                                                            </div>
                                                        </div>
                                                        <div class="col-2 max-width-11">
                                                            <div class="form-group margin-bottom-0">
                                                                <label for=""> Số Lượng</label>
                                                                <input id="ke_thuocSoLuong" type="number" class="form-control form-control-custom">
                                                            </div>
                                                        </div>
                                                        <div class="col-2 max-width-11">
                                                            <div class="form-group margin-bottom-0">
                                                                <label for="">Lượng dùng</label>
                                                                <input id="ke_thuocLuongDung" type="number" class="form-control form-control-custom">
                                                            </div>
                                                        </div>
                                                        <div class="col-2 max-width-11">
                                                            <div class="form-group margin-bottom-0">
                                                                <label for="">Số lần</label>
                                                                <input id="ke_thuocSoLan" type="number" class="form-control form-control-custom">
                                                            </div>
                                                        </div>
                                                        <div class="col-2">
                                                            <div class="form-group margin-bottom-0">
                                                                <label for="">sử dụng</label>
                                                                <input id="ke_thuocSuDung" type="text" class="form-control form-control-custom">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row height-35 mt-1">
                                                        <div class="col-2 text-right font-13"><label for="">Cách dùng:
                                                            </label>
                                                        </div>
                                                        <div class="col-10">
                                                            <div class="form-group margin-bottom-0">
                                                                <input id="ke_thuocCachDung" type="text" class="form-control form-control-custom">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row height-35">
                                                        <div class="col-2 text-right font-13"><label for="">Lời dặn bác
                                                                sĩ: </label>
                                                        </div>
                                                        <div class="col-10">
                                                            <div class="form-group margin-bottom-0">
                                                                <input type="text" class="form-control form-control-custom">
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
                                                            <option value="">Khoa Nội</option>
                                                            <option value="">Khoa Thận</option>
                                                            <option value="">Khoa Ung Bướu</option>
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
                                                            <option value="">Phòng khám Nội</option>
                                                            <option value="">Phòng khám Thận</option>
                                                            <option value="">Phòng khám Ung Bướu</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-2 max-width-11 font-700">Hình thức</div>
                                                    <div class="col-3">
                                                        <select class="form-control form-control-custom">
                                                            <option value=""></option>
                                                            <option value="">Khám giáo sư</option>
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
                                                            <option value="">Phòng khám Nội</option>
                                                            <option value="">Phòng khám Thận</option>
                                                            <option value="">Phòng khám Ung Bướu</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-2 max-width-11 font-700">Hình thức</div>
                                                    <div class="col-3">
                                                        <select class="form-control form-control-custom">
                                                            <option value=""></option>
                                                            <option value="">Khám Nội 0đ</option>
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
                                                            <option value="">Tai nạn</option>
                                                            <option value="">Sốc thuốc</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-2 ">Tình trạng tử vong</div>
                                                    <div class="col-3">
                                                        <select class="form-control form-control-custom">
                                                            <option value="">Tại chỗ</option>
                                                            <option value="">Trước lúc đến</option>
                                                            <option value="">Trong 24h</option>
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
                                                            <option value="">Tuyến trên</option>
                                                            <option value="">Tuyến dưới</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-1">Lý do</div>
                                                    <div class="col-6">
                                                        <input type="text" class="form-control form-control-custom">
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-2"><label for="">Dấu hiệu lâm sàng</label></div>
                                                    <div class="col-10">
                                                        <input type="text" class="form-control form-control-custom">
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-2"><label for="">Các xét nghiệm</label></div>
                                                    <div class="col-10">
                                                        <input type="text" class="form-control form-control-custom">
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-2"><label for="">Thuốc đã dùng</label></div>
                                                    <div class="col-10">
                                                        <input type="text" class="form-control form-control-custom">
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-2"><label for="">Tình trạng người bệnh</label></div>
                                                    <div class="col-10">
                                                        <input type="text" class="form-control form-control-custom">
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-2"><label for="">Hướng điều trị</label></div>
                                                    <div class="col-10">
                                                        <input type="text" class="form-control form-control-custom">
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-2"><label for="">Phương tiện vận chuyển</label>
                                                    </div>
                                                    <div class="col-10">
                                                        <input type="text" class="form-control form-control-custom">
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-2"><label for="">Người đưa đi</label></div>
                                                    <div class="col-10">
                                                        <input type="text" class="form-control form-control-custom">
                                                    </div>
                                                </div>
                                                <div class="row mt-1">
                                                    <div class="col-2"><label for="">Chuyển tuyến lúc</label></div>
                                                    <div class="col-10">
                                                        <input type="text" class="form-control form-control-custom">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-footer"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="row float-right mt-2 ">
                                        <button class="btn btn-success mr-2 btn-custom btn-sm" style="width:82px; height:32px" onclick="luuKetLuan()">Lưu</button>

                                        <button class="btn btn-success mr-2 btn-custom btn-sm" style="width:82px; height:32px">Sửa</button>
                                        <div class="input-group mb-3 div-in">
                                            <button class="btn btn-success mr-2 btn-in btn-sm" style="width:82px; height:32px">In</button>
                                            <div class="input-group-append input-group-append-custom">
                                                <select class="select-custom" name="" id="">
                                                    <option class="option-custom" value="">In đơn thuốc</option>
                                                    <option class="option-custom" value="">In phiếu vào viện</option>
                                                    <option class="option-custom" value="">In phiếu chuyển viện</option>
                                                    <option class="option-custom" value="">In bảng kê chi phí</option>
                                                </select>
                                            </div>
                                        </div>
                                        <button class="btn btn-success mr-2 btn-custom btn-sm" data-toggle="modal" data-target="#exampleModal2" style="height: 32px;">Kết thúc khám</button>
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
                                                        <input class="form-control" type="text" placeholder="Tìm kiếm theo Mã phiếu khám">
                                                    </td>
                                                </tr>
                                                <tr class="pointer">
                                                    <td class="">TC12345</td>
                                                    <td class="">Nội 2</td>
                                                    <td class="">10/10/2019</td>
                                                    <td class="">10/10/2019</td>
                                                </tr>
                                                <tr class="pointer">
                                                    <td class="">TC12345</td>
                                                    <td class="">Nội 2</td>
                                                    <td class="">10/10/2019</td>
                                                    <td class="">10/10/2019</td>
                                                </tr>
                                                <tr class="pointer">
                                                    <td class="">TC12345</td>
                                                    <td class="">Nội 2</td>
                                                    <td class="">10/10/2019</td>
                                                    <td class="">10/10/2019</td>
                                                </tr>
                                                <tr class="pointer">
                                                    <td class="">TC12345</td>
                                                    <td class="">Nội 2</td>
                                                    <td class="">10/10/2019</td>
                                                    <td class="">10/10/2019</td>
                                                </tr>
                                                <tr class="pointer">
                                                    <td class="">TC12345</td>
                                                    <td class="">Nội 2</td>
                                                    <td class="">10/10/2019</td>
                                                    <td class="">10/10/2019</td>
                                                </tr>
                                                <tr class="pointer">
                                                    <td class="">TC12345</td>
                                                    <td class="">Nội 2</td>
                                                    <td class="">10/10/2019</td>
                                                    <td class="">10/10/2019</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- End Lịch sử khám col left ----------------->
                                    <!-- Lịch sử khám col right ----------------->
                                    <div class="col-8 lich-su-kham">
                                        <ul class="nav nav-tabs nav-pills" role="tablist">
                                            <li class="nav-item ">
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
                                                    <div class="col-2 margin-right-30"><label class="text-label">Ngày
                                                            khám:
                                                        </label></div>
                                                    <div class="col-3"><input id="datetimepicker" type="text" class="form-control form-control-custom">
                                                    </div>
                                                    <div class="col-2"><label class="text-label">Bác sĩ khám: </label>
                                                    </div>
                                                    <div class="col-4">
                                                        <select name="" id="" class="form-control form-control-custom">
                                                            <option value="">Bác sĩ 1</option>
                                                            <option value="">Bác sĩ 2</option>
                                                            <option value="">Bác sĩ 3</option>
                                                        </select>
                                                    </div>

                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-2 margin-right-30"><label class="text-label">Lý do
                                                            khám:
                                                        </label></div>
                                                    <div class="col-9">
                                                        <div class="form-control form-control-custom">
                                                            Đau bụng
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row mt-2">
                                                    <div class="col-2 margin-right-30"><label class="text-label">Bệnh
                                                            sử:
                                                        </label></div>
                                                    <div class="col-9">
                                                        <span class="form-control"> Bệnh nhân đi ngoài phân đen,đầy
                                                            bụng-->khám</span>
                                                    </div>

                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-2 margin-right-30"><label class="text-label">Tiền sử
                                                            bệnh: </label></div>
                                                    <div class="col-9">
                                                        <span class="form-control">Viêm dạ dày trào ngược thực quản/Trĩ
                                                            nội
                                                            độ I-II</span>
                                                    </div>

                                                </div>


                                                <div class="row mt-2">
                                                    <div class="col-2 margin-right-30"><label class="text-label">Toàn
                                                            thân:
                                                        </label></div>
                                                    <div class="col-9">
                                                        <span class="form-control">Thể trạng trung bình, da niêm mạc
                                                            bình
                                                            thường không phù, không xuất huyết dưới da</span>
                                                    </div>

                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-2 margin-right-30"><label class="text-label">Bộ
                                                            phận:
                                                        </label></div>
                                                    <div class="col-9">
                                                        <span class="form-control">- Tim nhịp đều - Phổi không có ral -
                                                            Bụng
                                                            không chướng, gan lá lách không sờ thấy, không có điểm đau
                                                            khu
                                                            trú - Các bộ phận khác hiện tại không có gì đặc biệt</span>
                                                    </div>
                                                </div>



                                                <div class="row mt-2">
                                                    <div class="col-2 margin-right-30"><label class="text-label">Kết quả
                                                            CLS: </label></div>
                                                    <div class="col-9">
                                                        <span class="form-control">a</span>
                                                    </div>

                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-2 margin-right-30"><label class="text-label">Chẩn
                                                            đoán:
                                                        </label></div>
                                                    <div class="col-9">
                                                        <span class="form-control">J20 Viêm phế quản cấp</span>
                                                    </div>

                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-2 margin-right-30"><label class="text-label">Hướng
                                                            điều
                                                            trị: </label></div>
                                                    <div class="col-9">
                                                        <span class="form-control">Cấp toa cho về</span>
                                                    </div>

                                                </div>
                                                <div class="row mt-2">
                                                    <div class="col-2 margin-right-30"><label class="text-label">Kết
                                                            luận: </label></div>
                                                    <div class="col-9">
                                                        <span class="form-control">J20 Viêm phế quản cấp; cấp toa cho
                                                            về</span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div id="thuoc" class="tab-pane fade">
                                                <div class="col-12">
                                                    <div class="panel panel-default ">
                                                        <div class="panel-heading accordion-toggle question-toggle collapsed" style="margin-bottom: -20px;">
                                                            <table class="table table-hover font-13">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="text-center">STT</th>
                                                                        <th class="">Đơn thuốc</th>
                                                                        <th class="">Tên thuốc</th>
                                                                        <th class="text-center">Hàm lượng</th>
                                                                        <th class="text-center">Hoạt chất</th>
                                                                        <th class="text-center">Số lượng</th>
                                                                        <th class="text-center">Đơn vị</th>
                                                                        <th class="">Cách dùng</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="text-center"></td>
                                                                        <td colspan="7" class="font-600"><input type="checkbox"> Phòng khám TMH</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="text-center"></td>
                                                                        <td colspan="7" class="font-600">&emsp;<input type="checkbox"> Đơn thuốc ngày: 20/11/2019
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
                                                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
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
                                                                    <td class="font-700" colspan="6">Phòng khám ung bướu
                                                                    </td>
                                                                </tr>
                                                                <tr class="treegrid-2 treegrid-parent-1">
                                                                    <td class="font-700" colspan="6"><input type="checkbox"> 28/10/2019</td>
                                                                </tr>
                                                                <tr class="treegrid-3 treegrid-parent-2">
                                                                    <td class="font-700" colspan="6"><input type="checkbox"> Sinh hóa máu</td>
                                                                </tr>
                                                                <tr class="treegrid-4 treegrid-parent-3">
                                                                    <td><input type="checkbox"> Định lượng Glucose (Máu)
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
                                                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                                                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                                                </div>
                                            </div>
                                            <div id="cdha_tdcn" class="tab-pane fade">
                                                Tổng quan3
                                            </div>
                                            <div id="phau_thuat_thu_thuat" class="tab-pane fade">
                                                Tổng quan4
                                            </div>
                                            <div id="giai_phau_benh" class="tab-pane fade">
                                                Tổng quan5
                                            </div>
                                            <div id="khang_sinh_do" class="tab-pane fade">
                                                Tổng quan6
                                            </div>
                                            <div id="qua_trinh_dieu_tri" class="tab-pane fade">
                                                Tổng quan7
                                            </div>
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

                                    <div class="row">
                                        <div class="col-1">
                                            <Test/>
                                        </div>    
                                    </div>
                                        <div class="row mt-2">
                                            <div class="col-2 margin-right-30"><label class="text-label">Ngày khám:
                                                </label>
                                            </div>
                                            <div class="col-3"><input id="datetimepicker" type="text" class="form-control form-control-custom">
                                            </div>
                                            <div class="col-2"><label class="text-label">Bác sĩ khám: </label></div>
                                            <div class="col-4">
                                                <select name="" id="" class="form-control form-control-custom">
                                                    <option value="">Bác sĩ 1</option>
                                                    <option value="">Bác sĩ 2</option>
                                                    <option value="">Bác sĩ 3</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-2 margin-right-30"><label class="text-label">Lý do khám:
                                                </label></div>
                                            <div class="col-9">
                                                <div class="form-control form-control-custom">
                                                    Đau bụng
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row mt-2">
                                            <div class="col-2 margin-right-30"><label class="text-label">Bệnh sử:
                                                </label>
                                            </div>
                                            <div class="col-9">
                                                <textarea class="form-control">Bệnh nhân đi ngoài phân đen,đầy bụng-->khám</textarea>
                                            </div>
                                            <div class="col-1 padding-left-0 line-height-3">
                                                <button class="btn btn-book" data-toggle="tooltip" data-placement="right" title="Mẫu bệnh sử"><i
                                                        class="fa fa-address-book" aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-2 margin-right-30"><label class="text-label">Tiền sử bệnh:
                                                </label></div>
                                            <div class="col-9">
                                                <textarea class="form-control">Viêm dạ dày trào ngược thực quản/Trĩ nội độ I-II</textarea>
                                            </div>
                                            <div class="col-1 padding-left-0 line-height-3">
                                                <button class="btn btn-book" data-toggle="tooltip" data-placement="right" title="Mẫu tiền sử bệnh"><i
                                                        class="fa fa-address-book" aria-hidden="true"></i></button>
                                            </div>
                                        </div>


                                        <div class="row mt-2">
                                            <div class="col-2 margin-right-30"><label class="text-label">Toàn thân:
                                                </label>
                                            </div>
                                            <div class="col-9">
                                                <textarea class="form-control" rows="2">Thể trạng trung bình, da niêm mạc bình thường không phù, không xuất huyết dưới da</textarea>
                                            </div>
                                            <div class="col-1 padding-left-0 line-height-3">
                                                <button class="btn btn-book" data-toggle="modal" data-target=".modal-mau-toan-than"><i class="fa fa-address-book"
                                                        aria-hidden="true" data-toggle="tooltip" data-placement="right"
                                                        title="Mẫu toàn thân"></i></button>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-2 margin-right-30"><label class="text-label">Bộ phận:
                                                </label>
                                            </div>
                                            <div class="col-9">
                                                <textarea class="form-control" rows="3">- Tim nhịp đều - Phổi không có ral - Bụng không chướng, gan lá lách không sờ thấy, không có điểm đau khu trú - Các bộ phận khác hiện tại không có gì đặc biệt
                                                        </textarea>
                                            </div>
                                            <div class="col-1 padding-left-0 line-height-4">
                                                <button class="btn btn-book"><i class="fa fa-address-book"
                                                        aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-2 margin-right-30"><label class="text-label">Chẩn đoán BĐ:
                                                </label></div>
                                            <div class="col-9">
                                                <textarea rows="1" class="form-control">Hc dạ dày</textarea>

                                            </div>
                                        </div>

                                        <div class="row mt-2">
                                            <div class="col-2 margin-right-30"><label class="text-label">Kết quả CLS:
                                                </label></div>
                                            <div class="col-9">
                                                <textarea rows="2" class="form-control kqCLS"></textarea>
                                            </div>
                                            <div class="col-1 padding-left-0 line-height-3">
                                                <button class="btn btn-book" data-toggle="modal" data-target=".modal-ket-qua-cls"><i class="fa fa-link"
                                                        aria-hidden="true"></i></button>
                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-2 margin-right-30"><label class="text-label">Kết luận:
                                                </label></div>
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
                                                    <select class="select-custom1" name="" id="">
                                                        <option class="option-custom" value="">In phiếu khám</option>
                                                        <option class="option-custom" value="">In đơn thuốc</option>
                                                        <option class="option-custom" value="">In phiếu TCT</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- khám bệnh col right ------------------>
                                <div class="col-3 div-left mt-4">
                                    <div class="row">
                                        <div class="col-4 margin-20"><label class="text-label">Mạch: </label></div>
                                        <div class="col-4 margin-20">
                                            <input type="text" class="form-control" value="170">
                                        </div>
                                        <div class="col-3 form-control-custom">
                                            lần/phút
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-4 margin-20"><label class="text-label">Nhiệt độ: </label></div>
                                        <div class="col-4 margin-20">
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="col-3 form-control-custom">
                                            Độ C
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-4 margin-20"><label class="text-label">Huyết áp: </label></div>
                                        <div class="col-4 margin-20">
                                            <input type="text" class="form-control" value="140/80">
                                        </div>
                                        <div class="col-3 form-control-custom">
                                            mmHg
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-4 margin-20"><label class="text-label">Nhịp thở: </label></div>
                                        <div class="col-4 margin-20">
                                            <input type="text" class="form-control" value="170">
                                        </div>
                                        <div class="col-3 form-control-custom">
                                            lần/phút
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-4 margin-20"><label class="text-label">Cân nặng:</label></div>
                                        <div class="col-4 margin-20"><input type="text" class="form-control"
                                                value="59.0"></div>
                                        <div class="col-3 form-control-custom">
                                            Kg
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-4 margin-20"><label class="text-label">Chiều cao:</label></div>
                                        <div class="col-4 margin-20"><input type="text" class="form-control"
                                                value="157"></div>
                                        <div class="col-3 form-control-custom">
                                            cm
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-4 margin-20"><label class="text-label">SPO2:</label></div>
                                        <div class="col-4 margin-20"><input type="text" class="form-control"
                                                value="157"></div>
                                        <div class="col-3 form-control-custom">
                                            %
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-4 margin-20"><label class="text-label">BMI: </label></div>
                                        <div class="col-4 margin-20">
                                            <input type="text" class="form-control" value="20,28">
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
                                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Xét nghiệm</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">CDHA</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">PTTT</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Kháng sinh đồ</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Giải phẫu bệnh</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
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
                                                        <td class="font-700" colspan="6"><input type="checkbox"> 28/10/2019
                                                        </td>
                                                    </tr>
                                                    <tr class="treegrid-3 treegrid-parent-2">
                                                        <td class="font-700" colspan="6"><input type="checkbox"> Sinh hóa máu</td>
                                                    </tr>
                                                    <tr class="treegrid-4 treegrid-parent-3">
                                                        <td><input type="checkbox"> Định lượng Glucose (Máu)</td>
                                                        <td></td>
                                                        <td class="color-red">4.0</td>
                                                        <td>(4.10 - 5.90)</td>
                                                        <td>mmol/l</td>
                                                        <td>20/10/2019</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                                    </div>
                                </div>
                                <div class="card-footer text-right">
                                    <button class="btn btn-success btn-custom btn-in-lai-ket-qua" data-toggle="modal" data-target="#kq">In lại kết
                                        quả</button>
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
                                            <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-thong-tin-pttt" role="tab" aria-controls="pills-home" aria-selected="true">Thông tin PT/TT</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#e-kip-thuc-hien" role="tab" aria-controls="pills-profile" aria-selected="false">Ê kíp thực hiện</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-tuong-trinh" role="tab" aria-controls="pills-contact" aria-selected="false">Tường trình PT/TT</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-thuoc-vtyt" role="tab" aria-controls="pills-contact" aria-selected="false">Thuốc & VTYT</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-luoc-do" role="tab" aria-controls="pills-contact" aria-selected="false">Lược đồ PT/TT</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="pills-tabContent">
                                        <!-- Thông tin PT/TT -->
                                        <div class="tab-pane fade show active font-14" id="pills-thong-tin-pttt" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div class="row">
                                                <div class="col-2 max-width-12"><label for="">Tên dịch vụ</label></div>
                                                <div class="col-4"><label for="" class="form-control form-control-custom">Tên dịch vụ</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-2 max-width-12"><label for="">Nơi thực hiện</label>
                                                </div>
                                                <div class="col-4"><input type="text" class="form-control form-control-custom"></div>
                                            </div>
                                            <div class="row mt-1 mb-1">
                                                <div class="col-2 max-width-12"><label for="">Thời gian PT/TT</label>
                                                </div>
                                                <div class="col-2"><input type="datetime-local" class="form-control form-control-custom"></div>
                                                <div class="col-1 text-right"><label for="">đến</label></div>
                                                <div class="col-2"><input type="datetime-local" class="form-control form-control-custom"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-2 max-width-12"><label for="">Chẩn đoán trước
                                                        PT/TT</label></div>
                                                <div class="col-3"><input type="text" class="form-control form-control-custom"></div>
                                                <div class="col-7"><input type="text" class="form-control form-control-custom"></div>
                                            </div>
                                            <div class="row mt-1">
                                                <div class="col-2 max-width-12"><label for="">Chẩn đoán sau
                                                        PT/TT</label></div>
                                                <div class="col-3"><input type="text" class="form-control form-control-custom"></div>
                                                <div class="col-7"><input type="text" class="form-control form-control-custom"></div>
                                            </div>
                                            <div class="row mt-1">
                                                <div class="col-2 max-width-12"><label for="">Phương pháp PT/TT</label>
                                                </div>
                                                <div class="col-10"><input type="text" class="form-control form-control-custom"></div>
                                            </div>
                                            <div class="row mt-1">
                                                <div class="col-2 max-width-12"><label for="">Phương pháp vô cảm</label>
                                                </div>
                                                <div class="col-4"><input type="text" class="form-control form-control-custom"></div>
                                                <div class="col-1 text-right"><label for="">Phân loại</label></div>
                                                <div class="col-5"><input type="text" class="form-control form-control-custom"></div>
                                            </div>
                                            <div class="row mt-1">
                                                <div class="col-2 max-width-12"><label for="">Ngày rút chỉ</label></div>
                                                <div class="col-2"><input type="datetime-local" class="form-control form-control-custom"></div>
                                                <div class="col-1 text-right"><label for="">Ngày cắt chỉ</label></div>
                                                <div class="col-2"><input type="datetime-local" class="form-control form-control-custom"></div>
                                            </div>
                                            <div class="row mt-1">
                                                <div class="col-2 max-width-12"><label for="">Chế độ PT/TT</label></div>
                                                <div class="col-2">
                                                    <select name="" id="" class="form-control form-control-custom">
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                                <div class="col-1 text-right"><label for="">Tai biến</label></div>
                                                <div class="col-2">
                                                    <select name="" id="" class="form-control form-control-custom">
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                                <div class="col-1 text-right"><label for="">Tử vong</label></div>
                                                <div class="col-2">
                                                    <select class="form-control form-control-custom">
                                                        <option value=""></option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mt-1">
                                                <div class="col-2 max-width-12"><label for="">Ca PT/TT chính</label>
                                                </div>
                                                <div class="col-5"><input type="text" class="form-control form-control-custom"></div>
                                            </div>
                                        </div>
                                        <!-- Ê kíp thực hiện -->
                                        <div class="tab-pane fade" id="e-kip-thuc-hien" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div class="row">
                                                <div class="col-2 max-width-11">Nhân viên</div>
                                                <div class="col-3">
                                                    <select class="form-control form-control-custom">
                                                        <option value=""></option>
                                                        <option value="">Nhân viên 1</option>
                                                        <option value="">Nhân viên 2</option>
                                                    </select>
                                                </div>
                                                <div class="col-1">Vai trò</div>
                                                <div class="col-3">
                                                    <select class="form-control form-control-custom">
                                                        <option value=""></option>
                                                        <option value="">Vai trò 1</option>
                                                        <option value="">Vai trò 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mt-1">
                                                <div class="col-2 max-width-11"></div>
                                                <div class="col-3">
                                                    <select class="form-control form-control-custom">
                                                        <option value=""></option>
                                                        <option value="">Nhân viên 1</option>
                                                        <option value="">Nhân viên 2</option>
                                                    </select>
                                                </div>
                                                <div class="col-1"></div>
                                                <div class="col-3">
                                                    <select class="form-control form-control-custom">
                                                        <option value=""></option>
                                                        <option value="">Vai trò 1</option>
                                                        <option value="">Vai trò 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="row mt-1">
                                                <div class="col-2 max-width-11"></div>
                                                <div class="col-3">
                                                    <select class="form-control form-control-custom">
                                                        <option value=""></option>
                                                        <option value="">Nhân viên 1</option>
                                                        <option value="">Nhân viên 2</option>
                                                    </select>
                                                </div>
                                                <div class="col-1"></div>
                                                <div class="col-3">
                                                    <select class="form-control form-control-custom">
                                                        <option value=""></option>
                                                        <option value="">Vai trò 1</option>
                                                        <option value="">Vai trò 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Tường trình PT/TT -->
                                        <div class="tab-pane fade" id="pills-tuong-trinh" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div class="card">
                                                <div class="card-header">
                                                    <div class="row">
                                                        <div class="col-2 max-width-12">Mẫu tường trình</div>
                                                        <div class="col-3">
                                                            <select class="form-control form-control-custom">
                                                                <option value=""></option>
                                                                <option value="">Mẫu tường trình 1</option>
                                                                <option value="">Mẫu tường trình 2</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Thuốc & VTYT -->
                                        <div class="tab-pane fade" id="pills-thuoc-vtyt" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div class="mt-3 card card-custom min-height-65-vh">
                                                <div class="card-body">
                                                    <table class="table table-hover font-14">
                                                        <thead>
                                                            <tr>
                                                                <th class="text-center">STT</th>
                                                                <th></th>
                                                                <th class="text-center">Kho thuốc</th>
                                                                <th class="">Tên thuốc</th>
                                                                <th class="text-center">Hàm lượng</th>
                                                                <th class="text-center">Hoạt chất</th>
                                                                <th class="text-center">Số lượng</th>
                                                                <th class="text-center">Đơn giá</th>
                                                                <th class="text-center">Đơn vị</th>
                                                                <th class="">Cách dùng</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td class="text-center">1</td>
                                                                <td class="text-center align-middle"><input type="checkbox">
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
                                                                <td class="text-center align-middle"><input type="checkbox">
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
                                                                    <label for="">Kho thuốc:</label>
                                                                    <select name="" id="" class="form-control form-control-custom">
                                                                        <option value="">Kho A</option>
                                                                        <option value="">Kho B</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div class="col-3">
                                                                <div class="form-group">
                                                                    <label for="">Tên thuốc</label>
                                                                    <input type="text" class="form-control form-control-custom">
                                                                </div>
                                                            </div>
                                                            <div class="col-1">
                                                                <div class="form-group">
                                                                    <label for="">Đơn vị</label>
                                                                    <input id="ke_thuocDonVi" type="text" class="form-control form-control-custom" readonly value="Viên">
                                                                </div>
                                                            </div>
                                                            <div class="col-2 max-width-11">
                                                                <div class="form-group">
                                                                    <label for=""> Số Lượng</label>
                                                                    <input id="ke_thuocSoLuong" type="number" class="form-control form-control-custom">
                                                                </div>
                                                            </div>
                                                            <div class="col-2 max-width-11">
                                                                <div class="form-group">
                                                                    <label for="">Lượng dùng</label>
                                                                    <input id="ke_thuocLuongDung" type="number" class="form-control form-control-custom">
                                                                </div>
                                                            </div>
                                                            <div class="col-2 max-width-11">
                                                                <div class="form-group">
                                                                    <label for="">Số lần</label>
                                                                    <input id="ke_thuocSoLan" type="number" class="form-control form-control-custom">
                                                                </div>
                                                            </div>
                                                            <div class="col-2">
                                                                <div class="form-group">
                                                                    <label for="">sử dụng</label>
                                                                    <input id="ke_thuocSuDung" type="text" class="form-control form-control-custom">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row height-35">
                                                            <div class="col-2 text-right font-13"><label for="">Cách
                                                                    dùng: </label>
                                                            </div>
                                                            <div class="col-10">
                                                                <div class="form-group">
                                                                    <input id="ke_thuocCachDung" type="text" class="form-control form-control-custom">
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row height-35">
                                                            <div class="col-2 text-right font-13"><label for="">Lời dặn
                                                                    bác sĩ: </label>
                                                            </div>
                                                            <div class="col-10">
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control form-control-custom">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Lược đồ PT/TT -->
                                        <div class="tab-pane fade" id="pills-luoc-do" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            Lược đồ PT/TT
                                        </div>
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
                                        <h6 class="" style="color:#007944;">THÔNG TIN BỆNH ÁN</h6>
                                    </div>
                                    <div class="row">
                                        <div class="col-2"><label for="">Bệnh án</label></div>
                                        <div class="col-3">
                                            <select class="form-control form-control-custom">
                                                <option value=""></option>
                                                <option value="">BA viêm gan</option>
                                            </select>
                                        </div>
                                        <div class="col-2 text-right"><label for="">Số lưu trữ</label></div>
                                        <div class="col-2">
                                            <input type="number" class="form-control form-control-custom">
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-2"><label for="">Bệnh chính</label></div>
                                        <div class="col-3">
                                            <textarea class="form-control" rows="2"></textarea>
                                        </div>
                                        <div class="col-5">
                                            <textarea class="form-control" rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-2"><label for="">Bệnh kèm theo</label></div>
                                        <div class="col-3">
                                            <textarea class="form-control" rows="2"></textarea>
                                        </div>
                                        <div class="col-5">
                                            <textarea class="form-control" rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-2"><label for="">Ngày mở BA</label></div>
                                        <div class="col-3">
                                            <input type="date" class="form-control form-control-custom">
                                        </div>
                                        <div class="col-2 text-right"><label for="">Ngày đóng BA</label></div>
                                        <div class="col-3">
                                            <input type="date" class="form-control form-control-custom">
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-2"><label for="">Bệnh kèm theo</label></div>
                                        <div class="col-8">
                                            <textarea class="form-control" rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-2"><label for="">Bác sĩ</label></div>
                                        <div class="col-3">
                                            <select class="form-control form-control-custom">
                                                    <option value=""></option>
                                                    <option value="">BS.Nguyễn Văn An</option>
                                                </select>
                                        </div>
                                    </div>

                                    <div class="row mt-2">
                                        <h6 class="" style="color:#007944;">THÔNG TIN BỆNH MÃN TÍNH</h6>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-2"><label for="">Tên bệnh</label></div>
                                        <div class="col-3">
                                            <textarea class="form-control" rows="2"></textarea>
                                        </div>
                                        <div class="col-5">
                                            <textarea class="form-control" rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-2"><label for="">Ghi chú</label></div>
                                        <div class="col-8">
                                            <textarea class="form-control" rows="2"></textarea>
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-2"><label for="">Khoa phòng</label></div>
                                        <div class="col-3">
                                            <select class="form-control form-control-custom">
                                                <option value=""></option>
                                                <option value="">Phòng khám viêm gan</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer text-right">
                                    <button class="btn btn-success btn-custom mr-1 btn-sm" style="width:90px;" data-toggle="modal" data-target=".danhSachBANT">Danh sách</button>
                                    <button class="btn btn-success btn-custom mr-1 btn-sm" style="width:90px;">Lưu</button>
                                    <button class="btn btn-success btn-custom mr-1 btn-sm" style="width:90px;">In</button>
                                    <button class="btn btn-success btn-custom mr-1 btn-sm" style="width:90px;">Đóng
                                        BA</button>
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
                                        <div class="col-3"><input type="date" class="form-control form-control-custom">
                                        </div>
                                        <div class="col-1">Đến ngày</div>
                                        <div class="col-3"><input type="date" class="form-control form-control-custom">
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

    <div class="overlay"></div>
    </div>
</template>
 
<script src="./Home.js"></script>
<style src="./Home.css" scope></style>
