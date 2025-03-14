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
 * @interface GoogleCloudKmsDecryptRequest
 */
export interface GoogleCloudKmsDecryptRequest {
  /**
   * Optional data that was specified during encryption of this payload.
   * @type {string}
   * @memberof GoogleCloudKmsDecryptRequest
   */
  additionalAuthenticatedData?: string;
  /**
   * Ciphertext to decrypt as previously returned from an encrypt operation. This must be base64-encoded ciphertext as previously returned from an encrypt operation.
   * @type {string}
   * @memberof GoogleCloudKmsDecryptRequest
   */
  ciphertext?: string;
  /**
   * Integer version of the crypto key version to use for decryption. This is required for asymmetric keys. For symmetric keys, Cloud KMS will choose the correct version automatically.
   * @type {number}
   * @memberof GoogleCloudKmsDecryptRequest
   */
  keyVersion?: number;
}

/**
 * Check if a given object implements the GoogleCloudKmsDecryptRequest interface.
 */
export function instanceOfGoogleCloudKmsDecryptRequest(value: object): value is GoogleCloudKmsDecryptRequest {
  return true;
}

export function GoogleCloudKmsDecryptRequestFromJSON(json: any): GoogleCloudKmsDecryptRequest {
  return GoogleCloudKmsDecryptRequestFromJSONTyped(json, false);
}

export function GoogleCloudKmsDecryptRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): GoogleCloudKmsDecryptRequest {
  if (json == null) {
    return json;
  }
  return {
    additionalAuthenticatedData:
      json['additional_authenticated_data'] == null ? undefined : json['additional_authenticated_data'],
    ciphertext: json['ciphertext'] == null ? undefined : json['ciphertext'],
    keyVersion: json['key_version'] == null ? undefined : json['key_version'],
  };
}

export function GoogleCloudKmsDecryptRequestToJSON(json: any): GoogleCloudKmsDecryptRequest {
  return GoogleCloudKmsDecryptRequestToJSONTyped(json, false);
}

export function GoogleCloudKmsDecryptRequestToJSONTyped(
  value?: GoogleCloudKmsDecryptRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    additional_authenticated_data: value['additionalAuthenticatedData'],
    ciphertext: value['ciphertext'],
    key_version: value['keyVersion'],
  };
}
