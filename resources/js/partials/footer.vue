<script>
export default {
    name: 'Footer',

}
</script>

<template>
    <footer>
        <ul class="d-flex justify-content-center">
            <li>
                <a href="https://www.linkedin.com/in/nicholas-paparusso/">
                    <i class="fa-brands fa-linkedin"></i>
                    <span>Linkedin</span>
                </a>
            </li>

            <li>
                <a href="https://github.com/NicholasPaparusso">
                    <i class="fa-brands fa-github"></i>
                    <span>Github</span>
                </a>
            </li>

            <li>
                <i class="fa-solid fa-envelope"></i>
                <a href="mailto:nicholaspaparusso@gmail.com">Email</a>
            </li>

            <li>
                <i class="fa-solid fa-mobile-screen-button"></i>
                <a href="">Tell: 3534424640</a>
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
    padding: 50px 100px;
    color: $white;

        ul{
            li{
                padding: 0 20px;
                font-weight: 600;
                font-size: .9em;
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
}
</style>
