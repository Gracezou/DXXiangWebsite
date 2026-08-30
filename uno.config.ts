import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
} from "unocss";

// UnoCSS 66 起，配置从 nuxt.config.ts 的 unocss 选项迁移到本文件。
// 以下 preset 与 v1.0 中 { uno: true, attributify: true, icons: { scale: 1.2 } } 等价，
// presetUno 在新版中更名为 presetWind3。
export default defineConfig({
  presets: [presetWind3(), presetAttributify(), presetIcons({ scale: 1.2 })],
});
