<script>
import Header from './partials/header.vue'
import Footer from './partials/footer.vue'
import Home from './pages/home.vue'
import About from './pages/about.vue'
import Projects from './pages/projects.vue'
export default {
    name: 'App',
    components:{
        Header,
        Footer,
        Home,
        About,
        Projects,
    }
}
</script>

<template>
    <body class="">
        <Header/>
            <main>
                <Home />
                <About/>
                <Projects/>
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
        scrollbar-width: thin;
    }

    body{
        background-color: black;
        background: #355C7D;  /* fallback for old browsers */
        background: -webkit-linear-gradient(215deg $bg-start, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(215deg,  $bg-start ,#355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }



    main{
        margin-top: 100px;
        height: calc(100vh - 100px);
        overflow-y: auto ;
        padding: 0px 100px;
    }

        @media only screen and (max-width: 680px){
        main{
            padding: 0px 50px 35px 50px;
        }
    }
</style>
