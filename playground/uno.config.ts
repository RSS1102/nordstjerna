// uno.config.ts
import { defineConfig } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import presetUno from '@unocss/preset-uno'
import { presetIcons } from "@unocss/preset-icons";

export default defineConfig({
  transformers: [transformerDirectives(), transformerVariantGroup()],
  // ...UnoCSS options
  presets: [presetUno(), presetIcons()],
});
