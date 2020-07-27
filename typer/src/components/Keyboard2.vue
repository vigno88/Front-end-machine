<template>
  <div class="keyboard bg-dark">
    <div class="row-10-key">
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="qButton">q</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="wButton">w</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="eButton">e</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="rButton">r</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="tButton">t</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="yButton">y</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="uButton">u</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="iButton">i</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="oButton">o</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="pButton">p</button>
    </div>
    <div class="row-9-key">
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="aButton">a</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="sButton">s</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="dButton">d</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="fButton">f</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="gButton">g</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="hButton">h</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="jButton">j</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="kButton">k</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="lButton">l</button>
    </div>
    <div class="row-9-key">
      <button type="button" class="letter btn btn-lg btn-secondary maj" @click="setMaj()" id="majButton">maj</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="zButton">z</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="xButton">x</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="cButton">c</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="vButton">v</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="bButton">b</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="nButton">n</button>
      <button type="button" class="letter btn btn-lg btn-light" @click="addLetter($event)" id="mButton">m</button>
      <button type="button" class="btn btn-lg btn-secondary bs" @click="removeLetter">back</button>
    </div>
    <div class="row-space">
      <button type="button" class="btn btn-lg btn-secondary num" @click="setNumpad" id="numButton">123</button>
      <button type="button" class="btn btn-lg btn-light spacebar" @click="addLetter($event)"
        id="spaceButton">SPACE</button>
      <button type="button" class="btn btn-lg btn-light next" disabled></button>
    </div>
  </div>
</template>

<script>
let caps = false;
export default {
  name: 'Keyboard',
  methods: {
    setMaj: function() {
      caps = !caps;
      let letterKeys = this.$el.querySelectorAll(".letter");
      if (caps) {
          letterKeys.forEach(letterKey => {
            letterKey.innerText = letterKey.innerText.toUpperCase();
        });
      } else {
          letterKeys.forEach(letterKey => {
            letterKey.innerText = letterKey.innerText.toLowerCase();
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $gap: 4px;

  .keyboard {
    display: grid;
    row-gap: $gap;
    padding: $gap;

    button {
      text-align: left;
    }
  }

  .row-10-key {
    display: grid;
    column-gap: $gap;
    grid-template-columns: repeat(10, 1fr);
  }

  .row-9-key {
    display: grid;
    column-gap: $gap;
    grid-template-columns: repeat(9, 1fr);
  }

  .row-space {
    display: grid;
    column-gap: $gap;
    grid-template-columns: 1fr 5fr 1fr;
  }
</style>