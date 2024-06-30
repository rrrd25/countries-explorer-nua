<template>
    <div class="table-main-container">
      <div class="data-table-responsive">
        <table class="table-main">
          <thead class="table-head" >
              <tr class="table-row">
                  <th v-for="column in columns" :key="column.id" class="column">{{column.name}}</th>
              </tr>
          </thead>
          <tbody v-if="isRowClick" class="table-body">
              <tr v-for="row in rows" :key="row.id" class="table-body-row" @click="onClickHandler(row)">
                  <td v-for="column in columns" :key="column.key" class="row">{{ row[column.key] }}</td>
                </tr>
          </tbody>
          <tbody v-else class="table-body">
              <tr v-for="row in rows" :key="row.id" class="table-body-row">
                  <td v-for="column in columns" :key="column.key" class="row">{{ row[column.key] }}</td>
                </tr>
          </tbody>
      </table>
      </div>
    </div>
</template>

<script src="./DataTable.js"></script>

<style src="./DataTable.css"></style>