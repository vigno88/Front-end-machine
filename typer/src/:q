<template>
    <div id="container">
        <b class="startButton" @click="changeState">Let's Begin</b>
    </div>
</template>

<script>
import { serverBus } from '../main.js'

export default {
    name: 'StartButton',
    methods: {
        changeState: function() {
            serverBus.$emit('state',1)
        }
    }
}
</script>

<style scoped>
#container {
    text-align: center;
    align-items: center;
    position: absolute;
    left: 62vh;
    top: 45vh;
}

h1 {
    font-weight: 300;
}

b {
    color: inherit;
    text-decoration: none;
    color: #23a6d5;
    width: 200px;
    height: 100px;
    background: #ffffff;
    position: relative;
    padding: 16px;
    font-size: 110px;
    border-radius: 10px;
    box-shadow: 0px 15px 0px 0px #cfcccc, 0px 0px 20px 0px rgb(110, 110, 110);

    transition: all 0.2s;
}

b:active {
    top: 10px;
    box-shadow: 0px 7px 0px 0px #cccccc;
}

a:hover {
    color: #23a6d5;
    text-decoration: none;
}
</style>
