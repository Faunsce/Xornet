<template>
  <router-link
    v-if="!addButton"
    class="datacenter bg-center bg-blend-soft-light bg-cover"
    :style="{ 'background-image': `url(${datacenter.banner})` }"
    :to="{ name: 'datacenters', params: { name: datacenter.name } }"
  >
    <div class="heading">
      <Icon icon="datacenter" />
      <h1 class="whitespace-nowrap">{{ datacenter.name }}</h1>
    </div>
    <Icon v-if="!datacenter.logo" icon="datacenter" class="logo" />
    <img v-else class="logo" :src="datacenter.logo" :alt="datacenter.name" />
    <div class="footer">
      <h1 v-if="datacenter._id === me.primaryDatacenter" class="primary">Primary</h1>
      <h1 v-if="datacenter.owner === me._id" class="owned">Owned</h1>
      <h1 v-else-if="datacenter.members.some(member => member._id === me._id)" class="shared">Shared</h1>

      <!-- <ColoredGauge icon="stack" color="#00FF67" :value="machines.size || 0" :maxValue="stats.totalMachines" /> -->
      <!-- <ColoredGauge icon="network" color="#FFA800"  :value="datacenter.networkHealth || 0" :maxValue="100" /> -->
      <!-- <ColoredGauge icon="rj45" color="#00F0FF" :value="stats.currentBandwidth?.toFixed(2) || 0" /> -->
      <!-- <ColoredGauge icon="ram" color="#7000FF" :value="stats.ramUsage?.current?.toFixed(2) || 0" :maxValue="stats.ramUsage?.max?.toFixed(2)"/> -->
    </div>
  </router-link>
  <div v-else class="datacenter">
    <div class="heading">
      <Icon icon="add" />
      <h1>Create new</h1>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/misc/Icon";
import DatacenterButton from "@/components/dashboard/DatacenterButton";
import ColoredGauge from "@/components/dashboard/ColoredGauge";
import { appState } from "@/states/appState";
export default {
  name: "DatacenterButton",
  components: {
    Icon,
    ColoredGauge
  },
  props: {
    datacenter: { type: Object },
    addButton: { type: Boolean }
  },
  computed: {
    me() {
      return appState.getMe();
    }
  }
};
</script>

<style lang="postcss" scoped>
.datacenter {
  @apply rounded-8px border border-gray-500 bg-gray-200 cursor-pointer p-2 flex flex-col justify-between items-center transition duration-200 ease;
  aspect-ratio: 1;
}

.datacenter:hover {
  box-shadow: var(--shadowColor) 0px 10px 20px;
  transform: translateY(-1px);
  border: 1px solid var(--theme-color);
}

.datacenter:active {
  transform: translateY(1px);
}

.datacenter img {
  filter: invert(var(--filter));
}

.logo {
  max-width: 80%;
  max-height: 60%;
}

.heading,
.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 24px;
  align-items: center;
}

.heading img {
  filter: invert(var(--filter));
  width: 24px;
  height: 24px;
}

.heading h1 {
  color: var(--black);
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
}

.owned,
.shared,
.primary {
  padding: 2px 6px;
  border-radius: 167px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 10px;
}

.owned {
  @apply bg-primary-100 border border-primary-300 text-primary-400;
}

.shared {
  @apply bg-secondary-100 border border-secondary-300 text-secondary-400;
}

.primary {
  @apply bg-tertiary-100 border border-tertiary-300 text-tertiary-400;
}
</style>
