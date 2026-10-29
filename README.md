# React Debug Practice

## Overview

A React debugging exercise built with React and Vite. It demonstrates four common bugs and their fixes using React Developer Tools.

## Bugs Fixed

1. **State mutation:** Replaced direct counter mutation with `setCount()` to trigger React updates.
2. **Props and state:** Used `useEffect` to synchronize the child's draft with the parent name.
3. **List keys:** Replaced array index keys with unique task IDs.
4. **Effect dependencies:** Added `query` to the `useEffect` dependency array so the preview updates correctly.

## Technologies

- React
- Vite
- JavaScript (JSX)
- CSS
- React Developer Tools

## How to Run

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173/`.

## Testing

Use React Developer Tools in Chrome to inspect component props, hook state, and rendering behavior.

## Learning Objectives

- Understand React state and props.
- Use stable list keys.
- Manage `useEffect` dependencies.
- Debug and verify React components.
