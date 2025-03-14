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
 * @interface PkiWriteKeyRequest
 */
export interface PkiWriteKeyRequest {
  /**
   * Human-readable name for this key.
   * @type {string}
   * @memberof PkiWriteKeyRequest
   */
  keyName?: string;
}

/**
 * Check if a given object implements the PkiWriteKeyRequest interface.
 */
export function instanceOfPkiWriteKeyRequest(value: object): value is PkiWriteKeyRequest {
  return true;
}

export function PkiWriteKeyRequestFromJSON(json: any): PkiWriteKeyRequest {
  return PkiWriteKeyRequestFromJSONTyped(json, false);
}

export function PkiWriteKeyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteKeyRequest {
  if (json == null) {
    return json;
  }
  return {
    keyName: json['key_name'] == null ? undefined : json['key_name'],
  };
}

export function PkiWriteKeyRequestToJSON(json: any): PkiWriteKeyRequest {
  return PkiWriteKeyRequestToJSONTyped(json, false);
}

export function PkiWriteKeyRequestToJSONTyped(
  value?: PkiWriteKeyRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    key_name: value['keyName'],
  };
}
