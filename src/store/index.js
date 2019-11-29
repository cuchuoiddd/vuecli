export const store = {
    state: {
      numbers: [1, 2, 3],
      item:null,
      msg:"cuchuoi"
    },
    setValue(item){
        this.state.item = item;
        this.state.msg = "ngon ngay"
        console.log(1233,this.state.msg)
    },
    getValue(){
      return this.state.item
    }
  };