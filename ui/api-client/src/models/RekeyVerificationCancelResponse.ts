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
 * @interface RekeyVerificationCancelResponse
 */
export interface RekeyVerificationCancelResponse {
  /**
   *
   * @type {number}
   * @memberof RekeyVerificationCancelResponse
   */
  n?: number;
  /**
   *
   * @type {string}
   * @memberof RekeyVerificationCancelResponse
   */
  nonce?: string;
  /**
   *
   * @type {number}
   * @memberof RekeyVerificationCancelResponse
   */
  progress?: number;
  /**
   *
   * @type {boolean}
   * @memberof RekeyVerificationCancelResponse
   */
  started?: boolean;
  /**
   *
   * @type {number}
   * @memberof RekeyVerificationCancelResponse
   */
  t?: number;
}

/**
 * Check if a given object implements the RekeyVerificationCancelResponse interface.
 */
export function instanceOfRekeyVerificationCancelResponse(
  value: object
): value is RekeyVerificationCancelResponse {
  return true;
}

export function RekeyVerificationCancelResponseFromJSON(json: any): RekeyVerificationCancelResponse {
  return RekeyVerificationCancelResponseFromJSONTyped(json, false);
}

export function RekeyVerificationCancelResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): RekeyVerificationCancelResponse {
  if (json == null) {
    return json;
  }
  return {
    n: json['n'] == null ? undefined : json['n'],
    nonce: json['nonce'] == null ? undefined : json['nonce'],
    progress: json['progress'] == null ? undefined : json['progress'],
    started: json['started'] == null ? undefined : json['started'],
    t: json['t'] == null ? undefined : json['t'],
  };
}

export function RekeyVerificationCancelResponseToJSON(json: any): RekeyVerificationCancelResponse {
  return RekeyVerificationCancelResponseToJSONTyped(json, false);
}

export function RekeyVerificationCancelResponseToJSONTyped(
  value?: RekeyVerificationCancelResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    n: value['n'],
    nonce: value['nonce'],
    progress: value['progress'],
    started: value['started'],
    t: value['t'],
  };
}
