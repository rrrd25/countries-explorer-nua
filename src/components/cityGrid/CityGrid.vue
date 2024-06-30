<template>
    <div class="city-table-main-container">
        <NoCityFound v-if="cities.length === 0" />
        <div v-if="cities.length" class="city-table-data">
            <DataTable :columns="columns" :rows="cities" :onClickHandler="citySelected" :isRowClick="true" />
            <Pagination :page="page" @prevPage="prevPage" @nextPage="nextPage" />
        </div>
    </div>
</template>

<script src="./CityGrid.js"></script>