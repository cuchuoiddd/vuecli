export const store = {
    state: {
      numbers: [1, 2, 3],
      item:null
    },
    setValue(item){
        this.state.item = item;
    }
  };