<template>
    <div>
        <div class="container upper">
            <!-- <img src="../../../../images/Liscence quebec.png" class="preview"> -->
            <input type="text" class="string" id="string" maxlength="8">
        </div>
        <div class="lower">
            <div class="keyboard">
                <div class="key-container">
                    <a class="button is-large key" @click="addLetter($event)" id="qButton">q</a>
                    <a class="button is-large key" @click="addLetter($event)" id="wButton">w</a>
                    <a class="button is-large key" @click="addLetter($event)" id="eButton">e</a>
                    <a class="button is-large key" @click="addLetter($event)" id="rButton">r</a>
                    <a class="button is-large key" @click="addLetter($event)" id="tButton">t</a>
                    <a class="button is-large key" @click="addLetter($event)" id="yButton">y</a>
                    <a class="button is-large key" @click="addLetter($event)" id="uButton">u</a>
                    <a class="button is-large key" @click="addLetter($event)" id="iButton">i</a>
                    <a class="button is-large key" @click="addLetter($event)" id="oButton">o</a>
                    <a class="button is-large key" @click="addLetter($event)" id="pButton">p</a>
                </div>
                <div class="key-container">
                    <a class="button  is-large key" @click="addLetter($event)" id="aButton">a</a>
                    <a class="button  is-large key" @click="addLetter($event)" id="sButton">s</a>
                    <a class="button  is-large key" @click="addLetter($event)" id="dButton">d</a>
                    <a class="button  is-large key" @click="addLetter($event)" id="fButton">f</a>
                    <a class="button  is-large key" @click="addLetter($event)" id="gButton">g</a>
                    <a class="button  is-large key" @click="addLetter($event)" id="hButton">h</a>
                    <a class="button  is-large key" @click="addLetter($event)" id="jButton">j</a>
                    <a class="button  is-large key" @click="addLetter($event)" id="kButton">k</a>
                    <a class="button  is-large key" @click="addLetter($event)" id="lButton">l</a>
                </div>
                <div class="key-container">
                    <a class="button is-large maj" @click="setMaj" id="majButton">Maj</a>
                    <a class="button is-large key" @click="addLetter($event)" id="zButton">z</a>
                    <a class="button is-large key" @click="addLetter($event)" id="xButton">x</a>
                    <a class="button is-large key" @click="addLetter($event)" id="cButton">c</a>
                    <a class="button is-large key" @click="addLetter($event)" id="vButton">v</a>
                    <a class="button is-large key" @click="addLetter($event)" id="bButton">b</a>
                    <a class="button is-large key" @click="addLetter($event)" id="nButton">n</a>
                    <a class="button is-large key" @click="addLetter($event)" id="mButton">m</a>
                    <a class="button is-large bs" @click="removeLetter"><i class="fas fa-backspace"></i></a>
                </div>
                <div class="key-container">
                    <a class="button is-info is-large num" @click="setNumpad" id="numButton">123</a>
                    <a class="button is-info is-large spacebar" @click="addLetter($event)" id="spaceButton">SPACE</a>
                    <a class="button is-info next" ></a>
                </div>
            </div>
        </div>
        <div class="container footers">
            <div class="columns">
                <div class="column">
                    <div class="button-back" @click="back"><font-awesome-icon icon="arrow-alt-circle-left"/> Back</div>
                </div>
                <div class="column">
                </div>
                <div class="column">
                    <div class="button-cancel" @click="cancel">Cancel <font-awesome-icon icon="times-circle"/></div>
                </div>
                <div class="column">
                </div>
                <div class="column">
                    <div class="button-back" id="nextButton" @click="next">Next <font-awesome-icon icon="arrow-alt-circle-right"/></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { serverBus } from '../main.js'

var capitalActivated = false
var numpadActivated = false
var placeholderLength = 0
var widthChar

