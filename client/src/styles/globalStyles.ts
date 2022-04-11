import { createGlobalStyle } from "styled-components";
import st from ".";

const GlobalStyle = createGlobalStyle`
// Global styles
body {
 background-color: ${st.colors.nt_10};
  font-family: "Open Sans", sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Roboto", sans-serif;
  }

  // xs
  p {
    font-family: "Open Sans", sans-serif;
  }

  a {
    font-family: "Open Sans", sans-serif;
  }
}

.container {
  margin: 0 ${st.indentations.ind_800};

  @media (min-width: ${st.breakpoints.md}) {
    margin: 0 ${st.indentations.ind_1200};
  }

  @media (min-width: ${st.breakpoints.lg}) {
    margin: 0 auto;
    max-width: 60rem;
  }
}

.page-min-height {
  min-height: calc(100vh - 144px);
}

// Reset
/* Указываем box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Убираем внутренние отступы */
ul,
ol {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
h5,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul,
ol {
  list-style: none;
}

/* Элементы a сбрасываем до дефолтных стилей */
a {
  text-decoration: none;
  text-decoration-skip-ink: auto;
}

/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
}

/* Наследуем шрифты для инпутов и кнопок */
input,
button,
textarea,
select,
time,
label {
  font: inherit;
  border: none;
}

button {
  padding: 0;
}

/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

// Fonts
// ----------
// Roboto
// ----------

@font-face {
  font-family: "Roboto", sans-serif;
  src: local("Roboto"),
    url(../../public/fonts/Roboto/Roboto-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto", sans-serif;
  src: local("Roboto"),
    url(../../public/fonts/Roboto/Roboto-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto", sans-serif;
  src: local("Roboto"),
    url(../../public/fonts/Roboto/Roboto-Black.ttf) format("truetype");
}

// ----------
// Open Sans
// ----------

@font-face {
  font-family: "Open Sans", sans-serif;
  src: local("Open Sans"),
    url(../../public/fonts/OpenSans/OpenSans-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Open Sans", sans-serif;
  src: local("Open Sans"),
    url(../../public/fonts/OpenSans/OpenSans-Medium.ttf) format("truetype");
}

@font-face {
  font-family: "Open Sans", sans-serif;
  src: local("Open Sans"),
    url(../../public/fonts/OpenSans/OpenSans-ExtraBold.ttf) format("truetype");
}



`;

export default GlobalStyle;
