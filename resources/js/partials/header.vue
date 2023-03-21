<script>
import widget from '../components/widget.vue'
import dropdown from '../components/dropdown.vue'
import {routesData} from '../data/data'
export default {
    name: 'Header',
    components:{
        widget,
        dropdown,
    },
    data(){
        return{
            routesData,
        }
    },
methods:{

     hide(){
        let animatedUL = document.querySelector('.animated-ul');


        window.addEventListener('resize', function(){
            let w = window.innerWidth ;
            if(w < 581){
                setTimeout(function(){
                animatedUL.classList.add('d-none')
                }, 500);
            }else if(w > 580){
                animatedUL.classList.remove('d-none')
            }
        })


    }

},

mounted(){
    this.hide()
}

}
</script>

<template>
    <header>
        <nav class="h-100 flex justify-between items-center">

            <div class="author">
                <router-link to="/" class="widget-holder">
                    <img src="../img/np-logo.png" alt="">
                </router-link>
                <widget class="widget" :content="'Torna alla Home'"/>
            </div>

            <ul class="d-flex animated-ul">
                <li class="" v-for="route in routesData" :key="route.id">
                    <router-link :to="{name: route.name}" class="widget-holder">
                        {{route.show}}
                    </router-link>
                    <widget class="widget"  :content="route.prop"/>
                </li>
            </ul>

            <dropdown />
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

header{
    height: 100px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 999;
    padding: 0px 100px;
    color: $white;
    background: #355C7D;  /* fallback for old browsers */
    background: -webkit-linear-gradient(215deg $bg-start, #355C7D);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(215deg,  $bg-start ,#355C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.author{
    width: 70px;
    position: relative;
    top: 0;
    flex-shrink: 0;
    img{
        width: 100%;
    }
}

ul{

    li{
        position: relative;
        margin-left: 70px;
        a{
            font-size: .9em;
            font-weight:600;
            position: relative;
            top: 0;
        }
    }

}


    .widget-holder:hover + .widget{
        opacity:1;
    }



    @media only screen and (max-width: 680px){
        header{
            padding: 0px 50px;
        }
    }

        @media only screen and (max-width: 580px){
            .hide{
                animation: resize .5s;
                animation-fill-mode: forwards;
                transition: all .5s;
            }

            .animated-ul  li:first-of-type{
                position: relative;
                left: 0;
                animation: disappear-1 .5s ;
                animation-fill-mode: forwards;
            }

            .animated-ul  li:nth-of-type(2){
                position: relative;
                left: 0;
                animation: disappear-2 .5s ;
                animation-fill-mode: forwards;
            }


            .animated-ul  li:last-of-type{
                position: relative;
                left: 0;
                animation: disappear-3 .5s ;
                animation-fill-mode: forwards;

            }

            @keyframes disappear-1{
                from {left: 0; transform: scale(1);}
                50%{transform: scale(0.5);}
                to {left: 80%; transform: scale(0);opacity: 0;}
            }

            @keyframes disappear-2{
                from {left: 0; transform: scale(1);}
                50%{transform: scale(0.5);}
                to {left: 40%; transform: scale(0);opacity: 0;}
            }

            @keyframes disappear-3{
                from {left: 0; transform: scale(1);}
                50%{transform: scale(0.5);}
                to {left: 8%; transform: scale(0);opacity: 0;}
            }


    }

</style>
