<template>
    <div id="app">
        <transition name="fade" mode="out-in">
        <div v-if="state == 0"><StartButton/></div>
        </transition>
        <transition name="fade" mode="out-in">
        <div v-if="state == 1"><SelectionScreen/></div>
        </transition>
        <transition name="fade" mode="out-in">
        <div v-if="state == 2"><Keyboard/></div>
        </transition>
        <transition name="fade" mode="out-in">
        <div v-if="state == 3"><PaymentScreen/></div>
        </transition>
        <transition name="fade" mode="out-in">
        <div v-if="state == 4"><WaitingScreen/></div>
        </transition>

    </div>
</template>

<script>
import StartButton from './components/StartButton.vue'
import SelectionScreen from './components/SelectionScreen.vue'
import Keyboard from './components/Keyboard.vue'
import PaymentScreen from './components/Payment.vue'
import WaitingScreen from './components/WaitingScreen.vue'
import { serverBus } from './main.js'

export default {
    mounted() {
        const plugin = document.createElement("script");
        plugin.setAttribute(
            "src",
            "../../../fontawesome-free-5.9.0-web/js/all.js"
        );
        plugin.async = true;
        document.head.appendChild(plugin);
    },
    name: 'App',
    components: {
        StartButton,
        SelectionScreen,
        Keyboard,
        PaymentScreen,
        WaitingScreen
    },
    data () {
        return {
            state: 0
        }
    },
    created() {
        serverBus.$on('state', (state) => {
            this.state = state;
        });
    },
    onIdle() {
        if(this.state == 4) {
            return
        }
        serverBus.$emit('state',0)
    }
}
</script>

<style>
body {
    height: 100vh;
    background: linear-gradient(-90deg, #06beb6, #48b1bf);
    align-items: center;
    //cursor: none !important;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
body::-webkit-scrollbar { width: 0 !important }
</style>
