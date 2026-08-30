// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import eslintConfigPrettier from "eslint-config-prettier";

export default withNuxt(
  // Prettier 负责格式，关闭 ESLint 中与之冲突的规则
  eslintConfigPrettier,
  {
    rules: {
      // 组件名允许单词（本项目 Header/Footer/Image 等均为单词命名）
      "vue/multi-word-component-names": "off",
    },
  },
  {
    ignores: [
      ".nuxt/**",
      ".output/**",
      "node_modules/**",
      "dist/**",
      "public/**",
    ],
  }
);
