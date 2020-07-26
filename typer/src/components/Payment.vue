<template>
    <div>
        <div class="container upper">
            <div class="columns">
                <div class="column">
                    <div class="button-back" @click="back"><font-awesome-icon icon="arrow-alt-circle-left"/> Back</div>
                </div>
                <div class="column">
                </div>
                <div class="column">
                </div>
                <div class="column">
                </div>
                <div class="column">
                    <div class="button-cancel" @click="cancel">Cancel <font-awesome-icon icon="times-circle"/></div>
                </div>
            </div>
        </div>
        <div class="container lower">
            <div class="back">
                <div class="preview">
                    <img src="../../../../images/Liscence quebec.png"  class="previewImg">
                    <p class="string" id="string">{{ $store.getters.word }}</p>
                </div>
            </div>
        </div>
        <div class="container footers">
            <div class="columns">
                <div class="column">
                </div>
                <div class="column">
                </div>
                <div class="column">
                    <div class="button-back button-pay" @click="pay">Pay</div>
                </div>
                <div class="column">
                </div>
                <div class="column">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { serverBus } from '../main.js'
import axios from "axios";


var resp = ""
var i = 0
function loopPolling() {
    setTimeout(function() {
        axios.get("http://localhost:3000/areYouDone")
            .then(response => (resp = response.data))
        if( resp == "done") {
            resp = ""
            i = 0
            serverBus.$emit('state',0)
            return
        }
        i++
        // loop 1000 seconds
        if(i < 1000) {
            loopPolling();
        }
        console.log(resp)
    }, 1000)
}

export default {
    name: 'PaymentScreen',
    methods: {
        back: function() {
            serverBus.$emit('state',2)
        },
        cancel: function() {
            serverBus.$emit('state',0)
        },
        pay: function() {
            serverBus.$emit('state',4)
            console.log( this.$store.getters.designChoice)
            axios.get("http://localhost:3000/toGcode?content=" + this.$store.getters.word + "|" + this.$store.getters.designChoice, true)
            loopPolling()
        },
    }
}
</script>

<style scoped>
.upper {
    padding-top: 2%;
    height: 15vh;
}

.lower {
    height: 70vh;
}

.footers {
    height: 15vh;
}

.preview {
}

.button-cancel {
    position: relative;
    border-radius: 20px;
    background-color: #df7575;
    text-align: center;
    margin-right: auto;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 1.2rem;
    font-size: 2.2rem;
    text-align: center;
    color: #df1f1f;
    border: none;
    border-radius: .4rem;
}

.button-back {
    position: relative;
    border-radius: 20px;
    background-color: #e6e6e6;
    text-align: center;
    margin-right: auto;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 1.2rem;
    font-size: 2.2rem;
    text-align: center;
    color: #646464;
    border: none;
    border-radius: .4rem;
}

.button-pay {
    font-size: 2.6rem;
}


.previewImg {
    height: 100%;
    width:90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 35px;
}

.back {
    width: 1300px;
    height: 700px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background: #f8f8f8;
    position: relative;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0px 3px 18px rgba(100, 100, 100, 0.5);
}

.string {
    position: absolute;
    top: 235px;
    left: 175px;
    width: 950px;
    height: 265px;
    text-align: center;
    color: #000080;

    font-family: 'Roboto', sans-serif;
    font-size: 120pt;
    border: none;
}
</style>
