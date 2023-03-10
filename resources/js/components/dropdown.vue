<script>
export default {
    name: 'dropdown',
    props:{},
    data(){
        return{
            trigger : false,
        }
    },
}
</script>

<template>
    <div class="hamburger-menu">
        <button @click="this.trigger = !this.trigger" class="hamburger-button">
                <i class="fa-solid fa-bars"></i>
        </button>
        <ul v-show="this.trigger === true" class="dropdown">
            <li><a href="#">About me </a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">CV</a></li>
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
