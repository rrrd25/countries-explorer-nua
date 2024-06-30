<template>
  <div class="pagination">
    <button class="pagination-button" @click="prevPage" :disabled="page === 1">Previous</button>
    <button class="pagination-button" @click="nextPage">Next</button>
  </div>
</template>

<script src="./Pagination.js"></script>