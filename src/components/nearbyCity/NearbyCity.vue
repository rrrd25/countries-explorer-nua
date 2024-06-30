<template>
  <div v-if="show" class="modal">
    <div class="modal-content">
      <img src="@/assets/images/cross.png" alt="cross" class="close-icon" @click="$emit('close')" />
      <div class="nearby-city-popup-text">Nearby Cities</div>
      <NoCityFound v-if="nearbyCities.length === 0 && !loading" />
      <Loader v-if="loading" />
      <div v-if="nearbyCities.length && !loading" class="nearby-city-data-main">
        <DataTable :columns="columns" :rows="nearbyCities" />
      </div>
    </div>
  </div>
</template>

<script src="./NearbyCity.js"></script>