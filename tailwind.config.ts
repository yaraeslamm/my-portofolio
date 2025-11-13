/**
 * Tailwind CSS configuration for the portfolio site.
 *
 * The `content` array tells Tailwind where to look for class names.  By
 * including the root `index.html` and all JavaScript/TypeScript/JSX/TSX files
 * under the `src/` directory, Tailwind is able to tree‑shake unused styles
 * during production builds.  You can extend the default theme here as
 * needed.
 */
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {

//         },
//       },
//     },
//   },
//   plugins: [],
// };

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}', // make sure your paths are correct
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
