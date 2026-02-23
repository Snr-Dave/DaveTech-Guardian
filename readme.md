# Dave-Tech Guardian $DL Token Animation

A cinematic, high-fidelity 3D animated sequence featuring the Dave-Tech Guardian AI mascot for the $DL token. Built with React, Framer Motion, and Three.js.

## Tech Stack

- **React**: Frontend framework
- **Framer Motion**: Motion graphics and orchestration
- **Three.js / React Three Fiber**: 3D rendering and effects
- **Tailwind CSS**: Styling and layout
- **Vite**: Build tool and dev server

## Setup & Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository to your local machine.
2. Install the project dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the development server and view the animation:
```bash
npm run dev:client
```
The application will be available at `http://localhost:5000` (or the port specified in your terminal).

## Usage

### Viewing the Animation

The $DL Token animation is designed to auto-play on load and loop seamlessly. It is a non-interactive video sequence intended for:
- Website banners
- Presentations
- Token promotion and branding

Simply open the application in your browser to view the high-quality 3D render, holographic shield deployment, and token orbiting sequences.

## Customization

### Modifying the Mascot

The mascot's visual properties can be adjusted in the scene files located at `client/src/components/video/video_scenes/`.
- **Mascot Textures/Plating**: Update the images in `client/public/assets/robot-torso.png`.
- **Lighting & Colors**: Modify the CSS variables in `client/src/index.css` (e.g., `--color-accent` for the neon blue glow).

### Animation Settings

To change the timing or duration of the sequences:
- Open `client/src/components/video/VideoTemplate.tsx`.
- Adjust the `SCENE_DURATIONS` object to change how long each phase (e.g., `shield`, `token`, `power`) lasts.

## Production

To create a production-ready build of the frontend:
```bash
npm run build:client
```
The optimized assets will be generated in the `dist/` directory.

## Metadata

### License

This project is licensed under the **MIT License**.

### Contributors

- [Your Name/Organization Placeholder]
- (Add contributors here)

---

## Exporting

To export the animation as a high-quality video file, use the **Export** button in the Replit interface. The recording pipeline will automatically capture the sequence and process it into a downloadable format.
