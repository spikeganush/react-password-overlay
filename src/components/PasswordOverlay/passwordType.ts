export interface IPasswordVerif {
  length: boolean;
  upper: boolean;
  lower: boolean;
  number: boolean;
  special: boolean;
}

export interface IPasswordVerifProps {
  /**
   * Password to verify
   * @type {string}
   */
  password: string;
  /**
   * Show or hide the overlay
   * @type {boolean}
   */
  overlayVisibile: boolean;
  /**
   * Need to check the password errors
   * @type {boolean}
   */
  checkError: boolean;
  /**
   * The password input ref
   * @type {React.RefObject<HTMLInputElement>}
   */
  passwordRef: React.RefObject<HTMLInputElement>;
  /**
   * Minimum length of the password
   * @type {number}
   * @default 8
   * @optional
   */
  minLength?: number;
  /**
   * Top position of the overlay
   * @type {'top' | 'bottom' | 'overTheTop'}
   * @default 'top'
   * @optional
   */
  position?: 'top' | 'bottom' | 'overTheTop';
}
