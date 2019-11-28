<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./KhachHang.css" module lang="css" scope></style>
<template>
  <div class>
    <table class="table table-hover table-borderless font-14">
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
        <tr class="row-table" v-for="(item, index) in data" :key="index" @click="selectBenhNhan(item)">
          <td class="text-center">{{index +11}}</td>
          <td>{{item.name}}</td>
          <td class="text-center">{{item.year_of_birth}}</td>
          <td class="text-center">{{item.sex}}</td>
          <td class="text-center">{{item.waiting_time}}</td>
          <td class="text-center">{{item.status | status_name}}</td>
          <td class="text-center">{{item.timer}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./KhachHang.js" crossorigin="use-credentials"></script>

