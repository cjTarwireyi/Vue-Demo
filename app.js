const app = Vue.createApp({

data() {
    return {
        title:'Vue Demo',
        count:0
    }
},
methods:{
    countValue(){
      this.count++
    }
}
});

app.mount('#app')