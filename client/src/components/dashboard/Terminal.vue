<template>
  <div id="terminalLmao"></div>
</template>

<script>
import { TerminalUI } from "@/services/terminal";
import socket from "@/services/socket";

export default {
  name: "Terminal",
  data() {
    return {
      terminal: null
    }
  },
  methods: {
    startTerminal(container, socket) {
      // Create an xterm.js instance.
      this.terminal = new TerminalUI(socket);

      // Attach created terminal to a DOM element.
      this.terminal.attachTo(container);

      // When terminal attached to DOM, start listening for input, output events.
      // Check TerminalUI startListening() for detail.
      this.terminal.startListening();
    },
    start() {
      const serverAddress = "https://localhost:8081";
      console.log(`connecting to ${serverAddress}`);
      const container = document.getElementById("terminalLmao");
      // Connect to socket and when it is available, start terminal.
      socket.emit("newTerminalConnection", this.$route.params.machine);
      this.startTerminal(container, socket);
    },
    kill() {
      console.log("killing terminal");
      socket.emit("terminateTerminal");
      this.terminal.stopListening();
    },
  },
  mounted() {
    this.start();
  },
  unmounted() {
    this.kill();
  }
};
</script>

<style lang="postcss" scoped>
#terminalLmao {
  @apply rounded-8px border-gray-600 p-4 box-content h-full w-full bg-gray-300 overflow-hidden;
}

#terminalLmao *::-webkit-scrollbar {
  display: none;
}
#terminalLmao * {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}


</style>
