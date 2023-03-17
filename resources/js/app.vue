<script>
import Header from './partials/header.vue'
export default {
    name: 'App',
    components:{
        Header,
    }
}
</script>

<template>
    <body class="">
        <Header/>
        <main>
            <router-view> </router-view>
        </main>
    </body>
</template>

<style lang="scss">
@import '../scss/_variables.scss';


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #355C7D;  /* fallback for old browsers */
        background: -webkit-linear-gradient(215deg $bg-start, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(215deg,  $bg-start ,#355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        height: 100vh;
    }


    main{
        padding: 35px 100px;
        overflow-y: auto ;
        height: calc(100vh - 100px);
    }

        @media only screen and (max-width: 680px){
        main{
            padding: 35px 50px;
        }
    }
</style>
