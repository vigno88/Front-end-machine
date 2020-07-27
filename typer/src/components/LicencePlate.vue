<template>
  <div class="licence-plate container-sm mb-4">
    <img src="../../../../images/Liscence quebec.png" class="preview">
    <input type="text" class="string" id="string" maxlength="8">
  </div>
</template>

<style lang="scss" scoped>
  .licence-plate {
    position: relative;
    max-width: 800px;

    input {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: none;
      width: 80%;
      text-align: center;
      color: #000080;
      font-family: 'Roboto', sans-serif;
      font-size: 60pt;

      @media (min-width: 768px) {
        font-size: 80pt;
      }

       @media (min-width: 992px) {
        font-size: 80pt;
      }
      
    }
  }
</style>