export default {
    name: 'Keyboard',
    mounted: function() {
        this.getWidthData()
    },
    methods: {
        back: function() {
            serverBus.$emit('state',1)
        },
        cancel: function() {
            serverBus.$emit('state',0)
        },
        next: function() {
            this.$store.commit('setWord', document.getElementById("string").value)
            serverBus.$emit('state',3)
        },
        getWidthData: function() {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", "/loadData", true);
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState === 4 && xhttp.status === 200) {
                    widthChar = JSON.parse(xhttp.responseText);
                }
            };
            xhttp.send();
        },
        addLetter: function(event) {
            var placeHolder = document.getElementById("string");
            var letterID = event.currentTarget.id;
            var letter = document.getElementById(letterID).innerHTML;
            if (placeholderLength + widthChar[letter] > 50) {
                return;
            } else {
                if(letter == "SPACE") {
                    placeHolder.value += " ";
                    placeholderLength += widthChar["SPACE"];
                } else {
                    placeHolder.value += letter;
                    placeholderLength += widthChar[letter];
                }
            }
            console.log(placeholderLength)
        },
        setMaj: function() {
            if (!capitalActivated) {
                document.getElementById("aButton").innerHTML = "A";
                document.getElementById("bButton").innerHTML = "B";
                document.getElementById("cButton").innerHTML = "C";
                document.getElementById("dButton").innerHTML = "D";
                document.getElementById("eButton").innerHTML = "E";
                document.getElementById("fButton").innerHTML = "F";
                document.getElementById("gButton").innerHTML = "G";
                document.getElementById("hButton").innerHTML = "H";
                document.getElementById("iButton").innerHTML = "I";
                document.getElementById("jButton").innerHTML = "J";
                document.getElementById("kButton").innerHTML = "K";
                document.getElementById("lButton").innerHTML = "L";
                document.getElementById("mButton").innerHTML = "M";
                document.getElementById("nButton").innerHTML = "N";
                document.getElementById("oButton").innerHTML = "O";
                document.getElementById("pButton").innerHTML = "P";
                document.getElementById("qButton").innerHTML = "Q";
                document.getElementById("rButton").innerHTML = "R";
                document.getElementById("sButton").innerHTML = "S";
                document.getElementById("tButton").innerHTML = "T";
                document.getElementById("uButton").innerHTML = "U";
                document.getElementById("vButton").innerHTML = "V";
                document.getElementById("wButton").innerHTML = "W";
                document.getElementById("xButton").innerHTML = "X";
                document.getElementById("yButton").innerHTML = "Y";
                document.getElementById("zButton").innerHTML = "Z";
            } else {
                document.getElementById("aButton").innerHTML = "a";
                document.getElementById("bButton").innerHTML = "b";
                document.getElementById("cButton").innerHTML = "c";
                document.getElementById("dButton").innerHTML = "d";
                document.getElementById("eButton").innerHTML = "e";
                document.getElementById("fButton").innerHTML = "f";
                document.getElementById("gButton").innerHTML = "g";
                document.getElementById("hButton").innerHTML = "h";
                document.getElementById("iButton").innerHTML = "i";
                document.getElementById("jButton").innerHTML = "j";
                document.getElementById("kButton").innerHTML = "k";
                document.getElementById("lButton").innerHTML = "l";
                document.getElementById("mButton").innerHTML = "m";
                document.getElementById("nButton").innerHTML = "n";
                document.getElementById("oButton").innerHTML = "o";
                document.getElementById("pButton").innerHTML = "p";
                document.getElementById("qButton").innerHTML = "q";
                document.getElementById("rButton").innerHTML = "r";
                document.getElementById("sButton").innerHTML = "s";
                document.getElementById("tButton").innerHTML = "t";
                document.getElementById("uButton").innerHTML = "u";
                document.getElementById("vButton").innerHTML = "v";
            }
        },
        setNumpad: function() {
            if (!numpadActivated) {
                document.getElementById("aButton").innerHTML = "@";
                document.getElementById("bButton").innerHTML = "/";
                document.getElementById("cButton").innerHTML = "'";
                document.getElementById("dButton").innerHTML = "$";
                document.getElementById("eButton").innerHTML = "3";
                document.getElementById("fButton").innerHTML = "_";
                document.getElementById("gButton").innerHTML = "&";
                document.getElementById("hButton").innerHTML = "-";
                document.getElementById("iButton").innerHTML = "8";
                document.getElementById("jButton").innerHTML = "+";
                document.getElementById("kButton").innerHTML = "(";
                document.getElementById("lButton").innerHTML = ")";
                document.getElementById("mButton").innerHTML = "?";
                document.getElementById("nButton").innerHTML = "!";
                document.getElementById("oButton").innerHTML = "9";
                document.getElementById("pButton").innerHTML = "0";
                document.getElementById("qButton").innerHTML = "1";
                document.getElementById("rButton").innerHTML = "4";
                document.getElementById("sButton").innerHTML = "#";
                document.getElementById("tButton").innerHTML = "5";
                document.getElementById("uButton").innerHTML = "7";
                document.getElementById("vButton").innerHTML = ":";
                document.getElementById("wButton").innerHTML = "2";
                document.getElementById("xButton").innerHTML = "\"";
                document.getElementById("yButton").innerHTML = "6";
                document.getElementById("zButton").innerHTML = "*";
            } else {
                document.getElementById("aButton").innerHTML = "a";
                document.getElementById("bButton").innerHTML = "b";
                document.getElementById("cButton").innerHTML = "c";
                document.getElementById("dButton").innerHTML = "d";
                document.getElementById("eButton").innerHTML = "e";
                document.getElementById("fButton").innerHTML = "f";
                document.getElementById("gButton").innerHTML = "g";
                document.getElementById("hButton").innerHTML = "h";
                document.getElementById("iButton").innerHTML = "i";
                document.getElementById("jButton").innerHTML = "j";
                document.getElementById("kButton").innerHTML = "k";
                document.getElementById("lButton").innerHTML = "l";
                document.getElementById("mButton").innerHTML = "m";
                document.getElementById("nButton").innerHTML = "n";
                document.getElementById("oButton").innerHTML = "o";
                document.getElementById("pButton").innerHTML = "p";
                document.getElementById("qButton").innerHTML = "q";
                document.getElementById("rButton").innerHTML = "r";
                document.getElementById("sButton").innerHTML = "s";
                document.getElementById("tButton").innerHTML = "t";
                document.getElementById("uButton").innerHTML = "u";
                document.getElementById("vButton").innerHTML = "v";
            }
        },
        removeLetter: function() {
            var inside = document.getElementById("string").value;
            if (inside.length == 0) {
                return;
            }
            var letterToRemove = inside[inside.length - 1];
            if (letterToRemove == " ") {
                placeholderLength += widthChar["SPACE"];
            } else {
                placeholderLength -= widthChar[letterToRemove];
            }
            inside = inside.substring(0, inside.length - 1);
            document.getElementById("string").value = inside;
        }
    }
}
</script>

