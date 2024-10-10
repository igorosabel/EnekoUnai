export interface SimonSounds {
  red: HTMLAudioElement | undefined;
  green: HTMLAudioElement | undefined;
  blue: HTMLAudioElement | undefined;
  orange: HTMLAudioElement | undefined;
}

export interface SimonActivated {
  red: boolean;
  green: boolean;
  blue: boolean;
  orange: boolean;
}

export type SimonColor = 'red' | 'green' | 'blue' | 'orange';
