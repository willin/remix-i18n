import frenchkiss from 'frenchkiss';
import type { missingVariableHandler, missingKeyHandler } from 'frenchkiss';

export interface RemixI18nOptions {
  /**
   * Define the list of supported languages, this is used to determine if one of
   * the languages requested by the user is supported by the application.
   * This should be be same as the supportedLngs in the i18next options.
   */
  supportedLanguages: string[];
  /**
   * Define the fallback language that it's going to be used in the case user
   * expected language is not supported.
   * This should be be same as the fallbackLng in the i18next options.
   */
  fallbackLng: string;

  /**
   * When the client requests a missing key, frenchKiss will returns the key as
   * result. It's possible to handle it and return what you want or just send an
   * event to your error reporting system.
   */
  onMissingKey?: missingKeyHandler;

  /**
   * It's possible to handle missing variables, sending errors to your monitoring
   * server or handle it directly by returning something to replace with.
   */
  onMissingVariable?: missingVariableHandler;
}

export class RemixI18n {
  private onMissingKey = frenchkiss.onMissingKey;

  private onMissingVariable = frenchkiss.onMissingVariable;

  private fallback = frenchkiss.fallback;

  private onChangeLanguage?: (locale: string) => void;

  constructor(public options: RemixI18nOptions) {
    this.locale(options.fallbackLng);
    this.fallback(options.fallbackLng);
    if (options.onMissingKey) {
      this.onMissingKey(options.onMissingKey);
    }
    if (options.onMissingVariable) {
      this.onMissingVariable(options.onMissingVariable);
    }
  }

  public locale(lang?: string) {
    let current = frenchkiss.locale();
    if (lang !== undefined && current !== lang) {
      current = frenchkiss.locale(lang);
      this.onChangeLanguage?.(lang);
    }
    return current;
  }

  public t = frenchkiss.t;

  public set = frenchkiss.set;

  public extend = frenchkiss.extend;

  public unset = frenchkiss.unset;

  public plural = frenchkiss.plural;

  public setOnChange(fn: (locale: string) => void) {
    this.onChangeLanguage = fn;
  }
}
