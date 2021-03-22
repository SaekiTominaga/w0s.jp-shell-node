/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * 自然言語による、人間が見て分かりやすい名前を設定する。通知メールの件名などで使用される。
 */
export type NoName1 = string;
export type URL = number;
export type NoName2 = number;
export type NoName3 = number;
export type NoName4 = string;

export interface NoName {
  title: NoName1;
  fetch_timeout: URL;
  access_interval_host: NoName2;
  report_error_count: NoName3;
  save_dir: NoName4;
}
