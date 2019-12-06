<template>
  <div class="hello">
    <div class="card">
      <div class="card-header text-right">
        <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add</button>
      </div>
      <div class="card-body">
        <table class="table table-hover table-bordered">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Control</th>
          </tr>
          <tr v-for="(item, index) in data" :key="index">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>
              <button
                class="btn btn-sm btn-info mr-1"
                data-toggle="modal"
                data-target="#exampleModal"
                @click="edit(item,index)"
              >edit</button>
              <button class="btn btn-sm btn-warning" @click="deleteItem(item,index)">delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content" style="height:auto">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-2">
                <label for>Name</label>
              </div>
              <div class="col-10">
                <!-- <input type="text" name class="form-control form-control-custom" v-model="name" /> -->
                <input
                  type="text"
                  class="form-control form-control-custom"
                  v-model.trim="$v.name.$model"
                  :class="{'is-invalid':$v.name.$error, 'is-valid':!$v.name.$invalid}"
                />
                <div class="valid-feedback">Ngon ngay</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.name.required">Không đc bỏ trống</span>
                  <span
                    v-if="!$v.name.minLength"
                  >K đc nhỏ hơn {{$v.name.$params.minLength.min}} ký tự</span>
                  <span
                    v-if="!$v.name.maxLength"
                  >K đc lớn hơn {{$v.name.$params.maxLength.max}} ký tự</span>
                </div>
              </div>
            </div>
            <div class="row mt-1">
              <div class="col-2">
                <label for>Email</label>
              </div>
              <div class="col-10">
                <input
                  type="text"
                  class="form-control form-control-custom"
                  v-model.trim="$v.email.$model"
                  :class="{'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid}"
                />
                <!-- <small id="helpId" class="text-muted">Help text</small> -->
                <div class="valid-feedback">Ngon ngay</div>
                <div class="invalid-feedback">
                  <span v-if="!$v.email.required">Không đc bỏ trống</span>
                  <span v-else-if="!$v.email.invalid">Email sai định dạng</span>
                </div>
              </div>
            </div>
            <div class="row mt-1" v-show="is_add">
              <div class="col-2">
                <label for>Password</label>
              </div>
              <div class="col-10">
                <input
                  type="password"
                  name
                  class="form-control form-control-custom"
                  v-model="password"
                />
                <!-- <small id="helpId" class="text-muted">Help text</small> -->
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="close"
            >Close</button>
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="add"
            >{{is_add ? "Thêm mới" : "Cập nhật"}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../store/EventBus";
import axios from "axios";
import { getDataUser, addUser, updateUser } from "../models/test";
import {
  required,
  email,
  minLength,
  maxLength,
  between
} from "vuelidate/lib/validators";

export default {
  name: "Test",
  data() {
    return {
      data: [],
      id: "",
      index: "", //update
      name: "",
      email: "",
      password: "",
      is_add: true
    };
  },
  created() {
    // Listening the event hello
    EventBus.$on("hello", this.handler);
  },
  mounted() {
    this.listUser();
  },
  destroyed() {
    // Stop listening the event hello with handler
    EventBus.$off("hello", this.handler);
  },
  validations: {
    name: { required, minLength: minLength(3), maxLength: maxLength(10) },
    email: { required, email }
  },
  methods: {
    handler(e) {
      console.log("recieved: ", e);
    },
    listUser() {
      getDataUser().then(result => {
        this.data = result;
      });
    },
    edit(item, index) {
      this.is_add = false;
      this.id = item.id;
      this.name = item.name;
      this.email = item.email;
      this.password = item.password;
      this.index = index;
    },
    deleteItem(item, index) {
      if (confirm("Bạn có chắc chắn xóa " + item.name)) {
        axios.delete(`users/` + item.id).then(response => {
          if (response.data.success) {
            this.data = this.data.filter(f => f.id != item.id);
          }
        });
      }
    },
    add() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      // this.$v.name.$touch();
      if (
        this.$v.name.$pending ||
        this.$v.name.$error ||
        this.$v.email.$error
      ) {
        this.warning();
        return;
      } else {
        if (this.is_add) {
          addUser(data).then(result => {
            if (result) {
              this.data.push(result);
              this.resetData();
            } else {
              this.warning();
            }
          });
        } else {
          updateUser(this.id, data).then(result => {
            if (result) {
              this.data[this.index] = result;
              this.resetData();
            } else {
              this.warning();
            }
          });
        }
      }
    },
    close() {
      this.resetData();
    },
    resetData() {
      this.id = "";
      this.name = "";
      this.email = "";
      this.password = "";
      this.is_add = true;
      this.$v.$reset();
      console.log(111, this.$v);
    },
    warning() {
      window.alert("Đã có lỗi xảy ra");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
