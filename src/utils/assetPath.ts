/**
 * Prefixes an asset path with Vite's base URL so static files resolve
 * correctly on GitHub Pages (subdirectory) deployments.
 */
export const assetPath = (relativePath: string) => {
  const trimmed = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  return new URL(trimmed, import.meta.env.BASE_URL).toString();
};

