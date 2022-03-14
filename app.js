const app = Vue.createApp({

data() {
    return {
        title:'Vue Demo',
        count:0,
        books:[
            {title: 'vue demo book', author:'cj Tar', isFav: true},
            {title: 'Angular demo book', author:'cj Tar', isFav: false},
            {title: 'React demo book', author:'cj Tar', isFav: true}
        ]
    }
},
methods:{
    countValue(){
      this.count++
    }
},
computed:{
    filteredBooks(){
        return this.books.filter(book => book.isFav);
    }
}
});

app.mount('#app')