"use strict";

const {createApp} = Vue

createApp({
    data(){
        return {
            print: false,
            email: [],
            listLength: 10
        }

    },

    methods: {
        
        getEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((r) => {
                this.email.push(r.data.response);
                if (this.email.length === this.listLength) {
                    this.print = true;
                }
            });
        },

    },
    
    mounted(){
        for (let i = 0; i < this.listLength; i++){
            this.getEmail();
        }
    }
}).mount('#app');