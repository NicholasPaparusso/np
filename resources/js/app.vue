<script>
import Header from './partials/header.vue'
import Footer from './partials/footer.vue'
export default {
    name: 'App',
    components:{
        Header,
        Footer
    }
}
</script>

<template>
    <body class="">
        <Header/>
            <main>
                <router-view> </router-view>
            </main>
            <Footer/>
        </body>
</template>

<style lang="scss">
@import '../scss/_variables.scss';
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    body{
        background-color: black;
    }



    main{
        margin-top: 100px;
        height: 100vh;
        overflow-y: auto ;
    }

        @media only screen and (max-width: 680px){
        main{
            padding: 35px 50px;
        }
    }
</style>
