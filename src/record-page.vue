<template>
  <div>
    <h4>Open API is called and data is saved in application store.</h4><br>
    <b-button
      v-if="!viewCard"
      variant="outline-primary"
      @click="viewCard = true">
      Display Record Card
    </b-button>
    <div v-show="viewCard">
      <div class="d-flex justify-content-center mb-2">
        <b-card
          title="Record Card"
          style="width: 25rem; background-color: #f8f8f8"
          class="mb-2"
          img-src="https://picsum.photos/600/300/?image=25"
        >
          <b-card-text class="text-left">
            <div class="row">
              <div class="col-md-4 mb-2"><b> ID </b></div>
              <div class="col-md-8 mb-2">: {{ myRecord.id }}</div>
            </div>
            <div class="row">
              <div class="col-md-4 mb-2"><b> Title: </b></div>
              <div class="col-md-8 mb-2">:{{ myRecord.title }}</div>
            </div>
            <div class="row">
              <div class="col-md-4 mb-2"><b> Active </b></div>
              <div class="col-md-8 mb-2">: {{ myRecord.completed ? "Yes" : "No" }}
            </div>
          </div>
          </b-card-text>
          <div @click="viewCard = false">
            <b-button variant="outline-primary" @click="viewCard = false">Close</b-button>              
         </div>
        </b-card>
      </div>
    </div>
    <!-- Uncomment Below line to verify that API data is saved in store
    <div> {{ $store.getters.getStoredRecord.title}} </div> -->
    <hr />
  </div>
</template>

<script>
export default {
  name: "Record",
  data() {
    return {
      myRecord: {
        userId: Number,
        id: Number,
        title: String,
        completed: Boolean,
      },
      viewCard: false,
    }
  },
  methods: {
    // #3. Call a public API and save data to store
    async fetchRecord() {
      console.log("fetchRecord called!");
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        console.log(message)
        throw new Error(message);
      }      
      const data = await response.json();
      this.$store.commit("storeRecord", data);
      return data;
    }
  },
  async created() {
    this.myRecord = await this.fetchRecord();
    this.viewCard = true
    console.log("Record created!");
  },
}
</script>
