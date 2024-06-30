<template>
    <div class="page-header-main">
        <div class="top-header">
            <img class="logo-image" src="@/assets/images/map.png" alt="logo" />
            <h1 class="page-heading-text">Countries Explorer</h1>
        </div>
        <div class="search-container">
            <button :class="region ? 'search-icon button-no-border-bg' : 'search-icon disable button-no-border-bg'"
                @click="searchByRegion()">
                <img alt="search" src="@/assets/images/Search_Bar_Icon-web.png" />
            </button>
            <div class="search-box">
                <input autocomplete="off" type="text" placeholder="Search by region" :value="region"
                    @input="updateRegion($event.target.value)" @keypress.enter="searchByRegion()" />
            </div>
            <button v-if="isExitIcon" class="exit-icon button-no-border-bg" @click="exitSearch()">
                <img alt="exit" src="@/assets/images/exit_Swap_Model.svg" />
            </button>
        </div>
        <div class="toggle-button-header">
            <label :class="!loading ? 'switch' : 'switch disable'">
                <input class="checkbox-input" type="checkbox" @click="toggleView()" />
                <span class="slider-round"></span>
            </label>
            <p class="switch-text">{{ 'Click to ' + viewButtonLabel }}</p>
        </div>
    </div>
</template>

<script src="./header.js" ></script>