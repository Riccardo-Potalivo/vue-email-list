"use strict";

const {createApp} = Vue

createApp({
    data(){
        return {

            email: []
            
        }

    },

    methods: {
        
        getEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((r) => {
                this.email.push(r.data.response)
            });
        }

    },
    
    mounted(){
        for (let i = 0; i < 10; i++){
            this.getEmail();
        }
        
        console.log(this.email);


    }
}).mount('#app');