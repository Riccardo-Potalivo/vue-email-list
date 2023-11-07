"use strict";

const {createApp} = Vue

createApp({
    data(){
        return {
            
        }

    },

    methods: {

        getEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((r) => {
                console.log(r.data.response)
            });
        }

    },
    
    mounted(){

        this.getEmail()

    }
}).mount('#app');