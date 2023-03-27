<script>
import { routesData } from '../data/data'
export default {
    name: 'dropdown',
    props:{},
    data(){
        return{
            trigger : false,
            routesData,
        }
    },

    methods:{

    },

}
</script>

<template>
    <div v-motion-slide-right class="hamburger-menu" tabindex="0" >
        <button  @click="this.trigger = !this.trigger"  @focusout="this.trigger = false" class="hamburger-button">
                <i class="fa-solid fa-bars"></i>
        </button>
        <ul class="dropdown" :class="{'hide': this.trigger}"  >
            <li v-for="route in routesData" :key="route.id">
                <a :href="route.path">
                    {{route.show}}
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import  '../../scss/_variables.scss';
    .hamburger-menu{
        position: relative;
        top: 0;

        .dropdown{
            position: absolute;
            background-color: $bg-dropdown;
            right: 0;
            top: 120%;
            border-radius: 10px;
            width: 130px;
            opacity: 0 !important;
            transition: all .3s;
            a{
                font-size: .85em;
                font-weight: 600;
                display: block;
                padding: 5px 10px;
                line-height: 35px;
                width: 130px;
                transition: all .3s;
                &:hover{
                    background-color: $bg-start;
                }
            }
        }


        .hide{
            opacity: 1 !important;
            }

        .hamburger-button{
            font-size: 20px;
        }
    }


    @media only screen and (min-width: 581px){
        .hamburger-menu{
            display: none;
            }
    }
</style>