<style scoped>
.upper {
    padding-top:1%;
    height: 39vh;
    text-align:center;
}

.lower {
    height: 45vh;
    text-align: center;
}

.footers {
    height: 16vh;
}

.string {
    position: absolute;
    top: 125px;
    left: 340px;
    width: 665px;
    height: 205px;

    text-align: center;
    color: #000080;

    font-family: 'Roboto', sans-serif;
    font-size: 58pt;
    border: none;
}

.preview {
    width:58%;
}


.key {
    width: 100px;
    height: 100px;
    margin: 7px;

    font-size: 50px;
    box-shadow: 0px 5px 0px 0px #cfcccc, 0px 0px 8px 0px rgb(110, 110, 110);

    transition: all 0.2s;
}

.maj,
.bs,
.next,
.num {
    width: 130px;
    height: 100px;
    margin: 7px;
    box-shadow: 0px 5px 0px 0px #cfcccc, 0px 0px 8px 0px rgb(110, 110, 110);

    transition: all 0.2s;
}

.spacebar {
    width: 900px;
    height: 100px;
    margin: 7px;
    box-shadow: 0px 5px 0px 0px #cfcccc, 0px 0px 8px 0px rgb(110, 110, 110);
    transition: all 0.2s;
}

.key:active,
.maj:active,
.bs:active,
.next:active,
.num:active,
.spacebar:active {
    top: 3px;
    box-shadow: 0px 1px 0px 0px #cccccc;
}

.keyboard {
    width: 1400px;
    display: inline-block;
    background: #f8f8f8;
    margin-top: 10px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0px 3px 18px rgba(100, 100, 100, 0.5);
}

.key-container {
    text-align: center;

}

.button-cancel {
    position: relative;
    border-radius: 20px;
    background-color: #df7575;
    text-align: center;
    margin-right: auto;
    margin-top: 6vh;
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
    margin-top: 6vh;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 1.2rem;
    font-size: 2.2rem;
    text-align: center;
    color: #646464;
    border: none;
    border-radius: .4rem;
}
</style>
