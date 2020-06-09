<template>
  <v-container align-center>
 <v-form class="mt-12 pt-4 pr-4 pl-4">
   <v-file-input label="File input"></v-file-input>
   <div v-for="item in 10" :key="item"> 
     <span>{{item + ". 받아쓰기 정답등록"}}</span>
    <v-text-field 
              label="정답"
              outlined
              v-model="title"
              dense>
    </v-text-field>
  </div>
   <!-- <v-textarea
    
      label="질문글"
    ></v-textarea> -->
     <v-flex class="text-center">
        <v-btn width="270" color="primary" x-large>등록</v-btn>
    </v-flex>
 </v-form>
</v-container>
</template>
<script>
export default {
  data: () => ({
    title: ''
  })
}
</script>