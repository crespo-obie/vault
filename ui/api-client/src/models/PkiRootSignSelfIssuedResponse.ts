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
 * @interface PkiRootSignSelfIssuedResponse
 */
export interface PkiRootSignSelfIssuedResponse {
  /**
   * Certificate
   * @type {string}
   * @memberof PkiRootSignSelfIssuedResponse
   */
  certificate?: string;
  /**
   * Issuing CA
   * @type {string}
   * @memberof PkiRootSignSelfIssuedResponse
   */
  issuingCa?: string;
}

/**
 * Check if a given object implements the PkiRootSignSelfIssuedResponse interface.
 */
export function instanceOfPkiRootSignSelfIssuedResponse(
  value: object
): value is PkiRootSignSelfIssuedResponse {
  return true;
}

export function PkiRootSignSelfIssuedResponseFromJSON(json: any): PkiRootSignSelfIssuedResponse {
  return PkiRootSignSelfIssuedResponseFromJSONTyped(json, false);
}

export function PkiRootSignSelfIssuedResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PkiRootSignSelfIssuedResponse {
  if (json == null) {
    return json;
  }
  return {
    certificate: json['certificate'] == null ? undefined : json['certificate'],
    issuingCa: json['issuing_ca'] == null ? undefined : json['issuing_ca'],
  };
}

export function PkiRootSignSelfIssuedResponseToJSON(json: any): PkiRootSignSelfIssuedResponse {
  return PkiRootSignSelfIssuedResponseToJSONTyped(json, false);
}

export function PkiRootSignSelfIssuedResponseToJSONTyped(
  value?: PkiRootSignSelfIssuedResponse | null,
  ignoreDiscriminator: boolean = false
): any {
  if (value == null) {
    return value;
  }

  return {
    certificate: value['certificate'],
    issuing_ca: value['issuingCa'],
  };
}
