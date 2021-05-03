import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userName: 'Brij Kishor',
    myRecord: {
      userId: Number,
      id: Number,
      title: String,
      completed: Boolean
    }
  },
  getters: {
    getStoredUserName: state => state.userName,
    getStoredRecord: state => state.myRecord
  },
  mutations: {
    storeRecord (state, record) {
      state.myRecord = state.myRecord || {}
      state.myRecord.userId = record.userId;
      state.myRecord.id = record.id;
      state.myRecord.title = record.title;
      state.myRecord.completed = record.completed;
    }
  }
});
