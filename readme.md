# Dave-Tech Guardian $DL Token Animation

A cinematic, high-fidelity 3D animated sequence featuring the Dave-Tech Guardian AI mascot for the $DL token. Built with React, Framer Motion, and Three.js, optimized for Replit deployment.

## 🚀 Features

- **3D AI Mascot**: High-fidelity robot torso model with dynamic animations.
- **Cinematic Sequences**: 5 orchestrated scenes including entry, shield deployment, token orbiting, power-up, and outro.
- **Holographic UI**: Real-time 3D holographic overlays, digital grids, and volumetric fog effects.
- **Dynamic Lighting**: Adaptive lighting highlights and particle systems (drifting sparks) that react to scene changes.
- **Performance Optimized**: Built with Vite 7 and React Three Fiber for smooth 60FPS rendering.
- **Replit Ready**: Pre-configured workflows for instant development and deployment.

## 🛠 Tech Stack

- **Framework**: React 19
- **3D Engine**: Three.js with React Three Fiber (@react-three/fiber)
- **Animation**: Framer Motion & GSAP
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite 7

## 📂 Architecture

The project follows a modern React component-based architecture with a focus on 3D scene management:

- `client/src/components/video/VideoTemplate.tsx`: Main orchestrator handling scene transitions and persistent background effects.
- `client/src/components/video/video_scenes/`: Modular scene components (Scene1-Scene5) containing specific 3D logic and animations.
- `client/public/assets/`: Static 3D models, textures, and environmental maps.
- `client/src/lib/video/`: Utility hooks and animation helpers for the video pipeline.

## 📥 Installation

1. **Clone & Open**: Open this project in your Replit workspace.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
   *Note: Replit Agent handles this automatically during initial setup.*

## 🚦 Usage

### Development

To start the development server with hot module replacement:
```bash
npm run dev:client
```
The application will be available at `http://0.0.0.0:5000`.

### Scene Transitions
The animation cycles through scenes automatically based on durations defined in the orchestrator. You can monitor the `currentScene` state to sync external UI elements.

### Production Build

To create an optimized production build:
```bash
npm run build
```
Assets will be generated in the `dist/` directory.

## ⚙️ Configuration

### Customizing Durations
Timing for each phase can be adjusted in `client/src/components/video/VideoTemplate.tsx` via the `SCENE_DURATIONS` object:
```typescript
const SCENE_DURATIONS = {
  enter: 4000,
  shield: 4500,
  token: 4500,
  power: 4000,
  outro: 4000,
};
```

### Visual Assets
- **Mascot**: Update `client/public/assets/robot-torso.png` to change the main AI character's appearance.
- **Environment**: Modify `client/public/assets/cyberpunk-bg.png` for a different background atmosphere.
- **Holograms**: Use `client/public/assets/hologram-texture.png` and `digital-shield.png` to customize the UI overlays.

### Styling & Effects
Global styles, scanline effects, and Tailwind utilities are managed in `client/src/index.css`.

## 📝 License

This project is licensed under the MIT License.
