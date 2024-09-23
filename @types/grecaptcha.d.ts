/* eslint-disable @typescript-eslint/no-explicit-any */
declare interface grecaptcha {
  ready: (cb: () => void) => void;
  execute: (secret: string, config: any) => Promise<string>;
}

declare const grecaptcha: Grecaptcha;
