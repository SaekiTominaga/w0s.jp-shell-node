/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * 自然言語による、人間が見て分かりやすい名前を設定する。通知メールの件名などで使用される。
 */
export type NoName = string;
export type DiaryASIN = number;
export type NoName1 = string;
/**
 * https://affiliate.amazon.co.jp/assoc_credentials/home
 */
export type NoName2 = string;
/**
 * https://affiliate.amazon.co.jp/assoc_credentials/home
 */
export type NoName3 = string;
/**
 * https://webservices.amazon.com/paapi5/documentation/locale-reference.html
 */
export type TargetAmazonLocale = string;
/**
 * https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#host-and-region
 */
export type TheHostValueOfTheTargetLocaleToWhichYouAreSendingRequests = string;
/**
 * https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html#host-and-region
 */
export type TheAWSRegionOfTheTargetLocaleToWhichYouAreSendingRequests = string;
export type API = number;
/**
 * https://webservices.amazon.com/paapi5/documentation/get-items.html#ItemLookup-rp
 */
export type GetItemsASIN = number;

export interface Amazon {
  title: NoName;
  diary_select_limit: DiaryASIN;
  paapi: AmazonProductAdvertisingAPI;
}
export interface AmazonProductAdvertisingAPI {
  request: CommonRequestParameters;
  access_interval: API;
  getitems_itemids_chunk: GetItemsASIN;
}
/**
 * https://webservices.amazon.com/paapi5/documentation/common-request-parameters.html
 */
export interface CommonRequestParameters {
  partner_tag: NoName1;
  access_key: NoName2;
  secret_key: NoName3;
  marketplace: TargetAmazonLocale;
  host: TheHostValueOfTheTargetLocaleToWhichYouAreSendingRequests;
  region: TheAWSRegionOfTheTargetLocaleToWhichYouAreSendingRequests;
}
