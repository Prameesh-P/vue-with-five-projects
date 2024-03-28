const app = Vue.createApp({
    data(){
        return{
            name: 'Prameesh',
            age: 30,
            anime_data : [
                {name : 'Demon Slayer', year : 2018,isFav : true , img :'assets/1.png'},
                {name : 'One Piece', year : 1999,isFav : true, img :'assets/2.png'},
                {name : 'Naruto', year : 2006,isFav : false, img :'assets/3.png'}
            ],
            showData: true,
            x : 0,
            y : 0
        }
    },
    methods: {
        toggleData(){
            this.showData = !this.showData
        },
        handleEvent(e){
            console.log(e)
        },
        printOffset(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleFav(anime){
            anime.isFav = !anime.isFav
        }
    },
    computed: {
        filterdFav(){
            return this.anime_data.filter((anime) => anime.isFav)
        },
        filterdNonFav(){
            return this.anime_data.filter((anime) => !anime.isFav)
        }
    }
})
app.mount('#app')