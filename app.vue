<script setup lang="ts">
import {CapacitorHttp, type HttpResponse} from '@capacitor/core';


try {
  const fetchResolve = await useFetch(
      'https://jsonplaceholder.typicode.com/comments?postId=2'
  );
  console.log('useFetch', fetchResolve.data.value);
} catch (e) {
  console.error('useFetch', e);
}

try {
  const $fetchResolve = await $fetch(
      'https://jsonplaceholder.typicode.com/comments?postId=2'
  );
  console.log('$fetch', $fetchResolve);
} catch (e) {
  console.error('$fetch', e);
}
try {
  const capacitorResponse: HttpResponse = await CapacitorHttp.get({
    url: 'https://jsonplaceholder.typicode.com/comments?postId=2'
  });
  console.log('CapacitorHttp.get', capacitorResponse);
} catch (e) {
  console.error('CapacitorHttp.get', e);
}

</script>

<template>
  <div>
    <p>Capacitor http error</p>
  </div>
</template>
