# Dave-Tech Guardian $DL Token Animation

A cinematic, high-fidelity 3D animated sequence featuring the Dave-Tech Guardian AI mascot for the $DL token. Built with React, Framer Motion, and Three.js, optimized for Replit deployment.

## 🚀 Features

- **3D AI Mascot**: High-fidelity robot torso model with dynamic animations.
- **Cinematic Sequences**: Orchestrated scenes including shield deployment, token orbiting, and power-up effects.
- **Holographic UI**: Real-time 3D holographic overlays and UI elements.
- **Performance Optimized**: Built with Vite and React Three Fiber for smooth 60FPS rendering.
- **Replit Ready**: Pre-configured workflows for instant development and deployment.

## 🛠 Tech Stack

- **Framework**: React 19
- **3D Engine**: Three.js with React Three Fiber (@react-three/fiber)
- **Animation**: Framer Motion & GSAP
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite 7

## 📂 Architecture

The project follows a modern React component-based architecture with a focus on 3D scene management:

- `client/src/components/video/`: Core animation orchestration and scene components.
- `client/src/components/video/video_scenes/`: Individual animation sequences and 3D logic.
- `client/public/assets/`: Static 3D models and textures.
- `vite.config.ts`: Optimized build configuration for Replit and modern web standards.

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

### Production Build

To create an optimized production build:
```bash
npm run build
```
Assets will be generated in the `dist/` directory.

## ⚙️ Configuration

### Customizing Animations
Timing and durations can be adjusted in `client/src/components/video/VideoTemplate.tsx`.

### Visual Assets
- **Textures**: Replace or update `client/public/assets/robot-torso.png` to modify the mascot's appearance.
- **Styling**: Global styles and Tailwind configuration are managed in `client/src/index.css` and `postcss.config.js`.

## 📝 License

This project is licensed under the MIT License.
