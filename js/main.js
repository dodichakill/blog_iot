// aos
AOS.init();

//vuejs
const { createApp } = Vue;

const myFooter = {
  template: `
    <footer class="p-5 bg-gray-200 text-center">
      <p>
        copyright &copy; 2022 - built with <i class="fa-solid fa-heart"></i> by
        Dodi
      </p>
    </footer>
    `,
};

const modalBox = {
  props: ["url_video"],
  template: `
  <div
    class="w-full bg-slate-300 flex justify-center items-center h-screen fixed flex-col z-50"
  >
    <iframe
      :src="url_video"
      title="YouTube video player"
      frameborder="0"
      class="sm:p-5 p-2 w-full max-w-[820px] h-[300px] sm:h-[420px] rounded-lg bg-green-800"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <button
      class="px-4 py-3 bg-white border-2 border-red-500 shadow-lg text-red-500 font-bold mt-5 rounded-lg"
    >
      <i class="fa-sharp fa-solid fa-circle-xmark sm:text-xl mr-2"></i>
      Tutup Video
    </button>
  </div>`,
};

const ActionTools = {
  props: ["url_download", "url_video"],
  template: `
    <hr class="mb-3" />
    <div class="action mt-5 flex justify-between items-center flex-col sm:flex-row gap-5">
        <a
            :href="url_download"
            class="px-4 py-3 bg-green-600 shadow-md shadow-emerald-400 rounded-lg text-white font-semibold"
            ><i class="fa-solid fa-download mr-2"></i> Download Artikel</a
        >
        <a
            :href="url_video"
            class="px-4 py-3 text-green-600 shadow-md shadow-emerald-400 rounded-lg bg-white border-2 border-green-600 font-semibold"
            ><i class="fa-solid fa-video mr-2"></i> tonton materi pendukung</a
        >
    </div>
    `,
};

createApp({
  data() {
    return {};
  },
  components: {
    "my-footer": myFooter,
    "action-tools": ActionTools,
    "modal-box": modalBox,
  },
}).mount("#app");
