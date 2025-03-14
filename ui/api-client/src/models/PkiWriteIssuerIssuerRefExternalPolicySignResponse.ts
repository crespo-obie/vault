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
 * @interface PkiWriteIssuerIssuerRefExternalPolicySignResponse
 */
export interface PkiWriteIssuerIssuerRefExternalPolicySignResponse {
  /**
   * Certificate Chain
   * @type {Array<string>}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicySignResponse
   */
  caChain?: Array<string>;
  /**
   * Certificate
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicySignResponse
   */
  certificate?: string;
  /**
   * Time of expiration
   * @type {number}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicySignResponse
   */
  expiration?: number;
  /**
   * Issuing Certificate Authority
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicySignResponse
   */
  issuingCa?: string;
  /**
   * Serial Number
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicySignResponse
   */
  serialNumber?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicySignResponse interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefExternalPolicySignResponse(
  value: object
): value is PkiWriteIssuerIssuerRefExternalPolicySignResponse {
  return true;
}

export function PkiWriteIssuerIssuerRefExternalPolicySignResponseFromJSON(
  json: any
): PkiWriteIssuerIssuerRefExternalPolicySignResponse {
  return PkiWriteIssuerIssuerRefExternalPolicySignResponseFromJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicySignResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiWriteIssuerIssuerRefExternalPolicySignResponse {
  if (json == null) {
    return json;
  }
  return {
    caChain: json['ca_chain'] == null ? undefined : json['ca_chain'],
    certificate: json['certificate'] == null ? undefined : json['certificate'],
    expiration: json['expiration'] == null ? undefined : json['expiration'],
    issuingCa: json['issuing_ca'] == null ? undefined : json['issuing_ca'],
    serialNumber: json['serial_number'] == null ? undefined : json['serial_number'],
  };
}

export function PkiWriteIssuerIssuerRefExternalPolicySignResponseToJSON(
  json: any
): PkiWriteIssuerIssuerRefExternalPolicySignResponse {
  return PkiWriteIssuerIssuerRefExternalPolicySignResponseToJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicySignResponseToJSONTyped(
  value?: PkiWriteIssuerIssuerRefExternalPolicySignResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    ca_chain: value['caChain'],
    certificate: value['certificate'],
    expiration: value['expiration'],
    issuing_ca: value['issuingCa'],
    serial_number: value['serialNumber'],
  };
}
