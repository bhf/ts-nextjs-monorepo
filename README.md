# Typescript NextJS Monorepo

For illustrative purposes only.

A basic structure for a Typescript NextJS Monorepo with Storybook.
Uses a ports and adapters style architecture with workspaces.

## Structure

### apps

The NextJS App and Storybook for components.

### packages

* components - UI components
* models - common models
* ports - interfaces to external systems or services
* google-oauth-adapter - an adapter implementing a port

## Scripts

### Clean
```bash
pnpm clean
```

### Build

```bash
pnpm build
```

### Storybook

```bash
pnpm storybook
```

### Build NextJS
```bash
pnpm nextbuild
```

### Run NextJS Dev

```bash
pnpm dev
```