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
 * @interface RekeyAttemptUpdateRequest
 */
export interface RekeyAttemptUpdateRequest {
  /**
   * Specifies a single unseal key share.
   * @type {string}
   * @memberof RekeyAttemptUpdateRequest
   */
  key?: string;
  /**
   * Specifies the nonce of the rekey attempt.
   * @type {string}
   * @memberof RekeyAttemptUpdateRequest
   */
  nonce?: string;
}

/**
 * Check if a given object implements the RekeyAttemptUpdateRequest interface.
 */
export function instanceOfRekeyAttemptUpdateRequest(value: object): value is RekeyAttemptUpdateRequest {
  return true;
}

export function RekeyAttemptUpdateRequestFromJSON(json: any): RekeyAttemptUpdateRequest {
  return RekeyAttemptUpdateRequestFromJSONTyped(json, false);
}

export function RekeyAttemptUpdateRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): RekeyAttemptUpdateRequest {
  if (json == null) {
    return json;
  }
  return {
    key: json['key'] == null ? undefined : json['key'],
    nonce: json['nonce'] == null ? undefined : json['nonce'],
  };
}

export function RekeyAttemptUpdateRequestToJSON(json: any): RekeyAttemptUpdateRequest {
  return RekeyAttemptUpdateRequestToJSONTyped(json, false);
}

export function RekeyAttemptUpdateRequestToJSONTyped(
  value?: RekeyAttemptUpdateRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    key: value['key'],
    nonce: value['nonce'],
  };
}
