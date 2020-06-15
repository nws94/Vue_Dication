<template>
  <v-card class="mx-auto">
    <v-toolbar
      color="purple"
      dark
      flat
    >
    

      <template v-slot:extension>
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab
            v-for="courseTab in courseTabs"
            :key="courseTab"
          >
            {{courseTab}}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
 
          
       
    <v-tabs-items v-model="tabs">
      
      <v-tab-item>
        <v-card>
          <v-card-title>
             <v-select
              class="float-left mt-6"
              v-model="searchs"
              :items="searchs"
              label="검색조건"
            ></v-select>
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
            <v-btn icon color="indigo" class="pt-4">
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-card-title>
        
            <v-btn color="primary" dark class="ml-5">강좌개설하기</v-btn>
         
          <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
          >
        <template v-slot:item.actions="{ item }">
          <v-btn class="mr-5" small color="primary" @click="{item}" >학습자료보기</v-btn>
          <v-btn small color="primary" @click="goCource()">받아쓰기</v-btn>
        </template>
        </v-data-table>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="headline">An awesome title</v-card-title>
          <v-card-text>
            <p>
              Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor rutrum auctor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Praesent congue erat at massa.
            </p>

            <p>
              Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque egestas, neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor orci leo non est. Etiam sit amet orci eget eros faucibus tincidunt. Donec sodales sagittis magna.
            </p>

            <p class="mb-0">
              Ut leo. Suspendisse potenti. Duis vel nibh at velit scelerisque suscipit. Fusce pharetra convallis urna.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-title class="headline">An even better title</v-card-title>
          <v-card-text>
            <p>
              Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem. Sed hendrerit. Maecenas malesuada. Vestibulum ullamcorper mauris at ligula. Proin faucibus arcu quis ante.
            </p>

            <p class="mb-0">
              Etiam vitae tortor. Curabitur ullamcorper ultricies nisi. Sed magna purus, fermentum eu, tincidunt eu, varius ut, felis. Aliquam lobortis. Suspendisse potenti.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import router from '../router'
  export default {
    data () {
      return {
        tabs: null,
        searchs:["조건1","조건2","조건3"],
        search: '',
        courseTabs: ["강좌리스트", "공지사항","학습현황","신청현황","QnA"],
        headers: [
          { text: '강좌명', value: 'courseName' },
          { text: '학년', value: 'grade' },
          { text: '선생님', value: 'teacher' },
          { text: '신청기간', value: 'courseDate' },
          { text: '강좌선택', value: 'actions', sortable: false },
        ],
        desserts: [
          {
            courseName: '받아쓰기(2학년 1반)',
            grade: 2,
            teacher: "김개똥",
            courseDate: "2.13 - 3.30",
        
          },
          {
            courseName: '받아쓰기(1학년 3반)',
            grade: 1,
            teacher: "김말똥",
            courseDate: "2.13 - 3.30",
      
          },
        ],
      }
    },
    methods: {
      goCource() {
        router.push({name: 'sWrite'});
      }
    }
  }
</script>