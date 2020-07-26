<template>
    <div>
        <div class="container header">
            <div id="title">
                <h1>Choose your favorite design</h1>
            </div>
        </div>
        <div class="container is-fluid selectionArea">
            <div class="columns">
                <div class="column">
                    <div class="tile">
                        <div class="surrounding">
                            <div class="img-container">
                                <img src="../assets/placeholder-img.jpg">
                            </div>
                            <div>
                                <button class="next" id="design1" @click="select(1)">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="tile">
                        <div class="surrounding">
                            <div class="img-container">
                                <img src="../assets/placeholder-img.jpg">
                            </div>
                            <div>
                                <button class="next" id='design2' @click="select(2)">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="tile">
                        <div class="surrounding">
                            <div class="img-container">
                                <img src="../assets/placeholder-img.jpg">
                            </div>
                            <div>
                                <button class="next" id='design3' @click="select(3)">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container footers">
            <div class="columns">
                <div class="column is-one-fifth">
                    <div class="button-back" @click="back"><font-awesome-icon icon="arrow-alt-circle-left"/> Back</div>
                </div>
                <div class="column">
                </div>
                <div class="column is-one-fifth">
                    <div class="button-cancel" @click="cancel">Cancel <font-awesome-icon icon="times-circle"/></div>
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

export default {
    name: 'SelectionScreen',
    methods: {
        select: function(id) {
            serverBus.$emit('state', 2)
            this.$store.commit('changeDesignChoice', id)
            console.log(this.$store.getters.designChoice)
        },
        back: function() {
            serverBus.$emit('state',0)
        },
        cancel: function () {
            serverBus.$emit('state',0)
        }
    }
}
</script>

<style>
.header {
    display: table;
    height: 16vh;
    width: 100%;
    text-align: center;
    font-family: 'Montserrat Alternates', sans-serif;
    font-style: bold;
    font-size: 67px;
    padding-top:2%;
    padding-bottom:2%;
}

#title {
    display: table-cell;
    vertical-align: middle;
    border-radius: 25px;
    background-color:#f8f8f8;
}
.columns {
    width: 100%;
}
.selectionArea {
    display:flex;
    height: 66vh;
    background: #f8f8f8;
    position: relative;
    padding: 4%;
    border-radius: 20px;
}

.footers {
    height: 16vh ;
}

.tile {
    background: #ffffff;
    position: relative;
    height: 100%;
    padding: 5%;
    border-radius: 20px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin-left: 15%;
    margin-right: 15%;
}
.img-container {
    border-radius: 50%;
    position: relative;
    width: 30vh;
    height: 25vh;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.surrounding {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
.button-cancel {
    position: relative;
    border-radius: 20px;
    background-color: #df7575;
    text-align: center;
    margin-right: auto;
    margin-top: 5vh;
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
    margin-top: 5vh;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 1.2rem;
    font-size: 2.2rem;
    text-align: center;
    color: #646464;
    border: none;
    border-radius: .4rem;

}
button.next {
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    display: block;
    width: 100%;
    padding: 1.2rem;
    font-size: 1.4rem;
    text-align: center;
    color: #23a6d5;
    background-color: #aae2f7;
    border: none;
    border-radius: .4rem;
}
button:active {
    background-color: darken(#e6ecff, 2%);
}
h1 {
    font-weight: 300;
}
.container::-webkit-scrollbar {
    display: none;
}
</style>
