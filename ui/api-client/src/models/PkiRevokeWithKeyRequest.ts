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
 * @interface PkiRevokeWithKeyRequest
 */
export interface PkiRevokeWithKeyRequest {
  /**
   * Certificate to revoke in PEM format; must be signed by an issuer in this mount.
   * @type {string}
   * @memberof PkiRevokeWithKeyRequest
   */
  certificate?: string;
  /**
   * Key to use to verify revocation permission; must be in PEM format.
   * @type {string}
   * @memberof PkiRevokeWithKeyRequest
   */
  privateKey?: string;
  /**
   * Certificate serial number, in colon- or hyphen-separated octal
   * @type {string}
   * @memberof PkiRevokeWithKeyRequest
   */
  serialNumber?: string;
}

/**
 * Check if a given object implements the PkiRevokeWithKeyRequest interface.
 */
export function instanceOfPkiRevokeWithKeyRequest(value: object): value is PkiRevokeWithKeyRequest {
  return true;
}

export function PkiRevokeWithKeyRequestFromJSON(json: any): PkiRevokeWithKeyRequest {
  return PkiRevokeWithKeyRequestFromJSONTyped(json, false);
}

export function PkiRevokeWithKeyRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiRevokeWithKeyRequest {
  if (json == null) {
    return json;
  }
  return {
    certificate: json['certificate'] == null ? undefined : json['certificate'],
    privateKey: json['private_key'] == null ? undefined : json['private_key'],
    serialNumber: json['serial_number'] == null ? undefined : json['serial_number'],
  };
}

export function PkiRevokeWithKeyRequestToJSON(json: any): PkiRevokeWithKeyRequest {
  return PkiRevokeWithKeyRequestToJSONTyped(json, false);
}

export function PkiRevokeWithKeyRequestToJSONTyped(
  value?: PkiRevokeWithKeyRequest | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    certificate: value['certificate'],
    private_key: value['privateKey'],
    serial_number: value['serialNumber'],
  };
}
