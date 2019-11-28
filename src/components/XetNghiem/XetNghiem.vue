<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./XetNghiem.css" module lang="css" scope></style>
<template>
  <div class="hello">
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
</template>

<script src="./XetNghiem.js" crossorigin="use-credentials"></script>

