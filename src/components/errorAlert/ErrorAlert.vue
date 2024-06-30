<template>
    <div v-if="errorMessage" class="error-alert-modal">
        <div class="error-alert-modal-content">
            <img src="@/assets/images/cross.png" alt="cross" class="close-icon" @click="$emit('close')" />
            <p>{{ errorMessage }}</p>
        </div>
    </div>
</template>

<script src="./ErrorAlert.js"></script>