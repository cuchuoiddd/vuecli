<template>
  <div class="category">
    <div class="row" style="flex-flow: row-reverse;">
      <!-- <button class="btn btn-primary" @click="add">Add Category</button> -->
      <b-button v-b-modal.modal-1 variant="primary" @click="add">Add Book</b-button>
    </div>
    <div class="row">
        <v-select class="form-control" label="countryName" :options="countries"></v-select>
      <table class="table table-hover">
        <tr>
          <th>#</th>
          <th>name</th>
          <th>description</th>
          <th>Status</th>
          <th>control</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Củ chuối</td>
          <td>Mô tả</td>
          <td>
            <label class="switch">
              <input type="checkbox" checked @click="changeStatus($event)" />
              <span class="slider round"></span>
            </label>
          </td>
          <td>
            <button class="btn btn-sm btn-info" @click="edit">edit</button>
            <button class="btn btn-sm btn-danger" @click="remove">delete</button>
          </td>
        </tr>
      </table>
    </div>
    <b-modal id="modal-1" title="Danh mục" hide-footer ref="my-modal">
      <div class="container">
        <div class="row form-group">
          <label for>Name</label>
          <input type="text" v-model="name" class="form-control" />
        </div>
        <div class="row form-group">
          <label for>Description</label>
          <input type="text" v-model="description" class="form-control" />
        </div>
      </div>
      <div class="footer float-right">
        <b-button variant="outline-danger" @click="cancel">Hủy</b-button>
        <b-button variant="outline-primary" @click="save">{{is_add ? "Thêm mới" : "Cập nhật"}}</b-button>
      </div>
    </b-modal>
  </div>
</template>
 
<script src="./Book.js"></script>
<style src="./Book.css" scope></style>
