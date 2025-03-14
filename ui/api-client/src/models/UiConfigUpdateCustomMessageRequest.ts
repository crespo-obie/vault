/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.20.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface UiConfigUpdateCustomMessageRequest
 */
export interface UiConfigUpdateCustomMessageRequest {
  /**
   *
   * @type {boolean}
   * @memberof UiConfigUpdateCustomMessageRequest
   */
  authenticated?: boolean;
  /**
   *
   * @type {Date}
   * @memberof UiConfigUpdateCustomMessageRequest
   */
  endTime?: Date;
  /**
   *
   * @type {object}
   * @memberof UiConfigUpdateCustomMessageRequest
   */
  link?: object;
  /**
   *
   * @type {string}
   * @memberof UiConfigUpdateCustomMessageRequest
   */
  message: string;
  /**
   *
   * @type {object}
   * @memberof UiConfigUpdateCustomMessageRequest
   */
  options?: object;
  /**
   *
   * @type {Date}
   * @memberof UiConfigUpdateCustomMessageRequest
   */
  startTime: Date;
  /**
   *
   * @type {string}
   * @memberof UiConfigUpdateCustomMessageRequest
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof UiConfigUpdateCustomMessageRequest
   */
  type?: string;
}

/**
 * Check if a given object implements the UiConfigUpdateCustomMessageRequest interface.
 */
export function instanceOfUiConfigUpdateCustomMessageRequest(
  value: object
): value is UiConfigUpdateCustomMessageRequest {
  if (!('message' in value) || value['message'] === undefined) return false;
  if (!('startTime' in value) || value['startTime'] === undefined) return false;
  if (!('title' in value) || value['title'] === undefined) return false;
  return true;
}

export function UiConfigUpdateCustomMessageRequestFromJSON(json: any): UiConfigUpdateCustomMessageRequest {
  return UiConfigUpdateCustomMessageRequestFromJSONTyped(json, false);
}

export function UiConfigUpdateCustomMessageRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): UiConfigUpdateCustomMessageRequest {
  if (json == null) {
    return json;
  }
  return {
    authenticated: json['authenticated'] == null ? undefined : json['authenticated'],
    endTime: json['end_time'] == null ? undefined : new Date(json['end_time']),
    link: json['link'] == null ? undefined : json['link'],
    message: json['message'],
    options: json['options'] == null ? undefined : json['options'],
    startTime: new Date(json['start_time']),
    title: json['title'],
    type: json['type'] == null ? undefined : json['type'],
  };
}

export function UiConfigUpdateCustomMessageRequestToJSON(json: any): UiConfigUpdateCustomMessageRequest {
  return UiConfigUpdateCustomMessageRequestToJSONTyped(json, false);
}

export function UiConfigUpdateCustomMessageRequestToJSONTyped(
  value?: UiConfigUpdateCustomMessageRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    authenticated: value['authenticated'],
    end_time: value['endTime'] == null ? undefined : value['endTime'].toISOString(),
    link: value['link'],
    message: value['message'],
    options: value['options'],
    start_time: value['startTime'].toISOString(),
    title: value['title'],
    type: value['type'],
  };
}
