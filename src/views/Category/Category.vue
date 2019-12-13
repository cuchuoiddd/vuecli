<template>
  <div class="category">
    <div class="row" style="flex-flow: row-reverse;">
      <!-- <button class="btn btn-primary" @click="add">Add Category</button> -->
      <b-button variant="primary" @click="add">Add Category</b-button>
    </div>
    <div class="row">
      <table class="table table-hover" id="my-table">
        <tr>
          <th>#</th>
          <th>name</th>
          <th>description</th>
          <th>Status</th>
          <th>control</th>
        </tr>
        <tr v-for="(item,index) in data" :key="index">
          <td>{{index + 1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.description}}</td>
          <td>
            <label class="switch">
              <input type="checkbox" :checked="item.status" @click="changeStatus($event,item)" />
              <span class="slider round"></span>
            </label>
          </td>
          <td>
            <button class="btn btn-sm btn-info" @click="edit(item,index)">edit</button>
            <button class="btn btn-sm btn-danger" @click="remove(item)">delete</button>
          </td>
        </tr>
        <tr>
          <td colspan="5" class="text-center">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="my-table"
              @input="pagi"
            ></b-pagination>
          </td>
        </tr>
      </table>
    </div>
    <b-modal id="modal-1" title="Danh mục" hide-footer ref="my-modal">
      <div class="container">
        <div class="row form-group">
          <label for>Name</label>
          <input
            type="text"
            v-model.trim="$v.name.$model"
            :class="{'is-invalid':$v.name.$error, 'is-valid':!$v.name.$invalid}"
            class="form-control"
          />
          <div class="invalid-feedback">
            <span v-if="!$v.name.required">Không đc bỏ trống</span>
            <span v-if="!$v.name.minLength">K đc nhỏ hơn {{$v.name.$params.minLength.min}} ký tự</span>
            <span v-if="!$v.name.maxLength">K đc lớn hơn {{$v.name.$params.maxLength.max}} ký tự</span>
          </div>
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
 
<script src="./Category.js"></script>
<style src="./Category.css" scope></style>
