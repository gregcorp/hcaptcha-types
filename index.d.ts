/* eslint-disable */

type InvalidIdError = Error;

type MissingCaptchaError = Error;

type HCaptchaId = string;

type HCaptchaResponse = {
  response: string;

  key: string;
};

declare enum HCaptchaErrorCallback {
  /**

     * User has sent too many requests.

     */

  RATE_LIMITED = "rate-limited",

  /**

     * There are network connection issues (e.g. offline).

     */

  NETWORK_ERROR = "network-error",

  /**

     * Invalid data is not accepted by endpoints.

     */

  INVALID_DATA = "invalid-data",

  /**

     * Challenge encountered error on setup.

     */

  CHALLENGE_ERROR = "challenge-error",
}

declare enum HCaptchaErrorAsync {
  /**

     * User closed the challenge.

     */

  CHALLENGE_CLOSED = "challenge-closed",

  /**

     * Time limit to answer challenge has expired.

     */

  CHALLENGE_EXPIRED = "challenge-expired",

  /**

     * No captcha was found.

     */

  MISSING_CAPTCHA = "missing-captcha",

  /**

     * hCaptcha does not exist for ID provided.

     */

  INVALID_CAPTCHA_ID = "invalid-captcha-id",

  /**

     * hCaptcha client encountered an internal error.

     */

  INTERNAL_ERROR = "internal-error",
}

type HCaptchaError = HCaptchaErrorCallback | HCaptchaErrorAsync;

type ConfigRender = {
  /**

     * Unique ID used for verifying a valid hCaptcha Client

     */

  sitekey: string;

  /**

     * Sets a predefined theme or takes a custom theming object.

     */

  theme?: "light" | "dark" | "contrast" | object;

  /**

     * Size of the rendered checkbox.

     * Defaults to "normal".

     */

  size?: "normal" | "compact" | "invisible";

  /**

     * Set a custom container for the challenge iframe by id or reference.

     */

  "challenge-container"?: HTMLElement | string;

  /**

     * Language code as defined by ISO 639-1.

     * Defaults to the browser local language.

     * @see https://www.w3schools.com/tags/ref_language_codes.asp

     */

  hl?: string;

  /**

     * See enterprise docs.

     */

  tplinks?: "on" | "off";

  /**

     * Set the tabindex of the checkbox and challenge. When appropriate, this can make navigation of your site more intuitive.

     */

  tabindex?: number;

  /**

     * See enterprise docs.

     */

  custom?: boolean;

  /**

     * See enterprise docs.

     */

  mode?: string;

  /**

     * Callback function on successful captcha response, response token is passed back in function.

     */

  callback?: string | ((response: string) => void);

  /**

     * Callback function when hCaptcha challenge is displayed.

     */

  "open-callback"?: string | (() => void);

  /**

     * Callback function when hCaptcha challenge is hidden.

     */

  "close-callback"?: string | (() => void);

  /**

     * Callback function when hCaptcha challenge has expired.

     */

  "chalexpired-callback"?: string | (() => void);

  /**

     * Callback function when user's successful response has expired.

     */

  "expired-callback"?: string | (() => void);

  /**

     * Callback function when hCaptcha has encountered an error.

     */

  "error-callback"?: string | ((error: HCaptchaErrorCallback) => void);
};

type ConfigExecute = {
  /**

     * When true, `execute` returns a promise which resolves with HCaptchaResponse.

     */

  async?: boolean;

  rqdata?: string;
};

type ConfigSetData = {
  rqdata: string;
};

type HCaptcha = {
  /**

     * Renders a new instance of hCaptcha.

     */

  render(container: HTMLElement | string, config: ConfigRender): HCaptchaId;

  /**

     * Programmatically call hCaptcha to run, same action as a user clicking the checkbox. Mostly used when hCaptcha is set to invisible.

     * @param id Defaults to first hCaptcha id.

     * @param config

     */

  execute(
    id?: HCaptchaId,
    config?: ConfigExecute
  ): void | Promise<HCaptchaResponse>;

  /**

     * Renders the hCaptcha challenge. It is mostly used in combination with invisible sizing.

     * @param config

     */

  execute(config: ConfigExecute): void | Promise<HCaptchaResponse>;

  /**

     * Resets the hCaptcha instance, removes the checkmark and response token if any.

     * @param id Defaults to first hCaptcha id.

     */

  reset(id?: HCaptchaId): void;

  /**

     * Closes the challenge view.

     * @param id Defaults to first hCaptcha id.

     * @throws {InvalidIdError | MissingCaptchaError}

     */

  close(id?: HCaptchaId): void;

  /**

     * Removes the hCaptcha instance from the DOM, this includes the checkbox and challenge iFrames.

     * @param id Defaults to first hCaptcha id.

     * @throws {InvalidIdError | MissingCaptchaError}

     */

  remove(id?: HCaptchaId): void;

  /**

     * Get the response token if any.

     * @param id Defaults to first hCaptcha id.

     * @throws {InvalidIdError | MissingCaptchaError}

     */

  getResponse(id?: HCaptchaId): string;

  /**

     * Get the associated ekey (challenge id) for a successful solve.

     * @param id Defaults to first hCaptcha id.

     */

  getRespKey(id?: HCaptchaId): string;

  /**

     * See enterprise docs.

     * @param id Defaults to first hCaptcha id.

     * @param config

     * @throws {InvalidIdError | MissingCaptchaError | Error}

     */

  setData(id: HCaptchaId, config: ConfigSetData): void;

  /**

     * See enterprise docs.

     * @param config

     * @throws {InvalidIdError | MissingCaptchaError | Error}

     */

  setData(config: ConfigSetData): void;
};

declare var hcaptcha: HCaptcha;
