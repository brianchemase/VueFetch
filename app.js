const app = Vue.createApp({

    data(){
        return{
            firstName :'Brian',
            lastName : 'Anikayi',
            email : 'banikayi@outlook.com',
            gender: 'male',
            phone:'0725670606',
            picture:'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods:{
       async getUser(){
        const res = await fetch('https://randomuser.me/api/')
        const {results}= await res.json()
       // console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email =  results[0].email
            this.gender = results[0].gender
            this.phone =results[0].phone
            this.picture =results[0].picture.large
        },
    },
})

app.mount('#app')