<template>
  <div class="main-container">
    <Header :viewButtonLabel="viewButtonLabel" :region="region" :toggleView="toggleView"
      :searchByRegion="searchByRegion" :updateRegion="updateRegion" :exitSearch="exitSearch" :isExitIcon="isExitIcon"
      :loading="loading" />
    <Loader v-if="loading" />
    <CityGrid v-if="view === 'grid' && !loading" :cities="cities" :page="page" :limit="limit"
      :citySelected="showNearbyCities" @nextPage="nextPage" @prevPage="prevPage" />
    <CityCard v-else-if="!loading" :cities="cities" @citySelected="showNearbyCities" @nextPage="nextPage"
      @prevPage="prevPage" :page="page" :limit="limit" />
    <NearbyCity :show="showModal" :nearbyCities="nearbyCities" @close="exitNearbyCities" :loading="isModalLoading"/>
    <error-alert :message="errorMessage" v-if="isErrorOccurred" @close="isErrorOccurred = false" />
  </div>
</template>

<script>
import CityGrid from './components/cityGrid/CityGrid.vue';
import CityCard from './components/cityCard/CityCard.vue';
import Header from './components/header/header.vue';
import NearbyCity from './components/nearbyCity/NearbyCity.vue';
import Loader from './components/loader/loader.vue';
import ErrorAlert from '@/components/errorAlert/ErrorAlert.vue';
import { searchCitiesByRegion, fetchNearbyCities, fetchCities } from './services/api';

export default {
  components: { CityGrid, CityCard, NearbyCity, Header, Loader, ErrorAlert },
  data() {
    return {
      view: 'grid',
      cities: [],
      region: '',
      showModal: false,
      nearbyCities: [],
      page: 1,
      limit: 10,
      loading: false,
      isExitIcon: false,
      errorMessage: '',
      isErrorOccurred: false,
      isModalLoading: false,
    };
  },
  computed: {
    viewButtonLabel() {
      return this.view === 'grid' ? 'Show Cards' : 'Show Grid';
    },
  },
  mounted() {
    this.loading = true;
    this.loadCities();
  },
  methods: {
    updateRegion(value) {
      this.region = value;
    },
    toggleView() {
      this.view = this.view === 'grid' ? 'card' : 'grid';
    },
    async loadCities() {
      const offset = (this.page - 1) * this.limit;
      try {
        const response = await fetchCities(this.limit, offset);
        this.cities = response.data.data;
        this.loading = false;
      } catch (error) {
        this.isErrorOccurred = true;
        this.errorMessage = error.message || 'An error occurred.';
        this.loading = false;
        this.showModal = false;
      }
    },
    exitNearbyCities() {
      this.showModal = false;
      this.nearbyCities = [];
    },
    async searchByRegion(reset = true) {
      this.loading = true;
      this.isExitIcon = true;
      if (reset) {
        this.page = 1;
      }
      try {
        let offset = (this.page - 1) * this.limit;
        const response = await searchCitiesByRegion(this.region, this.limit, offset);
        this.cities = response.data.data;
      } catch (error) {
        this.isErrorOccurred = true;
        this.errorMessage = error.message || 'An error occurred.';
        this.showModal = false;
      } finally {
        this.loading = false;
      }
    },
    exitSearch() {
      this.loading = true;
      this.region = '';
      this.isExitIcon = false;
      this.page = 1;
      this.loadCities();
    },
    async showNearbyCities(city) {
      this.showModal = true;
      this.isModalLoading = true;
      try {
        const response = await fetchNearbyCities(city.id);
        this.nearbyCities = response.data.data;
        this.isModalLoading = false;
      } catch (error) {
        this.isModalLoading = false;
        this.isErrorOccurred = true;
        this.errorMessage = error.message || 'An error occurred.';
        this.showModal = false;
      } finally {
        this.loading = false;
      }
    },
    nextPage() {
      this.page++;
      this.loading = true;
      if (this.region) {
          this.searchByRegion(false);
        } else {
          this.loadCities();
        }
      this.scrollToTop();
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
        this.loading = true;
        if (this.region) {
          this.searchByRegion(false);
        } else {
          this.loadCities();
        }
        this.scrollToTop();
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
  },
};
</script>

<style scoped>
.main-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--base-dark-blue-color);
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  padding: 8px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
