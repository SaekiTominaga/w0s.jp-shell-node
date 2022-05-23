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
export type ID = string;
export type NoName2 = string;
export type URL = string;
export type ID1 = string;
export type NoName4 = string;
export type NoName5 = string;
export type NoName6 = string;
export type NoName8 = string;
export type NoName9 = string;
export type NoName10 = string;
export type NoName12 = string;
export type NoName13 = string;

export interface NoName {
  title: NoName1;
  id: ID;
  password: NoName2;
  url: URL;
  login: NoName3;
  ready: NoName7;
  notice: NoName11;
}
export interface NoName3 {
  idSelector: ID1;
  passwordSelector: NoName4;
  submitSelector: NoName5;
  errorSelector: NoName6;
}
export interface NoName7 {
  wrapSelector: NoName8;
  titleSelector: NoName9;
  confirmButtonSelector: NoName10;
}
export interface NoName11 {
  messagePrefix: NoName12;
  messageSuffix: NoName13;
}
