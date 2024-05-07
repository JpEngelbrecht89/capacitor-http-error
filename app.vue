<template>
  <div>
    <h3>Capacitor http error</h3>
    <p v-if="responseData">Response Data:</p>
    <ul v-if="responseData">
      <li v-for="item in responseData" :key="item.id">{{ item.body }}</li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const responseData = ref(null);

const makeXmlHttpRequest = () => {
  const _request = new XMLHttpRequest();

  _request.onreadystatechange = function () {

    console.log('Request readyState', _request.readyState)

    // this request will fail when capacitorHttp is true
    // CapacitorHttp.get is not checking the following condition
    if (_request.readyState === XMLHttpRequest.DONE || _request.readyState === 4) {
      if (_request.status === 200) {
        try {
          const parsed = JSON.parse(_request.responseText);
          responseData.value = parsed;
          console.log('XMLHttpRequest', parsed);
        } catch (e) {
          console.error('Error parsing response:', e);
        }
      } else {
        console.error('Request failed with status:', _request.status);
      }
    }
  };

  _request.open('GET', 'https://jsonplaceholder.typicode.com/comments?postId=2', true);
  _request.send();
};

makeXmlHttpRequest();


</script>


