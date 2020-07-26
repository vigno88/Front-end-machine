<template>
    <div>
        <div class="container header">
            <div id="title">
                <h1>Enjoy!</h1>
            </div>
        </div>
        <div class="lower">
            <breeding-rhombus-spinner class="spinner"
                                      :animation-duration="2000"
                                      :size="250"
                                      color="#FFFFFF"
                                      />
        </div>
    </div>
</template>

<script>
import { BreedingRhombusSpinner } from 'epic-spinners'
export default {
    components: {
        BreedingRhombusSpinner
    }
}

</script>

<style scoped>
.header {
    display: table;
    height: 16vh;
    width: 100%;
    text-align: center;
    font-family: 'Montserrat Alternates', sans-serif;
    font-style: bold;
    font-size: 67px;
    padding-top:4%;
    padding-bottom:2%;
}

#title {
    display: table-cell;
    vertical-align: middle;
    border-radius: 25px;
    background-color:#f8f8f8;
}
.lower {
    text-align: center;
}

.spinner {
    margin-left: 850px;
    margin-top: 300px;
}
</style>

