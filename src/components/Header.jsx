import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header flex">
      <div className="logo flex">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 500 500" enable-background="new 0 0 500 500" >
        <path style={{fill:"#1c1d21"}} d="M113.42 196.274c14.284-62.21 70.098-108.75 136.58-108.75s122.296 46.54 136.58 108.751h23.114C395.072 121.416 329.139 64.919 250 64.919S104.928 121.416 90.306 196.274h23.114z"/>
        <path style={{fill:"#83e1e5"}} d="M160.435 196.274c12.984-36.964 48.219-63.543 89.565-63.543s76.581 26.58 89.565 63.543h23.696C349.5 146.657 303.939 110.127 250 110.127s-99.5 36.53-113.261 86.147h23.696z"/>
        <path style={{fill:"#ecf4f7"}} d="M136.739 196.274C150.5 146.657 196.061 110.127 250 110.127s99.5 36.53 113.261 86.147h23.319c-14.284-62.21-70.098-108.75-136.58-108.75s-122.296 46.54-136.58 108.751h23.319zM125.565 345.722a54.03 54.03 0 0 1-7.184-8.903l-29.022 29.022c-.066-.069-.12-.145-.188-.213-5.68-5.68-14.89-5.68-20.57 0s-5.68 14.889 0 20.569c3.38 3.38 8.006 4.732 12.397 4.09-.641 4.391.711 9.018 4.091 12.397 5.68 5.68 14.89 5.681 20.57 0 5.68-5.68 5.68-14.89 0-20.57-.068-.068-.144-.122-.212-.188l29.022-29.022a53.818 53.818 0 0 1-8.904-7.182z"/>
        <path style={{fill:"#1c1d21"}} d="M193.057 327.274c7.296 0 13.991 2.521 19.308 6.712v-.001a38.305 38.305 0 0 1-.668-7.005c0-20.945 16.832-37.949 37.707-38.245 5.382-18.283.862-38.862-13.563-53.288-21.012-21.012-55.078-21.012-76.09 0l-34.185 34.185c-21.012 21.012-21.012 55.078 0 76.09 10.088 10.087 23.184 15.317 36.4 15.72-.09-.965-.15-1.938-.15-2.926-.001-17.254 13.986-31.242 31.241-31.242zM437.093 372.613a36.82 36.82 0 0 0 8.348-23.347v-26.164a36.818 36.818 0 0 0-11.766-26.982c-11.896-11.047-29.624-12.999-43.639-4.805l-13.309 7.781-13.309-7.781c-14.015-8.193-31.742-6.242-43.639 4.805a36.82 36.82 0 0 0-11.766 26.982v4.198c16.758.565 30.173 14.319 30.173 31.215 0 6.66-2.09 12.828-5.642 17.898l.1-.002c17.017 0 30.847 13.608 31.224 30.535h45.07l.055-.063 28.1-34.27z"/>
        <ellipse transform="rotate(-20.303 403.066 251.903)" style={{fill:"#83e1e5"}} cx="403.076" cy="251.91" rx="28.096" ry="16.224"/>
        <path style={{fill:"#ecf4f7"}} d="M35.114 406.947c0 29.256 23.717 52.972 52.973 52.972h51.909c-18.268 1.276-32.694 16.488-32.694 35.081h285.397c0-18.593-14.426-33.805-32.694-35.081h51.909c29.256 0 52.973-23.716 52.973-52.972H35.114z"/>
        <path style={{fill:"#83e1e5"}} d="M136.132 406.946H249.97c-.013-.194-.028-.388-.036-.584.008.195.022.389.036.584h113.898c-.377-16.927-14.207-30.535-31.224-30.535l-.1.002a31.09 31.09 0 0 0 5.642-17.898c0-17.255-13.988-31.242-31.242-31.242-7.343 0-14.081 2.551-19.414 6.791a38.28 38.28 0 0 0 .684-7.085c0-21.13-17.129-38.259-38.258-38.259-21.13 0-38.258 17.129-38.258 38.259 0 2.396.246 4.732.668 7.005v.001c-5.317-4.191-12.012-6.712-19.308-6.712-17.255 0-31.242 13.988-31.242 31.242a31.09 31.09 0 0 0 5.641 17.898l-.1-.002c-17.018.001-30.848 13.609-31.225 30.535z"/>
        <path d="M45.737 495a5 5 0 0 1-5 5h-5.623c-2.762 0-5-2.238-5-5s2.238-5 5-5h5.623a5 5 0 0 1 5 5zm419.149-5h-5.623c-2.762 0-5 2.238-5 5s2.238 5 5 5h5.623a5 5 0 1 0 0-10zM239.025 20.975H245v5.975c0 2.762 2.238 5 5 5s5-2.238 5-5v-5.975h5.975c2.762 0 5-2.238 5-5s-2.238-5-5-5H255V5c0-2.762-2.238-5-5-5s-5 2.238-5 5v5.975h-5.975a5 5 0 1 0 0 10zm155.145 82.984h5.975v5.975c0 2.762 2.238 5 5 5s5-2.238 5-5v-5.975h5.975c2.762 0 5-2.238 5-5s-2.238-5-5-5h-5.975v-5.975c0-2.762-2.238-5-5-5s-5 2.238-5 5v5.975h-5.975c-2.762 0-5 2.238-5 5s2.238 5 5 5zm-310.289 0h5.975v5.975c0 2.762 2.238 5 5 5s5-2.238 5-5v-5.975h5.975c2.762 0 5-2.238 5-5s-2.238-5-5-5h-5.975v-5.975c0-2.762-2.238-5-5-5s-5 2.238-5 5v5.975h-5.975c-2.762 0-5 2.238-5 5s2.238 5 5 5zm244.55 269.615-7.131 9.478a5 5 0 1 0 7.99 6.012l5.672-7.538c8.151.713 15.472 5.152 19.896 12.199a4.994 4.994 0 0 0 6.893 1.575 5 5 0 0 0 1.575-6.894c-5.256-8.37-13.475-14.088-22.843-16.146a36.062 36.062 0 0 0 2.701-13.744c0-19.984-16.258-36.242-36.242-36.242-4.877 0-9.529.975-13.781 2.729-1.038-22.938-20.02-41.281-43.208-41.281-23.177 0-42.151 18.324-43.207 41.245a36.044 36.044 0 0 0-13.691-2.693c-19.984 0-36.242 16.258-36.242 36.242 0 4.767.921 9.415 2.701 13.744-9.368 2.059-17.587 7.776-22.843 16.146a5 5 0 0 0 8.468 5.319c4.421-7.042 11.734-11.479 19.806-12.198l5.671 7.537a4.987 4.987 0 0 0 3.999 1.994 5 5 0 0 0 3.991-8.006l-6.693-8.895a4.88 4.88 0 0 0-.365-.611 26.069 26.069 0 0 1-4.737-15.03c0-14.47 11.772-26.242 26.242-26.242a26.1 26.1 0 0 1 16.162 5.591c.019.015.032.033.051.048a26.708 26.708 0 0 1 4.203 4.142l.18.229c.214.27.421.543.624.819a27.835 27.835 0 0 1 1.117 1.659c.102.165.199.332.297.498.138.235.278.47.409.71.057.104.109.21.165.314.506.956.955 1.946 1.341 2.967.038.1.079.198.115.298.102.28.195.563.288.847.05.156.103.311.15.467.08.262.153.526.225.791a27.078 27.078 0 0 1 .32 1.312 28.18 28.18 0 0 1 .255 1.349c.038.234.069.47.101.705.03.225.062.45.086.676.028.263.047.527.067.791.016.206.036.41.047.617.019.355.026.713.03 1.071.001.113.009.225.009.338 0 3.802-.826 7.494-2.383 10.891a26.275 26.275 0 0 1-2.353 4.138l-.016.027-7.133 9.48a5 5 0 1 0 7.99 6.012l5.678-7.546c5.43.486 10.6 2.663 14.76 6.254a5.001 5.001 0 0 0 6.535-7.571 36.167 36.167 0 0 0-15.783-7.928c.083-.201.154-.407.233-.609a36.263 36.263 0 0 0 .967-2.79 35.818 35.818 0 0 0 .696-2.754 36.285 36.285 0 0 0 .723-5.215c.052-.792.087-1.588.087-2.389 0-.272-.016-.542-.021-.813-.008-.358-.01-.719-.029-1.075-.018-.342-.051-.681-.078-1.021-.023-.284-.039-.569-.068-.852-.039-.382-.094-.761-.145-1.141-.032-.232-.058-.466-.093-.696-.064-.416-.144-.828-.222-1.24-.036-.186-.066-.373-.105-.557a35.413 35.413 0 0 0-.307-1.327c-.035-.143-.067-.286-.104-.428-.122-.47-.257-.936-.398-1.399l-.094-.313a35.602 35.602 0 0 0-.494-1.456l-.076-.212a36.332 36.332 0 0 0-.591-1.497l-.053-.125a34.705 34.705 0 0 0-.689-1.522l-.027-.055a35.993 35.993 0 0 0-5.138-7.828c-.248-.288-.493-.578-.749-.858-.077-.083-.158-.164-.236-.248a37.064 37.064 0 0 0-1.122-1.156c-.037-.036-.075-.07-.111-.106-.437-.426-.885-.84-1.342-1.244l-.005-.005a31.935 31.935 0 0 1-.304-4.361c0-18.339 14.919-33.259 33.258-33.259s33.259 14.92 33.259 33.259c0 1.462-.104 2.93-.316 4.448l-.046.043c-.406.362-.804.735-1.193 1.115-.072.071-.148.139-.22.209a39.74 39.74 0 0 0-.987 1.024 36.13 36.13 0 0 0-4.478 5.89l-.024.039c-.291.479-.57.964-.838 1.456l-.046.084c-.26.48-.509.966-.748 1.458l-.067.139c-.229.477-.447.959-.654 1.445l-.09.214c-.195.467-.383.938-.558 1.414-.039.103-.074.207-.111.311-.162.45-.318.903-.461 1.361-.045.141-.085.284-.128.426-.129.428-.254.856-.367 1.289-.049.187-.091.375-.137.563a34.43 34.43 0 0 0-.276 1.194c-.05.239-.091.482-.136.724-.066.357-.136.714-.192 1.075-.047.301-.082.605-.121.908-.04.31-.086.619-.118.93-.04.382-.064.769-.092 1.155-.017.24-.042.478-.055.719-.033.63-.05 1.264-.05 1.902a37.093 37.093 0 0 0 .128 2.955c.062.768.14 1.532.25 2.291l.005.045c.113.773.26 1.539.422 2.3l.125.565c.168.73.352 1.455.565 2.172l.025.093a36.428 36.428 0 0 0 .958 2.749c.077.195.146.394.226.588a36.166 36.166 0 0 0-15.784 7.928 5.003 5.003 0 0 0-.518 7.053 4.986 4.986 0 0 0 3.787 1.732c1.157 0 2.32-.399 3.266-1.215a26.166 26.166 0 0 1 14.674-6.247l5.672 7.539a4.987 4.987 0 0 0 3.999 1.994 5 5 0 0 0 3.991-8.006l-6.691-8.893a5.046 5.046 0 0 0-.366-.614 26.06 26.06 0 0 1-4.696-16.456c.009-.16.025-.318.037-.478a24 24 0 0 1 .079-.931c.021-.194.048-.385.074-.578.035-.269.071-.537.114-.804.035-.213.074-.424.114-.635a24.635 24.635 0 0 1 .468-2.037c.065-.24.132-.479.204-.715.057-.188.119-.373.179-.559.084-.255.167-.511.258-.762.053-.147.112-.292.168-.439.385-1.005.829-1.98 1.33-2.922.042-.078.08-.158.122-.236.136-.249.28-.492.424-.736.09-.152.178-.306.271-.457.129-.21.265-.417.4-.624.124-.188.248-.375.376-.561a25.848 25.848 0 0 1 .884-1.2c.094-.12.187-.241.282-.359.269-.331.543-.658.829-.978l.032-.037a26.841 26.841 0 0 1 3.256-3.065c.011-.008.019-.019.029-.028a26.106 26.106 0 0 1 16.273-5.678c14.47 0 26.242 11.772 26.242 26.242a26.076 26.076 0 0 1-4.737 15.03c-.007.016-.011.026-.018.035zM432.616 238.31a4.998 4.998 0 0 1 1.738 4.698c-2.261 13.147-11.424 24.186-23.913 28.807a37.267 37.267 0 0 1-12.936 2.311 37.71 37.71 0 0 1-15.779-3.464v19.72l5.785-3.382c16.035-9.374 35.953-7.18 49.564 5.458 8.493 7.887 13.364 19.057 13.364 30.646v26.163a41.93 41.93 0 0 1-9.481 26.517l-13.508 16.474a4.988 4.988 0 0 1-3.869 1.83 4.999 4.999 0 0 1-3.863-8.17l13.508-16.474a31.912 31.912 0 0 0 7.214-20.177v-26.163a31.918 31.918 0 0 0-10.169-23.318c-10.354-9.615-25.512-11.286-37.713-4.153l-13.309 7.78a5.005 5.005 0 0 1-.508.253c-.029.013-.056.03-.085.043a5.03 5.03 0 0 1-1.039.298 4.986 4.986 0 0 1-2.002-.044 4.97 4.97 0 0 1-.819-.254c-.03-.013-.056-.03-.085-.043a5.11 5.11 0 0 1-.508-.253l-13.31-7.78c-12.2-7.133-27.357-5.462-37.713 4.153a31.661 31.661 0 0 0-7.371 10.271 5 5 0 1 1-9.121-4.099 41.6 41.6 0 0 1 9.688-13.5c13.61-12.641 33.529-14.834 49.564-5.458l5.786 3.382v-58.254c0-2.762 2.238-5 5-5s5 2.238 5 5v9.071a37.337 37.337 0 0 1 13.986-9.193c12.489-4.621 26.632-2.206 36.904 6.304zm-33.433 3.074c-8.214 3.038-14.466 9.867-16.86 18.204 7.243 4.771 16.436 5.887 24.648 2.848 8.215-3.039 14.466-9.868 16.86-18.205-7.245-4.772-16.435-5.887-24.648-2.847zm-213.006 10.163-2.141 2.141a4.998 4.998 0 0 0 3.535 8.535 4.98 4.98 0 0 0 3.535-1.465l2.141-2.141a4.998 4.998 0 0 0 0-7.07 4.998 4.998 0 0 0-7.07 0zm29.942 34.224 2.141-2.141a4.998 4.998 0 0 0 0-7.07 4.998 4.998 0 0 0-7.07 0l-2.141 2.141a4.998 4.998 0 0 0 3.535 8.535c1.279 0 2.56-.489 3.535-1.465zm-45.459-4.568 2.141-2.141a4.998 4.998 0 0 0 0-7.07 4.998 4.998 0 0 0-7.07 0l-2.141 2.141a4.998 4.998 0 0 0 3.535 8.535 4.98 4.98 0 0 0 3.535-1.465zm17.943 17.943a4.998 4.998 0 0 0 3.535 8.535 4.98 4.98 0 0 0 3.535-1.465l2.141-2.141a4.998 4.998 0 0 0 0-7.07 4.998 4.998 0 0 0-7.07 0l-2.141 2.141zm-36.248-6.708a4.998 4.998 0 0 0-7.07 0l-2.141 2.141a4.998 4.998 0 0 0 3.535 8.535 4.98 4.98 0 0 0 3.535-1.465l2.141-2.141a4.996 4.996 0 0 0 0-7.07zm259.558 172.481h-27.821c7.166 6.345 12.038 15.193 13.283 25.081h42.364c2.762 0 5 2.238 5 5s-2.238 5-5 5H60.262c-2.762 0-5-2.238-5-5s2.238-5 5-5h42.364c1.245-9.888 6.117-18.736 13.283-25.081H88.087c-31.966 0-57.973-26.007-57.973-57.973a5 5 0 0 1 5-5h43.209a19.197 19.197 0 0 1-2.29-6.718c-4.112-.609-7.986-2.514-10.968-5.495a19.42 19.42 0 0 1-5.724-13.819 19.405 19.405 0 0 1 5.725-13.82 19.417 19.417 0 0 1 13.819-5.725c3.61 0 7.071.972 10.083 2.792l23.118-23.117c-4.746-8.59-7.28-18.281-7.28-28.367 0-15.707 6.116-30.474 17.224-41.58l34.185-34.185c22.928-22.928 60.232-22.928 83.16 0 9.376 9.375 15.181 21.273 16.785 34.406a5 5 0 0 1-4.356 5.569 4.988 4.988 0 0 1-5.569-4.356c-1.332-10.895-6.148-20.767-13.93-28.549-19.029-19.027-49.99-19.027-69.02 0L129.1 273.167c-16.552 16.553-18.698 42.131-6.454 61.034.432.666.88 1.32 1.343 1.964.027.037.051.075.078.112a49.74 49.74 0 0 0 3.251 4.03 48.005 48.005 0 0 0 1.781 1.88 49.18 49.18 0 0 0 8.08 6.519l.01.007a48.332 48.332 0 0 0 8.19 4.243 5 5 0 1 1-3.725 9.282 58.648 58.648 0 0 1-6.4-3.048l-23.129 23.13a19.434 19.434 0 0 1 2.792 10.082c0 3.4-.876 6.66-2.497 9.545h352.464a5 5 0 0 1 5 5c.002 31.965-26.005 57.972-57.971 57.972zM80.275 385.342a5 5 0 0 1 5.67 5.669c-.441 3.029.535 5.996 2.679 8.141 3.723 3.721 9.777 3.721 13.498 0a9.482 9.482 0 0 0 2.797-6.75 9.48 9.48 0 0 0-2.697-6.649 5.004 5.004 0 0 1-1.775-3.769 5 5 0 0 1 1.465-3.59l24.873-24.874-.017-.014a59.588 59.588 0 0 1-2.197-1.864c-.084-.075-.173-.146-.257-.221a58.815 58.815 0 0 1-2.284-2.163 60.134 60.134 0 0 1-2.145-2.265c-.098-.109-.19-.223-.287-.333a59.23 59.23 0 0 1-1.801-2.123l-.028-.034-24.874 24.873a5.003 5.003 0 0 1-7.36-.311c-3.728-3.622-9.708-3.591-13.398.099a9.484 9.484 0 0 0-2.795 6.75c0 2.549.992 4.946 2.795 6.749 2.144 2.144 5.104 3.116 8.138 2.679zm331.638 69.577c24.764 0 45.205-18.862 47.714-42.973H40.373c2.509 24.11 22.95 42.973 47.714 42.973H288.213c2.762 0 5 2.238 5 5s-2.238 5-5 5H140.241c-13.982 1.025-25.25 11.629-27.522 25.081h274.563c-2.271-13.452-13.54-24.056-27.522-25.081h-29.264c-2.762 0-5-2.238-5-5s2.238-5 5-5h81.417zm-100.664 0h-4.934c-2.762 0-5 2.238-5 5s2.238 5 5 5h4.934c2.762 0 5-2.238 5-5s-2.238-5-5-5zM89.347 201.182a5.003 5.003 0 0 0 5.866-3.948C109.622 123.462 174.72 69.919 250 69.919s140.378 53.543 154.787 127.314a5.001 5.001 0 0 0 5.866 3.948 4.999 4.999 0 0 0 3.948-5.866C399.277 116.861 330.052 59.919 250 59.919S100.723 116.861 85.398 195.315a5.002 5.002 0 0 0 3.949 5.867zm69.43-.19a5 5 0 0 0 6.375-3.061c12.648-36.008 46.746-60.2 84.848-60.2s72.199 24.192 84.848 60.2a5.003 5.003 0 0 0 6.375 3.061 5.002 5.002 0 0 0 3.061-6.375C330.229 154.61 292.34 127.731 250 127.731s-80.229 26.879-94.283 66.886a5 5 0 0 0 3.06 6.375zM250 92.523c62.364 0 117.756 44.104 131.707 104.87a5.002 5.002 0 0 0 5.992 3.754 5 5 0 0 0 3.754-5.992c-7.225-31.47-25.142-60.05-50.448-80.477-25.69-20.735-58.01-32.155-91.005-32.155s-65.314 11.42-91.005 32.155c-25.307 20.427-43.224 49.007-50.448 80.477a5 5 0 0 0 3.754 5.992 4.997 4.997 0 0 0 5.992-3.754C132.244 136.628 187.636 92.523 250 92.523zm-114.597 108.57a5 5 0 0 0 6.154-3.482c13.469-48.564 58.062-82.482 108.442-82.482s94.974 33.918 108.442 82.482a5.002 5.002 0 0 0 6.154 3.482 5 5 0 0 0 3.482-6.154c-14.664-52.879-63.22-89.811-118.077-89.811s-103.413 36.932-118.079 89.811a5 5 0 0 0 3.482 6.154z" 
        style={{fill:"#1c1d21"}}/>
        </svg>
      </div>
      <ul className='nav flex'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/cart"><li>Checkout</li></Link>
      </ul>
    </div>
  )
}

export default Header;