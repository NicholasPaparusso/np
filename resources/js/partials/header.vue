<script>
import widget from '../components/widget.vue'
import dropdown from '../components/dropdown.vue'

export default {
    name: 'Header',
    components:{
        widget,
        dropdown,
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
                <router-link :to="{name: homepage}">
                <a href="#" class="widget-holder">
                    <img src="../img/np-logo.png" alt="">
                </a>
                </router-link>
                <widget class="widget" :content="'Torna alla home'"/>
            </div>

            <ul class="d-flex animated-ul">
                <li class="hide">
                    <a class="widget-holder " href="#">About me </a>
                    <widget class="widget" :content="'Scopri di più'"/>
                </li>
                <li class="hide">
                    <a class="widget-holder" href="#">Contacts</a>
                    <widget class="widget" :content="'Contatti utili'"/>
                </li>
                <li class="hide">
                    <a class="widget-holder" href="#">CV</a>
                     <widget class="widget" :content="'Scarica il mio cv'"/>
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
    padding: 0px 100px;
    color: $white;
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

        // &:hover::after{
        //     opacity: 1;
        //     transition: all .3s;
        // }


        //     &::after{
        //         content: '';
        //         position: absolute;
        //         border-radius: 50%;
        //         width: 7px;
        //         height: 7px;
        //         background-color: $white;
        //         top: -100%;
        //         left: 50%;
        //         transform: translate(-50%);
        //         transition: all .3s;
        //         opacity: 0;
        //     }
        }
    }

}
    .widget{
        position: absolute;
        left: 50%;
        top: 150%;
        padding: 5px 10px;
        width: 120px;
        border-radius: 20px;
        background-color: $bg-dropdown;
        opacity: 0;
        text-align: center;
        transition: all .3s;
        transform: translate(-50%);
        font-size: .85em;
        font-weight: 500;
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
