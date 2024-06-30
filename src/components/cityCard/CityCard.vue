<template>
    <div class="card-component-main-section">
        <div class="card-container">
            <div class="card" v-for="city in cities" :key="city.id" @click="selectCity(city)">
                <div class="card-header">
                    <div class="city-name">{{ city.city }}</div>
                    <div class="country-name">{{ city.country }}</div>
                </div>
                <div class="card-body">
                    <ul class="card-data-list">
                        <li><strong>Region:</strong> {{ city.region }}</li>
                        <li><strong>Population:</strong> {{ city.population }}</li>
                        <li><strong>Latitude</strong> {{ city.latitude }} </li>
                        <li><strong>Longitude</strong> {{ city.longitude }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <Pagination v-if="cities.length" :page="page" @prevPage="prevPage" @nextPage="nextPage" />
    </div>
</template>

<script src="./CityCard.js"></script>