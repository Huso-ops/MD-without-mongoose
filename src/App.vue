<template>


<LookPanel></LookPanel>
<MyFooter></MyFooter>
<AddDirectory></AddDirectory>

</template>

<script>

import MyFooter from './components/MyFooter.vue'
import LookPanel from './components/LookPanel.vue'

export default {
  name: 'App',
  components: {

    MyFooter,
    LookPanel,

}
}
</script>


