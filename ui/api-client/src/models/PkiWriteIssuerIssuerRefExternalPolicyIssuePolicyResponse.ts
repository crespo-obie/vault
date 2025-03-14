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
 * @interface PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse
 */
export interface PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse {
  /**
   * Certificate Chain
   * @type {Array<string>}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse
   */
  caChain?: Array<string>;
  /**
   * Certificate
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse
   */
  certificate?: string;
  /**
   * Time of expiration
   * @type {number}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse
   */
  expiration?: number;
  /**
   * Issuing Certificate Authority
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse
   */
  issuingCa?: string;
  /**
   * Private key
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse
   */
  privateKey?: string;
  /**
   * Private key type
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse
   */
  privateKeyType?: string;
  /**
   * Serial Number
   * @type {string}
   * @memberof PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse
   */
  serialNumber?: string;
}

/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse interface.
 */
export function instanceOfPkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse(
  value: object
): value is PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse {
  return true;
}

export function PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponseFromJSON(
  json: any
): PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse {
  return PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponseFromJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse {
  if (json == null) {
    return json;
  }
  return {
    caChain: json['ca_chain'] == null ? undefined : json['ca_chain'],
    certificate: json['certificate'] == null ? undefined : json['certificate'],
    expiration: json['expiration'] == null ? undefined : json['expiration'],
    issuingCa: json['issuing_ca'] == null ? undefined : json['issuing_ca'],
    privateKey: json['private_key'] == null ? undefined : json['private_key'],
    privateKeyType: json['private_key_type'] == null ? undefined : json['private_key_type'],
    serialNumber: json['serial_number'] == null ? undefined : json['serial_number'],
  };
}

export function PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponseToJSON(
  json: any
): PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse {
  return PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponseToJSONTyped(json, false);
}

export function PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponseToJSONTyped(
  value?: PkiWriteIssuerIssuerRefExternalPolicyIssuePolicyResponse | null,
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
    private_key: value['privateKey'],
    private_key_type: value['privateKeyType'],
    serial_number: value['serialNumber'],
  };
}
