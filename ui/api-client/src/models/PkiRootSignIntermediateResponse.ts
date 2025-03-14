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
 * @interface PkiRootSignIntermediateResponse
 */
export interface PkiRootSignIntermediateResponse {
  /**
   * CA Chain
   * @type {Array<string>}
   * @memberof PkiRootSignIntermediateResponse
   */
  caChain?: Array<string>;
  /**
   * Certificate
   * @type {string}
   * @memberof PkiRootSignIntermediateResponse
   */
  certificate?: string;
  /**
   * Expiration Time
   * @type {number}
   * @memberof PkiRootSignIntermediateResponse
   */
  expiration?: number;
  /**
   * Issuing CA
   * @type {string}
   * @memberof PkiRootSignIntermediateResponse
   */
  issuingCa?: string;
  /**
   * Serial Number
   * @type {string}
   * @memberof PkiRootSignIntermediateResponse
   */
  serialNumber?: string;
}

/**
 * Check if a given object implements the PkiRootSignIntermediateResponse interface.
 */
export function instanceOfPkiRootSignIntermediateResponse(
  value: object
): value is PkiRootSignIntermediateResponse {
  return true;
}

export function PkiRootSignIntermediateResponseFromJSON(json: any): PkiRootSignIntermediateResponse {
  return PkiRootSignIntermediateResponseFromJSONTyped(json, false);
}

export function PkiRootSignIntermediateResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiRootSignIntermediateResponse {
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

export function PkiRootSignIntermediateResponseToJSON(json: any): PkiRootSignIntermediateResponse {
  return PkiRootSignIntermediateResponseToJSONTyped(json, false);
}

export function PkiRootSignIntermediateResponseToJSONTyped(
  value?: PkiRootSignIntermediateResponse | null,
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
