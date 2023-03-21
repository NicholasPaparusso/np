<script>
import widget from '../components/widget.vue'
export default {
    name: 'Footer',

    components:{
        widget,
    },

    methods:{
        scrollToTop(){
            window.scrollTo(0,0);
        },

        async copyUrl(text){
            try {
                await navigator.clipboard.writeText(text);

            } catch($e) {
                alert('Cannot copy');
            }
        }
    }

}
</script>

<template>
    <footer>

        <div class="d-flex justify-content-end">
            <label for="totop" class="mx-3 d-none d-sm-inline">
                Torna su
            </label>
            <a id="totop" class="to-top" @click="scrollToTop()">
                <i class="fa-solid fa-chevron-up"></i>
            </a>
        </div>

        <ul class="d-flex justify-content-center flex-wrap align-items-center h-100">
            <li >
                <a class="widget-holder" href="https://www.linkedin.com/in/nicholas-paparusso/">
                    <i class="fa-brands fa-linkedin"></i>
                    <span>Linkedin</span>
                </a>
                <widget class="widget" :content="'Visita il mio profilo'"/>
            </li>

            <li>
                <a class="widget-holder" href="https://github.com/NicholasPaparusso">
                    <i class="fa-brands fa-github"></i>
                    <span>Github</span>
                </a>
                <widget class="widget" :content="'Naviga fra i miei progetti'"/>
            </li>

            <li>
                <i class="fa-solid fa-envelope"></i>
                <span class="copy widget-holder" @click="copyUrl('nicholaspaparusso@gmail.com')">Email</span>
                <widget class="widget" :content="'Cliccami'"/>
            </li>

            <li>
                <i class="fa-solid fa-mobile-screen-button"></i>
                <span class="copy widget-holder" @click="copyUrl('3534424640')">Telefono</span>
                <widget class="widget" :content="'Cliccami'"/>
            </li>
        </ul>
    </footer>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

footer{
    background: #355C7D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(215deg $bg-start, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(215deg,  $bg-start ,#355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: $white;
    padding: 25px 100px;

        label{
            font-size: .9em;
        }

        ul{
            li{
                margin: 20px 0;
                padding: 0px 30px;
                font-weight: 600;
                font-size: .9em;
                position: relative;
                top: 0;
                i{
                    font-size: 1.2em;
                    margin: 0 5px;
                }
                span{
                    margin-left: 10
                }
                a{
                    cursor: pointer;

                }
            }
        }
    .widget-holder:hover + .widget{
        opacity:1;
    }

    .widget{
        top: -250%
    }

    .to-top{
        font-size: 1.2em;
        cursor: pointer;
        transition: all .3s;
        &:hover{
            scale: (1.1);
        }
    }

    .copy{
        cursor: pointer;
    }
}

      @media only screen and (max-width: 850px){
        footer{
            padding: 10px 50px;
        }
    }

    @media only screen and (max-width: 680px){

    }
</style>
