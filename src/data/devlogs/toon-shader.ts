import imageImport from "@/assets/chrismas.png";
import postProcessingScreen from "@/assets/post-processing.png";
import { DevlogEntry } from "@/data/devlog";

export const toonShaderDevlog: DevlogEntry = {
  id: "toon-shader-post-processing-2026-05-03",
  title: "Bringing Color to Life: Toon Shading & Post-Processing",
  teaser: "Discover how we combined custom Cel-shading with Unity's Volume system to create our game's vibrant, stylized look.",
  image: imageImport,
  date: "2026-05-03",
  content: `# Bringing Color to Life: Toon Shading & Post-Processing

## The Magic of Toon Shading

To achieve our signature stylized look, we moved away from Unity's standard physically-based rendering (PBR) in favor of a **Toon Shader** (or Cel-shader). 

### How it works
Unlike standard shaders that calculate smooth light gradients, a Toon shader "steps" the light. It takes the dot product of the surface normal and the light direction, then uses a ramp texture or a mathematical threshold to snap the colors into distinct bands of shadow and light. This creates that iconic "hand-drawn" feel.

For a deep dive into the technical implementation, we highly recommend checking out this excellent guide by **Roystan**: [Toon Shader Tutorial](https://www.youtube.com/watch?v=9S_79v4H2i0).

## Enhancing the Atmosphere with Post-Processing

While the shader provides the base look, **Post-Processing** is what glues the whole scene together. Following our latest configuration in the Unity Volume component, we focus on two primary effects: **Bloom** and **Tonemapping**.

![Post-Processing Configuration](${postProcessingScreen})

### Bloom
We use Bloom to make our highlights "glow" and bleed into surrounding pixels. This is essential for magical effects and bright sunlight.
- **Threshold (0.9):** Ensures only the brightest parts of the scene trigger the glow.
- **Intensity (1):** Provides a noticeable but balanced radiance.
- **Scatter (0.613):** Controls how wide the light spreads across the screen.

### Tonemapping
To handle the high dynamic range of our colors, we use **ACES Tonemapping**. This cinematic standard helps prevent our vibrant colors from looking "burnt out" or flat, ensuring that even very bright areas retain detail and natural saturation.

## Key Takeaways
- **Toon Shaders** define the character and object silhouettes by simplifying light data.
- **Bloom** adds a layer of "air" and energy to the scene.
- **ACES Tonemapping** ensures color consistency across different lighting conditions.

By combining these two techniques, we've transformed flat 3D models into a world that feels like a living illustration!
`,
};