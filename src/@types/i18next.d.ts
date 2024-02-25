import resources from './resources';

declare module 'i18next' {
  interface Resources {
    translation: typeof resources;
  }
}
