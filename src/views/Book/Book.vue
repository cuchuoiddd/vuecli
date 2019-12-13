<template>
  <div class="category">
    <div class="row" style="flex-flow: row-reverse;">
      <!-- <button class="btn btn-primary" @click="add">Add Category</button> -->
      <b-button v-b-modal.modal-1 variant="primary" @click="add">Add Book</b-button>
    </div>
    <div class="row">
      <v-select
        style="width:300px"
        v-model="selected"
        label="name"
        @input="setSelected"
        :reduce="r=>r.id"
        :options="data_ctg"
        :selectable="option => option.status"
      ></v-select>
      <table class="table table-hover">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Status</th>
          <th>control</th>
        </tr>
        <tr v-for="(item,index) in data" :key="index">
          <td>{{index +1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.description}}</td>
          <td>
            <label class="switch">
              <input type="checkbox" :checked="item.status" @click="changeStatus($event)" />
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
        <div class="row form-group">
          <label for>Code</label>
          <input type="text" v-model="code" class="form-control" />
        </div>
        <div class="row form-group">
          <label for>Danh mục</label>
          <v-select
            style="width:100%"
            :options="data_ctg"
            v-model="selected_ctg"
            label="name"
            :reduce="r => r.id"
            :selectable="option => option.status"
          ></v-select>
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
